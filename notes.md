# Project Notes — Session 2 (Jan 12, 2026)

## Overview
- Portfolio landing page for "Dan DeBugger" (coder name); real name: Aden Cisneros.
- Sections: About Me, Technology Stack, Projects (3 stacked cards), Contact, footer note.
- Tech: Plain HTML/CSS with Font Awesome icons; no build tools.

## Latest Session Changes (Jan 12)
- **Projects Hover**: Consolidated duplicate/buggy CSS rules into one clean set. On hover, image blurs/scales, dark overlay (`#1c1d25` at 70% opacity) appears, and left-aligned text + GitHub/link icons fade in from the bottom.
- **Project Layout**: Changed from flex-wrap horizontal to vertical stack (`flex-direction: column`). Cards are full-width up to 720px max, with 40px margin between them.
- **Project Overlay Text**: Positioned absolutely with left alignment (48px from edge), 40px font title, 14px stack, description, and icons at the bottom. Icons only show on hover (opacity 0 → 1).
- **Contact Section**: Moved footer clarification into contact as a small note below the icon links with parentheses and a pun: `(Dan DeBugger is my coder name; Aden Cisneros is my real name—it's not a bug, it's a feature.)`
- **Email Links**: Updated to `captainarmoreddude@gmail.com` with `target="_blank" rel="noopener"`.
- **Removed duplicate CSS**: Deleted old conflicting `.project_description`, `.project_list`, hover rules that were overriding each other.

## Context Points
- Brand name: Dan DeBugger — cheeky, playful, confident. Real identity: Aden Cisneros.
- Color palette: primary `#6030b1`, hover `#5d3eff`, text `#242424`, dark overlay `#1c1d25`.
- Typography: Headings `Roboto`, body `Lato` from Google Fonts.
- Motion policy: respect `prefers-reduced-motion`; subtle hover scales/translates.
- Accessibility: `sr-only` utility for icon labels; semantic headings; alt text on all images.
- Navigation: anchors to `#languages`, `#projects`, `#contact` with smooth scroll (`html { scroll-behavior: smooth; }`).
- **Projects**: Stacked vertically. On hover: image scale(1.07) + blur(5px), overlay dark layer (z-index: 1), text + icons fade/slide (z-index: 2/3).

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
- LinkedIn: `https://www.linkedin.com/in/aden-cisneros/`
- Email: `mailto:captainarmoreddude@gmail.com`
- Resume: `./assets/DanDeBugger_Resume.pdf` (placeholder)

## How To Preview
- Open `Git.html` directly in a browser, or run a simple local server:

```bash
# macOS
python3 -m http.server 8080
# then visit http://localhost:8080/Git.html
```

## Next Ideas / TODOs
- Customize each project card: unique titles, stacks, descriptions, live URLs.
- Add project images to `assets/` (replace placeholder SVGs).
- Mobile responsiveness: adjust font sizes, spacing for small screens.
- Optional: sticky navbar, smooth scroll offset for fixed nav.
- Optional: add smooth scrolling focus-lock for accessibility.
- Analytics (privacy-respecting) to track visits.

## How To Preview & Deploy
```bash
# Local preview
python3 -m http.server 8080
# Open http://localhost:8080/Git.html

# GitHub Pages
# Enable Pages in repo settings, source = main branch, root
# Visit published URL automatically
```

---
Session ended Jan 12, 2026. All major features working. Ready to expand projects and deploy.