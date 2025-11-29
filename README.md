# Ahmad Soboh — Portfolio

Personal portfolio for showcasing internships, engineering projects, and technical writing. Built with Vite + React, Tailwind CSS, and Framer Motion to deliver a fast, animated experience on any device.

## ✨ Highlights

- Responsive hero, navigation, and sectioning for quick scanning
- Structured experience, education, and project data rendered from strongly typed arrays
- Custom Tailwind theme with light/dark support, Motion primitives, and reusable UI components (shadcn/radix)
- Project catalog grouped by domain with summary table for quick comparisons
- Contact + toast components wired for future integrations

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS, shadcn UI, Radix Primitives
- **Animation:** Framer Motion
- **Tooling:** ESLint, PNPM/NPM, React Router, TanStack Query

## 🚀 Getting Started

```bash
# Clone and enter the repo
git clone <repo-url>
cd ahmad-soboh-portfolio-main

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs on `http://localhost:5173` by default with hot-module reloading.

## 🧱 Project Structure

```
src/
├─ components/     # Hero, About, Experience, Projects, etc.
├─ pages/          # Index + NotFound routes
├─ hooks/          # Custom hooks (mobile, toast)
├─ lib/            # Utilities
├─ assets/         # Images
└─ styles          # Tailwind + global tokens
```

## 📦 Production Build

```bash
npm run build   # Outputs static assets into dist/
npm run preview # Preview the build locally
```

Deploy `dist/` to any static host (Vercel, Netlify, GitHub Pages, etc.).

## 🤝 Contributing

Open issues or PRs if you spot bugs, performance hiccups, or want to propose new sections. For major changes, create a feature branch and include screenshots/notes so review is easier.

## 📄 License

This project is distributed under the MIT License. See `LICENSE` for details.
