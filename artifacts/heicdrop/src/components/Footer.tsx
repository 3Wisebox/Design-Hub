import React from 'react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto py-8 bg-card">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} HeicDrop — Built for iPhone users everywhere.
        </p>
        <div className="flex gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>
          <a href="#" className="hover:text-primary transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
