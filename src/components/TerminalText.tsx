import { useEffect, useRef, useState } from 'react';

interface TerminalTextProps {
  text: string;
  className?: string;
  speed?: number;
  onComplete?: () => void;
}

export function TerminalText({ text, className = '', speed = 30, onComplete }: TerminalTextProps) {
  const elRef = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

  useEffect(() => {
    const el = elRef.current;
    if (!el || started) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const el = elRef.current;
    if (!el) return;

    let iteration = 0;
    const interval = setInterval(() => {
      el.innerText = text
        .split('')
        .map((letter, index) => {
          if (letter === ' ') return ' ';
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (iteration >= text.length) {
        clearInterval(interval);
        onComplete?.();
      }
      iteration += 1 / 2.5;
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed, onComplete]);

  return (
    <span
      ref={elRef}
      className={`font-mono text-sky-400 terminal-caret ${className}`}
    />
  );
}
