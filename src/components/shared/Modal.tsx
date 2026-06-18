import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({ isOpen, onClose, title, children, className = '' }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className={`panel p-6 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-auto ${className}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button 
            onClick={onClose}
            className="text-2xl leading-none text-[#9ca3b8] hover:text-white"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
