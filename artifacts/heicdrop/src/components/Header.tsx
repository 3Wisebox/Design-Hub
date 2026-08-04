import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from '@/context/ThemeContext';

export function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur-xl transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-3">
          {/* Badges — hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-3">
            <div className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full border transition-colors duration-300 ${
              isDark
                ? 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                : 'text-amber-600 border-amber-400/40 bg-amber-400/10'
            }`}>
              Free Forever
            </div>
            <div className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full border transition-colors duration-300 ${
              isDark
                ? 'text-violet-400 border-violet-500/30 bg-violet-500/10 shadow-[0_0_10px_rgba(124,58,237,0.15)]'
                : 'text-teal-600 border-teal-400/40 bg-teal-400/10'
            }`}>
              Zero Uploads
            </div>
          </div>

          {/* Theme toggle pill */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            className={`relative flex items-center gap-1 p-1 rounded-full border transition-all duration-300 ${
              isDark
                ? 'bg-white/5 border-white/10 hover:border-white/20'
                : 'bg-black/5 border-black/10 hover:border-black/20'
            }`}
          >
            {/* Light tab */}
            <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
              !isDark
                ? 'bg-amber-400 text-white shadow-md'
                : 'text-foreground/40 hover:text-foreground/70'
            }`}>
              <Sun className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Light</span>
            </span>
            {/* Dark tab */}
            <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
              isDark
                ? 'bg-violet-600 text-white shadow-md'
                : 'text-foreground/40 hover:text-foreground/70'
            }`}>
              <Moon className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Dark</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
