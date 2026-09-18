# Cooper Gloss — Website

Next.js (App Router) + Tailwind CSS, built against the V1 brief.

## Run it

```
npm install
npm run dev
```

## What's real vs placeholder

**Real, from the actual logo file:**
- Colour palette in `tailwind.config.js` (lilac.deep / lilac / lilac.soft / lilac.cloud) —
  extracted directly from the logo, not guessed.
- Logo image at `public/logo.jpg`.

**Working, but running on placeholder content — replace before launch:**
- `lib/products.js` — 3 placeholder products (2 Cooper Gloss, 1 Hair Bonnets).
  Swap in real names, prices, and image files. Drop real photos into
  `public/products/` and update each product's `images` array.
  `shade` and `description` are `null` on purpose (client hasn't sent these) —
  the UI already handles that gracefully, so just fill in values as she sends them.
- `lib/constants.js` → `PAYMENT_INFO` — bank name/account name/account number
  are all `TODO`. Do not deploy with these still blank.
- `lib/constants.js` → `WHATSAPP_NUMBER_LOCAL` — currently `09151517409`,
  flagged in the brief as needing verification before launch.
- `lib/constants.js` → `SOCIAL.instagram` — not yet provided, currently `null`
  and hidden from Contact/Footer until set.
- `app/training/page.js` — pricing/location shown as confirmed-so-far only;
  full training overview, curriculum, audience, duration still pending.
- `app/faq/page.js` — delivery and returns/exchange answers are placeholders
  pending client info.
- `app/about/page.js` — intentionally has no invented brand story; replace
  entirely once the client sends real copy.

## Architecture notes

- Cart state lives in `lib/cart-context.js` (React Context + localStorage) —
  no backend, matching the brief's "no accounts, no payment processing" scope.
- Shop page (`app/shop/page.js`) splits Cooper Gloss / Hair Bonnets with two
  tabs, not a category system — matches the "no categories, but don't mix two
  different brands with zero distinction" decision.
- WhatsApp order message + link generation is in `lib/whatsapp.js`, kept
  framework-free so it's easy to test independently of the UI.
- Payment: cart page shows the WhatsApp order button *and* bank transfer
  instructions together (not a replacement flow) — customer orders via
  WhatsApp, pays by transfer, sends receipt back on WhatsApp to confirm.

## Not yet built (flag if the client asks)

Anything in the brief's "Out of Scope — V1" section: online payment
processing, accounts/login, admin dashboard, order tracking, inventory
management, analytics, discount/coupon system.
