import React from 'react';
import { Layers, Sparkles, Cpu } from 'lucide-react';
import { EdgeParallelismVisualizer } from './EdgeParallelismVisualizer';

export const FocusSection: React.FC = () => {
  return (
    <section id="focus" className="border-t border-slate-200/90 dark:border-white/[0.08] scroll-mt-20 relative">
      <span id="work" className="sr-only" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        {/* Section Header */}
        <div>
          <p className="font-mono text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold tracking-wider">
            01 — Focus
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium text-slate-900 dark:text-slate-100 sm:text-4xl">
            What I work on
          </h2>
          <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-slate-700 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">Two lines of work, and a constraint I keep coming back to.</strong>{' '}
            Multimodal perception and agentic language systems are where I spend most of my time. Making those models small and fast enough to serve is the thread running underneath both.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 1. Multimodal models */}
          <div className="flex flex-col rounded-2xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.025] p-6 backdrop-blur-xl shadow-sm dark:shadow-none transition-colors">
            <div className="flex items-center gap-2 text-[var(--teal)] font-mono text-xs uppercase font-semibold">
              <Layers className="h-4 w-4" />
              <span>Multimodal models</span>
            </div>
            <h3 className="mt-3 font-display text-xl font-medium text-slate-900 dark:text-slate-100">
              Learning from speech, video and text at the same time
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Most of the signal in a real clinical or physical setting is not in one modality. My work fuses them, and stays honest about what happens when one channel is degraded.
            </p>

            <ul className="mt-6 space-y-3.5 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-white/[0.06] pt-4">
              <li className="flex items-start gap-2">
                <span className="text-[var(--teal)] font-mono font-bold">›</span>
                <span>
                  Avatar-based speech and behaviour tracking reaching <strong className="text-slate-900 dark:text-white">90% detection accuracy</strong> for early Alzheimer's and TBI screening.{' '}
                  <span className="text-slate-500 dark:text-slate-400 font-mono">(PyTorch, OpenCV)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--teal)] font-mono font-bold">›</span>
                <span>
                  A GAN and CNN fusion model that removes shadow noise before classification, lifting ASL gesture accuracy to <strong className="text-slate-900 dark:text-white">92.9%</strong>.{' '}
                  <span className="text-slate-500 dark:text-slate-400 font-mono">(ST-GAN, MLflow)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--teal)] font-mono font-bold">›</span>
                <span>
                  Human pose estimation and visual wake-word models tuned to run on-chip.{' '}
                  <span className="text-slate-500 dark:text-slate-400 font-mono">(TetraMem inference hardware)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* 2. LLM and agentic systems */}
          <div className="flex flex-col rounded-2xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.025] p-6 backdrop-blur-xl shadow-sm dark:shadow-none transition-colors">
            <div className="flex items-center gap-2 text-[var(--brass)] font-mono text-xs uppercase font-semibold">
              <Sparkles className="h-4 w-4" />
              <span>LLM and agentic systems</span>
            </div>
            <h3 className="mt-3 font-display text-xl font-medium text-slate-900 dark:text-slate-100">
              Retrieval, tools and loops that hold up outside a demo
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Retrieval-augmented generation is the easy part. The work is grounding, evaluation, and the compliance and latency budgets that decide whether a system ever reaches users.
            </p>

            <ul className="mt-6 space-y-3.5 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-white/[0.06] pt-4">
              <li className="flex items-start gap-2">
                <span className="text-[var(--brass)] font-mono font-bold">›</span>
                <span>
                  LLM and RAG pipelines powering <strong className="text-slate-900 dark:text-white">HIPAA-compliant</strong> patient assistance in production.{' '}
                  <span className="text-slate-500 dark:text-slate-400 font-mono">(Python, TensorFlow, Azure)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brass)] font-mono font-bold">›</span>
                <span>
                  LLM and RAG methods combined with topic modelling for large-scale text analysis.{' '}
                  <span className="text-slate-500 dark:text-slate-400 font-mono">(Paper in progress, ASU)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brass)] font-mono font-bold">›</span>
                <span>
                  An NLP skill-extraction system mapping course catalogues onto job-market demand to surface skill gaps.{' '}
                  <span className="text-slate-500 dark:text-slate-400 font-mono">(Transformers, embeddings)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brass)] font-mono font-bold">›</span>
                <span>
                  An end-to-end email generation service on serverless AWS.{' '}
                  <span className="text-slate-500 dark:text-slate-400 font-mono">(FastAPI, React, Lambda, Docker)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* 3. Efficient and edge inference */}
          <div className="flex flex-col rounded-2xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-white/[0.025] p-6 backdrop-blur-xl shadow-sm dark:shadow-none transition-colors">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-mono text-xs uppercase font-semibold">
              <Cpu className="h-4 w-4" />
              <span>Distributed and edge inference</span>
            </div>
            <h3 className="mt-3 font-display text-xl font-medium text-slate-900 dark:text-slate-100">
              Pipeline parallelism across edge silicon
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Large models rarely fit into a single edge device. My work with PipeEdge partitions transformer layers across heterogeneous mobile NPUs, accelerators, and local edge gateways for fast, concurrent serving.
            </p>

            <div className="mt-4 flex-1 flex flex-col justify-end">
              <EdgeParallelismVisualizer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
