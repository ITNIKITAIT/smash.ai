'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Coins,
  ShieldCheck,
  TrendingUp,
  Users,
  Wallet,
  Lock,
  Globe,
  Zap,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Button } from '@/app/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { GROWTH_PROJECTIONS, TOKEN_DETAILS } from '@/app/lib/constants';
import Link from 'next/link';

const USE_OF_FUNDS = [
  { name: 'Marketing & PR', value: 36, amount: '$1.8M', color: '#00D9FF' },
  { name: 'Ops & Engineering', value: 28, amount: '$1.4M', color: '#6B46FF' },
  { name: 'Legal & Licensing', value: 18, amount: '$0.9M', color: '#00FF94' },
  { name: 'Partnerships', value: 12, amount: '$0.6M', color: '#F5F5FA' },
  { name: 'Security', value: 6, amount: '$0.3M', color: '#1A1A24' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function TokenSalePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-purple/20 via-background to-background pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              Round Closes {TOKEN_DETAILS.deadline}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Invest in the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                Future of Music
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join the $5M raise to build the first streaming platform that pays
              everyone. Secure your allocation in SMASH COIN before the round
              closes.
            </p>

            <Button size="xl" variant="glow" className="w-full sm:w-auto">
              <Link
                href="mailto:hello@sms.ai"
                className="w-full flex items-center justify-center">
                Invest Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Token Details Grid */}
      <section className="py-20 px-4 md:px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={item}>
              <Card className="bg-card/50 backdrop-blur border-brand-cyan/20 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-brand-cyan">
                    <Coins className="h-5 w-5" /> Raise Target
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold font-mono">
                    {TOKEN_DETAILS.raise}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Hard cap for this round
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="bg-card/50 backdrop-blur border-brand-purple/20 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-brand-purple">
                    <Wallet className="h-5 w-5" /> Min Ticket
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold font-mono">
                    ${TOKEN_DETAILS.minInvestment}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Minimum investment size
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="bg-card/50 backdrop-blur border-brand-green/20 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-brand-green">
                    <TrendingUp className="h-5 w-5" /> Valuation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold font-mono">$1.4B+</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Year-one heuristic
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="bg-card/50 backdrop-blur border-white/20 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Lock className="h-5 w-5" /> Supply
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold font-mono">
                    {TOKEN_DETAILS.supply}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Allocated to this round
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Growth & Use of Funds */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="text-brand-green" /> Growth Trajectory
            </h2>
            <Card className="bg-card/50 border-border p-6 h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={GROWTH_PROJECTIONS}>
                  <defs>
                    <linearGradient
                      id="colorRevenue"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1">
                      <stop offset="5%" stopColor="#00D9FF" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00D9FF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#333"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="quarter"
                    stroke="#888"
                    tick={{ fill: '#888' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#888"
                    tick={{ fill: '#888' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${value / 1000000}M`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0A0A0F',
                      borderColor: '#333',
                    }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: string | number | undefined) => [
                      `$${(Number(value ?? 0) / 1000000).toFixed(1)}M`,
                      'Revenue',
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#00D9FF"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
            <p className="mt-4 text-muted-foreground text-sm">
              Projected revenue growth based on user acquisition milestones from
              Q2 2026 to Q1 2027.
            </p>
          </motion.div>

          {/* Use of Funds */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <ShieldCheck className="text-brand-purple" /> Use of Funds
            </h2>
            <Card className="bg-card/50 border-border p-6 h-[400px] flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-1/2 h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={USE_OF_FUNDS}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value">
                      {USE_OF_FUNDS.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          stroke="none"
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0A0A0F',
                        borderColor: '#333',
                        borderRadius: '8px',
                      }}
                      itemStyle={{ color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                {USE_OF_FUNDS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Token Benefits */}
      <section className="py-20 px-4 md:px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Token Holder Benefits
            </h2>
            <p className="text-muted-foreground">
              Exclusive rights and privileges for early investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TOKEN_DETAILS.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-brand-cyan/50 transition-colors">
                <div className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan">
                  {index === 0 && <Users className="h-6 w-6" />}
                  {index === 1 && <Globe className="h-6 w-6" />}
                  {index === 2 && <Zap className="h-6 w-6" />}
                  {index === 3 && <TrendingUp className="h-6 w-6" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{benefit}</h3>
                  <p className="text-sm text-muted-foreground">
                    Full participation in the ecosystem growth and direction.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
