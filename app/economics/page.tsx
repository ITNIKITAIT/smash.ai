import EconomicsView from '@/app/components/sections/economics-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Economics | SMASH AI STREAMING',
  description:
    'The future of streaming economics. Get paid to listen, create, and share with our blockchain-powered royalty system.',
};

export default function EconomicsPage() {
  return (
    <div className="min-h-screen pt-24 bg-background">
      <EconomicsView />
    </div>
  );
}
