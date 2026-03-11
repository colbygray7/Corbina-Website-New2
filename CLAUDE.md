# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run build:css    # Build and minify Tailwind CSS (src/input.css → dist/output.css)
npm run watch:css    # Watch and rebuild CSS on changes
npm run serve        # Start Python dev server on port 8080
node screenshot.js   # Take a 1920x1080 screenshot → screenshot-latest.png
```

### Slash Commands (use via Claude Code skills)
- `/screenshot` — Capture current page via Puppeteer
- `/compare` — Compare `screenshot-latest.png` against the reference image
- `/preview` — Open `index.html` in browser
- `/dev` — Start local dev server on port 8080

## Architecture

This is a **single-page static website** (`index.html`) built with Tailwind CSS. All content lives in one file — no framework, no build step beyond CSS.

- **CSS pipeline**: `src/input.css` → Tailwind CLI → `dist/output.css` (linked in `index.html`). Always run `npm run build:css` after editing classes not previously used.
- **Tailwind config**: `tailwind.config.js` scans only `index.html`; only classes present in that file are compiled.
- **Fonts**: Cormorant Garamond (`.font-display`, serif), Syne (`.font-heading`), Space Grotesk (`.font-sans` / body) — loaded from Google Fonts.
- **Screenshots**: `screenshot.js` uses Puppeteer at 1920×1080 viewport, saves to `screenshot-latest.png`.

### Color Palette (defined in `tailwind.config.js`)
| Token | Hex | Usage |
|---|---|---|
| `sand` | `#F8F5EF` | Page background |
| `sand-dark` | `#EDE8DF` | Testimonials section bg |
| `ocean` | `#1A3A4A` | Primary dark color, About/Contact bg |
| `gold` | `#C4A882` | Accent, labels, dividers |
| `body` | `#2C2C2C` | Footer bg |
| `muted` | `#6B7280` | Secondary text |

### Page Sections (top to bottom in `index.html`)
1. **Nav** — Fixed, white text; transitions to sand bg + ocean text on scroll (`.scrolled` class via JS)
2. **Hero** — Full-screen `<video autoplay muted loop>` background with centered overlay text. Video source is a Pexels CDN URL — swap `<source src="...">` to use a local `.mp4` file.
3. **About** (`#about`) — `bg-ocean`, grain texture overlay, pull quote, headshot portrait + two bio columns, stats
4. **Testimonials** (`#testimonials`) — `bg-sand-dark`, 3-column card grid
5. **Contact** (`#contact`) — `bg-ocean`, two-column: contact info left, form right
6. **Footer** — `bg-body`, DRE number, copyright

### Custom CSS Components (in `src/input.css`)
- `.btn-primary` — ocean bg, white text
- `.btn-outline` — white border/text (for use on dark/image backgrounds)
- `.btn-outline-dark` — ocean border/text (for use on light backgrounds)
- `.section-label` — gold, uppercase, wide tracking
- `.listing-card` — white card with hover scale
- `.nav-link` — ocean text with gold hover

## Design Recreation Workflow

When pixel-matching a reference image:

1. Edit `index.html`
2. Run `/screenshot` to capture the rendered page
3. Run `/compare` to diff against the reference image
4. Fix mismatches (spacing, colors, fonts, alignment)
5. Repeat until within ~2–3px of the reference

Use `https://placehold.co/` for missing images.
