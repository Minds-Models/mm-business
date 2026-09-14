# Brand guidelines (working version)

## Logos (`brand/logo/`)
- `logo_mindsmodels-normal-black.png` / `-white.png` — primary horizontal
- `logo_mindsmodels-square-black.png` / `-white.png` — square mark
- `logo_mindsmodels-modra.jpg`, `-bluebcg-square*.png` — blue variants
- Source PSDs stay on local disk (`Branding/Loga`), not in git.

## Design system for deliverables
- **Canonical system for decks AND reports: `templates/deck-style/STYLE.md`** (paper ground,
  Instrument Sans, one accent `#2f6df6`, depth by shadow). Deck skeleton:
  `templates/deck-style/skeleton.html`; report skeleton (charts, personas, avatars):
  `templates/data-report/skeleton.html`. `tokens.css` is the legacy report palette, kept
  only so old deliverables can be re-rendered — do not start new work from it.
- Deliverables: HTML first (render PDF via `scripts/render-pdf.sh`), generous whitespace,
  stat tiles with tabular numerals.
- Charts: no rainbow palettes — accent + ink-greys, grey means de-emphasis; segment colours
  only when they mean that segment, and identity always carried by the label/avatar, never
  by hue alone; label directly, avoid legends where possible; every chart titled with the
  FINDING, not the metric
  ("Sportovně oblečení muži 25–34 = 40 % večerních návštěv", ne "Návštěvy dle segmentu").

## Tone of voice
- CZ business: formální „Vy", krátké věty, čísla nesou sdělení, žádné superlativy.
- EN investor: confident, concrete, zero buzzwords ("leverage", "synergy" banned).
- Data honesty is part of the brand: label modeled data, show error bands, cite sources.
