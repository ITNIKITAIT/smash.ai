export const STREAMING_COMPARISON = [
  {
    platform: 'Spotify',
    artistPayout: 0.003,
    fanRoyalty: 0,
    color: '#1DB954',
  },
  {
    platform: 'YouTube',
    artistPayout: 0.0048,
    fanRoyalty: 0,
    color: '#FF0000',
  },
  {
    platform: 'Apple Music',
    artistPayout: 0.0062,
    fanRoyalty: 0,
    color: '#FC3C44',
  },
  {
    platform: 'SMASH',
    artistPayout: 0.1,
    fanRoyalty: 0.05,
    color: '#00D9FF',
  },
];

export const REVENUE_DISTRIBUTION = [
  {
    name: 'Rights Holders',
    value: 85,
    description: 'Licensing costs & platform operations',
    color: '#1A1A24',
    borderClass: 'border-brand-gray',
  },
  {
    name: 'Revenue Share',
    value: 10,
    description: 'Recorded on-chain for transparency',
    color: '#6B46FF',
    borderClass: 'border-brand-purple',
  },
  {
    name: 'Fan Royalties',
    value: 3,
    description: 'Paid to listeners',
    color: '#00D9FF',
    borderClass: 'border-brand-cyan',
  },
  {
    name: 'Referral Royalty',
    value: 2,
    description: 'Paid to referrers',
    color: '#00FF94',
    borderClass: 'border-brand-green',
  },
];

export const GROWTH_PROJECTIONS = [
  { quarter: 'Q2 2026', users: 35000, revenue: 5250000, label: 'Launch' },
  { quarter: 'Q3 2026', users: 350000, revenue: 52500000, label: 'Scale' },
  { quarter: 'Q4 2026', users: 725000, revenue: 108000000, label: 'Expansion' },
  { quarter: 'Q1 2027', users: 1100000, revenue: 165000000, label: 'Global' },
];

export const TOKEN_DETAILS = {
  name: 'SMASH COIN',
  raise: '5M',
  deadline: 'Feb 15, 2026',
  minInvestment: '100K',
  supply: '15-20%',
  benefits: [
    'Governance voting rights',
    'Advisory council seat',
    'Staking rewards',
    'Priority access to features',
  ],
};

export const MARKET_STATS = {
  totalOpportunity: '$180B',
  artistPayout: '$0.10',
  fanRoyalty: '$0.05',
  referralRoyalty: '2%',
  blockchainRoyalty: '3%',
  projectedRevenue: '$283.45M',
  valuation: '$1.4B+',
};
