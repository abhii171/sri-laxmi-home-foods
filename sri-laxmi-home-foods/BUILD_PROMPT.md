You are a senior frontend developer. This project folder already contains my approved website UI designs (exported from Stitch: HTML, CSS and screenshots, desktop and mobile) for "Sri Laxmi Home Foods", an Indian homemade food brand (snacks, pickles, sweets, masalas, spice powders). Now build the real working website from those designs.

## Step 0: Inspect before coding
Explore the whole project folder. Treat the design files as the visual source of truth. Match layout, colors, fonts, spacing and components closely, but do NOT copy the exported HTML as-is. Rebuild it as clean, reusable React components.
Then give me a short plan: the screens you found, any screens missing, the design tokens you extracted (colors, fonts, radii, shadows), and your folder structure. Wait for my OK before writing code.

## Business model
No online payment. At checkout, the customer's cart, details and total are sent as a pre-filled WhatsApp message to the owner. No backend, no database, no payment SDK.

## Stack
Vite + React 18 + TypeScript (strict), Tailwind CSS (design tokens in tailwind.config), React Router v6, React Context + localStorage, lucide-react. Must build to a static dist folder with `npm run build`. Do not add other heavy libraries.

## Structure
src/config/store.config.ts, data/products.ts, types/, context/ (Cart, Wishlist, Orders), utils/ (pricing.ts, whatsapp.ts, format.ts, validation.ts), components/, pages/, routes.tsx

## Central config (store.config.ts)
Brand name, WHATSAPP_NUMBER (placeholder "91-9160351146"), placeholder phone/email/address/socials/FSSAI number (never invent real details), free-delivery threshold ₹499, delivery fee ₹40, demo coupons (WELCOME10 = 10% off, FLAT50 = ₹50 off above ₹399), payment preferences (UPI after confirmation, Cash on Delivery). Nothing hardcoded elsewhere.

## Data
All products in one file: id, slug, name, category, description, images, variants (label, price, mrp, stock), spiceLevel, ingredients, allergens, storage, tags, createdAt. Use banana chips, murukku, spicy mixture, mango pickle, lemon pickle, besan laddu, kaju sweets, turmeric powder, chilli powder, garam masala, sambar powder; one out of stock. Format money with Intl.NumberFormat en-IN. No health, organic, preservative-free or shelf-life claims. Testimonials marked as sample.

## Routes
/, /shop, /category/:slug, /search, /product/:slug, /wishlist, /cart, /checkout, /order-request/:orderId, /account, /account/orders, /account/orders/:orderId, /account/addresses, /login, /register, /forgot-password (demo only), /policies/:slug, and a 404 page.

## Features
- Shop: filters (category, price, availability, spice level), sorting, live search suggestions, no-results state, Load More.
- Product: gallery, variant selector updating price, quantity capped by stock, PIN checker UI (6 digits, says "Availability confirmed on WhatsApp", never claims universal delivery), Add to Cart, Buy Now (only that item, existing cart untouched), wishlist, related products, sticky mobile Add to Cart bar.
- Cart: quantity controls, remove with confirm dialog, Save for Later, coupon valid/invalid, summary, empty and out-of-stock states, block checkout when empty, persist in localStorage.
- Checkout (3 steps): Customer Details (Indian mobile: 10 digits starting 6-9), Delivery Address (6-digit PIN, all fields, Home/Work, local saved addresses), Review (Edit links, preferred payment radio, WhatsApp message preview, "Place Order on WhatsApp", "Copy Order Details"). Keep data when going back. Show: "No payment is taken on this website. We confirm your order on WhatsApp and share payment details."
- WhatsApp flow: ONE function in utils/whatsapp.ts builds the message so cart, review and WhatsApp text always match. Open https://wa.me/{number}?text={encodeURIComponent(message)} in a new tab. Create the local order ONCE (disable button, guard double clicks), status "Awaiting confirmation on WhatsApp", reference like SLH-YYMMDD-XXXX. Then go to /order-request/:orderId ("Almost Done! Send Your Order on WhatsApp", Open WhatsApp Again, Copy Order Details, "WhatsApp didn't open?" fallback). Clear the cart only after the order is created.
- Honesty: never say "payment successful" or "order confirmed". Show "Demo order. Your order is final only after confirmation on WhatsApp."
- Orders (local): list, details, tracking timeline (Awaiting confirmation, Confirmed, Preparing, Shipped, Out for Delivery, Delivered, Cancelled, Returned) labelled demo, cancel an awaiting order. Status enums defined in one place.
- Pricing: all math in utils/pricing.ts only. Validate quantity, stock, coupon and required fields before creating an order.
- Quality: toasts, skeletons, empty states, accessible labels, focus states, keyboard navigation, lazy images with fallback, responsive from 360px up, page titles.

## Deployment
vercel.json with SPA rewrite, public/_redirects for Netlify, .gitignore, README (install, run, build, change WhatsApp number, edit products, deploy to Vercel via GitHub).

## Phases (stop after each for my approval)
1. Setup, tokens, config, data, contexts, utils, Header, Footer, Home
2. Shop, Category, Search, Product page
3. Cart, Checkout, WhatsApp flow, Order Request page
4. Account, Orders, Tracking, Wishlist, policies, 404
5. QA of all flows, mobile check, no console errors, `npm run build` passes

Start with Step 0 and the plan only.