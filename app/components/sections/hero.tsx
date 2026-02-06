'use client';

import { Button } from '@/app/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatedLogo } from '@/app/components/ui/animated-logo';

const WORDS = [
  { text: 'listen', color: 'text-primary' },
  { text: 'create', color: 'text-secondary' },
  { text: 'share', color: 'text-accent' },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] invert opacity-10" />

      {/* Animated logo behind content — low opacity, background only */}
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none z- max-w-[1600px] mx-auto">
        <div className="w-[min(90vmin,600px)] h-[min(90vmin,600px)] opacity-[0.18]">
          <AnimatedLogo className="w-full h-full" />
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 font-sans">
            You get paid to{' '}
            <span className="relative text-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  className={`absolute left-1/2 -translate-x-1/2 font-bold ${WORDS[index].color}`}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}>
                  {WORDS[index].text}.
                </motion.span>
              </AnimatePresence>
              <span className="invisible">placeholder</span>
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            The first blockchain-powered music streaming platform that pays fans
            royalties. Join the revolution in the $180B audio economy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-primary hover:bg-primary/90 text-white"
              asChild>
              <a href="mailto:hello@sms.ai" className="group">
                Invest in SMASH
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <a href="#economics">View Pitch Deck</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
