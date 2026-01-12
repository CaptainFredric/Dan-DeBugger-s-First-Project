# Project Notes

## Overview
- Portfolio landing page for "Dan DeBugger".
- Sections: About Me, Technology Stack, Projects.
- Tech: Plain HTML/CSS with Font Awesome icons.

## Context Points
- Brand name: Dan DeBugger — cheeky, playful, confident.
- Color palette: primary `#6030b1`, hover `#5d3eff`, text `#242424`.
- Typography: Headings `Roboto`, body `Lato` from Google Fonts.
- Motion policy: respect `prefers-reduced-motion`; subtle hover scales/translates.
- Accessibility: `sr-only` utility for icon labels; semantic headings; alt text.
- Navigation: anchors to `#languages`, `#projects`, `#contact` with smooth scroll.
- Projects: overlay uses `::before` dark layer (`z-index: 1`) and content layer (`z-index: 2`).
- Icons: Font Awesome (via kit); social + project action icons.

## Repo Structure
- `Git.html`: Main page markup.
- `Git.CSS`: Styles for layout, hover effects, tooltips, animations.
- `assets/`: Images and icons used by the page.

## Key Decisions & Behaviors
- **Navbar & Links**: Uses `link__hover-effect` with subtle translateY hover.
- **About Me**:
  - Circular photo mask with shadow.
  - "Thumbs-up" lightweight shake animation; respects `prefers-reduced-motion`.
- **Technology Stack**:
  - Badge grid with `.language_img--wrapper` hover brightness/scale.
  - Tooltip appears after a 0.5s hover delay; label reveal below badge.
  - Links point to official docs (MDN, framework sites).
- **Projects Overlay**:
  - Dark overlay via `.project_wrapper::before` with `z-index: 1`.
  - Project description layer `.project_description` above overlay (`z-index: 2`), fades in on hover.
  - Link icons inside `.project_description--links`: `fab fa-github` and `fas fa-link` with scale/color hover.
  - `.project_wrapper` is `position: relative` to anchor absolute children.
- **Contact Section**:
  - CTA text and quick links (Email, LinkedIn, GitHub).
  - Styled icons with hover feedback.

## Current Links
- GitHub: `https://github.com/CaptainFredric/Dan-DeBugger-s-First-Project`
- External link: placeholder currently mirrors GitHub; update when you have a live site.
- LinkedIn: `https://www.linkedin.com/in/aden-cisneros/`
- Email: `mailto:dan.debugger@example.com`

## How To Preview
- Open `Git.html` directly in a browser, or run a simple local server:

```bash
# macOS
python3 -m http.server 8080
# then visit http://localhost:8080/Git.html
```

## Next Ideas / TODOs
- Add more projects (images + descriptions + links).
- Make navbar links scroll to sections (`#languages`, `#projects`).
- Add responsive adjustments for mobile (spacing, font sizes).
- Replace placeholder external link with your live project URL.
- Consider adding a lightweight README with screenshots.
- Add smooth scrolling (done) and verify on mobile.
- Add section screenshots in README.
- Optional: analytics (privacy-respecting) to measure visits.

## Audience + Voice
- Audience: recruiters, collaborators, and peers.
- Voice/Tone: confident, helpful, and slightly cheeky (on-brand).

## Project Card Schema
- Image (SVG or PNG under `assets/`)
- Title (short, action-oriented)
- Stack (comma-separated technologies)
- Description (~1–2 sentences, value-focused)
- Links (GitHub and Live)

## Deployment Notes
- GitHub Pages: enable Pages on `main`, root path, open published URL.
- Custom domain: add `CNAME` file and configure DNS to point to Pages.

---
This file exists to preserve context for future sessions. Update it as decisions change.