# 🏡 Estate Heaven

> A modern, full-stack real estate website template built with Next.js 16, Sanity CMS, Tailwind CSS v4, and TypeScript. Designed to work out of the box with beautiful demo data — connect your own Sanity project when you're ready.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-red?logo=sanity)](https://sanity.io)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

---

## ✨ Features

- **Zero-config demo** — works immediately with built-in dummy data, no Sanity setup required
- **Sanity CMS ready** — add your env vars and switch to live data instantly
- **Property listings** — filterable by status, type, price range, and bedrooms
- **Blog** — full blog with Sanity Portable Text support
- **Agent profiles** — team/agent management via Sanity
- **Contact form** — powered by Resend email API
- **Smooth scrolling** — Lenis scroll integration
- **Responsive** — mobile-first design across all screen sizes
- **SEO ready** — dynamic metadata per page
- **TypeScript** — fully typed throughout

---

## 🗂️ Project Structure

```
estate-heaven/
├── frontend/               # Next.js application
│   ├── app/
│   │   ├── (core)/         # Sanity, fetchers, queries
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   └── properties/
│   ├── components/
│   ├── data/               # Demo/dummy data fallback
│   ├── public/
│   ├── types/
│   ├── .env.example
│   └── package.json
├── studio/                 # Sanity Studio
└── package.json            # Root workspace
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

This starts both the **Next.js frontend** (`localhost:3000`) and the **Sanity Studio** (`localhost:3333`) in parallel.

> The site runs immediately with demo data — no environment variables needed.

---

## 🔌 Connect Your Own Sanity CMS

Once you're ready to use your own content:

### 1. Create a Sanity project

Go to [sanity.io](https://sanity.io), create a new project, and note your **Project ID**.

### 2. Set up environment variables

Copy `.env.example` to `.env.local`:

```bash
cp frontend/.env.example frontend/.env.local
```

Fill in your values:

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Deploy Sanity Studio

```bash
npm run deploy:studio
```

### 4. Add your content

Open your deployed Studio and start adding properties, blog posts, and agents.

---

## ⚙️ Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Optional* | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Optional* | Sanity dataset (default: `production`) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Optional* | Sanity API version |
| `NEXT_PUBLIC_MAP_KEY` | Optional | Map integration API key |
| `GOOGLE_CLIENT_ID` | Optional | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Optional | Google OAuth client secret |
| `RESEND_API_KEY` | Optional | Resend API key for contact form |
| `CONTACT_EMAIL` | Optional | Email to receive contact form submissions |
| `RESEND_FROM_EMAIL` | Optional | From email address for Resend |
| `NEXT_PUBLIC_SITE_URL` | Optional | Your deployed site URL |

> *If Sanity variables are not set, the site automatically falls back to built-in demo data.

---

## 📦 Sanity Content Types

| Schema | Description |
|---|---|
| `property` | Property listings with images, details, and location |
| `post` | Blog posts with Portable Text content |
| `agent` | Real estate agent profiles |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2 | React framework with App Router |
| Sanity | 12.x | Headless CMS |
| Tailwind CSS | v4 | Utility-first styling |
| TypeScript | 5 | Type safety |
| Lenis | 1.3 | Smooth scroll |
| Resend | 6.x | Contact form emails |
| React Hook Form | 7.x | Form handling |
| Embla Carousel | 8.x | Property image carousel |
| Lucide React | — | Icons |

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start frontend + studio in parallel |
| `npm run dev:frontend` | Start frontend only |
| `npm run dev:studio` | Start Sanity Studio only |
| `npm run deploy:studio` | Deploy Sanity Studio |
| `npm run validate` | Validate Sanity template config |

---

## 🌐 Deploy to Vercel

1. Push your repo to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set **Root Directory** to `frontend`
4. Add your environment variables in Vercel dashboard under **Settings → Environment Variables**
5. Deploy

> If you don't add Sanity env vars, the deployed site will use demo data automatically.

---

## 📄 License

MIT License — free to use in personal and commercial projects.

---

## 💬 Support

Built by [Rayso Studio](https://rayso.studio). For questions or issues, open a GitHub issue or reach out via the studio website.