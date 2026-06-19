// MagneticButton from React Bits (TS-TW variant)
// This is a functional stub. For the full version with better animation, copy from https://reactbits.dev

import React, { useState, MouseEvent } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // strength
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // active:scale-95 gives tactile feedback on touch, where the magnetic
      // (pointer-driven) movement never fires.
      className={`relative transition-transform duration-200 ease-out active:scale-95 ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
