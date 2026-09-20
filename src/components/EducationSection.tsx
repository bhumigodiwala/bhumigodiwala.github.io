import React from 'react';
import { GraduationCap } from 'lucide-react';

interface DegreeItem {
  level: string;
  institution: string;
  websiteUrl: string;
  logoUrl: string;
  affiliation?: string;
  affiliationUrl?: string;
  symbolNote?: string;
  timeline: string;
  gpa: string;
  specialization: string;
  highlight?: boolean;
}

const DEGREES: DegreeItem[] = [
  {
    level: 'PhD in Computer Science',
    institution: 'Arizona State University',
    websiteUrl: 'https://www.asu.edu/',
    logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://asu.edu&size=128',
    timeline: 'Jan 2026 – present',
    gpa: 'GPA 4.0 / 4.0',
    specialization: 'Multimodal perception, agentic AI, and distributed edge deployment pipelines.',
    highlight: true,
  },
  {
    level: 'MS in Computer Engineering',
    institution: 'University of Southern California',
    websiteUrl: 'https://www.usc.edu/',
    logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://usc.edu&size=128',
    timeline: '2021 – 2023',
    gpa: 'GPA 3.8 / 4.0',
    specialization: 'Machine learning and data science specialisation. Research in Adaptive Mixture Quantization at USC ISI.',
    highlight: false,
  },
  {
    level: 'BE in Electronics and Telecommunications Engineering',
    institution: 'D.J. Sanghvi College of Engineering',
    affiliation: 'University of Mumbai',
    websiteUrl: 'https://djsce.ac.in/',
    affiliationUrl: 'https://mu.ac.in/',
    logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://mu.ac.in&size=128',
    symbolNote: 'Official symbol is of University of Mumbai',
    timeline: '2016 – 2020',
    gpa: 'CGPA 9.19 / 10',
    specialization: 'Embedded systems, signal processing, and statistical machine learning foundations.',
    highlight: false,
  },
];

export const EducationSection: React.FC = () => {
  return (
    <section id="academia" className="border-t border-slate-200/90 dark:border-white/[0.08] scroll-mt-20 relative">
      <span id="education" className="sr-only" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div>
          <p className="font-mono text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold tracking-wider">
            03 — Academia
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium text-slate-900 dark:text-slate-100 sm:text-4xl">
            Education
          </h2>
          <p className="mt-2 font-display text-xl text-[var(--brass)]">
            Research foundation &amp; academic rigor.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {DEGREES.map((deg) => (
            <div
              key={deg.level}
              className={`flex flex-col justify-between rounded-2xl border p-6 backdrop-blur-xl transition hover:border-[var(--brass)]/60 ${
                deg.highlight
                  ? 'border-[var(--brass)]/50 bg-white dark:bg-[#111827] ring-1 ring-[var(--brass)]/20 shadow-md'
                  : 'border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.025] shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-500 dark:text-slate-400">{deg.timeline}</span>
                  <span className="rounded bg-[var(--brass)]/15 px-2.5 py-0.5 text-[var(--brass)] font-semibold">
                    {deg.gpa}
                  </span>
                </div>

                {/* Institution & Symbol */}
                <div className="mt-4 flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 dark:border-white/10 bg-white p-1.5 shadow-2xs overflow-hidden shrink-0">
                    <img
                      src={deg.logoUrl}
                      alt={`${deg.institution} official symbol`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </span>
                  <div className="min-w-0">
                    <a
                      href={deg.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-display text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-[var(--brass)] hover:underline transition"
                      title={`Visit ${deg.institution} official website (${deg.websiteUrl})`}
                    >
                      <span>{deg.institution}</span>
                    </a>

                    {deg.affiliation && (
                      <div className="mt-0.5 flex flex-wrap items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                        <span>Affiliated with</span>
                        <a
                          href={deg.affiliationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[var(--brass)] hover:underline inline-flex items-center gap-0.5"
                          title="Visit University of Mumbai official website"
                        >
                          <span>{deg.affiliation}</span>
                        </a>
                      </div>
                    )}

                    {deg.symbolNote && (
                      <p className="mt-1 font-mono text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brass)]/80 shrink-0" />
                        <span>Note: Symbol is of University of Mumbai</span>
                      </p>
                    )}
                  </div>
                </div>

                <h3 className="mt-4 font-display text-lg font-medium text-slate-900 dark:text-slate-100">
                  {deg.level}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {deg.specialization}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-200 dark:border-white/[0.06] pt-3 flex items-center gap-1.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                <GraduationCap className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                <span>Verified Academic Credential</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
