'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Container } from '../ui/container';

const ARTICLES = [
  {
    category: 'FOR THE RECORD',
    title: 'SMASH Unveils Groundbreaking Blockchain-Powered Fan Royalties',
    date: 'FEBRUARY 6, 2026',
    dateTime: '2026-02-06',
    imageSrc: '/images/1.png',
  },
  {
    category: 'ARTIST SPOTLIGHT',
    title: 'Artists See 3000% Payout Increase with SMASH AI Streaming Platform',
    date: 'FEBRUARY 6, 2026',
    dateTime: '2026-02-06',
    imageSrc: '/images/2.png',
  },
  {
    category: 'INVESTOR UPDATES',
    title:
      'Exclusive Token Sale Round Nears Close: Invest in the Future of Music',
    date: 'FEBRUARY 6, 2026',
    dateTime: '2026-02-06',
    imageSrc: '/images/3.png',
  },
  {
    category: 'TOKENOMICS',
    title:
      'The Economics of Empowerment: How SMASH Pays Listeners and Creators',
    date: 'FEBRUARY 6, 2026',
    dateTime: '2026-02-06',
    imageSrc: '/images/4.png',
  },
  {
    category: 'COMPANY UPDATES',
    title: 'SMASH AI STREAMING: A New Era of Transparent Music Economy',
    date: 'FEBRUARY 5, 2026',
    dateTime: '2026-02-05',
    imageSrc: '/images/5.png',
  },
  {
    category: 'COMMUNITY',
    title:
      'Fan-to-Fan Referral Program Drives Viral Growth and Community Engagement',
    date: 'FEBRUARY 5, 2026',
    dateTime: '2026-02-05',
    imageSrc: '/images/6.jpg',
  },
];

export function News() {
  return (
    <section
      id="news"
      className="py-24 bg-gradient-to-br from-background via-orange-50/40 to-secondary/20 text-foreground"
      aria-labelledby="news-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
          {/* Left column: sticky header + category nav */}
          <div className="lg:col-span-4 lg:self-start lg:sticky lg:top-28">
            <motion.h2
              id="news-heading"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}>
              News
            </motion.h2>
            <motion.p
              className="mt-6 text-muted-foreground text-lg max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}>
              SMASH&apos;s latest updates, from blockchain and fan royalties to
              artist opportunities and investor relations.
            </motion.p>
            <motion.a
              href="#news"
              className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:text-primary/90 transition-colors group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}>
              VIEW ALL
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                aria-hidden
              />
            </motion.a>
          </div>

          {/* Right column: article grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ARTICLES.map((article, i) => (
                <motion.article
                  key={i}
                  className="group bg-white/90 backdrop-blur rounded-lg overflow-hidden shadow-md border border-orange-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                  <a
                    href="#"
                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg">
                    <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                      <Image
                        src={article.imageSrc}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground/70">
                        {article.category}
                      </span>
                      <h3 className="mt-2 text-foreground font-bold text-base leading-snug line-clamp-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <time
                        dateTime={article.dateTime}
                        className="mt-3 block text-sm text-muted-foreground">
                        {article.date}
                      </time>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
