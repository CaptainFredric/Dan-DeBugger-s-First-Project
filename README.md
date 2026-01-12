# Dan DeBugger — Portfolio

A simple, fast portfolio site for showcasing projects and tech stack. Built with semantic HTML and modern CSS, designed to be easy to host (e.g., GitHub Pages) and extend.

## Features
- Clean sections: About, Technology Stack, Projects
- Hover overlay on projects with description and action icons
- Accessible tooltips and labels; respects `prefers-reduced-motion`
- Lightweight, dependency-free (Font Awesome via CDN)

## Tech Stack
- HTML5, CSS3
- Font Awesome icons

## Getting Started

Preview locally:

```bash
# From repo root
python3 -m http.server 8080
# Open http://localhost:8080/Git.html
```

## Project Structure
- `Git.html` — main page
- `Git.CSS` — site styles
- `assets/` — images, SVGs, optional resume
- `notes.md` — session/context notes to keep decisions and TODOs

## Customize
- Update social links in `Git.html`:
  - LinkedIn: `https://www.linkedin.com/in/dan-debugger`
  - GitHub: `https://github.com/CaptainFredric`
  - Email: `mailto:dan.debugger@example.com`
  - Resume: `./assets/DanDeBugger_Resume.pdf`
- Update project cards in the `#projects` section: image, title, stack, description, and action links.
- Add more tech badges in `#languages` (use the existing badge pattern).

## Deployment (GitHub Pages)

Option A: Deploy from `main` (root contains `Git.html`)
1. Push to GitHub.
2. In repo settings → Pages, set source to `main` and root.
3. Visit the published URL.

Option B: Static hosting (Netlify/Vercel)
- Drag-and-drop the repo or configure to serve `Git.html` from root.

## Roadmap
- Add more projects and screenshots
- Mobile optimizations (spacing, font sizes)
- Smooth scroll for navbar anchors
- Optional contact section with form or mailto CTA

## Author
- Coder name: **Dan DeBugger.

## License
This portfolio is intended for personal use. You may adapt the structure and styles; please replace content and assets with your own.
