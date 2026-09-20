import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sparkles, Wind, Droplets, Compass, RotateCcw, Heart } from 'lucide-react';

type ZenMode = 'bubbles' | 'starlight' | 'petals' | 'ripples';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  alpha: number;
  popped?: boolean;
  label?: string;
  char?: string;
}

const ZEN_MODES: { id: ZenMode; name: string; icon: React.FC<{ className?: string }>; desc: string }[] = [
  { id: 'bubbles', name: 'Stress Bubbles', icon: Droplets, desc: 'Hover over bubbles to dissolve tension' },
  { id: 'starlight', name: 'Starlight Drift', icon: Sparkles, desc: 'Move your cursor to guide cosmic glow' },
  { id: 'petals', name: 'Zen Petals', icon: Wind, desc: 'Breeze petals away with gentle motion' },
  { id: 'ripples', name: 'Calm Ripples', icon: Compass, desc: 'Glide anywhere to cast tranquil water rings' },
];

const CALM_WORDS = [
  'Breathe', 'Clarity', 'Peace', 'Joy', 'Focus', 'Ease', 'Flow', 'Warmth', 'Light', 'Grace'
];

export const RelaxingPlayground: React.FC = () => {
  const [activeMode, setActiveMode] = useState<ZenMode>('bubbles');
  const [calmCount, setCalmCount] = useState<number>(0);
  const [lastAction, setLastAction] = useState<string>('Hover over any floating bubble to begin...');
  const [isBreatheIn, setIsBreatheIn] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; prevX: number; prevY: number }>({
    x: -999,
    y: -999,
    active: false,
    prevX: -999,
    prevY: -999,
  });
  const rippleListRef = useRef<{ x: number; y: number; radius: number; maxRadius: number; alpha: number; color: string }[]>([]);
  const animFrameIdRef = useRef<number>(0);

  // Breathe rhythm cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setIsBreatheIn((prev) => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Initialize particles based on selected mode
  const initParticles = useCallback((mode: ZenMode, width: number, height: number) => {
    const particles: Particle[] = [];
    if (width <= 0 || height <= 0) return;

    if (mode === 'bubbles') {
      const count = 18;
      for (let i = 0; i < count; i++) {
        particles.push({
          id: i,
          x: Math.random() * (width - 60) + 30,
          y: Math.random() * (height - 60) + 30,
          vx: (Math.random() - 0.5) * 0.7,
          vy: -0.3 - Math.random() * 0.5,
          size: 18 + Math.random() * 20,
          hue: 160 + Math.random() * 60, // Teal to cyan
          alpha: 0.6 + Math.random() * 0.35,
          popped: false,
          label: CALM_WORDS[i % CALM_WORDS.length],
        });
      }
    } else if (mode === 'starlight') {
      const count = 45;
      for (let i = 0; i < count; i++) {
        particles.push({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: 2 + Math.random() * 4,
          hue: Math.random() > 0.5 ? 42 : 175, // Warm brass or teal
          alpha: 0.3 + Math.random() * 0.7,
        });
      }
    } else if (mode === 'petals') {
      const count = 24;
      for (let i = 0; i < count; i++) {
        particles.push({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
          vx: 0.4 + Math.random() * 0.6,
          vy: 0.3 + Math.random() * 0.5,
          size: 8 + Math.random() * 8,
          hue: 340 + Math.random() * 30, // Soft pink / rose sakura
          alpha: 0.7 + Math.random() * 0.25,
          char: '🌸',
        });
      }
    } else if (mode === 'ripples') {
      const count = 12;
      for (let i = 0; i < count; i++) {
        particles.push({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: 6 + Math.random() * 8,
          hue: 180 + Math.random() * 40,
          alpha: 0.8,
        });
      }
    }

    particlesRef.current = particles;
  }, []);

  // Main canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initParticles(activeMode, rect.width, rect.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const width = rect.width;
      const height = rect.height;

      // Gentle trailing clear matching theme
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.22)' : 'rgba(244, 248, 251, 0.32)';
      ctx.fillRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      // Update & draw ripples
      const ripples = rippleListRef.current;
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 1.8;
        r.alpha *= 0.96;

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.color.replace('ALPHA', r.alpha.toFixed(3));
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        if (r.alpha < 0.02 || r.radius > r.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      // Update & draw particles
      particles.forEach((p) => {
        // Physics step
        p.x += p.vx;
        p.y += p.vy;

        // Wrap or bounce
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Mouse hover interaction
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (activeMode === 'bubbles') {
            // Hover pop interaction
            if (dist < p.size + 15 && !p.popped) {
              p.popped = true;
              p.alpha = 0;
              setCalmCount((c) => c + 1);
              setLastAction(`🫧 Dissolved stress bubble: "${p.label}"!`);

              // Spawn tiny sparkling burst
              ripples.push({
                x: p.x,
                y: p.y,
                radius: 4,
                maxRadius: 40,
                alpha: 0.9,
                color: 'rgba(78, 181, 159, ALPHA)',
              });

              // Respawn bubble after 2 seconds at the bottom
              setTimeout(() => {
                p.popped = false;
                p.x = Math.random() * (width - 40) + 20;
                p.y = height + 10;
                p.alpha = 0.7;
                p.vy = -0.4 - Math.random() * 0.4;
              }, 2200);
            }
          } else if (activeMode === 'starlight') {
            // Repel / swirl gently around cursor
            if (dist < 100) {
              const angle = Math.atan2(dy, dx);
              const force = (100 - dist) / 100;
              p.vx += Math.cos(angle) * force * 0.4;
              p.vy += Math.sin(angle) * force * 0.4;
              p.alpha = Math.min(1, p.alpha + 0.05);
            }
          } else if (activeMode === 'petals') {
            // Flutter away from cursor
            if (dist < 80) {
              const angle = Math.atan2(dy, dx);
              p.vx += Math.cos(angle) * 0.6;
              p.vy += Math.sin(angle) * 0.6;
            }
          } else if (activeMode === 'ripples') {
            if (dist < 50) {
              ripples.push({
                x: p.x,
                y: p.y,
                radius: 5,
                maxRadius: 35,
                alpha: 0.5,
                color: 'rgba(197, 158, 94, ALPHA)',
              });
            }
          }
        }

        // Apply friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Render Particle
        if (p.popped) return;

        ctx.save();
        if (activeMode === 'bubbles') {
          // Glassy glowing bubble with label
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(
            p.x - p.size * 0.3,
            p.y - p.size * 0.3,
            p.size * 0.1,
            p.x,
            p.y,
            p.size
          );
          grad.addColorStop(0, `hsla(${p.hue}, 80%, 75%, ${p.alpha * 0.8})`);
          grad.addColorStop(0.7, `hsla(${p.hue}, 60%, 45%, ${p.alpha * 0.2})`);
          grad.addColorStop(1, `hsla(${p.hue}, 90%, 65%, ${p.alpha * 0.9})`);
          ctx.fillStyle = grad;
          ctx.fill();

          ctx.strokeStyle = `hsla(${p.hue}, 90%, 80%, ${p.alpha * 0.7})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Bubble glint
          ctx.beginPath();
          ctx.arc(p.x - p.size * 0.35, p.y - p.size * 0.35, p.size * 0.22, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.65})`;
          ctx.fill();

          // Text label
          if (p.label) {
            ctx.font = '10px ui-monospace, SFMono-Regular, Menlo, monospace';
            const isDark = document.documentElement.classList.contains('dark');
            ctx.fillStyle = isDark ? `rgba(240, 244, 248, ${p.alpha * 0.95})` : `rgba(15, 23, 42, ${p.alpha * 0.95})`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(p.label, p.x, p.y);
          }
        } else if (activeMode === 'starlight') {
          // Luminous star with soft glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.hue === 42 ? `rgba(197, 158, 94, ${p.alpha})` : `rgba(78, 181, 159, ${p.alpha})`;
          ctx.shadowColor = p.hue === 42 ? 'rgba(197, 158, 94, 0.8)' : 'rgba(78, 181, 159, 0.8)';
          ctx.shadowBlur = 8;
          ctx.fill();
        } else if (activeMode === 'petals') {
          // Soft petal
          ctx.font = `${p.size * 1.5}px sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('🌸', p.x, p.y);
        } else if (activeMode === 'ripples') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(78, 181, 159, ${p.alpha * 0.7})`;
          ctx.fill();
        }
        ctx.restore();
      });

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [activeMode, initParticles]);

  // Mouse / touch interaction handlers
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const mouse = mouseRef.current;
    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;
    mouse.x = x;
    mouse.y = y;
    mouse.active = true;

    // In ripple mode, spawn ripples on cursor movement
    if (activeMode === 'ripples') {
      const dist = Math.hypot(x - mouse.prevX, y - mouse.prevY);
      if (dist > 15) {
        rippleListRef.current.push({
          x,
          y,
          radius: 3,
          maxRadius: 55,
          alpha: 0.75,
          color: 'rgba(78, 181, 159, ALPHA)',
        });
        setCalmCount((c) => c + 1);
        setLastAction('🌊 Casting calming water ripples');
      }
    } else if (activeMode === 'starlight') {
      const dist = Math.hypot(x - mouse.prevX, y - mouse.prevY);
      if (dist > 25) {
        setCalmCount((c) => c + 1);
      }
    }
  };

  const handlePointerLeave = () => {
    mouseRef.current.active = false;
    mouseRef.current.x = -999;
    mouseRef.current.y = -999;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Click / tap always spawns radiant ripple rings
    rippleListRef.current.push(
      { x, y, radius: 4, maxRadius: 50, alpha: 0.9, color: 'rgba(197, 158, 94, ALPHA)' },
      { x, y, radius: 10, maxRadius: 75, alpha: 0.7, color: 'rgba(78, 181, 159, ALPHA)' }
    );
    setCalmCount((c) => c + 3);
    setLastAction('✨ Triggered tranquil pulse');
  };

  const handleReset = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      initParticles(activeMode, rect.width, rect.height);
    }
    setLastAction('🌿 Refreshed playground canvas');
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-white/[0.1] bg-white/95 dark:bg-[#101726]/90 p-5 shadow-xl dark:shadow-2xl backdrop-blur-xl transition-colors">
      {/* Header bar: Title & relaxing badge */}
      <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/[0.08] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[var(--teal)] animate-pulse" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 font-semibold">
              Zen Garden &amp; Playground
            </h3>
          </div>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            A stress-free pause for guests · Simply hover &amp; enjoy
          </p>
        </div>

        {/* Breathing Guide Pill */}
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/[0.08] bg-slate-100/80 dark:bg-white/[0.03] px-3 py-1 text-[11px] font-mono text-slate-700 dark:text-slate-300">
          <div
            className={`h-2.5 w-2.5 rounded-full bg-[var(--brass)] transition-transform duration-1000 ${
              isBreatheIn ? 'scale-125 opacity-100' : 'scale-75 opacity-60'
            }`}
          />
          <span>{isBreatheIn ? 'Inhale peace...' : 'Exhale stress...'}</span>
        </div>
      </div>

      {/* Mode Selector Tabs (Non-technical, joyful) */}
      <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {ZEN_MODES.map((m) => {
          const Icon = m.icon;
          const isSelected = activeMode === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => {
                setActiveMode(m.id);
                setLastAction(`Switched to ${m.name} mode`);
                const rect = containerRef.current?.getBoundingClientRect();
                if (rect) initParticles(m.id, rect.width, rect.height);
              }}
              className={`flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-mono transition-all ${
                isSelected
                  ? 'border border-[var(--brass)] bg-[var(--brass)]/12 text-[var(--brass)] font-semibold shadow-xs'
                  : 'border border-slate-200 dark:border-white/[0.06] bg-slate-50/70 dark:bg-white/[0.02] text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{m.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Canvas Canvas Area */}
      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        className="relative mt-3.5 h-64 sm:h-72 w-full cursor-crosshair overflow-hidden rounded-xl border border-slate-200/80 dark:border-white/[0.08] bg-[#f8fafc] dark:bg-[#0c121e] select-none touch-none"
      >
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />

        {/* Ambient watermark prompt */}
        <div className="pointer-events-none absolute bottom-3 left-3 text-[11px] font-mono text-slate-700 dark:text-slate-400/90 bg-white/80 dark:bg-[#0c121e]/80 px-2.5 py-1 rounded-md border border-slate-200/80 dark:border-white/[0.06] shadow-xs">
          {lastAction}
        </div>

        {/* Floating Reset Button inside canvas */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-md border border-slate-300 dark:border-white/[0.1] bg-white/70 dark:bg-black/40 text-slate-600 dark:text-slate-400 backdrop-blur-sm transition hover:border-[var(--brass)] hover:text-slate-900 dark:hover:text-white"
          title="Sprinkle more particles"
        >
          <RotateCcw className="h-3 w-3" />
        </button>
      </div>

      {/* Footer / Stress Relief Stats */}
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 dark:border-white/[0.06] pt-3 font-mono text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <Heart className="h-3.5 w-3.5 text-rose-500" />
          <span>Stress Dissolved:</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">{calmCount} sparks</span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="text-[var(--teal)] font-bold">Tip:</span> Hover over bubbles or glide to feel the flow
        </div>
      </div>
    </div>
  );
};
