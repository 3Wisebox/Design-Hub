import React from 'react';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#04070f]/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3 hidden sm:flex">
          <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.15)]">
            Free Forever
          </div>
          <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-violet-400 border border-violet-500/30 bg-violet-500/10 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.15)]">
            Zero Uploads
          </div>
        </div>
      </div>
    </header>
  );
}