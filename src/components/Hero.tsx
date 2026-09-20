import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RelaxingPlayground } from './RelaxingPlayground';

interface Props {
  photoUrl: string;
  onOpenCvModal?: () => void;
}

export const Hero: React.FC<Props> = ({ photoUrl, onOpenCvModal }) => {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pt-14 lg:pb-24">
      {/* Main Grid: Name, Profile, Headline & Story on Left, Relaxing Hover Playground on Right */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
        {/* Left Column (7 cols): Profile Focus, Headline & Narrative */}
        <div className="lg:col-span-7">
          {/* Profile Spotlight: Photo, Badges & Prominent Name */}
          <div className="flex items-center gap-4 sm:gap-5 mb-6">
            {/* Framed Profile Photo - Static, with warm brass outline and shadow */}
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-[var(--brass)] bg-white dark:bg-[#121927] shadow-xl ring-4 ring-[var(--brass)]/20 transition-transform">
              <img
                src={photoUrl}
                alt="Bhumi Godiwala"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-[center_35%]"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="pulse-dot h-2 w-2 rounded-full bg-[var(--teal)]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--teal)] font-semibold">
                  PHD RESEARCHER · MULTIMODAL &amp; AGENTIC AI
                </span>
              </div>

              {/* Major Focus on Name */}
              <h1 className="mt-1 font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Bhumi <span className="text-[var(--brass)]">Godiwala</span>
              </h1>

              <p className="font-mono text-xs text-slate-600 dark:text-slate-400 mt-1">
                Arizona State University · 4+ Years Industry &amp; Research AI
              </p>
            </div>
          </div>

          {/* The Intriguing Headline: Models that see, listen and read, then decide. Small enough to ship on the device. */}
          <h2 className="font-display text-2xl sm:text-4xl lg:text-[2.6rem] font-medium leading-[1.12] tracking-tight text-slate-900 dark:text-slate-100 text-balance">
            Models that see, listen and read, then decide.{' '}
            <span className="text-[var(--brass)]">Small enough to ship on the device.</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
            AI researcher-engineer building multimodal and agentic systems that move from paper to production. I design LLM and RAG pipelines, then optimize models for reliable cloud and edge serving.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base border-l-2 border-[var(--teal)]/60 pl-4">
            <strong className="font-semibold text-slate-900 dark:text-slate-200">Right now:</strong> deep learning deployment and inference pipelines at the ASU Decision Theater Network, and research on LLM and retrieval-augmented methods for large-scale text analysis.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brass)] px-6 py-2.5 text-sm font-semibold text-white dark:text-[#0c121e] hover:bg-[var(--brass-hover)] transition shadow-sm font-body"
            >
              <span>Selected work</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-6 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/[0.08] hover:border-slate-400 transition font-body shadow-xs"
            >
              <span>Get in touch</span>
            </a>
          </div>
        </div>

        {/* Right Column (5 cols): Relaxing Stress-Free Playground */}
        <div className="lg:col-span-5">
          <RelaxingPlayground />
        </div>
      </div>

      {/* Impact at a glance (4 Box Grid matching Image 1) */}
      <div className="mt-14 pt-10 border-t border-slate-200/80 dark:border-white/[0.08]">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
            IMPACT AT A GLANCE
          </p>
          <span className="font-mono text-xs text-[var(--teal)] font-medium">4+ Years Track Record</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl bg-slate-200/90 dark:bg-white/[0.08] ring-1 ring-slate-200/80 dark:ring-white/[0.08] shadow-md">
          <div className="bg-white dark:bg-[#0c121e] p-6 transition-colors">
            <p className="font-display text-4xl sm:text-5xl text-slate-900 dark:text-slate-100 font-medium">25%</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Theft-detection accuracy lift for a regulated energy utility serving over a million customers.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0c121e] p-6 transition-colors">
            <p className="font-display text-4xl sm:text-5xl text-[var(--brass)] font-medium">90%</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Clinical behavior detection accuracy for early Alzheimer&apos;s and TBI intervention.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0c121e] p-6 transition-colors">
            <p className="font-display text-4xl sm:text-5xl text-[var(--teal)] font-medium">30%</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Cross-device communication efficiency boost from Adaptive Mixture Quantization.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0c121e] p-6 transition-colors">
            <p className="font-display text-4xl sm:text-5xl text-sky-600 dark:text-sky-400 font-medium">93%</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Accuracy for pose estimation and wake-word models running directly on edge chips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
