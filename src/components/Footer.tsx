import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-mono text-xs text-slate-300">
            © 2026 Bhumi Godiwala · AI/ML Research Engineer
          </p>
          <p className="mt-1 text-[11px] text-slate-500 font-mono">
            Arizona State University · Decision Theater Network
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/bhumigodiwala"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/bhumigodiwala"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-sky-400 transition"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:bgodiwal@asu.edu"
            className="text-slate-400 hover:text-sky-400 transition"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-white transition"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
