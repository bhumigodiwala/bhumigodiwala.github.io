import React, { useState } from 'react';
import { Smartphone, Cpu, Server, Zap, ShieldCheck, Layers } from 'lucide-react';

interface DeviceStage {
  id: string;
  name: string;
  type: string;
  icon: React.FC<{ className?: string }>;
  layers: string;
  latencyMs: number;
  memoryMB: number;
  color: string;
  badge: string;
}

export const EdgeParallelismVisualizer: React.FC = () => {
  const [pipelineProfile, setPipelineProfile] = useState<'balanced' | 'lowPower' | 'highThroughput'>('balanced');
  const [activeStage, setActiveStage] = useState<number>(0);

  const configs = {
    balanced: {
      totalLatency: '42 ms',
      throughput: '23.8 fps',
      memoryTotal: '380 MB',
      speedup: '3.2x',
      stages: [
        {
          id: 'phone',
          name: 'Edge Phone',
          type: 'Mobile CPU/NPU',
          icon: Smartphone,
          layers: 'Encoders 1–4',
          latencyMs: 14,
          memoryMB: 120,
          color: 'var(--teal)',
          badge: 'Input & Early Layers',
        },
        {
          id: 'tpu',
          name: 'Micro-TPU',
          type: 'Coral Edge ASIC',
          icon: Cpu,
          layers: 'Attention Blocks 5–10',
          latencyMs: 12,
          memoryMB: 150,
          color: 'var(--brass)',
          badge: 'Heavy Matrix Multiplies',
        },
        {
          id: 'gateway',
          name: 'Local Gateway',
          type: 'Edge Server',
          icon: Server,
          layers: 'Blocks 11–12 + Head',
          latencyMs: 16,
          memoryMB: 110,
          color: '#38bdf8',
          badge: 'Classification & Logits',
        },
      ],
    },
    lowPower: {
      totalLatency: '68 ms',
      throughput: '14.7 fps',
      memoryTotal: '240 MB',
      speedup: '2.1x',
      stages: [
        {
          id: 'phone',
          name: 'Edge Phone',
          type: 'Low-Watt Mobile',
          icon: Smartphone,
          layers: 'Input Tokenizer',
          latencyMs: 18,
          memoryMB: 60,
          color: 'var(--teal)',
          badge: 'Minimum Thermal Draw',
        },
        {
          id: 'tpu',
          name: 'Micro-TPU',
          type: 'Edge Accelerator',
          icon: Cpu,
          layers: 'Sparse Layers 1–8',
          latencyMs: 24,
          memoryMB: 100,
          color: 'var(--brass)',
          badge: 'High Energy Efficiency',
        },
        {
          id: 'gateway',
          name: 'Local Gateway',
          type: 'Edge Node',
          icon: Server,
          layers: 'Output Projections',
          latencyMs: 26,
          memoryMB: 80,
          color: '#38bdf8',
          badge: 'Shared Infrastructure',
        },
      ],
    },
    highThroughput: {
      totalLatency: '28 ms',
      throughput: '35.7 fps',
      memoryTotal: '490 MB',
      speedup: '4.4x',
      stages: [
        {
          id: 'phone',
          name: 'Edge Phone',
          type: 'Snapdragon NPU',
          icon: Smartphone,
          layers: 'Vision & Speech Stem',
          latencyMs: 9,
          memoryMB: 160,
          color: 'var(--teal)',
          badge: 'Pipelined Ingest',
        },
        {
          id: 'tpu',
          name: 'Dual TPU',
          type: 'Parallel Co-Processor',
          icon: Cpu,
          layers: 'Transformer Blocks 1–10',
          latencyMs: 10,
          memoryMB: 210,
          color: 'var(--brass)',
          badge: 'Full Matrix Concurrency',
        },
        {
          id: 'gateway',
          name: 'Local Gateway',
          type: 'RTX Edge Node',
          icon: Server,
          layers: 'Cross-Attention & Decoding',
          latencyMs: 9,
          memoryMB: 120,
          color: '#38bdf8',
          badge: 'Ultra-low Stride',
        },
      ],
    },
  };

  const current = configs[pipelineProfile];

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/80 dark:bg-[#111827]/80 p-3.5 sm:p-4 backdrop-blur-xl transition-colors">
      {/* Header with Title and Profile Switcher */}
      <div className="flex flex-col gap-2.5 border-b border-slate-200 dark:border-white/[0.08] pb-3">
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5 font-semibold">
            <Layers className="h-3.5 w-3.5 text-[var(--brass)] shrink-0" />
            <span>PipeEdge: Heterogeneous Edge Parallelism</span>
          </h4>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
            Distributed inference partitioned across phone, TPU &amp; gateway
          </p>
        </div>

        {/* Profile Selector Tabs */}
        <div className="grid grid-cols-3 gap-1 rounded-lg bg-white/80 dark:bg-[#0c121e] p-1 border border-slate-200 dark:border-white/[0.08]">
          {[
            { id: 'balanced', label: 'Balanced' },
            { id: 'lowPower', label: 'Low-Power' },
            { id: 'highThroughput', label: 'Throughput' },
          ].map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setPipelineProfile(mode.id as any)}
              className={`rounded px-1.5 py-1 text-center font-mono text-[10.5px] sm:text-[11px] transition font-medium ${
                pipelineProfile === mode.id
                  ? 'bg-[var(--brass)] text-white font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
              title={mode.label}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3 Pipeline Stages Flow - Stacked for full legibility and zero truncation */}
      <div className="mt-3.5 space-y-2">
        {current.stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = activeStage === idx;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`w-full rounded-lg p-2.5 text-left transition border ${
                isSelected
                  ? 'border-[var(--brass)] bg-white dark:bg-[#0c121e] ring-1 ring-[var(--brass)]/30 shadow-xs'
                  : 'border-slate-200 dark:border-white/[0.06] bg-white/60 dark:bg-[#0c121e]/60 hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="h-6 w-6 rounded-md bg-amber-500/10 dark:bg-amber-400/10 flex items-center justify-center shrink-0">
                    <Icon className="h-3.5 w-3.5 text-[var(--brass)]" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100">
                      Stage {idx + 1}: {stage.name}
                    </span>
                    <span className="ml-1.5 font-mono text-[10px] text-slate-500 dark:text-slate-400">
                      ({stage.type})
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[10.5px] text-[var(--teal)] font-semibold bg-teal-500/10 dark:bg-teal-400/10 px-2 py-0.5 rounded shrink-0">
                  {stage.latencyMs} ms
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-between gap-y-1 text-[10.5px] font-mono border-t border-slate-200 dark:border-white/[0.06] pt-1.5 text-slate-600 dark:text-slate-400">
                <span className="font-medium text-slate-700 dark:text-slate-300">{stage.layers}</span>
                <span>{stage.badge} · {stage.memoryMB} MB</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Performance Summary Grid */}
      <div className="mt-3.5 grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#0c121e] p-2 sm:p-2.5 text-center shadow-xs">
          <span className="font-mono text-[10px] uppercase text-slate-500 dark:text-slate-400 font-medium flex items-center justify-center gap-1">
            <Zap className="h-3 w-3 text-[var(--brass)] shrink-0" /> Latency
          </span>
          <p className="mt-1 font-display text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">{current.totalLatency}</p>
        </div>

        <div className="rounded-lg border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#0c121e] p-2 sm:p-2.5 text-center shadow-xs">
          <span className="font-mono text-[10px] uppercase text-slate-500 dark:text-slate-400 font-medium flex items-center justify-center gap-1">
            <ShieldCheck className="h-3 w-3 text-[var(--teal)] shrink-0" /> Speedup
          </span>
          <p className="mt-1 font-display text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">{current.speedup}</p>
        </div>

        <div className="rounded-lg border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#0c121e] p-2 sm:p-2.5 text-center shadow-xs">
          <span className="font-mono text-[10px] uppercase text-slate-500 dark:text-slate-400 font-medium flex items-center justify-center gap-1">
            <Cpu className="h-3 w-3 text-sky-500 shrink-0" /> Throughput
          </span>
          <p className="mt-1 font-display text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">{current.throughput}</p>
        </div>
      </div>

      {/* Active Selection Info */}
      <div className="mt-2.5 rounded-md bg-white/70 dark:bg-white/[0.02] p-2.5 border border-slate-200/60 dark:border-white/[0.04]">
        <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
          <span className="font-mono text-[var(--brass)] font-semibold">Active Selection: </span>
          {current.stages[activeStage].name} handles {current.stages[activeStage].layers} in {current.stages[activeStage].latencyMs}ms with zero thermal throttle.
        </p>
      </div>
    </div>
  );
};
