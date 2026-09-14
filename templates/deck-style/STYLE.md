# Deck template style (canonical)

The one visual system for every Minds & Models deck AND data report: sales decks (brand
and retailer), investor decks, intro decks, client data reports. It is a direct port of
the product's own look, so deliverables and product read as one company.

**Sources of truth, in order:**

1. `analytics-assistant-fe/src/styles.css` (the chat assistant frontend, the fullest
   implementation, opens with the four-rule manifesto)
2. `frontend/src/styles/landing.css` (the new frontend's public landing page, namespaced `.mm`)
3. `decks/2026-09-10-brand-sales-deck/index.html` (the reference deck build of this system)
4. `templates/deck-style/skeleton.html` (this directory: copy it to start any new deck)

For data reports, start from `templates/data-report/skeleton.html` instead: same system,
plus the report furniture (co-brand row, stat tiles, persona cards, avatars) and the four
print-chart patterns.

The dashboard app itself (`frontend/src/` under `/app`) uses Inter + Tailwind + shadcn and is
NOT this style. `brand/tokens.css` (warm paper, Inter, per-client accents) is fully legacy:
kept only to re-render old deliverables, never a starting point.

## The four rules

1. **Paper, not chrome.** One off-white ground (`--paper:#fbfbfa`) with a 22px dot grid at
   8.5% ink and a soft white light source above centre. Nothing has a hard edge.
2. **Depth by shadow, not by border.** Every surface carries a three-part shadow stack
   (`--sh-1/2/3`): a 1px contact line, a mid diffusion, a very large very faint ambient.
   Borders are hairlines under 8% ink, present only to keep white legible on white.
3. **Colour is identity.** The page is greyscale except one accent blue (`--accent:#2f6df6`)
   and the twelve segment palettes. A colour always means "this specific segment", never
   decoration. Near-black `#16181d` is reserved for the one thing that acts or commits
   (the dark node, the send button): at most one per slide.
4. **Typography carries the emphasis.** Instrument Sans only, tight tracking, tabular
   numerals for every number. Headlines in two tones: ink carries the claim, the lighter
   half (`.dim`, `--accent-soft`) finishes it.

## Tokens

```css
/* ground */   --paper:#fbfbfa; --paper-lift:#ffffff; --dot:rgba(17,24,39,.085);
/* ink */      --ink:#14161b; --ink-2:#565d6b; --ink-3:#8d94a2; --ink-4:#b3b9c4;
/* lines */    --hair:rgba(16,24,40,.07); --hair-2:rgba(16,24,40,.11);
/* accent */   --accent:#2f6df6; --accent-soft:#6f9ae8; --accent-wash:#eef4ff; --accent-edge:#cfe0ff;
/* status */   --pos:#15803d (live dot #16a34a); --neg-bg:#fef3f2; --neg-ink:#b42318;
/* commit */   #16181d (near-black, buttons and the dark node only)
/* shadows */  --sh-1 / --sh-2 / --sh-3 (three-part stacks, see skeleton)
/* radii */    --r-sm:10px; --r-md:16px; --r-lg:22px; --r-xl:28px;
```

Ink ramp usage: `--ink` headlines and bold, `--ink-2` body, `--ink-3` labels and secondary,
`--ink-4` captions, placeholders, page numbers, scope footers.

## Type

Instrument Sans from Google Fonts (`ital,wght@0,400..700`), with
`font-feature-settings:'cv05' 1,'ss01' 1` and base `letter-spacing:-.006em`.

| Role | Size / weight / tracking |
|---|---|
| h1 (cover) | 54px / 600 / -.034em, line-height 1.08 |
| h2 (slide claim) | 33px / 550 / -.028em, line-height 1.14 |
| .sub (cover subline) | 18px / 400, `--ink-2` |
| .lead | 14.5px / 400, `--ink-2` |
| card title .ct | 19px / 600 / -.022em |
| big stat .fig .v | 40px / 600 / -.038em, tabular-nums |
| eyebrow .label | 11px / 600, uppercase, +.09em, `--ink-3` |
| micro labels (.cm, .l, .k) | 9.5–10px / 600, uppercase, +.085em, `--ink-4` |
| scope footer | 9.5px, `--ink-4` |

Weight 550 exists because the font is variable: use it for h2-level headings, as the
frontends do. Numbers are always `font-variant-numeric:tabular-nums`.

## The twelve segment palettes

Each segment is an `{ink, fill, edge}` triplet (from the product's `segments.ts`, both
frontends carry the identical list). Used for mention chips, avatar rings, and any chart
series that means a segment:

| Segment | ink | fill | edge |
|---|---|---|---|
| Dawn Trades | `#B45309` | `#FEF3C7` | `#FCD34D` |
| Corridor Commuter | `#1D4ED8` | `#DBEAFE` | `#93C5FD` |
| Gym Regular | `#047857` | `#D1FAE5` | `#6EE7B7` |
| Suburban Parent | `#BE185D` | `#FCE7F3` | `#F9A8D4` |
| Young Streetwear | `#6D28D9` | `#EDE9FE` | `#C4B5FD` |
| Office Professional | `#0E7490` | `#CFFAFE` | `#67E8F9` |
| Value Senior | `#4D7C0F` | `#ECFCCB` | `#BEF264` |
| Everyday Mainstream | `#475569` | `#E2E8F0` | `#CBD5E1` |
| Long-Haul Transit | `#C2410C` | `#FFEDD5` | `#FDBA74` |
| City-Break Tourist | `#0284C7` | `#E0F2FE` | `#7DD3FC` |
| Night Dorm | `#4338CA` | `#E0E7FF` | `#A5B4FC` |
| Low-Signal | `#64748B` | `#F1F5F9` | `#CBD5E1` |

## Component vocabulary (all in skeleton.html)

| Class | What it is |
|---|---|
| `.slide` / `.slide.center` | 1280x720 slide on the dotted paper; centered variant for covers |
| `.wm` / `.wm.sm` | wordmark as a currentColor alpha mask (aspect 970:97), embedded base64 |
| `.top`, `.brand`, `.meta` | slide header strip |
| `.label`, `h1`, `h2`, `.dim`, `.sub`, `.lead` | headline system, two-tone claims |
| `.scope`, `.pageno` | scope footer (caveats, n, k>=25) and page number, pinned bottom |
| `.card` (+`.cm .ct .cb .cf`), `.grid2/.grid3` | white sheet cards, sh-1, 22px radius |
| `.core` | the dark node, near-black, one per slide max |
| `.pill` (+`.dot`), `.chip`, `.tile` | round pills, neutral chips, accent-wash icon tile |
| `.mn.<segment>` | mention chip: a segment named in text carries its colour |
| `.faces .av` | overlapping avatar pile, white-ringed discs |
| `.quote`, `.note` (+`.blue`), `.vlist` (+`.neg`), `.shield`, `.ph` | text blocks |
| `.fig`, `.row`, `.bars/.brow` | big stat, key-value rows, horizontal bars |
| `.mock` (+`.bar .body .ask .ans .receipt`) | product mock drawn in CSS, never screenshots |
| `svg.i` | inline icons: hand-drawn 24x24 strokes at weight 1.6, no icon library |

## Assets

- Wordmark: embedded in the skeleton as base64 (source: `frontend/public/wordmark.png`,
  `analytics-assistant-fe/src/assets/brand/wordmark.png`). Filled by currentColor.
- Segment avatars: `analytics-assistant-fe/src/assets/segments/*.webp`; pilot-estate
  avatars: `datalayer/avatars/*.png` (crop to alpha bbox, square from top, 320px).
  **Always copy the assets you use into the deliverable directory** so the HTML is
  self-contained.
- Client/partner logos: `decks/logos/`. M&M logo variants: `brand/logo/`.

## Charts (print charts, drawn in SVG/CSS, no libraries)

The report skeleton carries working examples of each pattern; its header comment holds the
full rules. The short version:

- **One measure, one hue:** magnitude series are `--accent`; context or "rest" marks are
  grey (`--ink-3`), which is de-emphasis by design, not an identity.
- **Polarity** (above/below a baseline): accent above, grey below, dashed grey baseline.
  Never two saturated hues.
- **Segments/personas in a chart:** always one row per segment with the name (and avatar
  where useful). Identity is carried by the label, never by hue alone: several segment
  inks are colourblind-indistinguishable when adjacent (measured deutan dE 3.2 for
  Suburban Parent vs Gym Regular), so no pies or scatters keyed by segment colour.
- **Status:** `--pos` / `--neg-ink`, always with a word or icon, never colour alone.
- Text in charts wears ink tokens, never the series colour; numbers tabular; grid lines
  hairline; bars thin (12-14px), flat at the baseline, 4px rounded at the data end;
  >=2px gaps between adjacent fills. Label directly; a legend appears for two or more
  series. Chart titles state the FINDING, not the metric.

## Slides and print

1280x720, `@page{size:1280px 720px; margin:0}`, print block in the skeleton (flat white,
one slide per page). Render PDF with `scripts/render-pdf.sh`. Output locations per
CLAUDE.md: `decks/YYYY-MM-DD-.../` or `clients/<slug>/delivered/YYYY-MM-DD-.../`.

## Don'ts

- No second accent colour, no rainbow charts: accent + ink ramp, segment colours only
  when they mean that segment.
- No hard edges, no heavy borders, no inset "well" surfaces: everything lifts off the
  paper, nothing is cut into it.
- No screenshots of the product: draw mocks in the deck's own CSS (`.mock`).
- No icon fonts or libraries: inline SVG strokes, weight 1.6.
- Near-black only for the thing that acts. Two dark nodes on a slide means the slide
  has two subjects: cut one.
- Content rules (never-lists, scope footers, forwardability) stay in each deck type's
  own SPEC.md. This file owns only the look.
