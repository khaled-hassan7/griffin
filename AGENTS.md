# AGENTS.md

Griffin — an e-commerce storefront (Next.js App Router) for a fictional men's streetwear brand. Read `README.md` for the product/design overview; this file covers what's easy to get wrong.

## Stack & non-obvious facts

- **Next.js 16 + React 19, plain JavaScript** — no TypeScript. Path alias `@/*` → `src/*` (`jsconfig.json`). Use JSDoc only if you must.
- **Tailwind CSS v4, CSS-first config.** There is **no `tailwind.config.js`**. Design tokens live in `src/styles/theme.css` under `@theme` (e.g. `--color-primary`, `--text-productTitle`, `--text-button`). Add/extend tokens there and use the generated utilities (`bg-primary`, `text-productTitle`, `border-border`). `src/styles/globals.css` imports Tailwind then the theme.
- **React Compiler is on** (`reactCompiler: true` in `next.config.mjs` + `babel-plugin-react-compiler`). Don't reflexively add `useMemo`/`useCallback`/`memo`.
- Remote `next/image` sources are restricted to the Supabase project's public storage path (`next.config.mjs` → `images.remotePatterns`). Any new image host must be added there.

## Commands

- `npm install`
- `npm run dev` → http://localhost:3000
- `npm run build` / `npm start`
- `npm run lint` → bare `eslint` over the whole repo (ESLint 9 flat config). There is **no** `lint:fix`, formatter, `.prettierrc`, or `.editorconfig`.
- **There are no tests and no typecheck step.** Do not invent `npm test` or `tsc`.
- Bundle analysis: `ANALYZE=true npm run build`. On PowerShell use `$env:ANALYZE="true"; npm run build`.
- Asset/data seeding: `node --env-file=.env.local upload.mjs` (see below).

## Environment & data

- Requires `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` (gitignored). README references a `.env.example` that does **not** exist.
- Product/category/collection/order pages read from a **live Supabase project** (tables: `products`, `categories`, `editorial_collections`, `orders`, `order_items`; storage bucket `products`). There is no local mock fallback — without valid credentials those pages fail or render empty.
- The key currently in `.env.local` decodes to a Supabase **`service_role`** token, exposed to the browser via `NEXT_PUBLIC_*`. Be mindful; don't assume RLS is enforced.
- `upload.mjs` is a standalone (non-`npm-script`) seeder: it uploads every image in `~/Desktop/griffinPhoto/<slug>/` to storage bucket `products` and upserts `products` by `slug`, merging an optional `data.json`. It reads `process.env` directly — Node does **not** load `.env.local` by itself, hence `--env-file=.env.local` (Node 20.6+). Its console output is in Arabic.

## Architecture

- Route groups each own a layout with shared chrome: `src/app/(home)`, `(shop)`, `(checkout)`, `(account)`.
- Data access is centralized in **`src/data/*.js`**, not colocated with components:
  - `products.js`, `categories.js`, `collections.js` are server functions (`import "server-only"`).
  - `orders.js` is a `"use server"` action (`createOrder`).
  - Server functions must not be imported into `"use client"` components; pass results down as props or use the browser client.
- Supabase clients in `src/lib/supabase/`: `client.js` (browser, synchronous `createClient`) and `server.js` (server-only, **async** `createClient` using `next/headers` cookies).
- Components are grouped by domain: `cart`, `checkout`, `products`, `home`, `navigation`, `common/{header,footer}`, `ui`. Zustand stores are colocated — `cart/CartStore.js`, `checkout/CheckoutStore.js`, `navigation/NavigationMenuStore.js`.
- Cart state is client-only, persisted to `localStorage` under key `griffin-cart`, with an `isHydrated` flag used to avoid SSR hydration mismatches. Only order creation writes to Supabase.

## Conventions & gotchas

- In Next 16, `params` and `searchParams` are Promises — always `await` them (see `src/app/(shop)/products/page.js`).
- Cart line identity is `` cartItemId = `${id}-${size}` ``; quantity/remove ops key off `cartItemId`, while add-time dedupe matches on `(id, size)`. Keep this shape consistent when touching cart logic.
- Product `images` is an array; the convention is `images[1]` as the primary/card thumbnail and `images[0]` as the hover image.
- Checkout is guarded client-side by `checkout/CheckoutGuard.js` based on Zustand state; navigating to a later step without completing earlier ones redirects.
- `createOrder` re-fetches prices from the DB server-side to compute the total — never trust client-sent prices.

## Known gaps (don't assume these work)

- The `(account)` route group is an unfinished stub (layout renders literal text, pages return placeholder `<div>`s).
- `src/app/(shop)/cart/page.js` is a stub; the real cart UI is the `CartModal` drawer.
- `src/data/collections.js#getCollectionProducts` references an undefined `supabase` variable (broken), and `components/products/Collection.js` calls single-product `getProduct()` instead of a collection query. The `?collection=` path on `/products` is not reliable.
- README claims React Query for data fetching, but it is not a dependency and is unused.
