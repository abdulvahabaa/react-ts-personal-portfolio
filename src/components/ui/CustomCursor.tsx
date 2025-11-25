import React, { useEffect, useState, useRef } from 'react';

// ====================================
// HELPER CLASSES (Outside component)
// ====================================

class Oscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;

  constructor(config: {
    phase?: number;
    offset?: number;
    frequency?: number;
    amplitude?: number;
  }) {
    this.phase = config.phase || 0;
    this.offset = config.offset || 0;
    this.frequency = config.frequency || 0.001;
    this.amplitude = config.amplitude || 1;
  }

  update() {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

class Node {
  x: number = 0;
  y: number = 0;
  vy: number = 0;
  vx: number = 0;
}

class Line {
  spring: number;
  friction: number;
  nodes: Node[];
  private pos: { x: number; y: number };
  private E: {
    friction: number;
    size: number;
    dampening: number;
    tension: number;
  };
  private ctx: CanvasRenderingContext2D;

  constructor(
    config: { spring: number },
    pos: { x: number; y: number },
    E: { friction: number; size: number; dampening: number; tension: number },
    ctx: CanvasRenderingContext2D
  ) {
    this.pos = pos;
    this.E = E;
    this.ctx = ctx;
    this.spring = config.spring + 0.1 * Math.random() - 0.02;
    this.friction = E.friction + 0.01 * Math.random() - 0.002;
    this.nodes = [];
    for (let i = 0; i < E.size; i++) {
      const node = new Node();
      node.x = pos.x;
      node.y = pos.y;
      this.nodes.push(node);
    }
  }

  update() {
    let spring = this.spring;
    const firstNode = this.nodes[0];
    firstNode.vx += (this.pos.x - firstNode.x) * spring;
    firstNode.vy += (this.pos.y - firstNode.y) * spring;

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * this.E.dampening;
        node.vy += prev.vy * this.E.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= this.E.tension;
    }
  }

  draw() {
    if (!this.ctx) return;

    let x = this.nodes[0].x;
    let y = this.nodes[0].y;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);

    for (let i = 1; i < this.nodes.length - 2; i++) {
      const node = this.nodes[i];
      const next = this.nodes[i + 1];
      x = 0.5 * (node.x + next.x);
      y = 0.5 * (node.y + next.y);
      this.ctx.quadraticCurveTo(node.x, node.y, x, y);
    }

    const lastNode = this.nodes[this.nodes.length - 2];
    const veryLastNode = this.nodes[this.nodes.length - 1];
    this.ctx.quadraticCurveTo(
      lastNode.x,
      lastNode.y,
      veryLastNode.x,
      veryLastNode.y
    );
    this.ctx.stroke();
    this.ctx.closePath();
  }
}

// ====================================
// MAIN COMPONENT
// ====================================

export function CustomCursor() {
  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor] = useState(!isTouchDevice);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isTouchDevice || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;
    const pos = { x: 0, y: 0 };
    let lines: Line[] = [];

    // ====================================
    // CUSTOMIZATION SETTINGS
    // ====================================
    const E = {
      friction: 0.5, // How quickly the trails slow down (0-1, lower = slower)
      trails: 20, // Number of trail lines (more = denser effect)
      size: 30, // Number of points per trail (more = longer trails) - reduced for smaller size
      dampening: 0.25, // How much trails follow each other (0-1)
      tension: 0.98, // How tight the curves are (0-1, higher = tighter)
    };

    // ====================================
    // COLOR ANIMATION SETTINGS
    // ====================================
    const colorOscillator = new Oscillator({
      phase: Math.random() * 2 * Math.PI, // Random starting color
      amplitude: 180, // Color range (0-360, higher = more colors)
      frequency: 0.008, // Speed of color change (higher = faster)
      offset: 180, // Starting hue offset (0-360)
    });

    const initLines = () => {
      lines = [];
      for (let i = 0; i < E.trails; i++) {
        lines.push(
          new Line({ spring: 0.4 + (i / E.trails) * 0.025 }, pos, E, ctx)
        );
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const render = () => {
      if (!running || !ctx) return;

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      // ====================================
      // TRAIL APPEARANCE SETTINGS
      // ====================================
      // Color format: hsla(hue, saturation%, lightness%, opacity)
      // - Hue: 0-360 (color on spectrum)
      // - Saturation: 0-100% (color intensity)
      // - Lightness: 0-100% (brightness)
      // - Opacity: 0-1 (transparency)
      ctx.strokeStyle = `hsla(${Math.round(colorOscillator.update())},65%,45%,0.4)`;
      ctx.lineWidth = 1.5; // Trail thickness in pixels

      for (let i = 0; i < E.trails; i++) {
        lines[i].update();
        lines[i].draw();
      }

      requestAnimationFrame(render);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const syncPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    resizeCanvas();
    initLines();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', syncPosition);
    window.addEventListener('resize', resizeCanvas);
    render();

    return () => {
      running = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', syncPosition);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isTouchDevice]);

  if (!showCursor) return null;

  return (
    <>
      {/* Canvas for colorful trailing effect */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Blue backlight glow effect - CUSTOMIZATION:
          - Adjust 'left/top' offset to change glow position relative to cursor
          - Modify 'width/height' to change glow size
          - Change rgba values in gradient to change glow color
          - Adjust 'opacity' to make glow stronger/weaker
          - Modify 'blur' value to make glow softer/sharper
      */}
      <div
        className="fixed pointer-events-none opacity-30 dark:opacity-30 transition-all duration-300 ease-out z-[9998]"
        style={{
          left: position.x - 150,
          top: position.y - 150,
          width: '300px',
          height: '300px',
          background:
            'radial-gradient(circle, rgba(29, 78, 216, 0.6) 0%, rgba(29, 78, 216, 0.5) 25%, rgba(29, 78, 216, 0.3) 50%, rgba(29, 78, 216, 0.15) 75%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          transform: 'scale(1.0)',
        }}
      />
    </>
  );
}
