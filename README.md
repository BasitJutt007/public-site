## 🌐 Public Static Site — Content Display via Supabase

This is a statically generated website built with **Next.js** that fetches and displays content (Title + Description) from **Supabase**.

Every time the content is updated through the Admin Panel, this static site is **automatically rebuilt and redeployed** using GitHub Actions + Supabase Edge Functions.

---

## ✨ Features

- 📖 Shows **title** and **description** from Supabase
- 🕒 Displays last updated timestamps for both fields
- 💾 Content fetched at build time (SSG mode)
- 🔁 Automatically **rebuilds & redeploys** on content updates
- 💡 Fully responsive & beautifully styled with Tailwind CSS

---

## 🧠 Tech Stack

| Tech                     | Usage                                      |
| ------------------------ | ------------------------------------------ |
| **Next.js**              | Static Generation (SSG) for performance    |
| **Supabase**             | Content source (Postgres)                  |
| **GitHub Actions**       | Triggers site rebuild when content changes |
| **PM2**                  | Process manager for live app               |
| **DigitalOcean Droplet** | Hosting the final static site              |
| **Tailwind CSS**         | Clean and modern UI styling                |

---

## 🔧 How It Works (Auto-Rebuild Flow)

1. Content is updated via the Admin Panel
2. Supabase updates the database
3. Admin Panel calls a **Supabase Edge Function**
4. That function triggers a **GitHub Action**
5. GitHub connects via SSH to the droplet, pulls the latest code, rebuilds the site using:
   ```bash
   npm run build && pm2 restart public-site
   ```
6. The updated content is live ✨

---

## 📦 Deployment

The static site is deployed on a **DigitalOcean Droplet** using:

- Node.js server with `next start`
- Managed by **PM2**
- Port 3000 (or proxied via Nginx if configured)

---

## 🌐 Live Preview

> URL: http://167.71.236.130:3000/

---

## 🖥️ Local Development

```bash
npm install
npm run dev
```

This runs the app in dev mode at [http://localhost:3000](http://localhost:3000)
