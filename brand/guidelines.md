# Brand guidelines (working version)

## Logos (`brand/logo/`)
- `logo_mindsmodels-normal-black.png` / `-white.png` — primary horizontal
- `logo_mindsmodels-square-black.png` / `-white.png` — square mark
- `logo_mindsmodels-modra.jpg`, `-bluebcg-square*.png` — blue variants
- Source PSDs stay on local disk (`Branding/Loga`), not in git.

## Design system for deliverables
- Tokens: `tokens.css`. Warm-paper ground fixed; accent per client.
- Reports: HTML first (render PDF via `scripts/render-pdf.sh`), Inter, generous whitespace,
  stat tiles with tabular numerals, one accent color per document.
- Charts: no rainbow palettes — accent + neutrals; label directly, avoid legends where
  possible; every chart titled with the FINDING, not the metric
  ("Sportovně oblečení muži 25–34 = 40 % večerních návštěv", ne "Návštěvy dle segmentu").

## Tone of voice
- CZ business: formální „Vy", krátké věty, čísla nesou sdělení, žádné superlativy.
- EN investor: confident, concrete, zero buzzwords ("leverage", "synergy" banned).
- Data honesty is part of the brand: label modeled data, show error bands, cite sources.
