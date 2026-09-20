import React, { useState, useMemo } from 'react';
import { Github, ExternalLink, GitFork, Lock, Globe, Search, Tag, Sparkles } from 'lucide-react';
import { GITHUB_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories = [
    'All',
    'Systems & Edge',
    'Recommendation',
    'Vision & GAN',
    'Analytics & Platforms',
  ];

  const filteredProjects = useMemo(() => {
    return GITHUB_PROJECTS.filter((proj) => {
      const matchesFilter = activeFilter === 'All' || proj.filter === activeFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        proj.title.toLowerCase().includes(q) ||
        proj.name.toLowerCase().includes(q) ||
        proj.description.toLowerCase().includes(q) ||
        proj.tags.some((t) => t.toLowerCase().includes(q));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="projects" className="border-b border-slate-800/80 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase text-sky-400">
              <span>01 — GitHub Portfolios</span>
              <span>•</span>
              <span>Open Source &amp; Research</span>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-slate-100">
              Published Repositories &amp; Systems
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Production architectures, distributed inference pipelines, and machine learning research repositories published across GitHub.
            </p>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search repositories & tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900/90 pl-9 pr-3 py-2 text-xs text-slate-200 outline-none focus:border-sky-500 transition"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`rounded-lg px-3.5 py-1.5 font-mono text-xs transition-all ${
                activeFilter === cat
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-12 text-center">
            <p className="text-slate-400">No projects found matching "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-mono text-sky-400 hover:underline"
            >
              Clear filters and search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900 hover:shadow-xl hover:shadow-sky-500/5">
      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/60 pb-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* Public / Private badge */}
            <span
              className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 font-mono text-[10px] font-medium ${
                project.isPrivate
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                  : 'bg-sky-500/10 text-sky-300 border border-sky-500/30'
              }`}
            >
              {project.isPrivate ? <Lock className="h-2.5 w-2.5" /> : <Globe className="h-2.5 w-2.5" />}
              {project.isPrivate ? 'Private' : 'Public'}
            </span>

            {/* Language */}
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
              <span className="h-2 w-2 rounded-full bg-sky-400"></span>
              {project.language}
            </span>

            {project.license && (
              <span className="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                {project.license}
              </span>
            )}
          </div>

          {/* GitHub Action */}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              title={`View ${project.name} on GitHub`}
              className="flex items-center gap-1 text-xs font-mono text-slate-400 transition hover:text-sky-400"
            >
              <Github className="h-4 w-4" />
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : (
            <span className="font-mono text-[10px] text-slate-500">Academic Capstone</span>
          )}
        </div>

        {/* Forked info */}
        {project.isForked && project.forkedFrom && (
          <div className="mt-2.5 flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
            <GitFork className="h-3 w-3 text-slate-500" />
            <span>Forked from</span>
            <span className="text-slate-300 font-medium">{project.forkedFrom}</span>
          </div>
        )}

        {/* Project Name & Category */}
        <div className="mt-3">
          <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400">
            {project.category}
          </span>
          <h3 className="mt-1 font-display text-xl font-semibold text-slate-100 group-hover:text-sky-300 transition-colors">
            {project.name}
          </h3>
          <p className="mt-1 text-xs text-sky-400/90 font-medium">
            {project.highlightSummary}
          </p>
        </div>

        {/* Full description */}
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>

        {/* Metrics Chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>

      {/* Footer tags and meta */}
      <div className="mt-6 pt-4 border-t border-slate-800/80">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-slate-800/80 px-2 py-0.5 font-mono text-[10px] text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>

          {project.updatedDate && (
            <span className="font-mono text-[10px] text-slate-500">
              Updated: {project.updatedDate}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
