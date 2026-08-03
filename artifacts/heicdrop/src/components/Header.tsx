import React from 'react';
import { Link } from 'wouter';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-4xl">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden sm:inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-sm">
            ⚡ 100% Free
          </span>
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide bg-gradient-to-r from-[#6c5ce7] to-[#e17055] text-white shadow-sm">
            🔒 Privacy First
          </span>
        </div>
      </div>
    </header>
  );
}
