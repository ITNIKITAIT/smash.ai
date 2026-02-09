import type { Metadata } from 'next';
import TokenSaleView from './token-sale-view';

export const metadata: Metadata = {
  title: 'Token Sale - SMASH AI STREAMING',
  description:
    'Invest in the future of music streaming. $5M raise, closing Feb 15, 2026.',
};

export default function TokenSalePage() {
  return <TokenSaleView />;
}
