# SMASH AI STREAMING — Investor Relations

Public website and investor relations platform for **SMASH AI STREAMING**, a blockchain-powered music streaming app that pays listeners, creators, and referrers.

**Tagline:** _You get paid to listen, paid to create, and paid to share._

## What it is

- **Product:** Investor-facing site for the SMASH AI STREAMING app (Panama). Communicates the platform’s value, economics, token sale, and contact for investors.
- **Audience:** Investors, artists, media, potential token buyers.
- **Content:** Hero, platform economics, fan royalties, growth metrics, token sale ($5M round, Feb 15 close), roadmap, and contact (hello@sms.ai).

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS, Radix UI primitives
- **Motion:** Framer Motion
- **Charts:** Recharts
- **Icons:** Lucide React

## Project structure

```
app/
  page.tsx              # Home (Hero, News, About, Metrics, Roadmap, Contact)
  about/page.tsx        # About / company
  economics/page.tsx    # Platform economics deep dive
  token-sale/           # Token sale info and layout
  components/           # Navbar, footer, section components
  lib/                  # utils, constants
public/
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- **Build:** `npm run build`
- **Start (prod):** `npm start`
- **Lint:** `npm run lint`

## License

Private — SMASH AI MUSIC STREAMING.
