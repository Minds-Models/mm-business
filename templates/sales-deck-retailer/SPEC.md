# Retailer sales deck — spec

**Audience:** chain exec (owner/CEO, commercial director, CFO). Language: CZ.
**Story:** retailer-as-monetizer — "your new revenue line", NEVER "give us your data".

⛔ **The canonical retailer deck already exists: `blitzkrieg/decks/retailer/mm-retailer-deck-cz.html`
(EN twin alongside it). Do not author a new retailer deck from this spec: start from that file and
vary it per category.** Every claim in it derives from the seven stones in
**[`blitzkrieg/retailers/retailers-execution-guide.md` §The retailer pitch spine](../../blitzkrieg/retailers/retailers-execution-guide.md#the-retailer-pitch-spine--the-seven-stones)**,
which also carries the per-role split, the nudging order and the red lines. Load it first.

## Structure (as shipped, 8 slides)

1. **Cover:** the asset they already produce, and that we let them earn from it. Free forever,
   zero risk, a new product at 100% margin.
2. **The offer in one sentence:** their investment is zero, we are looking for a founding partner
   and not a customer, plus the network economics (see Rules on the number).
3. **How it works:** two sources they already own, joined, and only the join is sellable.
4. **The product, running today:** the live chat, not a roadmap. Open it on a phone.
5. **Who pays:** brands, never the retailer, plus what stays theirs.
6. **Why not the alternatives:** the comparison table whose last column is "pays you".
   This is where the NielsenIQ difference lives, and the difference is the direction the money
   flows, not the depth of the data.
7. **Founding partners:** scarcity sized by statistical relevance, per stone 6.
8. **Next step:** three steps starting with a revocable 60-day agreement on a part of the network
   they choose. Never open with the full rights licence.

⛔ **Not in the deck, ever again:** monthly action briefs, "three changes", expected impact in CZK,
or any promise that we improve their basket, margin or assortment. The founder removed that model on
22 Sep 2026 because it makes us accountable for their execution. Its replacement is stone 7 (nothing
is required of them), which belongs on slides 1 and 8.

## Rules
- ⛔ **No revenue-share percentage** anywhere in the deck or the talk track (founder ruling,
  22 Sep 2026). "A share of what brands pay for outputs where you are named" and nothing more.
- ⛔ **No claim that brands are paying, or that budgets are committed.** Brand **interest** is real
  and may be stated, unnamed and labelled as interest with nothing signed. Per C5, label anything
  else SIGNED / IN NEGOTIATION / TARGET.
- The veto is on **labelled** output, not on "every output". Correct as a spoken talking point,
  never as contract language.
- Network economics (the "až 2,5 mil. Kč+" figure) ship **with the FMCG model footnote attached**,
  and the figure must exist in `messaging/stats.yaml` first. For fuel, use the argument structure
  (no cost of goods, stock, write-offs, logistics) and let the public ÚZEI figure supply magnitude.
- Never show brand-facing pricing (internal_only). Never name other retailers without
  their `can_name_publicly`. The whole deck must pass the forwardability litmus.

## Visual system

Use the canonical deck style: `templates/deck-style/STYLE.md`, starting from
`templates/deck-style/skeleton.html`. Not `brand/tokens.css` (legacy report palette). The
reference deliverables above predate the current system: take structure and copy from them,
take the look from the template.
