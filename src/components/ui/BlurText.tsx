// BlurText from React Bits (TS-TW variant)
// Stub - replace with full from reactbits.dev for better animation

import React, { useEffect, useState } from 'react';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'chars';
  direction?: 'top' | 'bottom';
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
}) => {
  const [visible, setVisible] = useState(false);
  const parts = animateBy === 'words' ? text.split(' ') : text.split('');

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className={className}>
      {parts.map((part, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-500"
          style={{
            filter: visible ? 'blur(0)' : 'blur(8px)',
            opacity: visible ? 1 : 0,
            transform: visible 
              ? 'translateY(0)' 
              : direction === 'top' ? 'translateY(-20px)' : 'translateY(20px)',
            transitionDelay: `${index * delay}ms`,
          }}
        >
          {part}
          {animateBy === 'words' && index < parts.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
};

export default BlurText;
