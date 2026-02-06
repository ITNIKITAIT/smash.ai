'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/container';
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  Target,
} from 'lucide-react';
import { cn } from '@/app/lib/utils';

const timeline = [
  {
    period: 'Q2 2026',
    title: 'Platform Launch',
    users: '35K',
    revenue: '$5.25M',
    focus: 'Initial Release',
    icon: Target,
    description:
      'Official launch of SMASH platform with core streaming features and initial artist partnerships.',
  },
  {
    period: 'Q3 2026',
    title: 'Growth Phase',
    users: '350K',
    revenue: '$52.5M',
    focus: 'Viral Referral Program',
    icon: TrendingUp,
    description:
      'Aggressive marketing campaigns and activation of the viral 2% referral royalty system.',
  },
  {
    period: 'Q4 2026',
    title: 'Expansion',
    users: '725K',
    revenue: '$108M',
    focus: 'Global Markets',
    icon: Users,
    description:
      'Expanding into new international territories and scaling infrastructure for global traffic.',
  },
  {
    period: 'Q1 2027',
    title: 'Scale',
    users: '1.1M',
    revenue: '$165M',
    focus: 'Major Label Integration',
    icon: DollarSign,
    description:
      'Full integration with major record labels and introduction of advanced monetization features.',
  },
];

export function Roadmap() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % timeline.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + timeline.length) % timeline.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="roadmap"
      className="py-24 bg-background border-t border-border overflow-hidden">
      <Container>
        <div>
          {/* Main Slider Display */}
          <div className="overflow-hidden relative min-h-[400px]">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.7 }}>
              {timeline.map((item, i) => (
                <div key={i} className="min-w-full px-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                    {/* Left: Content */}
                    <div className="space-y-6 text-left">
                      <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                        <span>{item.period}</span>
                        <span>•</span>
                        <span>{item.focus}</span>
                      </div>

                      <h3 className="text-4xl font-bold">{item.title}</h3>
                      <p className="text-lg text-muted-foreground">
                        {item.description}
                      </p>

                      <div className="grid grid-cols-2 gap-6 pt-4">
                        <div className="bg-muted/50 p-4 rounded-xl border border-border">
                          <div className="text-sm text-muted-foreground mb-1">
                            Active Users
                          </div>
                          <div className="text-2xl font-mono font-bold text-foreground">
                            {item.users}
                          </div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-xl border border-border">
                          <div className="text-sm text-muted-foreground mb-1">
                            Proj. Revenue
                          </div>
                          <div className="text-2xl font-mono font-bold text-primary">
                            {item.revenue}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Visual/Icon */}
                    <div className="flex justify-center items-center h-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border/50 p-12 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <item.icon className="w-32 h-32 text-primary/80 relative z-10 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500" />

                      {/* Decorative Elements */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl -z-1" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-12 px-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              aria-label="Previous slide">
              <ArrowLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-3">
              {timeline.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={cn(
                    'w-3 h-3 rounded-full transition-all duration-300',
                    i === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50',
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              aria-label="Next slide">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Valuation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl overflow-hidden grid md:grid-cols-3 gap-8 items-cente">
          <div className="text-left relative z-10 p-5 bg-gray-400/10 rounded-xl h-fit">
            <h3 className="text-2xl font-bold mb-4">
              Year One Valuation Target
            </h3>
            <div className="text-5xl md:text-7xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mb-4">
              $1.4B+
            </div>
            <p className="text-muted-foreground text-lg max-w-xl">
              Based on $283.45M projected year-one revenue (5x multiple)
            </p>
          </div>

          <div className="relative col-span-2 aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/50">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none">
              <source src="/videos/line.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
