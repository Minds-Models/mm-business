# Blitzkrieg — Data brokers / alternative customers v0.2 (founder answers, 26 Aug)

**Goal:** 2 Tier-B pilot clients signed by 31 Oct, delivering by 21 Nov. Tier-A access path
opened (calendar ungated, content gated). Budget ≤25 founder-hours.

## 0. What this pillar is actually for (founder answer #3, #14)

**Distribution velocity, not price.** Brokers already hold the budgets and the brand/retailer
relationships — so the B2B cycle collapses from months to weeks. This is the **fast lane to cash**
and the reason to accept lower unit economics. We are buying *speed and reach*, and paying for it
in margin. Every design rule below exists to make sure we pay in margin only — never in position.

## 1. ⚠ THE DM TRAP — the one way this pillar can destroy the company

Founder answer #2: "Tier-1 would want the pure data to combine with other sources." **That is
exactly the DM position** — becoming the supply side of someone else's 20–60× spread, which our
own doctrine forbids ("never sell raw feeds; own the derived product").

Quantified on our own numbers `[EST]`:

| | Per year |
|---|---|
| NIQ-style supply pricing (~287 CZK/store/mo `[INTERNAL-ONLY]`) at 250 stores | **€35k to us** |
| What that same category earns sold direct (3 founding seats) | **€105–135k** |
| What that same category earns at maturity | €300–600k |
| What a buyer would generate from our €35k (NIQ's own 16% data-cost ratio → 6.25×) | **~€220k** |

**Rule that prevents it — non-negotiable: price per DERIVED PRODUCT (slot / read / API call),
never per store, per session or per datapoint.** Per-store pricing is supply economics (€141/store/yr);
per-slot pricing is product economics. If a broker proposes per-store or per-record pricing,
they are pricing us as DM — decline and reprice, or walk.
*(The NIQ figures are INTERNAL-ONLY: we may never reveal to a broker that we know them.)*

## 2. Two tiers, two products (founder answers #1, #2)

| | **Tier B — second-tier brokers & insight agencies** *(the "2 pilots" goal)* | **Tier A — incumbents (NIQ, Circana, Kantar)** |
|---|---|---|
| Their gap | No field-based quantitative shopper-segment data — operationally too expensive and complex for them to collect | Have "what was bought", structurally lack "who bought" |
| What they buy | **White-label the platform** — everything already connected (their brand, our engine) | **Derived category reads** to combine with their own sources — never raw |
| Deal shape | Wholesale licence per read/slot + white-label fee | Licensed derived product, per slot, term-limited |
| Status | Active in-window target | **Access path only** (C6): map the person, secure the intro, meeting bookable late Oct; content shown only with ≥1 mandate + ≥1 paid seat in hand |
| Strategic read | Distribution channel | Potential buyer / strategic investor (founder answer #8) — the access path is also the acquirer path |

## 3. What they get, and never get (founder answer #7)

**Get:** derived outputs only — category reads, segment distributions, indices, API responses
above the export gate (k≥25, coarsened time, no session or person identifiers, no record-level rows).
**Never:** raw feeds, record-level data, methodology internals, or granularity fine enough to
back-engineer the taxonomy. *"Schema yes, kitchen no."*

## 4. Rights — the correction to founder answer #4

"If they already work with the retailer, we could do both" is **not sufficient**. The broker's
relationship with a retailer grants *us* nothing. Attribution is governed solely by **our** contract
with that retailer.

→ **DPA/mandate template needs a new clause (Legal, W1):** a **channel/reseller clause** naming
whether the retailer permits their attributed data to reach third-party resellers, and requiring
per-channel written approval. Without it: **aggregate, chain-masked outputs only** — regardless of
who the broker knows.

## 5. Contract terms that must be in every pilot (founder answers #11, #13)

- **Non-circumvention** — they may not approach our retailers or brands with a competing read
  built on our outputs. (Not a non-compete; they have a different focus — the risk is their
  *connections*, which is exactly what non-circumvention addresses.)
- **No back-engineering / no re-identification** covenant, with audit right.
- **Term limit** (12 months) + renewal repricing — never perpetual on our side.
- **No exclusivity, ever.** Scripted answer to "we'd buy the whole feed exclusively" (founder #13):
  *"We don't do exclusivity — it's what makes the read a currency rather than a private asset.
  What we can do: a category-limited, 12-month first-look window at a premium, against a volume
  commitment."*
- **Price floor:** a broker deal must net **≥50% of what we would realise selling that scope
  direct** (we save the selling cost, they take the rest). Below that, the channel is cannibalising,
  not distributing.

## 6. The 2 pilots — target shapes

1. **White-label read** with a CEE insight agency / shopper-consultancy: they resell one category
   read under their brand into accounts we cannot reach. Narrow scope: one category, one geography,
   12 months, non-exclusive, step-up pricing at renewal.
2. **Eval-set / API to a synthetic-consumer or AI-data vendor** (founder answer #10 — yes, this
   counts): the surviving defensible shape of the AI-data line (D3). Same motion, same 15 Oct
   kill-test verdict; if it converts, it counts as pilot #2.
   *Reserve:* retail-media data reseller, or a syndicated-data distributor lacking any visual layer.

**Pilot pricing:** €10–30k for a deliberately narrow scope is acceptable **only** because scope is
narrow — never a full category read at pilot price. Renewal steps to the §5 floor.

## 7. Backbone (≤25 founder-hours)

- **W1–2:** Tier-B map (10 named orgs: who they sell to, what they lack) · offer one-pager
  (white-label read + API, derived-only, per-slot pricing) · **pricing-floor memo** (§1 arithmetic)
  · Legal: reseller clause drafted into the DPA template.
- **W3–4:** 5 Tier-B conversations booked/held · Tier-A access path: identify the right person
  (corp-dev / insights leadership, not sales) and secure a warm intro; meeting placed late Oct.
- **W5–6:** pilot scoping with the two warmest · AI-data outreach folded in here (same motion).
- **W7 (15 Oct):** AI-data kill-test verdict (D3) — converts to pilot #2 or the line zeroes.
- **W8–9 (→31 Oct):** **2 pilot agreements signed** (paid wholesale preferred).
- **W10–12:** pilots delivering · Tier-A meeting only if strength conditions hold · draft the
  **distribution-economics memo** (their margin, our floor, channel-conflict rules).
- **W13:** memo into fundraise DD; 2027 channel decision.

## 8. Watch items (unresolved by design)

Does a broker pilot strengthen or muddy the acquirer story? Founder view: **strengthens, for now,
because we are early** (answer #12) — revisit at the 21 Nov memo. Does NIQ hearing about us hurt?
Founder view: **acceptable if the visual data scales and proves valuable** (answer #9) — a measured
risk, taken knowingly. Does 2 broker pilots prove more than 1 more direct seat (the honest test)?
Answer it in the 21 Nov memo with real numbers, and reallocate 2027 hours accordingly.
