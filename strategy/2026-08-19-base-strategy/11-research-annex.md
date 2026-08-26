# Research annex — external facts, with their sources

Gathered Aug 2026 by three research passes. **Everything here is external evidence — at best
`[EST]`, never `[FACT]`.** Before any figure appears in an external deliverable, add it to
`messaging/stats.yaml` with source and status. Internal-only benchmark figures never appear
externally at all.

Purpose: stop future sessions re-researching what is already known, and keep the sources attached
to the claims that depend on them.

## 1. The category graveyard — why this shape of company dies

- **Hardware capex is the most reliable killer.** A checkout-free vision company raised ~$73M,
  held marquee convenience-chain logos, and shut down in Oct 2024 after failing to raise — cheap
  self-checkout kiosks beat capex-heavy vision. A camera-equipped cooler-door ad network reached
  ~10,000 doors, lost its anchor retailer, litigated, and pivoted to a model where the **retailer**
  funds the hardware. A smart-cart vision company liquidated in 2023. The best-capitalised player
  in the field pulled its own checkout-free system from its grocery stores in Apr 2024.
- **"Understand your shopper" as a discretionary line does not stay sold.** An a16z-backed
  CCTV-analytics startup (2012 vintage) is gone; a signage company that bought a face/demographics
  analytics firm went bankrupt in 2025 — the analytics upsell did not save the base product. A UK
  shopper-vision startup has not raised since its 2019 seed.
- **The analytics layer evaporates; the sensor commoditizes.** A people-counting lineage passed
  through four owners and ends today as a component SKU. A footfall incumbent was acquired at
  **~2.3× revenue** — that multiple is the category's verdict on undifferentiated analytics.
- **The survivors share two traits.** They run on the customer's **existing** cameras with no
  capex, and they bill against a **quantified P&L line**: a French gesture-analytics company
  (€53M raised, 5,000+ stores) sells shrink reduction and classifies *gestures, not people*;
  a DOOH audience-measurement firm sells advertising *currency* to screen networks — revenue
  creation, not cost insight. The one company with $100M+ ARR in adjacent territory **never
  touched a camera** (phone-location panel) and still cut 18% of staff to reach profitability.
- **Enterprise pilots are a capital trap.** One company had its customers on its own cap table and
  still cut 15% of staff. Logos are not contracts; contracts are not scale.
- **Founder departure is a leading indicator** in this sector — treat it as one when evaluating
  partners or acquirers.

**Founders worth calling** (the advisor's explicit instruction — founders share freely, and paying
for the call is acceptable): the shut-down checkout-free company's founder (a well-known consumer
tech co-founder), the departed co-founder of an Israeli autonomous-store company now running a new
venture, and the founder of the only other Czech camera-analytics company (~200 devices sold).

## 2. Pricing benchmarks — what the market actually pays

**Incumbent syndication.** The measurement incumbent's IPO filing: ~$3.97bn FY24 revenue,
~23,000 client companies (**implied average ~$173k/client/yr**), top-5 clients = 11% of revenue,
its own "large/mid-size client" floor is **$50k/yr**, and **16% of revenue goes to acquiring all
its data** (down from 22%). Enterprise subscriptions cluster **$75k–500k/yr**; entry packs for
emerging brands start ~$1k–10k.

**Public-registry comparables (citable, unlike our internal figures).** A Czech state agency pays
~3.7M CZK/yr gross (**~€122k net**) for a monthly sell-out feed covering **11 SKU-level
commodities** across five retail formats — re-tendered annually; narrow category reports run
~230–240k CZK. Italian and French equivalents: €182k (2018) → €498k (2024), and €220k (2019) →
€340k (2023). These are the safest external price anchors we own.

**Retailer data-monetisation arms.** One retailer's supplier data programme charges a **percentage
of the supplier's sales**; another moved store-level forecast data to paid tiers with the largest
suppliers paying up to £400k; a French grocer's data arm books ~€55M/yr from selling customer-data
analysis to suppliers. A leaked programmatic rate card shows retailers charging **40–45% of media
CPM, capped at $3.50–4.00**, with $100–150k minimums, and **$0.75 CPM for sales-lift measurement**.

**Footfall/location SaaS (the floor we must stay above).** Published rate cards run **$9–49 per
sensor per month** plus $299–799 hardware; enterprise footfall lands ~$150/site/month; actual
awarded contracts for a location-analytics platform run **$8k–34k/yr** for small public buyers.
This is the price gravity that pulls a plain camera-SaaS business down.

**In-store retail media.** In-store digital screen CPMs ~$10–50; DOOH $5–20; platform take rates
15–30% of working media; first-party shopper segment licences reported at $5–50k per audience per
month. European retail media ~€13.3bn in 2025, +16.7%.

**AI-training data (relevant to the AI-data line).** Content licensing is real and priced
(a forum's data at $60M/yr; a news group at >$250M/5yr; a stock library at $25–50M per lab deal).
Per-unit rates: images $0.02–2, short video $2–4, **an hour of longer film $100–300**; creator
video $60–240/hr, premium annotated up to ~$1,000/hr. Human-expert data is where the billions go
(one labelling company ~$870M revenue; another >$1bn). Synthetic-consumer research products
publish **$12.5k–80k/yr**.

**⚠ The load-bearing negative:** across ~91 tracked public licensing agreements, **no verified deal
exists in which retail, CCTV, POS or shopper behavioural data was licensed to an AI lab at a
disclosed price.** The category is unbenchmarked. A ~1M-hour real-world video corpus was released
free under a permissive licence in Apr 2026, collapsing the raw-video price floor. This is the
evidence D3 was taken against — keep it attached to that decision.

## 3. Access mechanisms — how to reach many locations per signature

**The legal gate (most important finding).** European guidance on video devices establishes that
existing retail CCTV is lawful for **property protection**, that repurposing it for marketing or
audience analytics requires its own compatibility analysis, and that **a third-party recipient must
perform its own legal analysis and identify its own legal basis** — it cannot shelter under the
retailer's. Also: processing "for the purpose of uniquely identifying a natural person" is what
triggers the special-category regime; ephemeral non-identifying inference without templates sits
outside it. **One signature ≠ one legal basis.**

**Camera-estate integration.** Managed VMS platforms expose stream URLs through an API but the
media then flows through a **licensed, capacity-limited gateway** — per-camera licensing is the
real constraint (the RFI's estate is licensed for only 32 cameras). **Pulling sub-streams directly
from the recorders bypasses that licensing entirely**; the standards-based user must be explicitly
enabled on modern firmware. Bandwidth arithmetic (~8 cameras × 2 Mbps × 200 stores ≈ 3.2 Gbps
sustained) makes cloud pull infeasible at chain scale and **edge inference mandatory** — which is
also the cleanest privacy posture. A major cloud vendor retired its managed video-analytics service
on ~a year's notice in 2022; do not build the ingestion layer on one managed service.

**Ranked mechanisms.** (1) Direct stream access off existing recorders with a per-store edge box —
whole owned chain, one signature. (2) Screen-network operators — the analytics runs on their
players and their site contracts already carry measurement permission; hundreds of venues per
signature, but a camera estate inside someone else's stores is a **tenancy** that ends when their
strategy changes. (3) Remote-monitoring centres and security integrators — they already aggregate
video from hundreds of client sites, so connectivity is solved; they provide distribution, never
rights. (4) Network-camera platforms with metadata APIs and on-camera custom models. (5) Managed
VMS APIs — licence-gated. (6) Mall landlords — **common areas only**, and even the largest CEE
portfolios are 36–90 assets, an order of magnitude below a 200-store chain. (7) Cooperative and
franchise groups — **"one signature" is a myth**; central bodies coordinate purchasing and brand
but cannot bind independent members.

**Precedent for scale by single signature:** a self-checkout loss-prevention vendor reached
**1,700+ stores of one grocery chain** off one 2020 agreement.

**Structural rule extracted:** target **company-operated chains with centralised IT**. Cooperative
and franchise groups multiply the sales cycle by the number of independent owners regardless of
how large the group-level store count looks.

## 4. Known gap

**O6 — VSaaS / cloud-VMS marketplaces** (the major cloud-camera platforms and their app stores):
partner terms, revenue share, data-rights position, and whether third-party analytics can run on
customer streams. The research pass covering this failed mid-run and was never completed. This is
the first brief to hand a research agent; it matters for 2027 distribution, not for this window.
