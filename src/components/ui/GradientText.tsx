// Stub for React Bits GradientText
// Replace with full copy from https://reactbits.dev
import React from 'react';

interface GradientTextProps {
  text: string;
  className?: string;
}

export default function GradientText({ text, className = '' }: GradientTextProps) {
  return (
    <span 
      className={`bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold ${className}`}
    >
      {text}
    </span>
  );
}
