import React from 'react';
import { MapPin } from 'lucide-react';

interface ExperienceItem {
  period: string;
  location: string;
  role: string;
  organization: string;
  websiteUrl: string;
  logoUrl: string;
  description: string;
  isCurrent?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'Apr 2026 – now',
    location: 'Tempe, AZ',
    role: 'Graduate Research Data Scientist',
    organization: 'ASU Decision Theater Network',
    websiteUrl: 'https://dt.asu.edu/',
    logoUrl: './asu_dt.png',
    description:
      'Architect end-to-end deep learning deployment and inference pipelines across several research domains, including a Valley Fever disease detection model taken from prototype to production model serving. Building an NLP skill-extraction system that maps university course offerings onto job-market requirements. Leading clustering analysis of Commonwealth Fund health indicators for Maricopa County, and co-authoring a paper on LLM and RAG methods combined with topic modelling.',
    isCurrent: true,
  },
  {
    period: 'Jan – Nov 2025',
    location: 'Houston, TX',
    role: 'Senior Data Scientist',
    organization: 'Infosys',
    websiteUrl: 'https://www.infosys.com/',
    logoUrl: './infosys.png',
    description:
      'Engineered an anomaly-detection system that raised utility theft detection accuracy 25%, protecting revenue for a regulated energy utility serving more than a million customers. Redesigned Budget Billing analytics around behavioural drivers, lifting enrolment 15% and retention 10%, and shipped the findings as policy alongside engineering and product.',
  },
  {
    period: 'May 2024 – Jan 2025',
    location: 'Newport Beach, CA',
    role: 'Senior AI/ML Engineer',
    organization: 'MemoryCare AI (now Scienza Health)',
    websiteUrl: 'https://scienzahealth.com/',
    logoUrl: './mcai.png',
    description:
      "Built the LLM and RAG pipelines behind HIPAA-compliant patient assistance, and an avatar-based speech and behaviour tracking system reaching 90% detection accuracy for early Alzheimer's and TBI intervention. Designed an Azure-based cognitive assessment platform that cut assessment time 35% while scaling securely across clinics.",
  },
  {
    period: 'Jul 2023 – Jul 2024',
    location: 'Marina del Rey, CA',
    role: 'Machine Learning Engineer',
    organization: 'USC Information Sciences Institute',
    websiteUrl: 'https://www.isi.edu/',
    logoUrl: './usc_isi.png',
    description:
      'Developed Adaptive Mixture Quantization for cloud and edge deployment: accuracy up 5%, model size down 15%, communication efficiency up 30%.',
  },
  {
    period: 'May 2022 – May 2023',
    location: 'Fremont, CA',
    role: 'Machine Learning Intern',
    organization: 'TetraMem',
    websiteUrl: 'https://tetramem.com/',
    logoUrl: './tetramem.png',
    description:
      'Optimised human pose estimation and visual wake-word models for edge inference chips, holding 93% accuracy with reduced memory and latency. Applied quantization-aware training and post-training quantization to shrink parameters without losing accuracy.',
  },
  {
    period: 'Oct 2020 – May 2021',
    location: 'Mumbai, India',
    role: 'Software Engineer',
    organization: 'Tata Consultancy Services',
    websiteUrl: 'https://www.tcs.com/',
    logoUrl: './tcs.png',
    description:
      'Shipped full-stack Java, HTML, CSS and JavaScript modules for university portals serving over ten thousand students, and automated metadata mapping and reporting to cut manual processing time 30%.',
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="background" className="border-t border-slate-200/90 dark:border-white/[0.08] scroll-mt-20 relative">
      <span id="experience" className="sr-only" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        {/* Section Header */}
        <div>
          <p className="font-mono text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold tracking-wider">
            02 — Background
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium text-slate-900 dark:text-slate-100 sm:text-4xl">
            Where I have worked
          </h2>
          <p className="mt-2 font-display text-xl text-[var(--brass)]">
            Research labs, a startup, and enterprise scale.
          </p>
          <p className="mt-2 max-w-[65ch] text-base leading-relaxed text-slate-700 dark:text-slate-300">
            Over four years of industry and applied research experience across university labs, healthcare AI, semiconductor edge hardware, and enterprise utilities — consistently on the path from model to deployed system.
          </p>
        </div>

        {/* Timeline List */}
        <div className="mt-12 space-y-8">
          {EXPERIENCES.map((item) => (
            <article
              key={item.role + item.period}
              className="relative pl-6 sm:pl-8 border-l border-slate-300 dark:border-white/[0.1] transition group hover:border-[var(--brass)]"
            >
              {/* Timeline marker */}
              <div
                className={`absolute -left-1.5 top-1 h-3 w-3 rounded-full border transition-all ${
                  item.isCurrent
                    ? 'border-[var(--brass)] bg-[var(--brass)] shadow-md shadow-[var(--brass)]/30 ring-4 ring-[var(--brass)]/20'
                    : 'border-slate-300 dark:border-white/[0.2] bg-white dark:bg-[#0c121e] group-hover:border-[var(--brass)]'
                }`}
              />

              <div className="rounded-2xl border border-slate-200/90 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-5 sm:p-6 backdrop-blur-xl shadow-xs dark:shadow-none transition hover:border-slate-300 dark:hover:border-white/[0.15]">
                {/* Line 1: Role on left, Period & Location on right */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-slate-900 dark:text-slate-100">
                    {item.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400 shrink-0">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item.period}</span>
                    {item.duration && (
                      <span className="rounded-md border border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.04] px-1.5 py-0.5 text-[11px] text-slate-600 dark:text-slate-400">
                        {item.duration}
                      </span>
                    )}
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-slate-400 dark:text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Line 2: Company Name (Always on next line) */}
                <div className="mt-1.5 sm:mt-2">
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display text-base text-[var(--brass)] font-semibold hover:underline underline-offset-4 transition"
                    title={`Visit ${item.organization} official website (${item.websiteUrl})`}
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-slate-200/90 dark:border-white/10 bg-white p-0.5 shadow-2xs overflow-hidden shrink-0">
                      <img
                        src={item.logoUrl}
                        alt={`${item.organization} official symbol`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </span>
                    <span>{item.organization}</span>
                  </a>
                </div>

                {/* Line 3: Description (Next line) */}
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 max-w-[75ch]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
