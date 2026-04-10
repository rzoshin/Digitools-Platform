<div align="center">

<br />

# ⚡ DigiTools

### _Premium digital tools for creators, professionals, and businesses._

Work smarter with a curated suite of powerful AI-powered digital products — all in one place.

<br />

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<br />

---

</div>

## 🚀 About

**DigiTools** is a modern SaaS landing page and storefront for premium digital products. It lets users browse a curated collection of tools — from AI writing assistants to design suites — add them to a cart, and choose a pricing plan that fits their workflow. Built with a clean, responsive UI and smooth UX interactions.

<br />

## ✨ Features

<br />

### 🛒 &nbsp; Interactive Product Cart
Browse premium digital tools and add them to your cart with a single click. Button states update instantly — switching from **Buy Now** to **Added to Cart** — and checking out resets everything cleanly so you can start fresh.

<br />

### 💳 &nbsp; Transparent Pricing Plans
Three clearly structured pricing tiers — **Starter**, **Pro**, and **Enterprise** — displayed side by side so users can compare and choose at a glance. The most popular plan is visually highlighted to guide decision-making.

<br />

### ⚡ &nbsp; Optimistic Data Loading with React Suspense
Product and pricing data are fetched asynchronously using React's `use()` hook with `<Suspense>` boundaries, delivering a smooth loading experience without blocking the UI.

<br />

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework with `use()` hook & Suspense |
| **Vite** | Lightning-fast dev server & bundler |
| **Tailwind CSS v4** | Utility-first styling |
| **DaisyUI** | Component library (badges, buttons, cards) |
| **React Icons** | Icon set (Fi, Ti, Io, Fa, Tb) |

<br />

---

## 📁 Project Structure

```
src/
├── assets/                  # Images & icons
├── components/
│   ├── Banner/              # Hero section
│   ├── Footer/              # Footer + copyright + links
│   ├── GetStarted/          # 3-step onboarding section
│   ├── Join/                # CTA section
│   ├── Navbar/              # Top navigation
│   ├── Pricing/             # Pricing cards
│   ├── Products/            # Product cards + cart
│   │   ├── ProductCard.jsx
│   │   ├── Cart.jsx
│   │   └── CartCard.jsx
│   └── Stats/               # Stats banner
├── ui/
│   └── Card.jsx             # Shared card layout wrapper
└── App.jsx
```

<br />

---

## 🏁 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/digitools.git

# Navigate into the project
cd digitools

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

<br />

---

<div align="center">

Made with ❤️ &nbsp;|&nbsp; © 2026 DigiTools. All rights reserved.

</div>