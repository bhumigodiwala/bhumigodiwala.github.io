import React, { useState, useMemo } from 'react';
import { Sparkles, Sliders, Film, Layers, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { SAMPLE_MOVIES } from '../data/portfolioData';

type LabMode = 'recommender' | 'pipeedge';

interface Props {
  className?: string;
}

export const InteractiveLab: React.FC<Props> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState<LabMode>('recommender');

  // Recommender State
  const [alpha, setAlpha] = useState<number>(0.55); // 0 = 100% collaborative, 1 = 100% content
  const [selectedGenre, setSelectedGenre] = useState<string>('Sci-Fi');
  const [selectedSeedId, setSelectedSeedId] = useState<string>('m1'); // default Interstellar

  // PipeEdge State
  const [numStages, setNumStages] = useState<number>(4);
  const [microBatches, setMicroBatches] = useState<number>(8);
  const [heterogeneity, setHeterogeneity] = useState<'balanced' | 'heterogeneous'>('heterogeneous');

  // Computed Recommendations
  const rankedMovies = useMemo(() => {
    return SAMPLE_MOVIES.map((movie) => {
      // Calculate genre alignment bonus
      const hasGenre = movie.genres.includes(selectedGenre);
      const genreBoost = hasGenre ? 0.08 : -0.05;

      // Seed movie similarity logic
      const isSeed = movie.id === selectedSeedId;
      const seedBonus = isSeed ? 0.15 : 0;

      const contentScore = Math.min(0.99, Math.max(0.4, movie.contentSimilarity + genreBoost));
      const collabScore = Math.min(0.99, Math.max(0.4, movie.collaborativeAffinity + seedBonus));

      const hybridScore = alpha * contentScore + (1 - alpha) * collabScore;

      return {
        ...movie,
        contentScore: Math.round(contentScore * 100),
        collabScore: Math.round(collabScore * 100),
        hybridScore: Math.round(hybridScore * 100),
      };
    }).sort((a, b) => b.hybridScore - a.hybridScore);
  }, [alpha, selectedGenre, selectedSeedId]);

  // Computed PipeEdge Metrics
  const pipeMetrics = useMemo(() => {
    // Bubble fraction = (numStages - 1) / (microBatches + numStages - 1)
    const bubbleFraction = (numStages - 1) / (microBatches + numStages - 1);
    const bubblePct = Math.round(bubbleFraction * 100);
    const efficiency = 100 - bubblePct;
    const baseThroughput = heterogeneity === 'heterogeneous' ? 64 : 82;
    const throughput = Math.round(baseThroughput * (efficiency / 100) * (microBatches / 4));
    const latencyMs = Math.round(38 + numStages * 14 + (heterogeneity === 'heterogeneous' ? 18 : 6));

    return { bubblePct, efficiency, throughput, latencyMs };
  }, [numStages, microBatches, heterogeneity]);

  return (
    <div className={`rounded-xl border border-slate-700/60 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl ${className}`}>
      {/* Tab Switcher */}
      <div className="mb-4 flex items-center justify-between border-b border-slate-700/50 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400">
            {activeTab === 'recommender' ? <Film className="h-4 w-4" /> : <Layers className="h-4 w-4" />}
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {activeTab === 'recommender' ? 'Hybrid Recommendation Lab' : 'PipeEdge Distributed Pipeline'}
            </h4>
            <p className="text-[10px] text-slate-400">
              {activeTab === 'recommender'
                ? 'Interactive demo of hybrid-reco-system'
                : 'Interactive demo of PipeEdge inference'}
            </p>
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex rounded-lg bg-slate-800/90 p-0.5 text-[11px] font-medium text-slate-300">
          <button
            type="button"
            onClick={() => setActiveTab('recommender')}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-all ${
              activeTab === 'recommender'
                ? 'bg-sky-500 text-slate-950 shadow font-semibold'
                : 'hover:text-slate-100'
            }`}
          >
            <Sparkles className="h-3 w-3" />
            Recommender
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pipeedge')}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-all ${
              activeTab === 'pipeedge'
                ? 'bg-emerald-400 text-slate-950 shadow font-semibold'
                : 'hover:text-slate-100'
            }`}
          >
            <Zap className="h-3 w-3" />
            PipeEdge
          </button>
        </div>
      </div>

      {activeTab === 'recommender' ? (
        /* Hybrid Recommendation Playground */
        <div className="space-y-4">
          {/* Controls row */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Genre Focus */}
            <div className="space-y-1.5">
              <label className="flex items-center justify-between text-[11px] font-medium text-slate-300">
                <span>Favorite Genre Anchor:</span>
                <span className="font-mono text-sky-400">{selectedGenre}</span>
              </label>
              <div className="flex flex-wrap gap-1">
                {['Sci-Fi', 'Thriller', 'Drama', 'Mystery'].map((genre) => (
                  <button
                    key={genre}
                    type="button"
                    onClick={() => setSelectedGenre(genre)}
                    className={`rounded px-2 py-0.5 font-mono text-[10px] transition-all ${
                      selectedGenre === genre
                        ? 'bg-sky-500/20 text-sky-300 ring-1 ring-sky-500/40 font-semibold'
                        : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Seed Reference Film */}
            <div className="space-y-1.5">
              <label className="flex items-center justify-between text-[11px] font-medium text-slate-300">
                <span>Seed Movie Liked:</span>
                <span className="truncate text-right font-mono text-emerald-400">
                  {SAMPLE_MOVIES.find((m) => m.id === selectedSeedId)?.title}
                </span>
              </label>
              <select
                value={selectedSeedId}
                onChange={(e) => setSelectedSeedId(e.target.value)}
                className="w-full rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-200 outline-none focus:border-sky-500"
              >
                {SAMPLE_MOVIES.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.title} ({m.year}) — {m.genres.join(', ')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Fusion Balance Slider */}
          <div className="rounded-lg border border-slate-700/60 bg-slate-800/50 p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1 font-medium text-slate-300">
                <Sliders className="h-3.5 w-3.5 text-sky-400" />
                Hybrid Fusion Weight (α)
              </span>
              <span className="font-mono text-xs font-semibold text-sky-300">
                {Math.round(alpha * 100)}% Content / {Math.round((1 - alpha) * 100)}% Collaborative
              </span>
            </div>

            <div className="mt-2.5">
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={alpha}
                onChange={(e) => setAlpha(parseFloat(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-sky-400"
              />
              <div className="mt-1 flex justify-between font-mono text-[9px] text-slate-400">
                <span>Collaborative Filtering (Ratings & SVD)</span>
                <span>Content-Based (Plots & Metadata)</span>
              </div>
            </div>
          </div>

          {/* Top Ranked Recommendations */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                Top Model Outputs (Hybrid Ranked)
              </span>
              <span className="font-mono text-[10px] text-sky-400">
                Formula: S = α·S_content + (1-α)·S_collab
              </span>
            </div>

            <div className="space-y-2">
              {rankedMovies.slice(0, 3).map((movie, rank) => (
                <div
                  key={movie.id}
                  className="group relative flex items-center justify-between rounded-lg border border-slate-700/40 bg-slate-800/70 p-2.5 transition-all hover:border-sky-500/40 hover:bg-slate-800"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold font-mono text-sky-400">
                      #{rank + 1}
                    </span>
                    <span className="text-xl">{movie.posterIcon}</span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h5 className="text-xs font-semibold text-slate-100">{movie.title}</h5>
                        <span className="font-mono text-[10px] text-slate-400">({movie.year})</span>
                      </div>
                      <p className="text-[10px] text-slate-400">
                        Dir. {movie.director} · {movie.genres.join(', ')}
                      </p>
                    </div>
                  </div>

                  {/* Score breakdown */}
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <span className="font-mono text-sm font-bold text-sky-300">
                        {movie.hybridScore}%
                      </span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-400">
                      <span>C:{movie.contentScore}%</span>
                      <span>•</span>
                      <span>CF:{movie.collabScore}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[10px] leading-relaxed text-slate-400 italic">
            This live scoring model mirrors Bhumi's <strong className="text-slate-200">hybrid-reco-system</strong> architecture, balancing cold-start robustness with collaborative filtering.
          </p>
        </div>
      ) : (
        /* PipeEdge Distributed Pipeline Simulator */
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Num Stages */}
            <div className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-2.5">
              <div className="flex items-center justify-between text-xs font-medium text-slate-300">
                <span>Partition Stages:</span>
                <span className="font-mono text-emerald-400">{numStages} Devices</span>
              </div>
              <div className="mt-2 flex gap-1">
                {[2, 4, 8].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setNumStages(s)}
                    className={`flex-1 rounded py-1 font-mono text-xs transition-all ${
                      numStages === s
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {s}P
                  </button>
                ))}
              </div>
            </div>

            {/* Micro-batches */}
            <div className="rounded-lg border border-slate-700/60 bg-slate-800/40 p-2.5">
              <div className="flex items-center justify-between text-xs font-medium text-slate-300">
                <span>Micro-Batches:</span>
                <span className="font-mono text-emerald-400">{microBatches}</span>
              </div>
              <div className="mt-2 flex gap-1">
                {[4, 8, 16].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setMicroBatches(b)}
                    className={`flex-1 rounded py-1 font-mono text-xs transition-all ${
                      microBatches === b
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {b}B
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cluster Profile */}
          <div className="flex items-center justify-between rounded-lg border border-slate-700/60 bg-slate-800/40 p-2.5">
            <span className="text-xs text-slate-300">Edge Device Heterogeneity:</span>
            <div className="flex gap-1.5 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setHeterogeneity('balanced')}
                className={`rounded px-2 py-0.5 ${
                  heterogeneity === 'balanced'
                    ? 'bg-sky-500/20 text-sky-300 ring-1 ring-sky-500/50 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Homogeneous
              </button>
              <button
                type="button"
                onClick={() => setHeterogeneity('heterogeneous')}
                className={`rounded px-2 py-0.5 ${
                  heterogeneity === 'heterogeneous'
                    ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Heterogeneous Edge
              </button>
            </div>
          </div>

          {/* Visual Pipeline Stage Diagram */}
          <div className="space-y-1.5">
            <span className="font-mono text-[10px] uppercase text-slate-400">
              Pipeline Schedule & Micro-Batch Execution
            </span>
            <div className="grid grid-cols-4 gap-1.5 rounded-lg border border-slate-700/60 bg-slate-950/70 p-2.5">
              {Array.from({ length: numStages }).map((_, stageIdx) => (
                <div key={stageIdx} className="space-y-1 text-center">
                  <div className="font-mono text-[9px] text-slate-400">Device {stageIdx + 1}</div>
                  <div className="flex flex-col gap-1">
                    {Array.from({ length: 3 }).map((_, bIdx) => (
                      <div
                        key={bIdx}
                        className={`h-4 rounded text-[8px] font-mono font-medium flex items-center justify-center transition-all ${
                          (stageIdx + bIdx) % 2 === 0
                            ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40'
                            : 'bg-sky-500/30 text-sky-300 border border-sky-500/40'
                        }`}
                      >
                        Fwd_{bIdx + 1}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance KPIs */}
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-slate-700/50 bg-slate-800/60 p-2 text-center">
              <span className="block font-mono text-[9px] uppercase text-slate-400">Throughput</span>
              <span className="font-mono text-base font-bold text-emerald-400">
                {pipeMetrics.throughput} <span className="text-[9px] font-normal text-slate-400">tok/s</span>
              </span>
            </div>
            <div className="rounded-lg border border-slate-700/50 bg-slate-800/60 p-2 text-center">
              <span className="block font-mono text-[9px] uppercase text-slate-400">Bubble Time</span>
              <span className="font-mono text-base font-bold text-amber-400">
                {pipeMetrics.bubblePct}%
              </span>
            </div>
            <div className="rounded-lg border border-slate-700/50 bg-slate-800/60 p-2 text-center">
              <span className="block font-mono text-[9px] uppercase text-slate-400">Latency</span>
              <span className="font-mono text-base font-bold text-sky-400">
                {pipeMetrics.latencyMs} <span className="text-[9px] font-normal text-slate-400">ms</span>
              </span>
            </div>
          </div>

          <p className="text-[10px] leading-relaxed text-slate-400 italic">
            Simulates <strong className="text-slate-200">PipeEdge</strong>: Pipeline Parallelism for Large-Scale Model Inference on Heterogeneous Edge Devices.
          </p>
        </div>
      )}
    </div>
  );
};
