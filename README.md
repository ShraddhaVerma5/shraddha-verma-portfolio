# Shraddha Verma — Portfolio

React 18 + Vite. Component-based, fully responsive, accessible, with an AI assistant ("Vaani") served by a Vercel serverless function.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview
```
In local dev the chatbot uses its built-in keyword answers (no `/api`). To test the real AI locally, use `npx vercel dev` with `ANTHROPIC_API_KEY` in `.env.local`.

## Deploy (Vercel — recommended)
1. Push to GitHub, import the repo in Vercel (framework: Vite, auto-detected).
2. Add env var `ANTHROPIC_API_KEY` (Project → Settings → Environment Variables).
3. Deploy. `/api/chat` is picked up automatically.
Without the key the site still works; Vaani falls back to keyword answers.

Static-only hosts (Netlify drop, GitHub Pages) work too, but `/api/chat` won't exist, so the chatbot stays on fallback answers.

## Structure
```
api/chat.js          serverless AI endpoint (key stays server-side)
api/_resume.js       resume context for the assistant (server only)
src/data/            all content: experience, projects, skills, education, profile
src/components/      one component + CSS file each
src/hooks/           useReveal, useScrolled
src/services/        chat client + fallback answers
```
Edit content in `src/data/` only. If you change it, also update `api/_resume.js`.

## Before going live
- Replace each project's `link` in `src/data/projects.js` with its own repo (all currently point to your GitHub profile).
- Add an Open Graph image (`public/og.png`) and an `og:image` tag in `index.html`.
- Add your domain to a `sitemap.xml` / Search Console.
