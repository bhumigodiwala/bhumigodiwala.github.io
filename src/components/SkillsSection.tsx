import React from 'react';
import { Sparkles, Cpu, Eye, Boxes, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="h-5 w-5 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="h-5 w-5 text-emerald-400" />;
      case 'Eye':
        return <Eye className="h-5 w-5 text-purple-400" />;
      case 'Boxes':
      default:
        return <Boxes className="h-5 w-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="border-b border-slate-800/80 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 border-b border-slate-800/80 pb-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase text-sky-400">
            <span>03 — Technical Depth</span>
            <span>•</span>
            <span>Core Competencies</span>
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-slate-100">
            Research &amp; Engineering Disciplines
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Practical and theoretical mastery spanning algorithmic retrieval, distributed model execution, generative vision, and scalable production serving.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-slate-700 hover:bg-slate-900"
            >
              <div className="flex items-center gap-3 border-b border-slate-800/70 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-100">
                  {category.title}
                </h3>
              </div>

              <div className="mt-5 space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-200 flex items-center gap-1.5">
                        <Check className="h-3 w-3 text-emerald-400" />
                        {skill.name}
                      </span>
                      <span className="font-mono text-slate-400">{skill.level}%</span>
                    </div>

                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <p className="text-[11px] text-slate-400 italic">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
