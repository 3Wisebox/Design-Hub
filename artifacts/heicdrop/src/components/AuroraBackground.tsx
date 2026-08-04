import React from 'react';
import { useTheme } from '@/context/ThemeContext';

export function AuroraBackground() {
  const { isDark } = useTheme();

  if (isDark) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div style={{
          position: 'absolute', width: '800px', height: '800px',
          borderRadius: '50%', top: '-200px', left: '-200px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          animation: 'aurora-1 18s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: '700px', height: '700px',
          borderRadius: '50%', top: '10%', right: '-150px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
          animation: 'aurora-2 22s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: '600px', height: '600px',
          borderRadius: '50%', bottom: '5%', left: '30%',
          background: 'radial-gradient(circle, rgba(225,29,72,0.10) 0%, transparent 70%)',
          animation: 'aurora-3 26s ease-in-out infinite',
        }} />
      </div>
    );
  }

  // Light mode — warm amber, teal, rose blobs on ivory background
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div style={{
        position: 'absolute', width: '800px', height: '800px',
        borderRadius: '50%', top: '-200px', left: '-200px',
        background: 'radial-gradient(circle, rgba(251,146,60,0.22) 0%, transparent 70%)',
        animation: 'aurora-1 18s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: '700px', height: '700px',
        borderRadius: '50%', top: '10%', right: '-150px',
        background: 'radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%)',
        animation: 'aurora-2 22s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: '600px', height: '600px',
        borderRadius: '50%', bottom: '5%', left: '30%',
        background: 'radial-gradient(circle, rgba(244,63,94,0.14) 0%, transparent 70%)',
        animation: 'aurora-3 26s ease-in-out infinite',
      }} />
    </div>
  );
}
