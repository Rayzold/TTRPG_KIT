// MagicCard from React Bits (TS-TW variant)
// Copy the full implementation from https://reactbits.dev if needed
// This is a functional stub



interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
}

export default function MagicCard({ children, className = '', gradientColor = '#f97316' }: MagicCardProps) {
  return (
    <div 
      className={`relative rounded-3xl p-[1px] overflow-hidden group ${className}`}
      style={{ 
        background: `linear-gradient(45deg, ${gradientColor}20, transparent, ${gradientColor}20)` 
      }}
    >
      <div className="relative z-10 bg-[#14141f] rounded-[calc(1.5rem-1px)] p-4 group-hover:bg-surface2 transition-colors">
        {children}
      </div>
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ 
          background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), ${gradientColor}30, transparent 70%)` 
        }}
      />
    </div>
  );
}
