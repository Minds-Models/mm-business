---
name: sales-deck
description: Build a sales deck for a retailer or brand. Usage: /sales-deck retailer <client-slug> | /sales-deck brand <brand-name> [client-context-slug]
---

# Build a sales deck

1. Determine audience: `retailer` → `templates/sales-deck-retailer/SPEC.md`;
   `brand` → `templates/sales-deck-brand/SPEC.md`. Read the spec fully first.
2. Load `clients/<slug>/facts.yaml` (for brand decks: the retailer whose stores provide
   context). Check `sensitivities` and `naming.can_name_publicly` — use
   `approved_fallback` when naming is not cleared.
3. Copy comes from `messaging/narrative.md` (per-audience one-liners), numbers from
   `messaging/stats.yaml` (never `internal_only` entries in brand/retailer materials).
4. Brand decks pre-mandate (`rights.mandate_signed: false` on the context retailer):
   methodology proof only (GymBeam 92% flow) — NO category aggregates from that retailer.
5. The ask slide must match `deal.status` (mandate → study → subscription ladder for
   retailers; study pre-order / contingent LOI for brands).
6. Style: reference decks in `clients/*/delivered/`, tokens from `brand/tokens.css`.
7. Output: `clients/<slug>/delivered/YYYY-MM-DD-sales-deck-<audience>/` + PDF.
   Final check: the forwardability litmus from CLAUDE.md.
