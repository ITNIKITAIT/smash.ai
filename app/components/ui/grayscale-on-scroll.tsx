'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

type GrayscaleOnScrollProps = {
  children: React.ReactNode;
  className?: string;
};

export function GrayscaleOnScroll({
  children,
  className = '',
}: GrayscaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.7 });

  return (
    <div ref={ref} className="w-full h-full">
      <div
        className={`w-full h-full transition-[filter] duration-1000 ${inView ? 'grayscale-0' : 'grayscale'} ${className}`}>
        {children}
      </div>
    </div>
  );
}
