# Teaser cards & outreach kit: brands pillar 2.1 + 2.2 (wave 1) · v2

v3, 26 Sep 2026: every card = one persona's question → an answer in deck segments (receipt ×
shopper) → "Vyzkoušejte si to živě · chat.mindsmodels.ai". No retailer named, no shelf-behaviour claims.

| File | What it is |
|---|---|
| [`01-playbook.md`](01-playbook.md) | What we can/can't claim, the 3 proof types, card anatomy, who gets which card, CTA ladder, channels, sequences, triggers, automation |
| [`02-copy-cz.md`](02-copy-cz.md) | All message text (CZ, malls also EN) |
| [`03-targets.md`](03-targets.md) · [`03-targets.csv`](03-targets.csv) | Scraping brief: persona → LinkedIn keywords; companies with the card to send and the warm path |
| [`data/malls_targets.md`](data/malls_targets.md) · `.csv` | 55 shopping-centre targets (35 CZ, 10 SK, 10 international) |
| [`cards/index.html`](cards/index.html) | **Gallery: 9 persona cards + 23 brand cards** (open locally) |
| `cards/out/persona/`, `cards/out/brands/` | `<id>__sq.png` (LinkedIn), `__pt.png`, `__slide.png` + `__slide.pdf` (clickable button) |
| `cards/persona.js` · `cards/brands.js` · `cards/segments.js` | Card data (question, answer, chart) and the deck segment registry |
| `cards/template.html` · `check.mjs` · `gallery.mjs` | Template (deck blue `#6f9ae8`, Instrument Sans, landing paper), layout check, gallery |
| [`04-persona-pains.md`](04-persona-pains.md) | Persona → number-one pain → question → why only we can answer it |
| `data/superzoo_*` | Receipt × shopper analysis behind the pet cards |
| `data/archive-demo-data/` | Chat-dataset analysis behind the "ukázka z chatu" cards |

## Where the numbers come from

- **"Ukázka odpovědi z chat.mindsmodels.ai"** (most cards): receipts × deck segments from the chat's
  dataset. The card's button leads to the same answer live.
- **"Reálná data z prodejen v Česku · pokladní a vizuální data"**: pet cards (one pet store, receipts
  matched to visits) and the insights card (92 % match, 21-day pilot).
- **"Reálná data … · vizuální data"**: shopping-centre cards (14-day mall pilot).

## Regenerate

```bash
cd cards
# persona.html / brands.html = template.html with the data scripts swapped in; render with the
# headless-shell loop used in this session (sq 540×540, pt 540×675, slide 960×540, @2x) and check each
# render with ?check=1. Then:
node gallery.mjs    # rebuild index.html
```
