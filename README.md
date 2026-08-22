# A.K Singh Signage — React + Tailwind

A componentized React/JSX rebuild of the original static HTML page, styled
with Tailwind CSS. Verified with a production `vite build` (no errors).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## Structure

```
src/
  App.jsx                 – composes all sections, owns lightbox state
  index.css                – Tailwind directives + @layer components
                              (nav-link, btn-primary/outline, deco-sticker,
                              gal-item/overlay/upload, reveal, etc.)
  hooks/useReveal.js       – IntersectionObserver scroll-reveal hook
  data/gallery.js          – gallery item + filter data
  components/
    Navbar.jsx             – sticky nav, scroll shadow, mobile menu, active link
    Hero.jsx                – hero copy + floating sticker decorations
    About.jsx               – "who we are" cards + copy
    Services.jsx            – specialities grid (FeatureCard)
    Gallery.jsx              – filterable grid, image upload, ContactCard-style items
    Lightbox.jsx             – modal preview (Escape / click-outside to close)
    Location.jsx             – Google Maps embed
    Contact.jsx               – call / address / hours cards
    Footer.jsx                 – brand mark + quick links
    icons.jsx                  – shared outline SVG icon set
```

## What changed vs. the original

- All vanilla-JS DOM manipulation (menu toggle, scroll reveal, gallery
  filter, lightbox, image upload) is now React state/hooks — no
  `document.getElementById` anywhere.
- Utility classes (colors, spacing, typography, gradients, radii) are
  Tailwind, using arbitrary values (`bg-[#0a0a0a]`, `bg-[radial-gradient(...)]`)
  where the original used inline hex/gradient styles, so the palette is
  reproduced exactly.
- Repeated inline styles that acted like component classes (`.deco-sticker`,
  `.nav-link`, `.btn-primary`, `.gal-item`, `.reveal`, …) are now Tailwind
  `@layer components` classes built with `@apply` in `src/index.css`,
  instead of a separate hand-written CSS file.
- `animation-delay` per sticker is still passed via inline `style`, since
  Tailwind has no arbitrary `animation-delay` utility — everything else is
  a class.
- Gallery items and filters are driven by a small data array
  (`src/data/gallery.js`) instead of six copy-pasted `<div>` blocks.
