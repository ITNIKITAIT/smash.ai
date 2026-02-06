'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  MotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import { Container } from '../ui/container';
import { cn } from '@/app/lib/utils';

const items = [
  {
    title: 'The Mission',
    description:
      "You get paid to listen, paid to create, and paid to share. We're building the first wealth-sharing audio network that rewards every participant in the ecosystem.",
    imageSrc: '/images/about-1.png',
    color: 'bg-gray-400/10',
  },
  {
    title: 'Blockchain Powered',
    description:
      'For the first time, fans earn royalties tied to engagement. Our smart contracts ensure transparent, instant payouts and verifiable ownership for artists and fans alike.',
    videoSrc: '/videos/sun.mp4',
    color: 'bg-orange-500/5',
  },
  {
    title: 'Fair Economics',
    description:
      'Artists earn $0.10/stream (vs $0.003 industry avg). Fans earn 3% of ad revenue. Referrers earn 2%. A truly fair ecosystem built for the people.',
    imageSrc: '/images/about-2.png',
    color: 'bg-red-500/5',
  },
];

export function About() {
  const container = useRef(null);
  const { scrollY } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={container}
      id="about"
      className="relative flex flex-col items-center justify-center py-10">
      <Container className="relative w-full">
        {items.map((item, i) => (
          <Card
            key={i}
            item={item}
            i={i}
            scrollY={scrollY}
            total={items.length}
          />
        ))}
      </Container>
    </section>
  );
}

interface CardProps {
  item: (typeof items)[0];
  i: number;
  total: number;
  scrollY: MotionValue<number>;
}

const Card = ({ item, i, total, scrollY }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const HEIGHT = 500;
  const defaultMarginTop = i === 0 ? 0 : -(HEIGHT - 30);

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    const calculatedMarginTop = latest - (i + 1) * HEIGHT;
    const marginTop = Math.max(
      defaultMarginTop,
      Math.min(i === 0 ? 0 : 40, calculatedMarginTop),
    );
    if (cardRef.current) {
      cardRef.current.style.marginTop = marginTop.toString() + 'px';
    }
  });

  return (
    <motion.div
      style={{ zIndex: total - i, marginTop: defaultMarginTop, height: HEIGHT }}
      ref={cardRef}
      className="w-full relative">
      <div className="w-full h-full bg-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row backdrop-blur-xl">
        {/* Content */}
        <div className="grid grid-cols-2 w-full h-full">
          <div
            className={cn(
              'w-full w-full p-8 md:p-12 flex flex-col relative z-10 bg-background/50',
              i % 2 === 0 && 'order-2',
              item.color,
            )}>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 mb-6 text-sm font-mono text-muted-foreground">
              0{i + 1}
            </div>
            <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="relative w-full h-full">
            {item.videoSrc ? (
              <video
                src={item.videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-full h-full"
              />
            ) : (
              <img
                src={item.imageSrc}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
