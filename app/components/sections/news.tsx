'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  FileText,
  Megaphone,
  TrendingUp,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';

const newsItems = [
  {
    category: 'Token Sale',
    title: '$5M Token Sale Now Open',
    date: 'Feb 1, 2026',
    description:
      'Round closes Feb 15, 2026. Minimum investment $100K. 15-20% token supply available.',
    icon: TrendingUp,
    color: 'text-accent',
  },
  {
    category: 'Press Release',
    title: 'SMASH AI Unveils "Pay-to-Listen" Model',
    date: 'Jan 28, 2026',
    description:
      'Revolutionary blockchain platform announces 3% fan royalties and 2% referral commissions.',
    icon: Megaphone,
    color: 'text-primary',
  },
  {
    category: 'Milestone',
    title: 'Licensing & Compliance Update',
    date: 'Jan 15, 2026',
    description:
      'Pursuing major agreements with labels and performing rights organizations for Q2 launch.',
    icon: FileText,
    color: 'text-secondary',
  },
];

export function News() {
  return (
    <section id="news" className="py-24 bg-background border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Latest Updates
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Stay informed on SMASH AI Streaming's journey to disrupt the $180B
              audio economy.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All News <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}>
              <Card className="h-full bg-card hover:bg-card/80 transition-colors border-border group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      {item.category}
                    </div>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                  <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button variant="outline" className="w-full">
            View All News <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
