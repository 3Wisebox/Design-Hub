import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#04070f]/60 backdrop-blur-md py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs font-mono text-white/40 tracking-widest uppercase">
          HEICRAFT <span className="text-[10px] opacity-60">®</span> 2026
        </div>
        <div className="flex gap-6 text-xs font-mono tracking-widest">
          <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">PRIVACY</a>
          <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">TERMS</a>
          <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">CONTACT</a>
        </div>
      </div>
    </footer>
  );
}