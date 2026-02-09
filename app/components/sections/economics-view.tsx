'use client';

import { motion } from 'framer-motion';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { TOKEN_DETAILS } from '@/app/lib/constants';
import Link from 'next/link';

import { EconomicsAccordion } from './economics-accordion';
import { Container } from '../ui/container';

export default function EconomicsView() {
  return (
    <div className="flex flex-col md:gap-24 gap-12 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-primary/5 pt-32">
        <Container className="relative ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              The <span className="text-brand-cyan">Future</span> of <br />
              Streaming Economics
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              SMASH AI pays you to listen, create, and share. We're rebuilding
              the $180B streaming economy to benefit everyone, not just the
              platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="bg-primary hover:bg-primary/90 text-white"
                asChild>
                <a href="mailto:hello@sms.ai" className="group">
                  Invest in SMASH
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Accordion Features Section */}
      <EconomicsAccordion />

      {/* Token Sale */}
      <section className="mb-20">
        <Container className="relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  {TOKEN_DETAILS.name}
                </span>{' '}
                <br />
                Token Sale
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the ownership economy. SMASH COIN powers the entire
                ecosystem, from ad payments to merchandise and governance.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Target Raise
                  </div>
                  <div className="text-3xl font-mono font-bold text-orange-500">
                    ${TOKEN_DETAILS.raise}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Min Investment
                  </div>
                  <div className="text-3xl font-mono font-bold text-orange-500">
                    ${TOKEN_DETAILS.minInvestment}
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-cyan to-brand-purple text-white border-none shadow-lg shadow-brand-cyan/20 w-full md:w-auto">
                <Link
                  href="mailto:hello@sms.ai"
                  className="w-full flex items-center justify-center">
                  Join the Round <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className=" overflow-hidden rounded-2xl">
              <video
                src="/videos/coin.mp4"
                autoPlay
                muted
                loop
                className="size-full object-cover scale-105"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
