# Sri Laxmi Home Foods

A Vite + React + TypeScript storefront for the Sri Laxmi Home Foods brand, designed around a heritage Indian pantry aesthetic and a WhatsApp-first ordering flow.

## Prerequisites

- Node.js 18+
- npm

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev -- --host 0.0.0.0
```

## Build

```bash
npm run build
```

## Change the WhatsApp number

Edit the value in `src/config/store.config.ts`:

```ts
whatsappNumber: '91XXXXXXXXXX'
```

## Edit products

Update the catalog in `src/data/products.ts`.

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the default Vite settings and deploy.

## Notes

- This is a demo storefront with no real payment processing.
- Orders are created locally and the customer is sent to WhatsApp for confirmation.
- No database or backend is used.
