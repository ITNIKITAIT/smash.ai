'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Check, X } from 'lucide-react';

export function Metrics() {
  return (
    <section
      id="economics"
      className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements for "Beauty" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            The Economics of <span className="text-primary">Fairness</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Traditional streaming platforms keep the wealth. We built a system
            that distributes it. Compare the payout models below.
          </p>
        </div>

        {/* Detailed Competitor Comparison Table */}
        <div className="relative mb-32">
          {/* Glow effect behind the table */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-xl -z-10" />

          <div className="bg-card/40 backdrop-blur-xl border border-border rounded-3xl overflow-hidden shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-6 md:p-8 border-b border-border bg-muted/50 items-center">
              <div className="col-span-4 md:col-span-3 text-sm font-bold text-muted-foreground uppercase tracking-widest">
                Platform
              </div>
              <div className="col-span-4 md:col-span-3 text-sm font-bold text-muted-foreground uppercase tracking-widest text-right md:text-left">
                Artist Payout<span className="hidden md:inline"> (avg)</span>
              </div>
              <div className="col-span-4 md:col-span-3 text-sm font-bold text-muted-foreground uppercase tracking-widest text-right md:text-left">
                Fan Royalty
              </div>
              <div className="hidden md:flex col-span-3 text-sm font-bold text-muted-foreground uppercase tracking-widest justify-center">
                Blockchain
              </div>
            </div>

            {/* Competitor Rows */}
            <div className="divide-y divide-border">
              {[
                {
                  name: 'Spotify',
                  artist: '$0.0030',
                  fan: '$0.00',
                  chain: false,
                },
                {
                  name: 'YouTube',
                  artist: '$0.0048',
                  fan: '$0.00',
                  chain: false,
                },
                {
                  name: 'Apple Music',
                  artist: '$0.0062',
                  fan: '$0.00',
                  chain: false,
                },
                {
                  name: 'Deezer',
                  artist: '$0.0064',
                  fan: '$0.00',
                  chain: false,
                },
              ].map((platform) => (
                <div
                  key={platform.name}
                  className="grid grid-cols-12 gap-4 p-6 md:p-8 items-center hover:bg-muted/50 transition-colors group">
                  <div className="col-span-4 md:col-span-3 font-medium text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                    {platform.name}
                  </div>
                  <div className="col-span-4 md:col-span-3 font-mono text-muted-foreground text-right md:text-left">
                    {platform.artist}
                  </div>
                  <div className="col-span-4 md:col-span-3 font-mono text-muted-foreground text-right md:text-left">
                    {platform.fan}
                  </div>
                  <div className="hidden md:flex col-span-3 justify-center text-muted-foreground/30">
                    <X className="w-6 h-6" />
                  </div>
                </div>
              ))}

              {/* SMASH Row - Highlighted & Bigger */}
              <div className="grid grid-cols-12 gap-4 p-8 md:p-10 items-center bg-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

                <div className="col-span-4 md:col-span-3 relative">
                  <span className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                    SMASH
                  </span>
                  <span className="hidden md:inline ml-2 text-xs font-bold bg-accent text-black px-2 py-0.5 rounded-full uppercase align-middle">
                    You
                  </span>
                </div>
                <div className="col-span-4 md:col-span-3 relative">
                  <div className="text-2xl md:text-4xl font-mono font-bold text-primary">
                    $0.10
                  </div>
                  <div className="text-xs text-primary/70 uppercase tracking-wide mt-1 font-bold">
                    33x Higher
                  </div>
                </div>
                <div className="col-span-4 md:col-span-3 relative">
                  <div className="text-2xl md:text-4xl font-mono font-bold text-accent">
                    $0.05
                  </div>
                  <div className="text-xs text-accent/70 uppercase tracking-wide mt-1 font-bold">
                    Paid to You
                  </div>
                </div>
                <div className="hidden md:flex col-span-3 justify-center relative">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Breakdown Cards - Larger & More Visual */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              label: 'Global Market',
              value: '$180B',
              sub: 'Total Streaming Economy',
              desc: 'The massive opportunity we are disrupting.',
              color: 'text-foreground',
              bg: 'bg-muted/50',
              border: 'border-border',
            },
            {
              label: 'Fan Share',
              value: '3%',
              sub: 'Of Gross Ad Revenue',
              desc: 'Paid directly to listeners via smart contracts.',
              color: 'text-accent',
              bg: 'bg-accent/5',
              border: 'border-accent/20',
            },
            {
              label: 'Referral Royalty',
              value: '2%',
              sub: 'Viral Growth Engine',
              desc: 'Earn perpetually from users you refer.',
              color: 'text-secondary',
              bg: 'bg-secondary/5',
              border: 'border-secondary/20',
            },
            {
              label: 'Artist Share',
              value: '90%',
              sub: 'Of Net Revenue',
              desc: 'The fairest deal in the music industry.',
              color: 'text-primary',
              bg: 'bg-primary/5',
              border: 'border-primary/20',
            },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}>
              <Card
                className={`h-full ${card.bg} ${card.border} backdrop-blur hover:bg-card/80 transition-all duration-300 group`}>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    {card.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className={`text-5xl lg:text-6xl font-bold font-mono mb-4 tracking-tighter ${card.color}`}>
                    {card.value}
                  </div>
                  <p className="font-medium text-foreground mb-2">{card.sub}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
