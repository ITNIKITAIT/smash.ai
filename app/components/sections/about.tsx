'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';
import { Button } from '../ui/button';

export function About() {
  return (
    <section id="royalties" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[128px] -z-10" />

      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About SMASH
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-muted-foreground mb-8 leading-tight">
              Building the world's first <span className="text-foreground font-medium">wealth-sharing</span> audio network.
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                The global streaming economy is a <strong>$180B opportunity</strong>. Yet, consumers who fuel this demand receive $0, and artists fight for fractions of a penny.
              </p>
              <p>
                SMASH AI STREAMING changes the game. We pay listeners 3% of gross programmatic ad revenue and an additional 2% for direct referrals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Blockchain Powered Royalties",
                "AI-Driven Discovery",
                "Fair Artist Payouts ($0.10/stream)",
                "Viral Referral Growth"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" variant="glow">
              Read the Whitepaper
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 grid gap-6">
               {/* Feature Cards imitating Spotify's layout but with SMASH style */}
               <div className="bg-card border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap className="w-24 h-24" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">For Fans</h4>
                  <p className="text-muted-foreground mb-4">Earn crypto for every minute you listen and every friend you refer.</p>
                  <div className="text-3xl font-mono font-bold text-accent">3% + 2%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Revenue Share</div>
               </div>

               <div className="bg-card border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-secondary/50 transition-colors ml-8">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap className="w-24 h-24" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">For Creators</h4>
                  <p className="text-muted-foreground mb-4">Get paid 33x more than Spotify with instant, transparent payouts.</p>
                  <div className="text-3xl font-mono font-bold text-primary">$0.10</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Per Stream</div>
               </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
