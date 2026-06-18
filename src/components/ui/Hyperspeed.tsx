// Hyperspeed background from React Bits (WebGL-ish warp effect)
// Stub - for boss mode

import React from 'react';

export default function Hyperspeed({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] bg-[length:3px_3px] animate-[hyperspeed_0.3s_linear_infinite]" />
      <style jsx>{`
        @keyframes hyperspeed {
          0% { background-position: 0 0; }
          100% { background-position: 0 100px; }
        }
      `}</style>
    </div>
  );
}
