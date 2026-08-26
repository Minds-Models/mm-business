# WS — Product & Data

**Owners:** Josef (spec) · engineering (build) · Dima (data science, 8–10 h/week)
**Objective:** ship the stream-ingest SKUs, the export gate, the Store Twin and the index — and
produce the calibration artifact that prices every camera-only store.

## Cold-start context

- The deployment default is **software on the estate that already exists** (D8). Own hardware only
  where no estate exists. This is what converts "1,000 stores" from a logistics problem into one
  product build plus a short list of signatures.
- The analysis pipeline ingests any image or video; **third-party stream ingest is the missing
  piece** and every chain deal waits on it.

## The three deployment SKUs — build order S2 → S1 → S3

| SKU | Where | What ships | Marginal cost | Notes |
|---|---|---|---|---|
| **S2 — edge puller box** | Any store with an NVR (incl. older recorders) | Small box on the store LAN pulling camera sub-streams → extraction | ~$130 | **Build first: ~2–3 weeks, reuses the whole existing pipeline.** Pulling sub-streams directly bypasses central VMS per-camera licensing entirely — the licence cap in the RFI is not the blocker it appears. The ONVIF user must be explicitly enabled on modern firmware |
| **S1 — on-prem software** | Stores whose recorder can host it (i5-class) | Container on the retailer's own hardware; frames never leave the store | ~€0 | Strongest privacy posture and the answer to their cost objection. Wins the RFI economics |
| **S3 — central VMS pull** | Corporate estates behind a managed VMS | Server-side sub-stream pull, transient in-memory processing | licence-dependent | **Small-estate/bridging tool only.** ~8 cams × 2 Mbps × 200 stores ≈ 3.2 Gbps sustained — cloud pull is infeasible at chain scale. Edge inference is mandatory, which is also the cleanest GDPR posture |

**Engineering rule:** build ingest **generically** (ONVIF/RTSP + a camera-qualification score), not
as a single-vendor adapter. The extra days are what make every other estate addressable (D14).

## Non-negotiable pipeline requirements

- **Export gate before any third-party-estate data flows:** aggregates only, k≥25 suppression on
  every published cell, time coarsened to day-part — precise timestamps never leave the
  personal-data zone (they are the linkage key).
- Retention: raw images deleted after extraction (72h hard cap); record-level rows 30 days;
  high-frequency skeleton samples 7 days or aggregated at write.
- Prohibited fields stay deleted (see `07-ws-legal-rights.md`). Re-identification code must never
  ship — "no cross-visit identification" is a written promise to retailers.
- Verify inference cost at 10× load before quoting any 250-store price. Check whether the cloud
  credit grant is dollar-capped or time-boxed — at 1,000 devices this line is larger than payroll.

## Calibration — the moat proof (Dima)

The question is not "how much POS" but **how many gold stores** (locations with a receipt feed).
Arithmetic on current data: one gold store ≈ 750 receipt-joins/month; a coarse persona × category
grid needs ~12.5k joins ≈ 2–3 gold-store-months; the standard grid (adding day-parts) needs ~50k.
Planning ratio: **1–3% of locations as gold stores** (3–8 per 250; 10–30 per 1,000).

Two consequences that change what we sell: we are **POS-rich and volume-poor** — the ~7.3k usable
joins already held clear the coarse grid for pet, so **the first category study is sellable off
data we already have**; and **one receipt-level station at EuroOil calibrates the whole 50-station
wave** — worth more than the other 49 installs combined.

**Schedule:** pre-registration frozen 5 Sep → parity v1 19 Sep → decisive cross-category number
10 Oct → artifact 24 Oct. Pre-register targets, metrics and holdouts *before* running anything;
report honest nulls. Dima's queue is locked: calibration first, P&G free read second, nothing else
before November.

**Claim ladder — what each result licenses:** cross-category parity ≥92% → "POS-grade segment
economics from visual-only stores, validated across two categories"; 75–92% → directional only,
and the POS-feed rider becomes a product requirement in every rights deal; <75% → camera-only
estates sell audience/footfall products, not purchase analytics. **Per-brand-worn claims stay
banned** at any result (fill 4–10%); pooled claims only.

**The fill-rate unlock:** a €600 pilot → €3k label-buy (~1,000 consented self-labeled photos)
tunes the extractor; the entire archive is then re-inferred for ~$890 of credits. Target
upper-body fill ≥25% at ≤5% false-brand rate by **1 Oct**. Shoes (4%) and watches (3%) are not
salvageable this window. This single experiment feeds the index engine, the pooled brand claims,
and the yield of every future location.

**Stretch test worth two hours:** predict a holdout store's persona mix from POS data alone. If it
works even directionally, the addressable estate becomes "stores with receipts", not "stores with
cameras we can reach" — the 2027 scaling thesis in one chart.

## Product milestones

Store Twin (chat + simulation over the aggregates) ships ≤15 Nov — P&G explicitly asked for this
interface. Index factory follows once the fill gate passes. Report factory already exists; reuse it.

## Definition of done (18 Feb)

Deployment counted in **rights-clean stores live**, never devices shipped. Export gate live before
external data. Calibration artifact published and carried into diligence.
