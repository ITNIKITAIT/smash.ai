import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Token Sale | SMASH AI Streaming',
  description:
    'Invest in the future of music streaming. $5M raise, 15-20% token supply. Round closes Feb 15, 2026.',
};

export default function TokenSaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
