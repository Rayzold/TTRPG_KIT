// Aurora background stub inspired by React Bits
// For full version, copy from https://reactbits.dev
// This provides a nice animated gradient background

import React, { useEffect, useRef } from 'react';

interface AuroraProps {
  className?: string;
  colorStops?: string[];
  blend?: number;
  speed?: number;
  amplitude?: number;
}

const Aurora: React.FC<AuroraProps> = ({
  className = '',
  colorStops = ['#3A1C71', '#D76D77', '#FFAF7B'],
  blend = 0.5,
  speed = 0.5,
  amplitude = 1.2,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrame: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

      // Animate the stops
      const t = time * speed * 0.01;

      gradient.addColorStop(0, colorStops[0]);
      gradient.addColorStop(0.33 + Math.sin(t) * 0.1, colorStops[1]);
      gradient.addColorStop(0.66 + Math.cos(t * 1.2) * 0.1, colorStops[2]);
      gradient.addColorStop(1, colorStops[0]);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add some wave overlays for Aurora effect
      ctx.fillStyle = `rgba(255,255,255,${blend * 0.1})`;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const yOffset = (canvas.height / 3) * (i + 1) + Math.sin(t * 2 + i) * (amplitude * 50);
        ctx.moveTo(0, yOffset);
        
        for (let x = 0; x <= canvas.width; x += 20) {
          const y = yOffset + Math.sin((x * 0.01) + t * 3 + i) * (amplitude * 80);
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();
      }

      time += 1;
      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [colorStops, blend, speed, amplitude]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ 
        position: 'absolute', 
        inset: 0, 
        width: '100%', 
        height: '100%', 
        mixBlendMode: 'screen',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
};

export default Aurora;
