# Premium Thai Spa Website

A production-oriented, static-export Next.js website for a premium Thai spa / massage business.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS + custom editorial CSS
- Lucide icons
- Static export (`out/`) for simple hosting
- No backend dependency

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

The production export is generated in `out/`.

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
- Confirmed facilities (especially Jacuzzi / hammam / steam / couples suite)
- Authentic photos
- Final cancellation / refund terms
- Final privacy / terms review
- Genuine testimonials, if the business wants a reviews section

See `HOSTINGER.md` for deployment.
