# The retailer data objection — "brands will use this against us"

**The objection, verbatim:** *"We don't want brands to have our data — they'll use it to negotiate
margins against us."* It is the single most likely reason a rights deal dies, it is **not
irrational**, and one of its five components is real and caused directly by our own business model.

---

## 1. Decompose it — five fears, only two of which are real

| # | The fear | Real? | Why |
|---|---|---|---|
| 1 | Trading data leaks (cost prices, margins, promo elasticity) | **No** | We never receive it. A receipt-level POS feed carries prices paid, not cost or margin. *We cannot leak what we never ingest* — and that is a technical fact, not a promise |
| 2 | Brands see their category share inside this retailer | **Partly** | Only if we publish named-retailer × brand-vs-competitor cuts. That is a **product design choice**, and the answer is to prohibit that cut |
| 3 | Brands benchmark this retailer against a rival ("you convert worse than chain B — we're moving trade spend") | **YES — and our syndication model creates it** | This is the honest one. Cross-chain comparison is exactly what a channel currency is |
| 4 | The retailer's own data business is devalued | **Partly** | Only for retailers who actually have one. Most CZ chains do not |
| 5 | Disintermediation — brands buy shopper insight without them | **YES, structurally** | Under brands-only, brands pay us and not them |

Fears 1, 2 and 4 are answered by design and paper. Fears 3 and 5 need a real commercial answer,
because they are true.

---

## 2. The structural answer: invert the asymmetry

**The retailer gets it first, unmasked, and free. The brand gets it later, masked, and pays.**

Today the brand knows more about the shopper than the retailer does — brands run research
departments; a CZ chain has roughly one analyst per two or three categories. That asymmetry is
*already* being used against retailers in every trade negotiation. Our data inverts it:

> "Your category manager walks into the Purina negotiation knowing which shopper segments actually
> convert on their SKUs versus Mars's, in your own stores, before Purina sees any version of it.
> You have never had that. Purina has always had its half."

This is the compensation. Under the old model the retailer's answer to *"why let brands see this?"*
was *"because I keep 40–50% of the money."* **Decision D1 removed that answer** — brands-only means
they get free software instead of a revenue share, which is weaker payment for a strategic risk. So
the leverage argument has to carry the weight the rev-share used to. Say it explicitly and early;
do not let them discover the asymmetry question on their own.

Three reinforcing arguments, in order of persuasive power:

1. **Sequencing:** they see every insight before any brand does, and they approve each one.
2. **Supplier money moves toward them.** Suppliers spend trade and retail-media budgets where they
   can prove an audience. A retailer who can demonstrate shopper quality wins spend from one who
   cannot. This is the Tesco/dunnhumby logic and it is empirically what happened.
3. **The market already does this to them, worse.** Their competitors license actual *sales* data
   into syndicated measurement, which brands buy — today, with no veto and no masking. What we
   propose is strictly safer: shopper-side only, aggregated, vetoed, masked.
   ⚠ **Compliance:** state this as a market fact. The specific incumbent supply and demand figures
   are INTERNAL-ONLY and must never be quoted to a retailer.

---

## 3. The controls — what actually goes in the contract

**The toxic cut, named precisely:** *named retailer × named brand versus its named competitor.*
That single cut is what can be carried into a trade negotiation. Everything else is safe. Write the
prohibition in:

- **Trading-data firewall** — we never ingest or process cost, margin, sell-through or elasticity.
  Contractual *and* technical.
- **Chain masking by default** — brand-facing outputs report the *channel* ("Czech pet specialty"),
  never the named chain. Retailer-attributed cuts require **written, per-cut opt-in**.
  Honest caveat to state internally: with only two chains in a channel, masking is thin — a brand
  can infer. Masking strengthens as chains are added; until then, retailer-specific reporting is
  opt-in only, and we should say so rather than oversell the protection.
- **No competitor-ranking cuts** — no output ranks named retailers against each other. Ever.
- **Category and brand embargo** — the retailer may exclude named categories or named brands from
  syndication entirely. (Private label is the usual one — see §6.)
- **Publication lag** — brand-facing reads run on a quarterly cadence with a lag. Strategic value
  intact; useless as ammunition in a live negotiation cycle. Cheap concession, disproportionate
  comfort.
- **Veto on every output**, which the 60-day mandate already grants.
- **k≥25 suppression** on every published cell.
- **90-day insight priority** — the retailer has exclusive access to any read from their stores
  before it is syndicated. Costs us nothing; changes the felt power balance.

---

## 4. The trust ladder — sequence the exposure, don't argue it upfront

Do not open with syndication. Open with the thing they cannot be hurt by, and let each rung earn
the next:

1. **Retailer-only insight.** Their stores, their shoppers, no brand access at all. Pure gain, zero
   exposure. This is where the free platform sits.
2. **Masked channel norms.** Their data contributes to a channel aggregate; their name appears
   nowhere; they see the benchmark that other chains cannot.
3. **Opt-in attributed cuts.** Only once they have seen two rungs of output and trust the controls —
   and this rung is where they can start charging for their own attribution.

This is the mandate → study-rights → chain-licence ladder already in `07-ws-legal-rights.md`,
reframed as what it actually is: **a trust ladder, not just a rights ladder.**

---

## 5. When they still say no — three fallbacks, in order

1. **Retailer-only mode.** They take the free platform, we take no syndication rights. We keep the
   relationship, the deployment and the calibration data; we re-ask at renewal with two quarters of
   delivered value behind us. Costs us the slot for now, not the account.
2. **Category-limited rights.** They carve out their sensitive categories (usually private label)
   and grant the rest. Most of the value in most channels survives this.
3. **Paid rights.** If the strategic risk is genuinely priced, buy it — the inverted site-licence
   shape (`07-ws-legal-rights.md`), which also flips the Data Act "User" position in our favour.
   Rights bought with cash are still rights.

Never: dropping the aggregate-licence clause to save a deal. That clause is the difference between
a vendor and a currency. Park and escalate instead.

---

## 6. Two things this analysis surfaced that need a founder ruling

**(a) Private label is the real sensitivity — and SuperZoo is mostly own-brand.** For a
private-label-heavy chain, shopper data touching own-brand-versus-brand performance is the most
commercially sensitive output we could produce. Design the pet slot to exclude private-label
comparisons by default, and offer that exclusion proactively — it is the concession most likely to
unlock the signature, and it costs us little because brands are not buying private-label reads.

**(b) The same fact is a risk to the pet slot's economics — and an opportunity.**
`13-revenue-model.md` models the pet slot on 4–6 payable brands. If SuperZoo's assortment is
mostly own-brand, the third-party brand presence there may be thin, which would make Purina and
Mars *less* interested in a SuperZoo-based read than modelled. **Verify the third-party brand share
of assortment before pricing the pet slot.** The opportunity in the same fact: a private-label team
behaves like a brand — brand-like margins, brand-like need for shopper insight, and no incumbent
read on their own shoppers. **A private-label organisation may be the one retailer-side buyer that
should pay like a brand**, which is a genuine and principled exception to D1. Worth testing at the
SuperZoo exec meeting: *"would your own-brand team buy this?"*
