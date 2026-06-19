// Stub for React Bits DecryptText (hacker-style)
// Full component from reactbits.dev
import { useState, useEffect } from 'react';

interface DecryptTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function DecryptText({ text, className = '', speed = 30 }: DecryptTextProps) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplay(text.slice(0, i) + String.fromCharCode(33 + Math.random() * 94));
        i++;
      } else {
        setDisplay(text);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{display}</span>;
}
