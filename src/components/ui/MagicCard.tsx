import React, { useState, useRef, MouseEvent } from 'react';

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
}

export default function MagicCard({ children, className = '', gradientColor = '#f97316' }: MagicCardProps) {
  const [position, setPosition] = useState({ x: '50%', y: '50%' });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Only apply gradient tracking on fine-pointer devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({
      x: `${x}px`,
      y: `${y}px`,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: '50%', y: '50%' });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl p-[1px] overflow-hidden group transition-transform active:scale-95 ${className}`}
      style={{
        background: `linear-gradient(45deg, ${gradientColor}20, transparent, ${gradientColor}20)`,
      }}
    >
      <div className="relative z-10 bg-surface rounded-[calc(1.5rem-1px)] p-4 group-hover:bg-surface2 transition-colors">
        {children}
      </div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(circle at ${position.x} ${position.y}, ${gradientColor}30, transparent 70%)`,
        }}
      />
    </div>
  );
}
