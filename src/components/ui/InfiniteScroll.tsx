// InfiniteScroll from React Bits
// Stub - replace with full from reactbits.dev



interface InfiniteScrollProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export default function InfiniteScroll({ children, className = '', speed = 20 }: InfiniteScrollProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        className="flex gap-8 whitespace-nowrap animate-scroll"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children} {/* duplicate for seamless loop */}
      </div>
    </div>
  );
}
