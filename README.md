# More Labs website

The More Labs landing page, built with Next.js (App Router), React and TypeScript. It renders as a single static page, so it is fast and cheap to host.

## Run it

You need Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Deploy

**Vercel (recommended):** push this folder to a GitHub repo, import it at vercel.com/new, and press Deploy. No settings or environment variables are needed. Then add `morelabs.africa` under Project → Settings → Domains.

Any other host that runs Node (Netlify, Render, a VPS) works with `npm run build && npm start`.

Before going live, check `SITE.url` in `lib/content.ts`. It is set to `https://morelabs.africa` and drives the canonical URL and the link preview card.

## Where things live

| What | File |
| --- | --- |
| All copy: verticals, services, stats, timeline, team, contacts | `lib/content.ts` |
| Brand logos in the moving strip (SVG paths) | `lib/logos.ts` |
| Brands shown as typeset names | `CLIENT_NAMES` in `lib/content.ts` |
| Colours, type and layout | `app/globals.css` (tokens at the top under `:root`) |
| Page order | `app/page.tsx` |
| Images | `public/images/` |
| Browser tab icon, link preview image | `app/icon.png`, `app/apple-icon.png`, `app/opengraph-image.png` |

### Components

- `Nav`: sticky header, active section highlight, mobile menu
- `Hero` and `HeroField`: headline, property index, and the animated street-grid canvas
- `Clients`: the two moving brand strips
- `Verticals`, `NawaStack` and `VerticalDrawer`: the four property cards and the side panel each one opens
- `Labs`: services accordion
- `TrustGap`, `Story`, `Team` and `Contact` (with the brief builder), then `Footer`
- `UIProvider`: shared state for the side panel, the toast and copy-to-clipboard
- `Motion`: scroll reveals, count-up numbers and the progress bar

## Common edits

**Add a team member.** Put a portrait in `public/images/team/` (4:5 ratio, at least 640 × 800). Add an entry to `TEAM` in `lib/content.ts`. Then delete the "Open seat" card at the bottom of `components/Team.tsx`, so the row stays at four.

**Swap a typeset brand name for its real logo.** Get the official SVG and add it to `LOGOS` in `lib/logos.ts` with its `viewBox`, its path data and `ratio` (width ÷ height). Remove the name from `CLIENT_NAMES`. Logos render in one colour, so use a single-colour version of the mark.

**Change a vertical.** Edit its entry in `VERTICALS` in `lib/content.ts`. The card, the hero index and the side panel all read from it.

## Notes

- Fonts are self-hosted from npm (`@fontsource`), so the build never calls Google. Archivo and Bricolage Grotesque include the Vietnamese subset, which carries the Yorùbá and Igbo dot-below letters (ọ, ẹ, ụ).
- The contact form doesn't post anywhere. It builds an email to the right inbox (hello@ for agency work, editorial@ for press and story tips) and offers a copy button as a fallback. To receive briefs directly instead, add a route handler at `app/api/brief/route.ts` that sends through an email service such as Resend or Postmark.
- Animation respects the visitor's reduced-motion setting. The hero canvas also pauses when it scrolls out of view.
- Logo paths come from Simple Icons and gilbarbara/logos (both CC0). The trademarks belong to their owners.
