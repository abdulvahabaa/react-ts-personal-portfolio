'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DEFAULT_ABOUT_TEXT =
  "Hey there! I'm Abdul Vahab, a Full Stack MERN Developer and Technical Trainer. I specialize in building scalable web applications using React.js, Next.js, Node.js, TypeScript, MongoDB, and PostgreSQL. With experience delivering projects for clients worldwide and training over 350+ students in modern development practices, I focus on creating efficient, user-centric digital products. I am committed to solving real-world problems through technology and continuously improving my skills to deliver impactful solutions.";

const COMMAND_DELAY_MS = 400;

interface AboutTerminalProps {
  fullText?: string;
  typingSpeed?: number;
  isInView?: boolean;
}

export function AboutTerminal({
  fullText = DEFAULT_ABOUT_TEXT,
  typingSpeed = 15,
  isInView = true,
}: AboutTerminalProps) {
  const [typedText, setTypedText] = useState('');
  const [commandExecuted, setCommandExecuted] = useState(false);

  // Only start typing after "command executed" (small delay when in view)
  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => setCommandExecuted(true), COMMAND_DELAY_MS);
    return () => clearTimeout(t);
  }, [isInView]);

  useEffect(() => {
    if (!commandExecuted) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [commandExecuted, fullText, typingSpeed]);

  const isTyping = commandExecuted && typedText.length < fullText.length;
  const isComplete = commandExecuted && typedText.length >= fullText.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30%' }}
      transition={{ duration: 0.6 }}
      className="flex h-full min-h-[320px] max-w-3xl flex-col overflow-hidden rounded-2xl border-2 border-[#00f0ff]/30 bg-[#0a0a0a] dark:bg-[#0a0a0a] sm:min-h-[360px]"
    >
      {/* Terminal header - fixed */}
      <div className="flex shrink-0 items-center gap-2 border-b border-[#00f0ff]/20 bg-[#121212]/80 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-4 font-mono text-xs text-[#00f0ff]/70">
          abdulvahab.bio
        </span>
      </div>
      {/* Content area - fixed height, scroll inside so terminal size never changes */}
      <div className="flex min-h-0 flex-1 flex-col p-4 font-mono text-sm leading-relaxed sm:p-6">
        <div className="shrink-0 text-[#00f0ff]">$ cat about.txt</div>
        <div className="mt-3 min-h-0 flex-1 overflow-y-auto text-[#e2e8f0]/80 dark:text-[#e2e8f0]/80">
          {commandExecuted && typedText.length > 0 ? typedText : '\u00A0'}
          {isTyping && <span className="animate-pulse text-[#00f0ff]">_</span>}
          {isComplete && (
            <span className="ml-1 animate-blink text-[#00f0ff]">█</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
