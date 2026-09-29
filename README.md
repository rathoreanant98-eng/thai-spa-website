# Premium Thai Spa Website

A production-oriented Next.js website for a premium Thai spa / massage business.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS + custom editorial CSS
- Lucide icons
- Node.js 22 runtime
- Hostinger Web App deployment from GitHub `main`

## Before launch

Edit `src/data/business.ts` and replace every bracketed placeholder with verified business information. Keep `bookingSettings.showPrices` set to `false` until the owner confirms actual prices.

Replace the abstract files in `public/visuals/` with authentic spa photography before treating the gallery or facilities as representative of the real premises.

## Development

```bash
npm install
npm run dev
```

## QA

```bash
npm run typecheck
npm run lint
npm run build
```

## Production

Hostinger should deploy branch `main` as a Node.js Web App using Node 22.x.

Build command:

```bash
npm run build
```

Start command:

```bash
npm run start
```

See `HOSTINGER.md` for the deployment settings.

## Business data still required

- Brand name
- Phone number
- WhatsApp number with country code
- Email
- Full address
- City, state and postal code
- Opening hours
- Google Maps URL
- Social URLs
- Confirmed prices
- Confirmed facilities
- Authentic photos
- Final cancellation / refund terms
- Final privacy / terms review
- Genuine testimonials, if required
