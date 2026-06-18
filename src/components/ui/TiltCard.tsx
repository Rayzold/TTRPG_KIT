// Stub for React Bits TiltCard
// Full: copy from reactbits.dev
import React from 'react';

export default function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`transition-transform hover:scale-[1.02] hover:-rotate-1 ${className}`}>
      {children}
    </div>
  );
}
