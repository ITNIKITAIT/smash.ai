import type { Metadata } from 'next';
import { Syne, Space_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/app/lib/utils';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  display: 'swap',
});

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SMASH AI STREAMING - Investor Relations',
  description:
    'The first streaming platform that pays you to listen. Blockchain-powered fan royalties.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          syne.variable,
          spaceMono.variable,
        )}>
        <main className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
