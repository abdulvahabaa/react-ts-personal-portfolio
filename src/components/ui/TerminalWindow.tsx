'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Wifi, Disc } from 'lucide-react';

const ASCII_ART = `
 █████╗ ██████╗ ██████╗ ██╗   ██╗██╗
██╔══██╗██╔══██╗██╔══██╗██║   ██║██║
███████║██████╔╝██║  ██║██║   ██║██║
██╔══██║██╔══██╗██║  ██║██║   ██║██║
██║  ██║██████╔╝██████╔╝╚██████╔╝███████║
╚═╝  ╚═╝╚═════╝ ╚═════╝  ╚═════╝ ╚══════╝
`;

interface LogEntry {
  id: string | number;
  message: React.ReactNode;
  level?: 'info' | 'success' | 'warning' | 'error' | 'system';
  timestamp?: string;
  isCommand?: boolean;
  color?: string;
}

const Typewriter = ({
  text,
  delay = 0,
  speed = 5,
}: {
  text: string;
  delay?: number;
  speed?: number;
}) => {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        return;
      }
      setDisplayText(text.slice(0, i + 1));
      i++;
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, started]);

  return <span>{displayText}</span>;
};

export function TerminalWindow() {
  const [history, setHistory] = useState<LogEntry[]>([]);
  const [input, setInput] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const [placeholderText, setPlaceholderText] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const placeholderPrompts = [
    "type 'help' to get started",
    "try 'whoami' to know more",
    "check 'status' or 'focus'",
    "run 'thought' for insight",
  ];

  const getLocalTime = (date: Date = new Date()) => {
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    const s = date.getSeconds().toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  useEffect(() => {
    const now = new Date();
    const bootLogs: LogEntry[] = [
      {
        id: 'boot-1',
        timestamp: getLocalTime(now),
        level: 'system',
        message: 'INITIALIZING NEURAL INTERFACE...',
        color: 'text-cyan-400',
      },
      {
        id: 'boot-2',
        timestamp: getLocalTime(new Date(now.getTime() + 400)),
        level: 'info',
        message: 'LOADING CORE MODULES...',
        color: 'text-blue-400',
      },
      {
        id: 'boot-3',
        timestamp: getLocalTime(new Date(now.getTime() + 800)),
        level: 'warning',
        message: 'ESTABLISHING SECURE CONNECTION...',
        color: 'text-yellow-400',
      },
      {
        id: 'boot-4',
        timestamp: getLocalTime(new Date(now.getTime() + 1200)),
        level: 'success',
        message: 'ACCESS GRANTED',
        color: 'text-green-400',
      },
    ];
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    bootLogs.forEach((log, i) => {
      const t = setTimeout(
        () => {
          setHistory(prev => [...prev, log]);
          if (i === bootLogs.length - 1) setIsBooting(false);
        },
        400 * (i + 1)
      );
      timeouts.push(t);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (isBooting) return;
    const current = placeholderPrompts[placeholderIndex];
    let t: ReturnType<typeof setTimeout>;
    if (isDeleting) {
      t = setTimeout(() => {
        setPlaceholderText(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 50);
    } else {
      t = setTimeout(() => {
        setPlaceholderText(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 100);
    }
    if (!isDeleting && charIndex === current.length) {
      t = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPlaceholderIndex(p => (p + 1) % placeholderPrompts.length);
    }
    return () => clearTimeout(t);
  }, [charIndex, isDeleting, placeholderIndex, isBooting]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [history]);

  const handleContainerClick = () => inputRef.current?.focus();

  const addResponse = (lines: (string | React.ReactNode)[]) => {
    const newLogs: LogEntry[] = lines.map(line => ({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      message: line,
      color: 'text-gray-300',
    }));
    setHistory(prev => [...prev, ...newLogs]);
  };

  const handleCommand = (cmd: string) => {
    const clean = cmd.trim().toLowerCase();
    setHistory(prev => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        message: (
          <span className="flex items-center gap-2">
            <span className="text-green-400">➜</span>
            <span className="text-white">{cmd}</span>
          </span>
        ),
        isCommand: true,
      },
    ]);

    switch (clean) {
      case 'help':
        addResponse([
          <Typewriter key="h1" text="available commands:" speed={5} />,
          '',
          <div
            key="help-grid"
            className="grid grid-cols-[100px_1fr] gap-x-2 gap-y-1"
          >
            <span className="text-cyan-400">
              <Typewriter text="whoami" delay={50} speed={10} />
            </span>
            <span className="text-gray-400">
              → <Typewriter text="system identity" delay={60} speed={5} />
            </span>
            <span className="text-cyan-400">
              <Typewriter text="status" delay={100} speed={10} />
            </span>
            <span className="text-gray-400">
              → <Typewriter text="runtime state" delay={110} speed={5} />
            </span>
            <span className="text-cyan-400">
              <Typewriter text="focus" delay={150} speed={10} />
            </span>
            <span className="text-gray-400">
              → <Typewriter text="current direction" delay={160} speed={5} />
            </span>
            <span className="text-cyan-400">
              <Typewriter text="logs" delay={200} speed={10} />
            </span>
            <span className="text-gray-400">
              → <Typewriter text="recent activity" delay={210} speed={5} />
            </span>
            <span className="text-cyan-400">
              <Typewriter text="thought" delay={250} speed={10} />
            </span>
            <span className="text-gray-400">
              → <Typewriter text="system reflection" delay={260} speed={5} />
            </span>
            <span className="text-cyan-400">
              <Typewriter text="clear" delay={300} speed={10} />
            </span>
            <span className="text-gray-400">
              → <Typewriter text="clear terminal" delay={310} speed={5} />
            </span>
          </div>,
        ]);
        break;
      case 'whoami':
        addResponse([
          <div key="whoami" className="flex flex-col gap-1">
            <span className="font-bold text-white">
              <Typewriter text="abdulvahab@workspace" speed={5} />
            </span>
            <span className="text-gray-300">
              <Typewriter
                text="Full Stack MERN Developer & Technical Trainer"
                delay={50}
                speed={5}
              />
            </span>
            <span className="italic text-gray-400">
              <Typewriter
                text="building scalable web apps and training developers"
                delay={100}
                speed={5}
              />
            </span>
          </div>,
        ]);
        break;
      case 'status':
        addResponse([
          <div key="status" className="flex flex-col gap-1">
            <div>
              <span className="text-cyan-400">SYSTEM:</span>{' '}
              <span className="text-green-400">
                <Typewriter text="ONLINE" delay={50} speed={10} />
              </span>
            </div>
            <div>
              <span className="text-cyan-400">WORKFLOW:</span>{' '}
              <span className="text-yellow-400">
                <Typewriter text="ACTIVE" delay={100} speed={10} />
              </span>
            </div>
            <div>
              <span className="text-cyan-400">STATE:</span>{' '}
              <span className="text-purple-400">
                <Typewriter text="EVOLVING" delay={150} speed={10} />
              </span>
            </div>
          </div>,
        ]);
        break;
      case 'focus':
        addResponse([
          <div key="focus" className="flex flex-col gap-1">
            <span className="mb-2 text-gray-300 underline decoration-cyan-500/30 underline-offset-4">
              <Typewriter text="current focus:" speed={5} />
            </span>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">→</span>{' '}
              <Typewriter
                text="building scalable web applications"
                delay={50}
                speed={5}
              />
            </span>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">→</span>{' '}
              <Typewriter
                text="training developers in modern stack"
                delay={100}
                speed={5}
              />
            </span>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">→</span>{' '}
              <Typewriter
                text="solving real-world problems with code"
                delay={150}
                speed={5}
              />
            </span>
          </div>,
        ]);
        break;
      case 'logs':
        addResponse([
          <div key="logs" className="flex flex-col gap-1 font-mono text-xs">
            <span className="flex gap-2">
              <span className="text-cyan-400">[INFO]</span>{' '}
              <span className="text-gray-400">
                <Typewriter
                  text="delivering production-ready applications"
                  delay={0}
                  speed={5}
                />
              </span>
            </span>
            <span className="flex gap-2">
              <span className="text-cyan-400">[INFO]</span>{' '}
              <span className="text-gray-400">
                <Typewriter
                  text="refining system design & APIs"
                  delay={50}
                  speed={5}
                />
              </span>
            </span>
            <span className="flex gap-2">
              <span className="text-cyan-400">[INFO]</span>{' '}
              <span className="text-gray-400">
                <Typewriter
                  text="learning through implementation"
                  delay={100}
                  speed={5}
                />
              </span>
            </span>
          </div>,
        ]);
        break;
      case 'thought':
        addResponse([
          <span key="thought" className="italic text-emerald-300">
            <Typewriter text="• clarity comes from building" speed={15} />
          </span>,
        ]);
        break;
      case 'sudo':
        addResponse([
          <div key="sudo" className="flex flex-col text-red-400">
            <span>
              <Typewriter text="permission denied." speed={20} />
            </span>
            <span className="text-gray-400">
              <Typewriter text="focus over shortcuts." delay={200} speed={20} />
            </span>
          </div>,
        ]);
        break;
      case 'clear':
        setHistory([]);
        break;
      default:
        if (clean !== '')
          addResponse([
            `Command not found: ${clean}. Type 'help' for options.`,
          ]);
        break;
    }
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleCommand(input);
  };

  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'info':
        return 'text-[#61afef]';
      case 'warning':
        return 'text-[#e5c07b]';
      case 'success':
        return 'text-[#98c379]';
      case 'error':
        return 'text-red-500';
      case 'system':
        return 'text-[#c678dd]';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[550px] font-mono text-xs leading-relaxed sm:text-sm"
    >
      <div className="absolute -inset-1 rounded-xl bg-linear-to-b from-[#56b6c2]/20 to-[#c678dd]/20 opacity-20 blur-xl" />
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        className="relative flex h-[280px] flex-col overflow-hidden rounded-lg border border-white/5 bg-[#0d0d0d]/95 shadow-2xl backdrop-blur-xl sm:h-[360px]"
      >
        <div className="flex h-8 shrink-0 select-none items-center justify-between border-b border-white/5 bg-[#151515] px-4">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-2 text-[10px] font-medium tracking-wider text-gray-500 opacity-60">
            <Terminal className="h-3 w-3" />
            <span>abdulvahab:~/welcome</span>
          </div>
          <div className="w-10" />
        </div>
        <div
          ref={scrollRef}
          className="relative flex-1 overflow-auto p-3 scroll-smooth sm:p-6"
        >
          <pre className="mb-4 self-start whitespace-pre font-mono text-[5px] font-bold leading-[1.1] text-transparent selection:bg-transparent sm:mb-6 sm:text-[10px] bg-linear-to-b from-[#56b6c2] to-[#61afef] bg-clip-text">
            {ASCII_ART}
          </pre>
          <div className="space-y-1.5">
            <AnimatePresence mode="popLayout">
              {history.map(log => (
                <motion.div
                  key={log.id}
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex w-full flex-row items-baseline gap-2 font-medium leading-tight text-gray-400 wrap-break-word whitespace-pre-wrap"
                >
                  {!log.isCommand && (
                    <>
                      {log.timestamp && (
                        <span className="shrink-0 select-none text-gray-600">
                          [{log.timestamp}]
                        </span>
                      )}
                      {log.level && (
                        <span
                          className={`shrink-0 min-w-14 select-none ${getLevelColor(log.level)}`}
                        >
                          [{log.level}]
                        </span>
                      )}
                    </>
                  )}
                  <span
                    className={
                      log.isCommand ? '' : log.color || 'text-gray-300'
                    }
                  >
                    {log.message}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
            {!isBooting && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group relative flex items-center gap-2 pb-1 pt-2"
              >
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -inset-x-2 inset-y-0 -z-10 rounded bg-cyan-500/5"
                />
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="shrink-0 text-[#98c379]"
                >
                  ➜
                </motion.span>
                <span className="shrink-0 whitespace-nowrap">
                  <span className="hidden text-[#56b6c2] sm:inline">
                    abdulvahab
                  </span>
                  <span className="hidden text-gray-500 sm:inline">:</span>
                  <span className="hidden text-[#61afef] sm:inline">~</span>
                  <span className="text-gray-400">$</span>
                  <span className="text-gray-400"> </span>
                </span>
                <div className="relative min-w-0 flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full border-none bg-transparent font-mono text-sm text-gray-200 outline-none caret-cyan-400 placeholder:text-cyan-400/40"
                    autoComplete="off"
                    spellCheck={false}
                    placeholder={placeholderText}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
        <div className="flex h-7 shrink-0 items-center justify-between border-t border-white/5 bg-[#111111] px-3 font-mono text-[9px] text-gray-500 sm:text-[10px]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Disc className={`h-3 w-3 ${isBooting ? 'animate-spin' : ''}`} />
              <span>STATUS: READY</span>
            </div>
            <div className="hidden items-center gap-1.5 sm:flex">
              <Cpu className="h-3 w-3" />
              <span>MEM: {history.length * 2}KB</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[#98c379]">
            <Wifi className="h-3 w-3" />
            <span>ONLINE</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
