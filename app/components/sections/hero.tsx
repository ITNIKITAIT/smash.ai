'use client';

import { Button } from '@/app/components/ui/button';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Music } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Counter({
  value,
  prefix = '',
  suffix = '',
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { bounce: 0, duration: 2000 });
  const display = useTransform(
    spring,
    (current) => `${prefix}${Math.floor(current).toLocaleString()}${suffix}`,
  );
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    return display.on('change', (latest) => setDisplayValue(latest));
  }, [display]);

  return (
    <span ref={ref} className="tabular-nums tracking-tight">
      {displayValue}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Round Closes Feb 15, 2026
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 font-sans">
              You get paid to <span className="text-primary">listen</span>.
              <br />
              Paid to <span className="text-secondary">create</span>.
              <br />
              Paid to <span className="text-accent">share</span>.
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              The first blockchain-powered music streaming platform that pays
              fans royalties. Join the revolution in the $180B audio economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="glow" asChild>
                <a href="mailto:hello@sms.ai" className="group">
                  Invest in SMASH
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="#economics">View Pitch Deck</a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold font-mono text-foreground mb-1">
                  <Counter value={5000000} prefix="$" />
                </div>
                <div className="text-sm text-muted-foreground">
                  Target Raise
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold font-mono text-primary mb-1">
                  <Counter value={283} prefix="$" suffix="M" />
                </div>
                <div className="text-sm text-muted-foreground">
                  Proj. Revenue
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold font-mono text-accent mb-1">
                  <Counter value={10} prefix="" suffix="%" />
                </div>
                <div className="text-sm text-muted-foreground">Rev Share</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block">
            <div className="relative z-10 bg-card border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
              {/* Mock UI for Streaming App */}
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center">
                    <Music className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">Now Playing</div>
                    <div className="text-sm text-muted-foreground">
                      Future Nostalgia
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-accent uppercase tracking-widest font-bold">
                    Earnings
                  </div>
                  <div className="font-mono text-lg text-accent">+$0.0050</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: '0%' }}
                    animate={{ width: '45%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground font-mono">
                  <span>1:23</span>
                  <span>3:45</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-1">
                    Listening Time
                  </div>
                  <div className="text-xl font-bold font-mono">12h 45m</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-accent/20">
                  <div className="text-xs text-muted-foreground mb-1">
                    Total Earned
                  </div>
                  <div className="text-xl font-bold font-mono text-accent">
                    $45.20
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
