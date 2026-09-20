import React, { useState } from 'react';
import { Sun, Moon, ArrowDown, Menu, X, FileText } from 'lucide-react';

interface Props {
  isLight: boolean;
  onToggleTheme: () => void;
  onOpenCvModal?: () => void;
}

export const Header: React.FC<Props> = ({
  isLight,
  onToggleTheme,
  onOpenCvModal,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-white/[0.08] bg-[#f4f8fb]/90 dark:bg-[#0d131f]/85 backdrop-blur-xl transition-colors">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand: "Bhumi Godiwala" without BG badge */}
        <div className="flex items-center">
          <a
            href="#top"
            className="font-mono text-sm sm:text-base tracking-tight text-slate-800 dark:text-slate-200 transition hover:text-slate-900 dark:hover:text-white"
          >
            <span className="text-[var(--brass)] font-semibold">B</span>humi Godiwala
          </a>
        </div>

        {/* Center navigation links: Focus, Background, Academia, Stack, Portfolio, Contact */}
        <div className="hidden items-center gap-6 font-mono text-xs text-slate-600 dark:text-slate-400 md:flex">
          <a href="#focus" className="transition-colors hover:text-slate-900 dark:hover:text-slate-100">Focus</a>
          <a href="#background" className="transition-colors hover:text-slate-900 dark:hover:text-slate-100">Background</a>
          <a href="#academia" className="transition-colors hover:text-slate-900 dark:hover:text-slate-100">Academia</a>
          <a href="#stack" className="transition-colors hover:text-slate-900 dark:hover:text-slate-100">Stack</a>
          <a href="#portfolio" className="transition-colors hover:text-slate-900 dark:hover:text-slate-100">Portfolio</a>
          <a href="#contact" className="transition-colors hover:text-slate-900 dark:hover:text-slate-100">Contact</a>
        </div>

        {/* Actions: Theme toggle + CV download */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-[#121927] text-slate-700 dark:text-slate-300 transition hover:border-[var(--brass)] hover:text-slate-900 dark:hover:text-white shadow-xs"
          >
            {isLight ? (
              <Sun className="h-4 w-4 text-slate-700" />
            ) : (
              <Moon className="h-4 w-4 text-slate-300" />
            )}
          </button>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-700 dark:text-slate-300 transition hover:border-[var(--brass)] hover:text-slate-900 dark:hover:text-white shadow-xs"
              title="Preview CV"
            >
              <span>CV</span>
              <ArrowDown className="h-3 w-3" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 dark:border-white/[0.08] bg-[#f4f8fb] dark:bg-[#0d131f] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 font-mono text-sm">
            {[
              { label: 'Focus', href: '#focus' },
              { label: 'Background', href: '#background' },
              { label: 'Academia', href: '#academia' },
              { label: 'Stack', href: '#stack' },
              { label: 'Portfolio', href: '#portfolio' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onOpenCvModal?.();
              }}
              className="text-left font-semibold text-[var(--brass)]"
            >
              View / Download CV (PDF)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
