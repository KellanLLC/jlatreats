# JLA Sweet Treats

Marketing site for **JLA Sweet Treats** by Samantha Jackson — small-batch, hand-dipped
chocolate strawberries, Oreos, pretzels, cake pops & dessert cups in Baltimore / Dundalk, Maryland.

A single-page, dependency-free static site (vintage-patisserie editorial style — blush & gold,
hand-dipped). No build step, no frameworks.

## Structure

```
site/
  index.html        # the page
  css/
    tokens.css      # design tokens (colour, type, spacing, motion, textures)
    styles.css      # all component styles
  js/
    main.js         # scroll reveals, the order-form modal, mobile "What we dip" drawer
  assets/           # images, the process video, fonts-as-images, textures
content/            # raw source photos/videos from the client (working material; not used at runtime)
```

## Running locally

It's plain static files — open `site/index.html`, or serve the folder:

```bash
# from the repo root
python -m http.server 8000 --directory site
# then visit http://localhost:8000
```

## Deploying

Publish the **`site/`** folder as the web root (e.g. Netlify "publish directory" = `site`,
GitHub Pages from `/site`, Cloudflare Pages output dir = `site`). Nothing to build.

## Highlights

- Full-bleed photographic hero; torn-paper transitions between the cream and chocolate bands.
- "What we dip" menu as a tilted card (breakout layout on desktop; a tap-to-open side drawer on mobile).
- "For every celebration" two-column index; gallery collage; founder note on cream cardstock.
- Order form modal that composes an email to JLAsweets1821@gmail.com.
- Responsive, reduced-motion aware, and Data-Saver aware (swaps the looping video for its poster).

## Contact

Instagram [@jla_sweet_treats](https://www.instagram.com/jla_sweet_treats/) · 443·989·7277 · JLAsweets1821@gmail.com
