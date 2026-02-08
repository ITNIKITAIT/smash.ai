'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Container } from '@/app/components/ui/container';
import { AnimatedLogo } from '@/app/components/ui/animated-logo';
import { GrayscaleOnScroll } from '@/app/components/ui/grayscale-on-scroll';
import { AboutHeroTitle } from '@/app/components/sections/about-hero-title';
import { MARKET_STATS } from '@/app/lib/constants';

const sections = [
  {
    title: 'Our Mission',
    content: (
      <>
        <p className="text-xl font-medium text-foreground mb-4">
          You get paid to listen, paid to create, and paid to share.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          SMASH AI STREAMING is designed to pay users and creators in a way
          mainstream streaming platforms do not. We pay listeners 3% of gross
          programmatic advertising revenue, and an additional 2% of gross
          revenue for direct referrals.
        </p>
      </>
    ),
    imageSrc: '/images/about-5.png',
  },
  {
    title: 'The Problem',
    content: (
      <>
        <p className="text-xl font-medium text-foreground mb-4">
          A $180B opportunity leaving fans behind.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Today, consumers who fuel streaming demand receive $0 in value share.
          Artists often receive fractions of a penny per stream (
          {MARKET_STATS.artistPayout} vs typical $0.003). We're changing the
          equation.
        </p>
      </>
    ),
    imageSrc: '/images/about-3.png',
  },
  {
    title: 'Blockchain Powered',
    content: (
      <>
        <p className="text-xl font-medium text-foreground mb-4">
          Transparent, instant, verifiable.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          For the first time, fans can be paid Fan Royalties tied to engagement
          with the music they love. Our smart contracts ensure transparent
          accounting and timely payouts for everyone involved.
        </p>
      </>
    ),
    videoSrc: '/videos/bg.mp4',
  },
  {
    title: 'Global Growth',
    content: (
      <>
        <p className="text-xl font-medium text-foreground mb-4">
          Viral by design.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          With a built-in 2% referral royalty, our community grows because it
          pays to share. From global markets to local communities, music becomes
          a wellness and wealth-building tool for everyone.
        </p>
      </>
    ),
    imageSrc: '/images/1.png',
  },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <AboutHeroTitle />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We&apos;re building the first wealth-sharing audio network. A
              music economy built for the people.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Sticky Scroll Section */}
      <section ref={containerRef} className="relative bg-background">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 py-10 md:py-20">
            {/* Left Column: Sticky Logo */}
            <div className="hidden lg:block w-1/3 relative">
              <motion.div
                className="w-[300px] h-[300px] relative sticky top-32 flex items-center justify-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <div className="relative z-10 w-full h-full">
                  <AnimatedLogo
                    className="w-full h-full"
                    scrollProgress={scrollYProgress}
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column: Scrollable Content */}
            <div className="w-full lg:w-2/3 px-4 flex flex-col gap-12">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20%' }}
                  transition={{ duration: 0.6 }}
                  className="relative">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                      {section.title}
                    </h2>
                    {section.content}
                  </div>

                  <div className="rounded-2xl w-full h-[250px] md:h-[400px] bg-gray-500 overflow-hidden border border-border bg-muted/20">
                    <GrayscaleOnScroll>
                      {section.imageSrc ? (
                        <img
                          src={section.imageSrc}
                          alt={section.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video
                          src={section.videoSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      )}
                    </GrayscaleOnScroll>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
