import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export interface SelectedProject {
  id: string;
  cornerTag: string;
  category: string;
  filterCategory: 'Multimodal' | 'Edge AI' | 'ML & Analytics' | 'Systems & Cloud';
  title: string;
  subtitle: string;
  description: string;
  metricBadges: string[];
  tags: string[];
  problem: string;
  approach: string;
  result: string;
  githubUrl?: string;
  isPrivate?: boolean;
  spanClass: string;
}

const SIX_PROJECTS: SelectedProject[] = [
  {
    id: 'pipeedge',
    cornerTag: 'Python',
    category: 'EDGE AI · SERVING',
    filterCategory: 'Edge AI',
    title: 'PipeEdge',
    subtitle: 'Distributed edge inference research · USC ISI',
    description: 'Pipeline parallelism for large-scale model inference across heterogeneous edge clusters, optimizing layer scheduling and memory partitions.',
    metricBadges: ['Distributed serving', 'Open source'],
    tags: ['PYTHON', 'EDGE AI', 'INFERENCE', 'PYTORCH'],
    problem: 'Large transformer models fail to fit onto individual edge devices due to memory and thermal constraints, while uniform post-training quantization leads to unacceptable latency and accuracy loss.',
    approach: 'Engineered PipeEdge: pipeline parallelism tailored for heterogeneous edge clusters that optimizes layer partitioning, minimizes pipeline bubbles, and schedules layers across mobile NPUs and edge servers.',
    result: 'Cut parameter footprint by 15% and boosted cross-device communication efficiency by 30%, achieving low-latency distributed inference with zero thermal throttling.',
    githubUrl: 'https://github.com/bhumigodiwala/PipeEdge',
    isPrivate: false,
    spanClass: 'lg:col-span-7',
  },
  {
    id: 'subspace-alignment',
    cornerTag: 'NumPy',
    category: 'DOMAIN ADAPTATION · CORE ML',
    filterCategory: 'ML & Analytics',
    title: 'Subspace Alignment Algorithm',
    subtitle: 'Unsupervised domain adaptation · research',
    description: 'Aligns source and target eigenspaces via PCA projection without requiring target labels, enabling robust cross-domain classifiers under dataset shift.',
    metricBadges: ['Unsupervised transfer', 'Eigenspace mapping'],
    tags: ['PYTHON', 'NUMPY', 'PCA', 'TRANSFER LEARNING'],
    problem: 'Machine learning classifiers trained on labeled source domains experience severe accuracy drops when evaluated on shifted target distributions where labeled training data is unavailable.',
    approach: 'Implemented the Subspace Alignment algorithm in Python/NumPy, learning a closed-form orthogonal transformation matrix that aligns principal eigenvector subspaces between source and target domains.',
    result: 'Restored classification fidelity across domain-shifted benchmarks without target labels, proving strong mathematical mastery in linear algebra, PCA, and subspace learning.',
    githubUrl: 'https://github.com/bhumigodiwala/Subspace-Alignment-Algorithm',
    isPrivate: false,
    spanClass: 'lg:col-span-5',
  },
  {
    id: 'asl-prediction',
    cornerTag: 'GAN',
    category: 'MULTIMODAL · COMPUTER VISION',
    filterCategory: 'Multimodal',
    title: 'ASL Gesture Prediction',
    subtitle: 'ST-GAN shadow removal · USC EE641',
    description: 'A GAN-CNN fusion model that synthesizes shadow-free illumination before gesture classification, lifting real-world recognition accuracy to 92.9%.',
    metricBadges: ['92.9% accuracy', 'ST-GAN shadow removal'],
    tags: ['GAN', 'CNN', 'MLFLOW', 'OPENCV'],
    problem: 'Sign-language hand gesture translation degrades in real-world ambient conditions when hand shadows obscure joint geometry, fingertip boundaries, and skin contours.',
    approach: 'Implemented a generative preprocessing architecture using a Spatial-Temporal Generative Adversarial Network (ST-GAN) to synthesize shadow-free illumination before passing frames to a CNN classifier with MLflow tracking.',
    result: 'Attained 92.9% gesture recognition accuracy under harsh, variable lighting conditions, proving the efficacy of generative noise cancellation prior to classification.',
    githubUrl: 'https://github.com/bhumigodiwala/ASL-Gestures-Prediction-using-ST-GAN-for-Shadow-Removal',
    isPrivate: false,
    spanClass: 'lg:col-span-7',
  },
  {
    id: 'hybrid-reco-system',
    cornerTag: 'Scikit-Learn',
    category: 'RECOMMENDER SYSTEMS · ML',
    filterCategory: 'ML & Analytics',
    title: 'Hybrid Recommendation System',
    subtitle: 'Movie engine · collaborative & content fusion',
    description: 'Dual-engine recommendation system fusing Content-Based Filtering (synopsis embeddings, metadata) with Collaborative Filtering (matrix factorization) to mitigate cold-start.',
    metricBadges: ['Hybrid α-scoring', 'Cold-start mitigation'],
    tags: ['PYTHON', 'SCIKIT-LEARN', 'SVD', 'TF-IDF'],
    problem: 'Pure collaborative filtering fails on cold-start users and fresh catalog items, while pure content filtering produces narrow, repetitive recommendations without catalog serendipity.',
    approach: 'Architected a weighted α-fusion model blending cosine similarity over metadata/synopsis TF-IDF embeddings with truncated SVD matrix factorization on user interaction records.',
    result: 'Overcame cold-start latency, boosted catalog serendipity by 28%, and achieved higher recommendation precision across top-K evaluation sets.',
    githubUrl: 'https://github.com/bhumigodiwala/hybrid-reco-system',
    isPrivate: false,
    spanClass: 'lg:col-span-5',
  },
  {
    id: 'banking-subscription',
    cornerTag: 'XGBoost',
    category: 'PREDICTIVE ANALYTICS · FINTECH',
    filterCategory: 'ML & Analytics',
    title: 'Banking Subscription Analysis',
    subtitle: 'Financial propensity · campaign analytics',
    description: 'Predictive classification modeling for bank term-deposit conversion under severe class imbalance, uncovering key economic drivers via SHAP interpretability.',
    metricBadges: ['2.4x conversion lift', 'SHAP explainability'],
    tags: ['PYTHON', 'XGBOOST', 'SMOTE', 'SHAP'],
    problem: 'Bank direct marketing campaigns faced high operational costs and low single-digit conversion rates, worsened by extreme 9:1 class imbalance in customer response data.',
    approach: 'Engineered an end-to-end predictive pipeline using SMOTE resampling, cost-sensitive XGBoost and Random Forest classifiers, and SHAP value explainability.',
    result: 'Delivered a 2.4x conversion lift over baseline calling campaigns, pinpointed key macroeconomic indicators affecting customer decisions, and established optimal propensity thresholds.',
    githubUrl: 'https://github.com/bhumigodiwala/Banking-Subscription-Analysis',
    isPrivate: false,
    spanClass: 'lg:col-span-6',
  },
  {
    id: 'community-car-rentals',
    cornerTag: 'Full-Stack',
    category: 'PLATFORM · CLOUD',
    filterCategory: 'Systems & Cloud',
    title: 'Community Car Rentals Platform',
    subtitle: 'Marketplace & fleet reservation system',
    description: 'Sustainable community car-sharing marketplace supporting real-time vehicle booking, dynamic availability scheduling, and cloud reservation workflows.',
    metricBadges: ['Fleet reservation', 'Real-time booking'],
    tags: ['REACT', 'NODE.JS', 'CLOUD', 'REST API'],
    problem: 'Traditional car rental platforms are fragmented and cumbersome for neighborhood peer-to-peer sharing, resulting in underutilized local vehicle assets.',
    approach: 'Designed a cloud-hosted web marketplace with real-time fleet listings, interactive search, calendar-based availability booking, and user profile management.',
    result: 'Built a responsive, end-to-end booking platform connecting car hosts with neighborhood drivers, enabling frictionless discovery and transparent reservation management.',
    githubUrl: 'https://github.com/bhumigodiwala/Community-Car-Rentals-Platform',
    isPrivate: false,
    spanClass: 'lg:col-span-6',
  },
];

export const PortfolioSection: React.FC = () => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const toggleProject = (id: string) => {
    setOpenProjectId((prev) => (prev === id ? null : id));
  };

  const filteredProjects = SIX_PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    return proj.filterCategory === activeFilter;
  });

  return (
    <section id="portfolio" className="border-t border-slate-200/90 dark:border-white/[0.08] scroll-mt-20 relative">
      <span id="projects" className="sr-only" />
      <span id="selected-work" className="sr-only" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="font-mono text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold tracking-wider">
              05 — Portfolio
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium text-slate-900 dark:text-slate-100 sm:text-4xl">
              Selected work
            </h2>
            <p className="mt-2 font-display text-xl text-[var(--brass)]">
              Six projects, opened up.
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-[60ch]">
              Each one is a system that reached users or hardware, not a notebook. Open a row for the problem, the approach and the result.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 dark:bg-white/[0.04] p-1 border border-slate-200 dark:border-white/[0.06]">
              {['All', 'Edge AI', 'Multimodal', 'ML & Analytics', 'Systems & Cloud'].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-md px-3 py-1 font-mono text-xs transition font-medium ${
                    activeFilter === category
                      ? 'bg-[var(--brass)] text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
              Click any project to inspect
            </span>
          </div>
        </div>

        {/* Project Tiles Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {filteredProjects.map((proj) => {
            const isOpen = openProjectId === proj.id;
            return (
              <div
                key={proj.id}
                className={`${proj.spanClass} relative group rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-xl ${
                  isOpen
                    ? 'border-[var(--brass)] bg-white/90 dark:bg-[#0c1424]/90 shadow-2xl ring-1 ring-[var(--brass)]/30'
                    : 'border-slate-200/90 dark:border-white/[0.08] bg-white/70 dark:bg-[#0b121f]/75 hover:border-slate-300 dark:hover:border-white/20 shadow-lg shadow-black/5 dark:shadow-[0_10px_35px_rgba(0,0,0,0.35)]'
                }`}
              >
                {/* Specular glass reflection */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="pointer-events-none absolute -top-20 -left-20 h-44 w-44 rounded-full bg-teal-500/[0.03] blur-2xl" />

                {/* Top Blueprint Architectural Header */}
                <div className="h-12 border-b border-slate-200/90 dark:border-white/[0.08] flex items-stretch justify-between relative overflow-hidden bg-slate-50/60 dark:bg-white/[0.015]">
                  <div className="flex-1 relative flex items-center">
                    <div className="absolute left-8 inset-y-0 w-px border-l border-dashed border-slate-300/80 dark:border-white/[0.08]" />
                    <div className="h-px bg-teal-500/35 dark:bg-teal-400/30 w-3/4 ml-4" />
                    <div className="absolute right-12 inset-y-0 w-px border-l border-dashed border-slate-300/80 dark:border-white/[0.08]" />
                  </div>
                  <div className="border-l border-slate-200/90 dark:border-white/[0.08] px-5 flex items-center justify-center font-mono text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 tracking-normal shrink-0">
                    {proj.cornerTag}
                  </div>
                </div>

                {/* Main Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Inner Inset Card */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => toggleProject(proj.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleProject(proj.id);
                        }
                      }}
                      className="cursor-pointer rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-white/70 dark:bg-[#111928]/60 backdrop-blur-md p-5 sm:p-6 transition hover:border-slate-300 dark:hover:border-white/18 focus:outline-none focus:ring-1 focus:ring-[var(--brass)] shadow-xs"
                    >
                      {/* Inner Header: Category and Status */}
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-mono text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400 font-semibold">
                          {proj.category}
                        </p>
                        {proj.githubUrl ? (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="h-9 w-9 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-slate-100/90 dark:bg-[#182233]/90 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-white hover:border-slate-400 dark:hover:border-white/25 transition shrink-0"
                            title="View GitHub Repository"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        ) : (
                          <span className="font-mono text-[10.5px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-medium shrink-0 pt-0.5">
                            PRIVATE
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="mt-3 font-display text-2xl sm:text-3xl font-medium text-slate-900 dark:text-slate-100 tracking-tight leading-snug">
                        {proj.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                        {proj.description}
                      </p>
                    </div>

                    {/* Metric Badges */}
                    <div className="mt-4 sm:mt-5 flex flex-wrap gap-2.5">
                      {proj.metricBadges.map((badge, idx) => (
                        <span
                          key={badge}
                          className={`rounded-md px-3 py-1 font-mono text-xs font-medium transition ${
                            idx === 0
                              ? 'border border-teal-500/40 bg-teal-500/10 dark:bg-teal-400/10 text-teal-700 dark:text-teal-300'
                              : 'border border-slate-300 dark:border-white/[0.1] bg-slate-100/70 dark:bg-white/[0.02] text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Problem / Approach / Result Drawer */}
                    {isOpen && (
                      <div className="mt-4 rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-slate-50/80 dark:bg-[#0c121e]/85 backdrop-blur-md p-4 sm:p-5 space-y-3 animate-in fade-in duration-200">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {/* The Problem */}
                          <div className="rounded-lg border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#111827] p-3.5 shadow-2xs">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-rose-600 dark:text-rose-400 font-semibold block mb-1.5">
                              The Problem
                            </span>
                            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                              {proj.problem}
                            </p>
                          </div>

                          {/* The Approach */}
                          <div className="rounded-lg border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#111827] p-3.5 shadow-2xs">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--brass)] font-semibold block mb-1.5">
                              The Approach
                            </span>
                            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                              {proj.approach}
                            </p>
                          </div>

                          {/* The Result */}
                          <div className="rounded-lg border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#111827] p-3.5 shadow-2xs">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--teal)] font-semibold block mb-1.5">
                              The Result
                            </span>
                            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                              {proj.result}
                            </p>
                          </div>
                        </div>

                        {/* Expanded Footer Actions */}
                        <div className="flex items-center justify-between pt-1 font-mono text-xs">
                          <button
                            type="button"
                            onClick={() => toggleProject(proj.id)}
                            className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition"
                          >
                            Close
                          </button>
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-[var(--brass)] hover:underline font-semibold"
                            >
                              <span>View source repository</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Metadata Bar */}
                  <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/[0.06] flex items-end justify-between gap-4 text-xs">
                    <div className="min-w-0">
                      <p className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 truncate">
                        {proj.subtitle}
                      </p>
                      <p className="font-mono text-[10.5px] uppercase tracking-wider text-slate-400 dark:text-slate-500 mt-1.5 truncate">
                        {proj.tags.join('   ')}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-3">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition inline-flex items-center gap-1.5"
                        >
                          <span>View code</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => toggleProject(proj.id)}
                        className="font-mono text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition"
                      >
                        {isOpen ? 'Close' : 'Inspect'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
