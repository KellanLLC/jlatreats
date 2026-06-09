# JLA Sweet Treats

Marketing site for **JLA Sweet Treats** by Samantha Jackson — small-batch, hand-dipped
chocolate strawberries, Oreos, pretzels, cake pops & dessert cups in Baltimore / Dundalk, Maryland.

A single-page, dependency-free static site (vintage-patisserie editorial style — blush & gold,
hand-dipped). No build step, no frameworks.

## Structure

The repo root **is** the web root.

```
index.html        # the page
css/
  tokens.css      # design tokens (colour, type, spacing, motion, textures)
  styles.css      # all component styles
js/
  main.js         # scroll reveals, the order-form modal, mobile "What we dip" drawer
assets/           # images, the process video, textures, favicon
content/          # raw source photos/videos (local only — gitignored, not used at runtime)
```

## Running locally

It's plain static files — open `index.html`, or serve the folder:

```bash
# from the repo root
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

The repo root is the web root, so there's nothing to build. On **Cloudflare Pages**:
framework preset **None**, build command empty, build output directory **`/`** (leave blank).
Same idea on Netlify (publish directory `.`) or GitHub Pages (deploy from root).

## Highlights

- Full-bleed photographic hero; torn-paper transitions between the cream and chocolate bands.
- "What we dip" menu as a tilted card (breakout layout on desktop; a tap-to-open side drawer on mobile).
- "For every celebration" two-column index; gallery collage; founder note on cream cardstock.
- Order form modal that composes an email to JLAsweets1821@gmail.com.
- Responsive, reduced-motion aware, and Data-Saver aware (swaps the looping video for its poster).

## Contact

Instagram [@jla_sweet_treats](https://www.instagram.com/jla_sweet_treats/) · 443·989·7277 · JLAsweets1821@gmail.com
