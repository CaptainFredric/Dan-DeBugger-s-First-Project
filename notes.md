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

## Brand Icon (Jan 13–14)
- **Final Icon (Jan 14)**: Replaced custom SVG with a professional PNG shield beetle design.
- File: `assets/dandebugger-icon.png` (512×512 optimized PNG, navy/indigo shield with white "DB" and cyan accents).
- Usage:
  - **Favicon**: Wired in `Git.html` via `<link rel="icon" href="./assets/dandebugger-icon.png" type="image/png">`.
  - **Navbar Logo**: Added to `.personal_logo` alongside "Dan DeBugger" text; styled at 32×32px with flex layout and 10px gap.
- Design notes:
  - Shield/beetle hybrid with "DB" monogram in bold typography.
  - Cyan IO pins and antennae reinforce developer/tech aesthetic.
  - Clean, professional look suitable for use as avatar across platforms (GitHub, LinkedIn, etc.).
- Previous iteration (Jan 13): Experimented with custom SVG designs (geometric shell, syntax shell, hex-processor beetle) before settling on the final PNG.

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
Session ended Jan 14, 2026. Brand icon finalized and integrated into navbar + favicon. All major features working. Ready to expand projects and deploy.

---

# Project Notes — Session 3 (Jan 17, 2026)

## What Changed
- **Projects are now data-driven (no more duplicated HTML cards).**
  - `Git.html`: replaced the three hardcoded `<li class="project">...` blocks with a single container: `<ul class="project_list" id="project_list" aria-label="Projects"></ul>`.
  - `Git.js` (new): added a `projects` array and a renderer that builds the same card markup in JS.
  - Update projects by editing the `projects` array in `Git.js` (title, stack/subtitle, description, image, GitHub URL, live URL). Set `liveUrl: ""` to hide the live link.

- **Microinteractions added**
  - Scroll reveal on project cards using `IntersectionObserver` (`.reveal` → `.is-visible`).
  - Added subtle `:active` press feedback to `.contact__link` and `.resume__action`.
  - Motion-safe: honors `prefers-reduced-motion`.

- **“One more thing” added: Back-to-top button**
  - `Git.html`: added `<button id="backToTop" class="back-to-top" ...>` near the end of `<body>`.
  - `Git.js`: shows after scrolling ~500px and scrolls to top (smooth unless reduced motion).
  - `Git.CSS`: styles `.back-to-top` and `.back-to-top.is-visible`.

- **Resume PDF updated**
  - Local command used: copied a real PDF into `assets/DanDeBugger_Resume.pdf` (overwriting the placeholder).

## Files Touched
- `Git.html`
  - Adds `<script src="./Git.js" defer></script>`.
  - Projects list is now empty and populated by JS.
  - Adds the back-to-top button markup.
- `Git.js` (new)
  - Renders projects + scroll reveal + back-to-top behavior.
- `Git.CSS`
  - Adds `.reveal` animation styles and reduced-motion fallback.
  - Adds `:active` press states.
  - Adds back-to-top button styles.

## Preview / Environment Notes
- Node was not available when attempting `node --check Git.js` (command not found). This is fine; the site is plain HTML/CSS/JS.
- If `python3 -m http.server 8080` is busy, use another port:

```bash
python3 -m http.server 8090
# then http://localhost:8090/Git.html
```

## Next Time (High-Value TODO)
- Replace placeholder project entries in `Git.js` with real projects (and real images).
- Consider adding `tabindex="0"` support / focus styling on `.project_wrapper` if you want keyboard users to access overlays (currently hover-driven).

---
Session ended Jan 17, 2026. Projects are now maintainable via a single JS data source; added scroll reveal + back-to-top.