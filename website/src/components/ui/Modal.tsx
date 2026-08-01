'use client';

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-[#0f141d] border border-[#00f2fe]/20 p-6 shadow-2xl relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          {title && <h3 className="font-bold text-lg text-white font-heading">{title}</h3>}
          <button onClick={onClose} className="text-[#94a3b8] hover:text-white font-mono text-sm">✕</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
