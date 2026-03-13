import type { Metadata } from 'next';
import TokenSaleView from './token-sale-view';

export const metadata: Metadata = {
  title: 'Token Sale - Smashify AI Streaming',
  description:
    'Invest in the future of music streaming. $5M raise, closing Feb 15, 2026.',
};

export default function TokenSalePage() {
  return <TokenSaleView />;
}
