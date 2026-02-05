'use client';

import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  AreaChart,
  Area,
} from 'recharts';
import {
  ArrowRight,
  Coins,
  TrendingUp,
  Users,
  Wallet,
  Globe,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import {
  STREAMING_COMPARISON,
  REVENUE_DISTRIBUTION,
  GROWTH_PROJECTIONS,
  TOKEN_DETAILS,
  MARKET_STATS,
} from '@/app/lib/constants';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: {
    staggerChildren: 0.1,
  },
};

export default function EconomicsView() {
  return (
    <div className="flex flex-col gap-24 py-12 overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            The <span className="text-brand-cyan">Future</span> of <br />
            Streaming Economics
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            SMASH AI pays you to listen, create, and share. We're rebuilding the
            $180B streaming economy to benefit everyone, not just the platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="glow" className="font-bold text-black">
              <Link
                href="mailto:hello@sms.ai"
                className="w-full flex items-center justify-center">
                Invest in SMASH <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: 'Market Opportunity',
              value: MARKET_STATS.totalOpportunity,
              icon: Globe,
              color: 'text-brand-cyan',
            },
            {
              label: 'Artist Payout',
              value: MARKET_STATS.artistPayout,
              sub: 'per stream',
              icon: Users,
              color: 'text-brand-purple',
            },
            {
              label: 'Fan Royalty',
              value: MARKET_STATS.fanRoyalty,
              sub: 'per stream',
              icon: Wallet,
              color: 'text-brand-green',
            },
            {
              label: 'Proj. Revenue',
              value: MARKET_STATS.projectedRevenue,
              sub: 'Year 1',
              icon: TrendingUp,
              color: 'text-white',
            },
          ].map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-card/50 border-white/10 backdrop-blur-sm h-full hover:border-brand-cyan/50 transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold font-mono text-white">
                    {stat.value}
                  </div>
                  {stat.sub && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.sub}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Comparison Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Unfair <span className="text-destructive">Status Quo</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Legacy platforms pay artists fractions of a penny and fans
              absolutely nothing. SMASH changes the game with transparent,
              blockchain-powered payouts that reward every participant in the
              ecosystem.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-brand-cyan/20 text-brand-cyan">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span>10% Revenue share recorded on-chain</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-brand-purple/20 text-brand-purple">
                  <Zap className="h-5 w-5" />
                </div>
                <span>Instant payouts via smart contracts</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-brand-green/20 text-brand-green">
                  <Users className="h-5 w-5" />
                </div>
                <span>First platform to pay fans for listening</span>
              </li>
            </ul>
          </div>

          <div className="h-[400px] bg-card/30 rounded-2xl p-6 border border-white/5">
            <h3 className="text-xl font-bold mb-6 text-center">
              Artist Payout per Stream
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={STREAMING_COMPARISON}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#333"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  stroke="#888"
                  tickFormatter={(value) => `$${value}`}
                />
                <YAxis
                  dataKey="platform"
                  type="category"
                  stroke="#fff"
                  width={80}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1A24',
                    borderColor: '#333',
                  }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value) => [`$${value}`, 'Payout']}
                />
                <Bar dataKey="artistPayout" radius={[0, 4, 4, 0]}>
                  {STREAMING_COMPARISON.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </section>

      {/* Revenue Distribution Section */}
      <section className="bg-brand-gray/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Where the <span className="text-brand-green">Money</span> Goes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A transparent breakdown of our gross programmatic advertising
              revenue split.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {REVENUE_DISTRIBUTION.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}>
                <Card
                  className={`h-full border-t-4 ${item.borderClass || ''}`}
                  style={
                    item.color && !item.borderClass
                      ? { borderTopColor: item.color }
                      : {}
                  }>
                  <CardHeader>
                    <CardTitle className="text-2xl font-mono">
                      {item.value}%
                    </CardTitle>
                    <CardDescription className="text-lg font-bold text-white">
                      {item.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Projections */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 h-[400px] w-full">
            <h3 className="text-2xl font-bold mb-6">
              Revenue Growth (Projected)
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={GROWTH_PROJECTIONS}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00D9FF" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#00D9FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="quarter" stroke="#888" />
                <YAxis
                  stroke="#888"
                  tickFormatter={(value) => `$${value / 1000000}M`}
                />
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1A24',
                    borderColor: '#333',
                  }}
                  formatter={(value: string | number | undefined) => [
                    `$${(Number(value ?? 0) / 1000000).toFixed(2)}M`,
                    'Revenue',
                  ]}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#00D9FF"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Explosive <span className="text-brand-purple">Growth</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our viral referral model creates a powerful growth engine. With a
              2% referral royalty, every user becomes a promoter.
            </p>
            <div className="space-y-6">
              {GROWTH_PROJECTIONS.map((proj, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-card/50 border border-white/5">
                  <div>
                    <span className="text-sm text-brand-cyan font-mono mb-1 block">
                      {proj.quarter}
                    </span>
                    <span className="font-bold text-lg">{proj.label}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-bold">
                      {proj.users.toLocaleString()} Users
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Est. Base
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Token Sale */}
      <section className="container mx-auto px-4 mb-20">
        <div className="relative rounded-3xl overflow-hidden border border-brand-cyan/20 bg-gradient-to-br from-brand-dark to-brand-gray p-8 md:p-12">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-mono mb-6">
                Ends {TOKEN_DETAILS.deadline}
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                {TOKEN_DETAILS.name} <br />
                Token Sale
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the ownership economy. SMASH COIN powers the entire
                ecosystem, from ad payments to merchandise and governance.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Target Raise
                  </div>
                  <div className="text-3xl font-mono font-bold text-white">
                    ${TOKEN_DETAILS.raise}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Min Investment
                  </div>
                  <div className="text-3xl font-mono font-bold text-white">
                    ${TOKEN_DETAILS.minInvestment}
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-cyan to-brand-purple text-white border-none shadow-lg shadow-brand-cyan/20 w-full md:w-auto">
                <Link
                  href="mailto:hello@sms.ai"
                  className="w-full flex items-center justify-center">
                  Join the Round <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Coins className="text-brand-cyan" />
                Token Utility & Benefits
              </h3>
              <ul className="space-y-4">
                {TOKEN_DETAILS.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-brand-purple" />
                    </div>
                    <span className="text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Supply</span>
                  <span className="font-mono text-brand-cyan">
                    {TOKEN_DETAILS.supply}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
