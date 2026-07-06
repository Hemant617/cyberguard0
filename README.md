# CyberGuard

Breach intelligence & threat monitoring platform, rebuilt on Next.js + TypeScript + Tailwind CSS.

## Why this stack

- **Next.js (React) + TypeScript** — the same category of stack used by most production SaaS dashboards
  (Cloudflare, Vercel, Linear). TypeScript catches whole classes of bugs — undefined variables, wrong
  argument types, mismatched function signatures — before the code ever runs, which is the single biggest
  source of the "random crash" behavior in the old vanilla-JS version.
- **Tailwind CSS** — fast to iterate on, no CSS specificity fights, ships only the classes you use.
- **Zustand** — small, predictable client state store for the logged-in user and scan history, with
  automatic local persistence so a page refresh doesn't lose your session.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # optional — fill in Supabase creds if you have them
npm run dev
```

Open http://localhost:3000.

Without Supabase configured, the app runs in **local demo mode**: sign-up/sign-in and scan history work,
but they live only in your browser (via Zustand's local persistence) and won't sync across devices.

## Connecting Supabase (optional, for real accounts + persistence)

1. Create a project at supabase.com.
2. Run `supabase/schema.sql` in the Supabase SQL editor — creates the `users` and `scans` tables with
   row-level security.
3. In Supabase → Authentication → URL Configuration, set Site URL to your deployed domain
   (e.g. `http://localhost:3000` while developing).
4. Copy your project URL and anon/public key into `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   ```
5. Restart `npm run dev`.

## Payment gateway

The previous Razorpay checkout integration has been removed. Pricing is set to **₹999/month** for the
Pro plan. The "Upgrade to Pro" flow in `/dashboard/settings` currently ends in a placeholder step —
wire your chosen payment gateway into `app/dashboard/settings/page.tsx` (the `requestPro` function)
when you're ready. There's also a clearly-labeled "preview only" toggle so you can test Pro-gated
features locally without a real charge.

## Project structure

```
app/
  page.tsx                landing page
  auth/                   sign up / sign in
  dashboard/               protected app shell
    page.tsx               overview
    scan/                   run a new breach scan
    history/                past scans
    breaches/                breach detail table
    terminal/                Pro recon tools
    reports/                 PDF report generation
    settings/                account, plan, danger zone
  api/
    scan/route.ts           server-side breach lookup (XposedOrNot)
    pwned/route.ts           k-anonymity password check proxy (HIBP)
components/                shared UI
lib/                        types, Supabase client, auth helpers, Zustand store, PDF generator
supabase/schema.sql          DB schema to run once in Supabase
```

## Deploying

Any Next.js host works (Vercel is the simplest — connect the repo, add the two env vars, deploy).
