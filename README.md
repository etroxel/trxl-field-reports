# trxl-infographics

Interactive HTML infographics for TRXL podcast episodes, served via **GitHub Pages** at
**https://assets.trxl.co/**. Each episode gets its own folder and URL; Ghost (trxl.co) links
out to it with a preview card rather than embedding (dark infographic vs. white Ghost theme).

## Layout

```
/index.html              landing page (list of episodes)
/CNAME                   custom domain → assets.trxl.co
/230-keith-gerchak/      one self-contained folder per episode
  index.html             the infographic (renamed from "Episode Infographic.html") + OG meta
  og.png                 1200×630 preview image (hero screenshot)
  assets/                CSS tokens, infographic.css, logos, cover art, guest portrait
  content/episode-230.js JS-rendered episode content
```

## Add a new episode

Source bundle lives at
`…/TRXL/TRXL Episodes/[NNN] - [Guest Name]/TRXL Episode Infographic/`.

1. Copy that bundle's `Episode Infographic.html` + `assets/` + `content/` into a new
   `NNN-guest-name/` folder here. Rename the HTML to `index.html`. **Do not** copy the slide
   deck (`Episode Slide Deck.html`, `deck-stage.js`, `slides/`, PDF).
2. **Inject static OG meta** into `index.html` `<head>` — REQUIRED because content is
   JS-rendered, so scrapers (LinkedIn, Ghost bookmark card) only read static tags. Set
   `<title>`, `meta description`, and `og:title`/`og:description`/`og:url`/`og:image` with
   absolute `https://assets.trxl.co/NNN-guest-name/...` URLs. (Values map from
   `window.TRXL_EPISODE` in the content JS.)
3. Add `og.png` (1200×630) — screenshot the rendered hero (serve locally, capture at
   1200×630).
4. Add a card to the root `index.html` list.
5. Commit + push. Live within ~1 min at `https://assets.trxl.co/NNN-guest-name/`.

## Distribution

- **Leadership Edge newsletter (email) — primary:** insert the `og.png` as a linked image +
  a CTA button to `https://assets.trxl.co/NNN-guest-name/`. (Email strips iframes/JS; a linked
  image renders reliably everywhere, unlike bookmark cards in email.)
- **trxl.co static page:** paste the URL on its own line for a Ghost bookmark card, or reuse
  the linked-image + button for consistency.

## Surface it in Ghost

Paste the `https://assets.trxl.co/NNN-guest-name/` URL on its own line in the Ghost editor —
Ghost reads the OG meta and renders a themed **bookmark card** that opens the infographic in
a new tab. (Fallback: an HTML-card button linking to the same URL.)

## One-time setup

- **GitHub:** push this repo (public), then Settings → Pages → Source = `main` / root.
- **Pages custom domain:** set to `assets.trxl.co`, enable *Enforce HTTPS*.
- **Hover DNS (trxl.co):** add CNAME `assets` → `<your-github-username>.github.io`.
