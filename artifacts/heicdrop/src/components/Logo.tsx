import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6c5ce7" />
            <stop offset="100%" stopColor="#e17055" />
          </linearGradient>
        </defs>
        <path
          d="M16 2C16 2 6 12.5 6 20C6 25.5228 10.4772 30 16 30C21.5228 30 26 25.5228 26 20C26 12.5 16 2 16 2Z"
          fill="url(#logo-gradient)"
          opacity="0.8"
        />
        <rect
          x="12"
          y="14"
          width="8"
          height="10"
          rx="1"
          fill="white"
        />
        <path
          d="M14 17H18M14 19H18M14 21H16"
          stroke="#6c5ce7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-2xl tracking-tight">
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6c5ce7] to-[#e17055]">
          Heic
        </span>
        <span className="font-light text-[#6c5ce7]">Drop</span>
      </span>
    </div>
  );
}
