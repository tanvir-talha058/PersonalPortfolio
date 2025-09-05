PersonalPortfolio — Tanvir Talha

Overview

This is a single-page, static portfolio built with plain HTML, CSS and vanilla JavaScript. It showcases skills, projects, a resume PDF, and a visual gallery. The site prioritizes a polished, interactive experience with accessibility and responsive design.

Status

- Static HTML/CSS/JS site (no build tools required).
- 3D WebGL content was removed and replaced with vector illustrations and an interactive gallery/lightbox.

Features

- Hero with typing roles and CTA.
- Skills grid with animated skill bars (animated when scrolled into view).
- Projects grid with keyboard-focusable cards and a modal for details.
- Project filters (All / AI / Mobile / CV / Game).
- Visuals & Gallery section with clickable SVG thumbnails and a lightbox (keyboard navigation: Esc, ←, →).
- Contact form (local simulation) and a Copy Email button.
- Responsive design and accessible focus states.

Files of interest

- `index.html` — main page markup and sections.
- `assets/styles.css` — all styles and responsive rules.
- `assets/script.js` — interactive behaviors: rendering skills/projects, filters, modal, gallery lightbox, copy-email, typing effect, scroll reveal.
- `Tanvir_Resume.pdf` — resume PDF used by the Resume section.
- `assets/*.svg` — illustration and gallery thumbnails.

Run locally (PowerShell)

Recommended: serve the folder so images and iframe work correctly.

# from repository root
python -m http.server 5500
# then open http://localhost:5500/index.html in your browser

(If you prefer npm-based static server)

npx serve -s . -l 5500

Notes and customization

- To update skills/projects: edit `assets/script.js` (top: `skills` and `projects` arrays).
- To replace images/screenshots: put files in `assets/` and update `index.html` thumbnail `src` attributes or add new thumbnails.
- To change the contact email: update the `mailto:` link in `index.html` (`#contact-email`) and the copy button will use that value.
- To add project demo or GitHub links, set `demo` in each project object in `assets/script.js`.

Accessibility & keyboard

- Project cards are focusable (Tab) and open with Enter/Space.
- Lightbox supports Escape to close and Arrow keys to navigate.

Deployment suggestions

- GitHub Pages (static): push to the `main` branch and enable Pages in repository settings.
- Netlify / Vercel: drag-and-drop deploy or connect the repo for continuous deploys.

Quality notes

- No build step required; the site is intentionally small and portable.
- If you want to reintroduce 3D or GLTF models later, I can add a lightweight loader and defer assets for performance.

Next steps I can implement

- Add project thumbnails linked to project pages or GitHub repos.
- Add smooth animated transitions for filtering and lightbox.
- Optimize images and add lazy-loading.

License

MIT — feel free to reuse and adapt.

---

If you want a tailored README (shorter or with deployment pipeline instructions for Netlify/Vercel or to convert into a Next.js project), tell me which and I will update it.
