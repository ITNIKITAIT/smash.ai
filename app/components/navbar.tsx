'use client';

import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { Menu, Music } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="bg-primary/20 p-1.5 rounded-lg">
            <Music className="w-5 h-5 text-primary" />
          </div>
          SMASH<span className="text-primary">.</span>AI
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/economics"
            className="text-sm font-medium hover:text-primary transition-colors">
            Economics
          </Link>
          <Link
            href="/token-sale"
            className="text-sm font-medium hover:text-primary transition-colors">
            Token Sale
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="glow" size="sm" asChild>
              <Link href="mailto:hello@sms.ai">Invest Now</Link>
            </Button>
          </div>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-background">
            <div className="container px-4 py-4 flex flex-col gap-4">
              <Link
                href="/economics"
                className="text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}>
                Economics
              </Link>
              <Link
                href="/token-sale"
                className="text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}>
                Token Sale
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Button variant="glow" className="w-full" asChild>
                <Link href="mailto:hello@sms.ai">Invest Now</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
