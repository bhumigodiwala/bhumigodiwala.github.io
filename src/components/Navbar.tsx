import React, { useState } from 'react';
import { Moon, Sun, Download, Menu, X, Camera, Github, Linkedin, Mail } from 'lucide-react';

interface Props {
  isLight: boolean;
  onToggleTheme: () => void;
  photoUrl: string;
  onOpenPhotoModal: () => void;
}

export const Navbar: React.FC<Props> = ({
  isLight,
  onToggleTheme,
  photoUrl,
  onOpenPhotoModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Selected Work', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Technical Depth', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand with photo avatar */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div
            onClick={(e) => {
              e.preventDefault();
              onOpenPhotoModal();
            }}
            title="Click to view/change photo"
            className="relative h-9 w-9 cursor-pointer overflow-hidden rounded-full border-2 border-sky-400/80 shadow-md transition-transform group-hover:scale-105"
          >
            <img
              src={photoUrl}
              alt="Bhumi Godiwala"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <Camera className="h-3.5 w-3.5 text-white" />
            </div>
          </div>
          <div>
            <span className="font-mono text-sm font-semibold tracking-tight text-slate-100 group-hover:text-sky-400 transition-colors">
              <span className="text-sky-400">B</span>humi Godiwala
            </span>
            <span className="block text-[10px] font-mono text-slate-400">
              PhD Researcher · ASU Decision Theater
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 font-mono text-xs text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-sky-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/bhumigodiwala"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-slate-700 hover:text-white"
            title="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/bhumigodiwala"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-slate-700 hover:text-white"
            title="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            title={isLight ? 'Dark mode' : 'Light mode'}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-slate-700 hover:text-sky-400"
          >
            {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          {/* Resume link */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500/15 border border-sky-500/40 px-3 py-1.5 font-mono text-xs font-medium text-sky-300 transition hover:bg-sky-500 hover:text-slate-950"
          >
            <span>Resume</span>
            <Download className="h-3 w-3" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-5 py-4 md:hidden animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-slate-300 hover:text-sky-400"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPhotoModal();
                }}
                className="flex items-center gap-1.5 text-xs text-sky-400"
              >
                <Camera className="h-3.5 w-3.5" />
                Change Profile Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
