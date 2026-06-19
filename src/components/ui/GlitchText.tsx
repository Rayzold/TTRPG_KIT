// Minimal GlitchText stub for React Bits
// Full version: copy from reactbits.dev


interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 text-red-500 opacity-70 animate-pulse" style={{ clipPath: 'inset(50% 0 50% 0)' }}>
        {text}
      </span>
    </span>
  );
}
