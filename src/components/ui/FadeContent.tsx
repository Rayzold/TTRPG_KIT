// Stub for React Bits FadeContent
import React from 'react';

export default function FadeContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`animate-fade-in ${className}`}>{children}</div>;
}
