import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Smashify AI Streaming',
  description:
    'Smashify AI Streaming pays listeners, creators, and referrers. Blockchain-powered fan royalties. A music economy built for the people.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
