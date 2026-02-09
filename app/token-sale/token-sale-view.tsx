'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/container';
import { Button } from '@/app/components/ui/button';
import { ShieldCheck, ArrowRight, Vote, Gem, CheckCheck } from 'lucide-react';

import { UseOfFundsSlider } from '@/app/components/sections/use-of-funds-slider';

export default function TokenSaleView() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const benefits = [
    {
      icon: Vote,
      title: 'Governance Rights',
      desc: 'Vote on key platform decisions and roadmap priorities.',
    },
    {
      icon: ShieldCheck,
      title: 'Advisory Council',
      desc: 'Strategic input via the exclusive Investor Advisory Seat.',
    },
    {
      icon: Gem,
      title: 'Staking Rewards',
      desc: 'Earn passive yield from platform transaction fees.',
    },
  ];

  return (
    <div className="min-h-screen pb-16 overflow-hidden relative">
      <section className="bg-primary/5 pt-28 pb-12 md:pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-white text-primary text-sm font-mono font-bold tracking-wider">
                ROUND CLOSES FEB 15, 2026
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight">
              SMASH <span className="text-primary">TOKEN SALE</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Participate in the first streaming economy that pays everyone.
              Secure your allocation in the future of music.
            </motion.p>
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
        </Container>
      </section>

      <UseOfFundsSlider />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24">
          {/* Token Benefits */}
          <motion.div
            variants={itemVariants}
            className="space-y-12 w-full mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="p-8 rounded-[2rem] border border-gray-300 bg-card shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <benefit.icon className="w-24 h-24 text-primary" />
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 p-4 rounded-2xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-white transition-colors">
                      <CheckCheck className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-7 gap-6 items-start">
              <div className="p-10 md:p-12 col-span-4 rounded-3xl bg-muted/30 border border-gray-300">
                <div className="flex flex-col gap-10">
                  <div>
                    <h3 className="font-bold text-2xl md:text-3xl mb-2">
                      Investment Terms
                    </h3>
                    <p className="text-muted-foreground text-base max-w-md">
                      Structured for serious partners. Legal docs prepared, wire
                      ready.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                    <div>
                      <span className="block text-muted-foreground text-sm font-medium mb-2">
                        Instrument
                      </span>
                      <span className="font-mono font-bold text-lg md:text-xl text-foreground">
                        SAFT / Token Warrant
                      </span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground text-sm font-medium mb-2">
                        Vesting
                      </span>
                      <span className="font-mono font-bold text-lg md:text-xl text-foreground">
                        12 mo cliff, 24 mo linear
                      </span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground text-sm font-medium mb-2">
                        Minimum
                      </span>
                      <span className="font-mono font-bold text-lg md:text-xl text-primary">
                        $100K
                      </span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground text-sm font-medium mb-2">
                        Round close
                      </span>
                      <span className="font-mono font-bold text-lg md:text-xl text-foreground">
                        Feb 15, 2026
                      </span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="block text-muted-foreground text-sm font-medium mb-2">
                        Token allocation
                      </span>
                      <span className="font-mono font-bold text-lg md:text-xl text-foreground">
                        15–20% of token supply · $5M raise
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <video
                src="/videos/piano.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover col-span-3 rounded-3xl border border-gray-300 hidden md:block"
              />
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="rounded-[2.5rem] bg-foreground text-background p-8 md:p-16 text-center overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/10 opacity-20" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to reshape the music industry?
              </h2>
              <p className="text-background/70 max-w-xl mx-auto text-lg">
                Secure your position in the $180B streaming economy before the
                round closes.
              </p>
              <Button
                size="lg"
                variant="glow"
                className="px-10 py-6 text-lg rounded-full font-bold cursor-pointer">
                Contact Us
              </Button>
              <p className="text-sm opacity-50 pt-4">
                For accredited investors only. Min check size $100k.
              </p>
            </div>

            <img
              src="/images/token-bg.jpg"
              alt="Token Sale"
              className="w-full h-full object-cover absolute top-0 left-0 opacity-20"
            />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
