'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const timeline = [
  {
    period: 'Q2 2026',
    title: 'Platform Launch',
    users: '35K',
    revenue: '$5.25M',
    focus: 'Initial Release',
    active: true,
  },
  {
    period: 'Q3 2026',
    title: 'Growth Phase',
    users: '350K',
    revenue: '$52.5M',
    focus: 'Viral Referral Program',
    active: false,
  },
  {
    period: 'Q4 2026',
    title: 'Expansion',
    users: '725K',
    revenue: '$108M',
    focus: 'Global Markets',
    active: false,
  },
  {
    period: 'Q1 2027',
    title: 'Scale',
    users: '1.1M',
    revenue: '$165M',
    focus: 'Major Label Integration',
    active: false,
  },
];

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="py-24 bg-background border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Growth Trajectory
          </h2>
          <p className="text-xl text-muted-foreground">
            Projected user growth and revenue milestones based on our viral
            referral model.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group">
                {/* Timeline Dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 hidden lg:flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${i === 0 ? 'bg-accent border-accent animate-pulse' : 'bg-background border-border group-hover:border-primary transition-colors'}`}
                  />
                  <div className="h-8 w-0.5 bg-border mt-2" />
                </div>

                <Card
                  className={`h-full border-border transition-all duration-300 hover:border-primary/50 hover:bg-card/80 ${i === 0 ? 'bg-card' : 'bg-card/50'}`}>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`text-sm font-bold px-2 py-1 rounded-full ${i === 0 ? 'bg-accent/10 text-accent' : 'bg-muted text-muted-foreground'}`}>
                        {item.period}
                      </span>
                    </div>
                    <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {item.focus}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground">
                        Active Users
                      </div>
                      <div className="text-2xl font-mono font-bold">
                        {item.users}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground">
                        Proj. LTV Revenue
                      </div>
                      <div className="text-2xl font-mono font-bold text-primary">
                        {item.revenue}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border text-center">
          <h3 className="text-2xl font-bold mb-4">Year One Valuation Target</h3>
          <div className="text-5xl md:text-7xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent mb-4">
            $1.4B+
          </div>
          <p className="text-muted-foreground">
            Based on $283.45M projected year-one revenue (5x multiple)
          </p>
        </div>
      </div>
    </section>
  );
}
