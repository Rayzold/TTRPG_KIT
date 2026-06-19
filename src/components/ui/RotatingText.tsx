// Simple RotatingText stub inspired by React Bits
import { useState, useEffect } from 'react';

export default function RotatingText({ texts, className = '' }: { texts: string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex(i => (i + 1) % texts.length), 2200);
    return () => clearInterval(interval);
  }, [texts.length]);
  return <span className={className}>{texts[index]}</span>;
}
