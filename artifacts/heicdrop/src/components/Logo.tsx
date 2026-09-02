import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 text-foreground"
      >
        <defs>
          <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        {/* Hexagon outline */}
        <polygon 
          points="16,2 30,10 30,22 16,30 2,22 2,10" 
          stroke="url(#hex-gradient)" 
          strokeWidth="2" 
          fill="none"
        />
        {/* H lettermark */}
        <path
          d="M10 10V22M22 10V22M10 16H22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
      <span className="text-xl tracking-widest font-bold">
        <span className="text-foreground">HEIC</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
          raft
        </span>
      </span>
    </div>
  );
}