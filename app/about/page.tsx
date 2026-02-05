'use client';

import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import {
  Music,
  TrendingUp,
  Users,
  Share2,
  Globe,
  ShieldCheck,
  Zap,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              Our Mission
            </span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            A Music Economy Built <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              For The People
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're dismantling the industry status quo. SMASH is the first
            platform where you get paid to listen, paid to create, and paid to
            share.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-bold"
              asChild>
              <Link href="mailto:hello@sms.ai">Invest in the Future</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* The Problem & Solution Grid */}
      <section className="container mx-auto px-4 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Broken Model</h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="bg-red-500/20 p-3 rounded-lg h-fit">
                  <TrendingUp className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fans Get $0</h3>
                  <p className="text-muted-foreground">
                    The global streaming economy is worth $180B. Listeners fuel
                    this demand but receive zero value share for their
                    engagement.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="bg-red-500/20 p-3 rounded-lg h-fit">
                  <Users className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Artists Earn Pennies
                  </h3>
                  <p className="text-muted-foreground">
                    Creators often receive fractions of a penny per stream
                    ($0.0030 - $0.0062), making it impossible for most to
                    survive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              The SMASH Solution
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-xl bg-primary/10 border border-primary/20">
                <div className="bg-primary/20 p-3 rounded-lg h-fit">
                  <Music className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Blockchain Powered Royalties
                  </h3>
                  <p className="text-muted-foreground">
                    We pay listeners 3% of gross ad revenue and an additional 2%
                    for referrals. Direct, transparent, and on-chain.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                <div className="bg-secondary/20 p-3 rounded-lg h-fit">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Global Accessibility
                  </h3>
                  <p className="text-muted-foreground">
                    Fair payouts for artists ($0.10/stream target) and earnings
                    for users in every corner of the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Features */}
      <section className="bg-white/5 py-24 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Innovation at the Core
            </h2>
            <p className="text-lg text-muted-foreground">
              SMASH combines blockchain transparency with AI intelligence to
              create a superior streaming experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-background border-white/10 hover:border-primary/50 transition-colors">
              <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Engagement</h3>
              <p className="text-muted-foreground">
                Blockchain technology verifies every stream and interaction,
                ensuring fair payouts and eliminating bot fraud.
              </p>
            </Card>

            <Card className="p-8 bg-background border-white/10 hover:border-secondary/50 transition-colors">
              <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Discovery Mode</h3>
              <p className="text-muted-foreground">
                Our AI learns your listening habits to match you with new music
                and artists, accelerating discovery for emerging talent.
              </p>
            </Card>

            <Card className="p-8 bg-background border-white/10 hover:border-accent/50 transition-colors">
              <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Share2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Viral Growth Engine</h3>
              <p className="text-muted-foreground">
                The 2% referral royalty incentivizes users to share SMASH,
                creating a self-sustaining viral growth loop.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats / Impact */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
            <div className="text-4xl font-mono font-bold text-primary mb-2">
              3%
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Fan Royalties
            </div>
          </div>
          <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
            <div className="text-4xl font-mono font-bold text-secondary mb-2">
              2%
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Referral Bonus
            </div>
          </div>
          <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
            <div className="text-4xl font-mono font-bold text-accent mb-2">
              10%
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Revenue Share
            </div>
          </div>
          <div className="text-center p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
            <div className="text-4xl font-mono font-bold text-white mb-2">
              $1.4B+
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Proj. Valuation
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Growth Trajectory</h2>
          <p className="text-muted-foreground">
            Our path to 1M+ users and $280M+ revenue
          </p>
        </div>
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {/* Q2 2026 */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative">
              <div className="flex-1 md:text-right">
                <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded mb-2 text-sm font-mono">
                  Q2 2026
                </div>
                <h3 className="text-xl font-bold">Platform Launch</h3>
                <p className="text-muted-foreground">35K Users • $5.25M LTV</p>
              </div>
              <div className="w-4 h-4 bg-primary rounded-full shrink-0 z-10 hidden md:block mt-2 shadow-[0_0_10px_rgba(0,217,255,0.5)]"></div>
              <div className="flex-1 pt-2 text-sm text-muted-foreground">
                Official public launch with full blockchain integration and
                artist partnerships.
              </div>
            </div>

            {/* Q3 2026 */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative">
              <div className="flex-1 md:text-right md:order-1 pt-2 text-sm text-muted-foreground">
                Expansion into key global markets and major label licensing
                integration.
              </div>
              <div className="w-4 h-4 bg-secondary rounded-full shrink-0 z-10 hidden md:block mt-2 shadow-[0_0_10px_rgba(107,70,255,0.5)] md:order-2"></div>
              <div className="flex-1 md:order-3">
                <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded mb-2 text-sm font-mono">
                  Q3 2026
                </div>
                <h3 className="text-xl font-bold">Rapid Scaling</h3>
                <p className="text-muted-foreground">350K Users • $52.5M LTV</p>
              </div>
            </div>

            {/* Q4 2026 */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative">
              <div className="flex-1 md:text-right">
                <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded mb-2 text-sm font-mono">
                  Q4 2026
                </div>
                <h3 className="text-xl font-bold">Mass Adoption</h3>
                <p className="text-muted-foreground">725K Users • $108M LTV</p>
              </div>
              <div className="w-4 h-4 bg-accent rounded-full shrink-0 z-10 hidden md:block mt-2 shadow-[0_0_10px_rgba(0,255,148,0.5)]"></div>
              <div className="flex-1 pt-2 text-sm text-muted-foreground">
                Viral growth phase driven by referral royalties and influencer
                campaigns.
              </div>
            </div>

            {/* Q1 2027 */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative">
              <div className="flex-1 md:text-right md:order-1 pt-2 text-sm text-muted-foreground">
                Reaching unicorn status with established revenue streams and
                global user base.
              </div>
              <div className="w-4 h-4 bg-white rounded-full shrink-0 z-10 hidden md:block mt-2 shadow-[0_0_10px_rgba(255,255,255,0.5)] md:order-2"></div>
              <div className="flex-1 md:order-3">
                <div className="inline-block bg-white/20 text-white px-3 py-1 rounded mb-2 text-sm font-mono">
                  Q1 2027
                </div>
                <h3 className="text-xl font-bold">The Unicorn Milestone</h3>
                <p className="text-muted-foreground">1.1M Users • $165M LTV</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-card to-background p-12 md:p-24 text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
            Join the Revolution
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
            Be part of the first streaming platform that rewards everyone. The
            token sale round closes Feb 15, 2026.
          </p>
          <div className="relative z-10 flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-bold min-w-[200px]"
              asChild>
              <Link href="mailto:hello@sms.ai">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
