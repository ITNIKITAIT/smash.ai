'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';

type PathData = {
  d: string;
  color: string;
  initial: {
    x: number;
    y: number;
    opacity: number;
    rotate: number;
    scale?: number;
  };
};

const paths: PathData[] = [
  // Center
  {
    d: 'M130.728 102.494C139.98 111.713 139.98 126.659 130.728 135.879L126.321 140.27L92.8152 106.885L97.2224 102.494C106.475 93.2741 121.475 93.2741 130.728 102.494Z',
    color: '#fff',
    initial: { x: 0, y: 0, opacity: 0, scale: 0, rotate: 0 },
  },
  // Top Right
  {
    d: 'M134.419 52.4854L131.248 55.6451L184.354 108.561L189.348 113.537L220.84 144.916C234.545 119.638 230.717 87.4238 209.285 66.0686C189.02 45.8755 159.059 41.4083 134.419 52.4854Z',
    color: 'var(--secondary)',
    initial: { x: 100, y: -100, opacity: 0, rotate: 45 },
  },
  // Bottom Right
  {
    d: 'M172.873 129.372L119.183 182.869L113.716 188.317L82.8438 219.078C108.212 232.734 140.543 228.884 161.938 207.565C182.277 187.3 186.723 157.301 175.424 132.677C174.622 131.623 173.711 130.498 172.836 129.408L172.873 129.372Z',
    color: 'var(--primary)',
    initial: { x: 100, y: 100, opacity: 0, rotate: -45 },
  },
  // Bottom Left
  {
    d: 'M95.5278 174.37L97.7148 172.336L41.6926 116.515L39.6515 114.481L7.83151 82.8114C-5.65463 108.016 -1.71813 140.049 19.6045 161.296C40.9272 182.542 70.7061 186.065 95.5278 174.37Z',
    color: 'var(--secondary)',
    initial: { x: -100, y: 100, opacity: 0, rotate: 45 },
  },
  // Top Left
  {
    d: 'M55.507 98.1379L109.524 44.3139L114.737 39.1204L145.901 8.06812C120.532 -5.66026 88.1289 -1.88314 66.6604 19.5084C45.192 40.9 41.5471 71.9523 54.3771 97.012L55.507 98.1379Z',
    color: 'var(--primary)',
    initial: { x: -100, y: -100, opacity: 0, rotate: -45 },
  },
];

export function AnimatedLogo({ className }: { className?: string }) {
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const sequence = async () => {
      while (isMounted) {
        // 1. Reset to initial state (hidden/exploded) instantly
        await controls.set((i) => paths[i].initial);

        // Short pause before assembling
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (!isMounted) break;

        // 2. Assemble
        await controls.start({
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          },
        });

        await new Promise((resolve) => setTimeout(resolve, 2500));
        if (!isMounted) break;

        await controls.start((i) => ({
          x: paths[i].initial.x * 1.5,
          y: paths[i].initial.y * 1.5,
          opacity: 0,
          scale: 0.5,
          rotate: paths[i].initial.rotate * 2,
          transition: {
            duration: 0.6,
            ease: 'easeInOut',
            delay: i * 0.05,
          },
        }));

        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    };

    sequence();

    return () => {
      isMounted = false;
    };
  }, [controls]);

  return (
    <div className={className}>
      <svg
        viewBox="0 0 229 228"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible">
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
            gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </linearGradient>
        </defs>
        {paths.map((path, i) => (
          <motion.path
            key={i}
            custom={i}
            d={path.d}
            fill="url(#logo-gradient)"
            animate={controls}
          />
        ))}
      </svg>
    </div>
  );
}
