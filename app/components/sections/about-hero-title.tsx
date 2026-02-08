'use client';

import { TypingSuffix } from '@/app/components/ui/typing-suffix';

export function AboutHeroTitle() {
  return (
    <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 flex flex-wrap items-baseline justify-center gap-0">
      <span className="text-foreground mr-3 sm:mr-5">About</span>
      <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
        SMASH
      </span>
      <TypingSuffix />
    </h1>
  );
}
