"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  const formatted = count.toLocaleString();
  return <span ref={ref}>{formatted}{suffix}</span>;
}

interface StatsDisplayProps {
  stats: {
    coreTeam: { value: string; label: string };
    community: { value: string; label: string };
    reach: { value: string; label: string };
  };
}

const rings = [
  { size: 92, speed: 45, reverse: false, key: 'reach' as const, numSize: 'text-base md:text-lg', color: 'text-primary', labelColor: 'text-primary/70' },
  { size: 66, speed: 30, reverse: true, key: 'community' as const, numSize: 'text-sm md:text-base', color: 'text-primary', labelColor: 'text-primary/70' },
  { size: 40, speed: 20, reverse: false, key: 'coreTeam' as const, numSize: 'text-xs md:text-sm', color: 'text-tertiary', labelColor: 'text-tertiary/70' },
];

export function HeroStats({ stats }: StatsDisplayProps) {
  const [hoveredRing, setHoveredRing] = useState<number | null>(null);

  return (
    <div className="relative w-full aspect-square max-w-[360px] mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        {rings.map((ring, i) => {
          const paused = hoveredRing === i;
          const value = stats[ring.key].value;
          const end = Number(value.replace(/[^\d]/g, ''));
          const suffix = value.replace(/[\d,]/g, '');

          return (
            <div key={i} className="absolute" style={{ width: `${ring.size}%`, height: `${ring.size}%` }}>
              {/* Orbit track */}
              <div
                className={`absolute inset-0 rounded-full border ${i === 0 ? 'border-primary/10' : i === 1 ? 'border-dashed border-primary/[0.08]' : 'border-tertiary/[0.08]'
                  }`}
              />

              {/* Rotating wrapper — uses play-state to pause in place */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  animation: `spin ${ring.speed}s linear infinite${ring.reverse ? ' reverse' : ''}`,
                  animationPlayState: paused ? 'paused' : 'running',
                }}
              >
                {/* Number positioned at top of ring */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 -top-3 z-20 cursor-pointer"
                  onMouseEnter={() => setHoveredRing(i)}
                  onMouseLeave={() => setHoveredRing(null)}
                >
                  {/* Counter-rotate to keep text upright */}
                  <div
                    style={{
                      animation: `spin ${ring.speed}s linear infinite${ring.reverse ? '' : ' reverse'}`,
                      animationPlayState: paused ? 'paused' : 'running',
                    }}
                  >
                    <div className={`flex flex-col items-center select-none transition-transform duration-200 ${paused ? 'scale-125' : ''}`}>
                      {/* Number */}
                      <span
                        className={`${ring.numSize} ${ring.color} font-extrabold font-headline leading-none tracking-tight`}
                      >
                        <AnimatedCounter end={end} suffix={suffix} />
                      </span>
                      {/* Label */}
                      <span
                        className={`${ring.labelColor} text-[10px] md:text-[11px] font-medium whitespace-nowrap mt-0.5`}
                      >
                        {stats[ring.key].label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center shield */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center shadow-lg shadow-primary/20">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
