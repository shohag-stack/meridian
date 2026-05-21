# Meridian — Luxury Resort Template

A premium, production-ready website template for luxury resorts and boutique hotels. Built with Next.js 16, Sanity Studio v4, GSAP animations, and Tailwind CSS v4.

---

## What's Included

- **Next.js 16 Frontend** — App Router, Server Components, TypeScript
- **Sanity Studio v4** — Full CMS with custom schemas for accommodations, blog, and site settings
- **Tailwind CSS v4** — Custom design system with brand tokens, utility classes, and component styles
- **GSAP Animations** — Scroll-driven sticky panels, word-split reveals, scrubbed timelines
- **Mock Data** — Ready-to-use placeholder content so you can see the full site before connecting Sanity
- **Booking Filter** — Date + guest filter bar with URL-based state (no backend required)
- **Embla Carousel** — Gallery sliders for accommodation detail pages
- **Email via Resend** — Contact form wired to Resend API
- **Lenis Smooth Scroll** — Buttery smooth scrolling out of the box

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js | 16.2.4 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^4.2.4 |
| CMS | Sanity Studio | ^4.22.0 |
| Animations | GSAP + ScrollTrigger | ^3.15.0 |
| Smooth Scroll | Lenis | ^1.3.23 |
| Forms | React Hook Form | ^7.74.0 |
| Carousel | Embla Carousel | ^8.6.0 |
| Email | Resend | ^6.12.2 |
| Icons | Lucide React | ^1.11.0 |
| React | React | 19.2.x |

---

## Project Structure

```
meridian/
├── frontend/               # Next.js application
│   ├── app/                # App Router pages
│   │   ├── accommodations/ # Listing + detail pages
│   │   ├── blog/           # Blog listing + post pages
│   │   └── contact/        # Contact page
│   ├── components/
│   │   ├── animation/      # AnimatedHeading, SectionHeader
│   │   ├── icons/          # Amenity + UI icons
│   │   ├── sections/       # Page sections (Hero, Features, FAQ…)
│   │   └── ui/             # Reusable UI (AccommodationCard, DateField…)
│   ├── (core)/
│   │   └── fetch/          # Data fetching functions (getAccommodations…)
│   ├── types/              # TypeScript interfaces
│   └── styles/globals.css  # Tailwind v4 design tokens
│
├── studio/                 # Sanity Studio
│   └── schemaTypes/        # Accommodation, Blog, Site Settings schemas
│
└── package.json            # Root workspace config
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- A [Sanity](https://sanity.io) account (free tier works)

### 1. Install dependencies

From the root folder:

```bash
npm install
```

### 2. Set up environment variables

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_read_token

# Optional — for contact form
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=hello@yourresort.com
```

Create `studio/.env.local`:

```env
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

Your **Project ID** and **Dataset** are found in [sanity.io/manage](https://sanity.io/manage).

### 3. Run both servers

```bash
npm run dev
```

This starts:
- **Frontend** → [http://localhost:3000](http://localhost:3000)
- **Sanity Studio** → [http://localhost:3333](http://localhost:3333)

---

## Connecting Sanity

The template ships with mock data so it works out of the box. When you're ready to use real content:

### Step 1 — Create a Sanity project

```bash
cd studio
npx sanity init
```

Or use your existing project by setting the project ID in `.env.local`.

### Step 2 — Deploy the studio

```bash
npm run deploy:studio
```

### Step 3 — Add content

Open your deployed studio (or `localhost:3333`) and add accommodations, blog posts, and site settings.

### Step 4 — Switch from mock data to Sanity

In each fetch function under `frontend/(core)/fetch/`, replace the mock data import with the Sanity client query. Each file has a comment showing exactly where to swap:

```ts
// Replace this:
import { ACCOMMODATION } from "@/data/mockData";
return ACCOMMODATION;

// With this:
import { client } from "@/sanity/client";
import { GETALLACCOMMODATIONS } from "@/queries";
return client.fetch(GETALLACCOMMODATIONS);
```

---

## Design System

All design tokens live in `frontend/styles/globals.css`. Edit them freely to match your brand.

### Colors

```css
--color-primary:       #99023C   /* Deep rose — buttons, accents */
--color-primary-light: #C9034F   /* Hover states */
--color-primary-dark:  #49031E   /* Dark variant */
--color-cream:         #F4E9EE   /* Page background */
--color-neutral-950:   #49031E   /* Headings */
```

### Typography

```css
--font-display: "Playfair Display"   /* Headings */
--font-body:    "Inter"              /* Body text */
```

### Key Utility Classes

| Class | Usage |
|---|---|
| `heading-1` | Hero headings, uppercase |
| `heading-2` | Section headings |
| `eyebrow` | Small uppercase labels |
| `btn btn-primary` | Primary CTA button |
| `btn btn-white` | White button on dark backgrounds |
| `container-site` | Max-width centered container |
| `section` | Standard vertical padding |
| `section-dark` | Dark (primary) background section |
| `section-cream` | Cream background section |
| `property-card` | Accommodation card with hover |

> **Note:** `heading-1` and `heading-2` set `color` directly. To use them on dark backgrounds add `style={{ color: "white" }}` or a `heading-light` utility.

---

## Booking Filter

The booking bar pushes filter state into the URL as search params:

```
/accommodations?checkIn=2026-06-01&checkOut=2026-06-07&adults=2&children=0
```

The `accommodations/page.tsx` server component reads these params and filters the list by:
- **Guest capacity** — `accommodation.guests >= requested`
- **Availability status** — `availability === "available"`
- **Date conflicts** — checks `unavailablePeriods[]` for overlaps (when populated in Sanity)

---

## Amenities System

Amenities use a **boolean map** rather than a freeform array. The single source of truth is `AMENITY_DEFINITIONS` in `studio/schemaTypes/accommodations.ts`:

```ts
export const AMENITY_DEFINITIONS = {
  wifi:      { title: "Wi-Fi",        description: "Free high-speed Wi-Fi" },
  bath:      { title: "Bathroom",     description: "Private en-suite bathroom" },
  // ...
}
```

In Sanity Studio, editors tick checkboxes. In the frontend, only `true` values render. To add a new amenity: add it to `AMENITY_DEFINITIONS`, add its icon to `amenityIcons` in `AccommodationAmenities.tsx`, and it appears automatically in both Studio and the UI.

---

## Animations

### GSAP ScrollTrigger — Features Section

The sticky scroll video panels in `Features.tsx` use a single scrubbed timeline per panel:

- **0–30%** scroll → title words rise into view
- **30–60%** scroll → words hold at centre
- **60–100%** scroll → words exit upward

Scrub is set to `1.2` (seconds of lag) for a smooth, premium feel.

### AnimatedHeading

Drop the `<AnimatedHeading>` component anywhere for a word-split reveal:

```tsx
<AnimatedHeading title="Your Heading Here" className="heading-1 text-white" />
```

Triggers once when the element enters the viewport via `IntersectionObserver`.

> **Note:** GSAP ScrollTrigger conflicts with React StrictMode. Add `reactStrictMode: false` to `next.config.ts` for development.

---

## Deployment

### Frontend — Vercel (recommended)

1. Push to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Set **Root Directory** to `frontend`
4. Add environment variables from your `.env.local`
5. Deploy

### Studio — Sanity hosting

```bash
npm run deploy:studio
```

This deploys to `https://your-project.sanity.studio`.

---

## Customisation Guide

### Changing brand colors

Edit the CSS variables at the top of `frontend/styles/globals.css`:

```css
--color-primary: #your-color;
--color-cream:   #your-background;
```

### Changing fonts

1. Update the Google Fonts import in `frontend/app/layout.tsx`
2. Update `--font-display` and `--font-body` in `globals.css`

### Adding a new accommodation type

1. Add the type string to the `type` union in `frontend/types/index.ts`
2. Add it to the `options.list` array in the Sanity schema (`studio/schemaTypes/accommodations.ts`)

### Adding a new page section

1. Create the component in `frontend/components/sections/`
2. Import and place it in the relevant `page.tsx`

---

## Support

If you have questions or run into issues, reach out via the contact form on the purchase page.

---

## License

This template is licensed for use in a single commercial project. You may not resell or redistribute the source code. See the full license on the purchase page.

---

*Built by [RAYSO.STUDIO](https://rayso.studio)*