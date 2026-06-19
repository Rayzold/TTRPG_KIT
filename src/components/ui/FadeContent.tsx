// Stub for React Bits FadeContent


export default function FadeContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`animate-fade-in ${className}`}>{children}</div>;
}
