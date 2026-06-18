// Placeholder for React Bits Particles component
// Copy from https://reactbits.dev (Particles - TS-TW variant)
// This is a minimal stub so the app runs. Replace with full component.
import React from 'react';

interface ParticlesProps {
  className?: string;
  particleCount?: number;
  speed?: number;
}

export default function Particles({ className = '', particleCount = 50, speed = 1 }: ParticlesProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {Array.from({ length: particleCount }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * speed * 2}s`,
            animationDelay: `-${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
