---
name: data-report
description: Build a client data report (pilot/persona report) from facts + queries + template. Usage: /data-report <client-slug> [period]
---

# Build a data report

1. Read `clients/<slug>/facts.yaml`. If it doesn't exist or key fields are null → STOP,
   list what's missing, ask the user.
2. Read `templates/data-report/SPEC.md` and `templates/data-report/reference.html`
   (structure + look). Read `brand/tokens.css` and apply the client accent class.
3. Data: ask the user for a snapshot export, or run the SQL in `data/queries/` against the
   dashboard DB if access is configured (see `data/README.md`). Save the snapshot used to
   `data/snapshots/<slug>-YYYY-MM-DD/` and reference it in the report footer.
4. Respect `pilot.pos_matching`: `real` → basket/conversion sections allowed;
   `modeled` → label every POS-derived figure "modelová data / illustrative";
   `none` → omit POS sections entirely.
5. Include: privacy paragraph from `messaging/boilerplate.md`; recommended-actions section
   (3–5 concrete, each with expected impact + how we'll measure it); next-steps section
   matched to `deal.status`.
6. Language: CZ unless asked otherwise. n=1 store phrasing: "this store", never the chain.
7. Output: `clients/<slug>/delivered/YYYY-MM-DD-data-report/report.html`, then render PDF
   via `scripts/render-pdf.sh`. Never overwrite an existing delivered folder.
