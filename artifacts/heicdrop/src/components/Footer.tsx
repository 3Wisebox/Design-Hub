import React from 'react';
import {
  FileImage,
  FileText,
  HelpCircle,
  Image as ImageIcon,
  Info,
  Mail,
  Rocket,
  Scale,
  ShieldCheck,
  Smartphone,
  Zap,
} from 'lucide-react';
import { Logo } from './Logo';

const jumpToTool = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container mx-auto px-4">
        <div className="footer-grid">
          <div className="footer-col footer-brand-col">
            <div className="footer-brand">
              <a className="footer-brand-link" href="/" aria-label="HEICraft home">
                <Logo />
              </a>
              <p>
                Convert HEIC/HEIF iPhone photos to PDF, JPG, and PNG.
                <br />
                100% free, private, and browser-based.
              </p>
            </div>

            <div className="footer-badges" aria-label="HEICraft promises">
              <span className="footer-badge">
                <ShieldCheck aria-hidden="true" /> 100% Private
              </span>
              <span className="footer-badge">
                <Zap aria-hidden="true" /> Free Forever
              </span>
              <span className="footer-badge">
                <Smartphone aria-hidden="true" /> iPhone Ready
              </span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Convert HEIC To</h4>
            <ul>
              <li>
                <a href="#pdf-tool" onClick={() => jumpToTool('pdf-tool')}>
                  <FileText aria-hidden="true" /> PDF <span>(Multi-page)</span>
                </a>
              </li>
              <li>
                <a href="#image-tool" onClick={() => jumpToTool('image-tool')}>
                  <FileImage aria-hidden="true" /> JPG <span>(Individual)</span>
                </a>
              </li>
              <li>
                <a href="#image-tool" onClick={() => jumpToTool('image-tool')}>
                  <ImageIcon aria-hidden="true" /> PNG <span>(Individual)</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Learn</h4>
            <ul>
              <li>
                <a href="#faq-heic-format">
                  <Info aria-hidden="true" /> What is HEIC Format?
                </a>
              </li>
              <li>
                <a href="#faq-heic-vs-jpg-png">
                  <FileImage aria-hidden="true" /> HEIC vs JPG vs PNG
                </a>
              </li>
              <li>
                <a href="#faq-open-heic">
                  <HelpCircle aria-hidden="true" /> How to Open HEIC Files
                </a>
              </li>
              <li>
                <a href="#faq-section">
                  <HelpCircle aria-hidden="true" /> FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/">
                  <Info aria-hidden="true" /> About HEICraft
                </a>
              </li>
              <li>
                <a href="/contact">
                  <Mail aria-hidden="true" /> Contact
                </a>
              </li>
              <li>
                <a href="/privacy">
                  <ShieldCheck aria-hidden="true" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#site-footer">
                  <Scale aria-hidden="true" /> Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 HEICraft. Made for iPhone users everywhere.
          </div>
          <div className="footer-socials" aria-label="Community links">
            <a href="#site-footer" aria-label="HEICraft on X">X</a>
            <a href="#site-footer" aria-label="HEICraft on LinkedIn">in</a>
            <a href="#site-footer" aria-label="HEICraft community">r/</a>
            <a href="#site-footer" aria-label="HEICraft on Product Hunt">
              <Rocket aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}