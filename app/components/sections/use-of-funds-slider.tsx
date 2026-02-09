'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/app/lib/utils';
import { Container } from '@/app/components/ui/container';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const funds = [
  {
    label: 'PR, Marketing & Branding',
    amount: '$1.8M',
    percent: 36,
    color: 'bg-primary',
    desc: 'Aggressive global rollout, influencer partnerships, and brand establishment to capture market share rapidly.',
    videoUrl: '/videos/growth.mp4',
  },
  {
    label: 'Operations & Engineering',
    amount: '$1.4M',
    percent: 28,
    color: 'bg-secondary',
    desc: 'Core platform development, blockchain integration, and scaling infrastructure to support millions of concurrent users.',
    imageUrl: '/images/proccesing.jpg',
  },
  {
    label: 'Legal & Licensing',
    amount: '$0.9M',
    percent: 18,
    color: 'bg-slate-400',
    desc: 'Securing global music rights, regulatory compliance, and international expansion licenses.',
    videoUrl: '/videos/legal.mp4',
  },
  {
    label: 'Partnerships',
    amount: '$0.6M',
    percent: 12,
    color: 'bg-slate-500',
    desc: 'Strategic alliances with major labels, artists, and distribution channels to ensure content depth.',
    imageUrl: '/images/1.png',
  },
  {
    label: 'Security',
    amount: '$0.3M',
    percent: 6,
    color: 'bg-slate-600',
    desc: 'Smart contract audits, data protection, and enterprise-grade security measures for user assets.',
    videoUrl: '/videos/security.mp4',
  },
];

export function UseOfFundsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleNext = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % funds.length);
      setIsSpinning(false);
    }, 800);
  };

  const handlePrev = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + funds.length) % funds.length);
      setIsSpinning(false);
    }, 800);
  };

  const currentFund = funds[activeIndex];

  return (
    <section className="md:py-20 py-12 relative overflow-hidden">
      <Container>
        <div className="relative">
          {/* Spinner Overlay */}
          <AnimatePresence>
            {isSpinning && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute z-30 inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-32 h-32 md:w-48 md:h-48 bg-background/90 rounded-full flex items-center justify-center shadow-2xl border border-primary/20 backdrop-blur-md">
                  <motion.img
                    src="/icons/logo.svg"
                    alt="Loading"
                    className="w-16 h-16 md:w-24 md:h-24"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: 'linear',
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Card */}
          <div className="bg-card border border-gray-300 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative h-[500px] flex flex-col justify-center shadow-lg">
            <AnimatePresence mode="wait">
              {!isSpinning && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div className="space-y-8">
                    <div className="inline-flex items-baseline gap-4">
                      <span className="text-7xl md:text-9xl font-bold text-primary font-mono tracking-tighter">
                        {currentFund.percent}
                        <span className="text-4xl md:text-6xl text-muted-foreground">
                          %
                        </span>
                      </span>
                      <div className="text-2xl md:text-3xl font-mono font-bold text-foreground/80 bg-muted px-4 py-2 rounded-lg">
                        {currentFund.amount}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                        {currentFund.label}
                      </h3>
                      <p className="text-xl text-muted-foreground leading-relaxed">
                        {currentFund.desc}
                      </p>
                    </div>

                    {/* Progress Bar Visual */}
                    <div className="h-4 w-full bg-muted rounded-full overflow-hidden mt-8">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentFund.percent}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={cn('h-full rounded-full', currentFund.color)}
                      />
                    </div>
                  </div>

                  <div className="relative hidden md:flex items-center justify-center h-[400px] rounded-2xl overflow-hidden">
                    {/* Decorative Elements */}
                    {currentFund.imageUrl ? (
                      <img
                        src={currentFund.imageUrl}
                        alt={currentFund.label}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={currentFund.videoUrl}
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-4 right-4 flex gap-4 z-20 block md:hidden">
              <button
                onClick={handlePrev}
                className="w-14 h-14 rounded-full border-2 border-primary/20 bg-background hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Previous">
                <span className="text-2xl pb-1">←</span>
              </button>
              <button
                onClick={handleNext}
                className="w-14 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center transition-all hover:scale-105 shadow-lg shadow-primary/25"
                aria-label="Next">
                <span className="text-2xl pb-1">→</span>
              </button>
            </div>

            <button
              onClick={handlePrev}
              className="w-14 h-14 absolute top-1/2 -left-20 -translate-y-1/2 rounded-full border-2 border-primary bg-background text-primary flex items-center justify-center transition-all hover:scale-105 shadow-lg shadow-primary/25 cursor-pointer"
              aria-label="Previous">
              <ChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 absolute top-1/2 -right-20 -translate-y-1/2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center transition-all hover:scale-105 shadow-lg shadow-primary/25 cursor-pointer"
              aria-label="Next">
              <ChevronRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
