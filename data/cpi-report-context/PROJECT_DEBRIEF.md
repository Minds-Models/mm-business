# CPI Visitor Insight Report — Project Debrief

This document is self-contained. Read it and you should understand the
whole project — what it covers, how it was built, what's trustworthy, and
what was deliberately left out — without needing any other file or prior
conversation.

## 1. What this is

A commercial analytics report built for CPI, the operator of a shopping
mall (Olympia Mladá Boleslav), based on computer-vision analysis of
visitor foot traffic. The report is written for the mall's own
management — a business audience, not a technical one — and covers three
areas: when and how people visit, who they are, and what they wear/carry
and what that implies about spend. The deliverable is an HTML report
(referred to elsewhere as `report.html`); this debrief is the internal
reference document behind it, not the report itself.

## 2. The sample

- **54,092 visits**, all from this one mall, over a roughly six-week
  window (late July to mid-September).
- Each visit is one person captured once, on camera, at the point they
  entered. This matters: several fields describe momentary behavior or
  time spent *at that specific point*, not the visitor's whole time in
  the mall (see the camera-scope caveat in section 9).
- A visit only enters the sample if it passed several quality filters:
  the person wasn't staff, was facing the camera for a meaningful share
  of the recorded frames, the visit lasted long enough to be a real
  visit (not a camera glitch), and both of the two analysis reads
  described below completed successfully for that person.
- **A validated coverage gap exists**: a live recheck against the
  underlying visitor-tracking system found roughly 75,600 visits should
  have qualified over the same window, versus the 54,092 actually
  captured in this dataset (about 71.5% capture). This was investigated
  and traced to a timing/snapshot issue in how the dataset was produced,
  not a bias in which visits got filtered out. The day-of-week and
  hour-of-day *shape* of traffic was checked against the fuller live
  count and matches closely — the proportions in this report are
  trustworthy, but the absolute visit count (54,092) understates true
  footfall for the period. This caveat is not stated in the report
  itself (the report never cites raw visit counts at all — see section
  6) but matters for anyone extending this analysis.

## 3. Data sources, in plain terms

Every visit's single photo was independently analyzed twice, by two
separate computer-vision systems that don't know about each other's
output:

1. **A general-purpose visual analysis service.** This is the source for
   most demographic, appearance, and gestalt-impression fields — age,
   sex, life stage, body build, grooming, one holistic "apparent spend
   tier" read, subculture/style reads, group composition, and a
   free-text "what is this person doing" read, among others.
2. **A specialized brand-detection tool.** Purpose-built to look at
   *items* — every garment, worn accessory, and carried item visible in
   the photo — and, for each item, attempt to identify a specific brand.
   It also produces a handful of person-level and visit-level reads of
   its own (an independent "spend signal," how loud/prominent any
   visible branding is, who the person is with, and what the visit
   appears to be for).

Both tools ran over the *same* photos but are otherwise unrelated
software — different prompts, different output categories, no shared
logic. Where both tools produce a version of the same concept (e.g. two
independent "how expensive does this person's outfit look" reads), the
report either treats them as a cross-check on each other or explicitly
picks the more informative one and says why (internally — the report
itself never frames this as a methodology comparison; see section 6).

**A more granular version of the brand-detection tool's output exists**
than what's carried into the main combined dataset. The combined dataset
flattens each visitor's items into one undifferentiated list with only a
type and a brand name. The fuller, per-visitor detail — which array an
item came from (worn garment vs. accessory vs. carried item), a
price-tier read for that specific item, and whether the brand was
identified from a legible logo versus just the design/silhouette — exists
separately for every visitor in the sample and was used directly for all
of the item-type, accessory, carried-item, and brand-tier findings in the
report's third section. Without it, several of that section's findings
(what people actually carry, premium vs. luxury brand names specifically,
how often a brand ID relies on a logo versus just recognizing the
silhouette) would not have been possible from the combined dataset alone.

**A separate customer-segmentation model** was also run against this same
population, independently of both analysis tools above — it groups
visitors into 8 personas based on their combined visual profile. This is
covered in full in section 4.

## 4. The eight visitor personas

A clustering model split the full population into 8 personas, each named
and profiled by a separate process (not something built or tuned for this
report — the segmentation and the persona names are both taken as given,
fixed inputs). Sizes are share of the 54,092-visit sample:

| Persona | Share | Defining profile |
|---|---|---|
| Mainstream Adult Shoppers | 39.0% | Established adults, mid-market, unbranded, comfort-first |
| Young Adults in their 20s | 12.8% | Female-skewed, minimalist, accessible fashion |
| Retirees in their 60s and Above | 9.5% | Male-skewed, mature, classic/polished |
| Active Adults in Athleisure | 8.6% | Male-skewed, 20s/30s, sportswear-driven |
| Practical Men in Workwear | 8.2% | Almost entirely male, 40s, budget-conscious, functional |
| Parents with a Natural Look | 7.6% | Almost entirely female, 30s, value-oriented, natural grooming |
| Teenagers in Youth Culture | 7.2% | Male-skewed, students, streetwear/graphic-tee driven |
| Polished Professionals in Smart Casual | 7.2% | Female-skewed, 30s, coordinated premium-mid-market workwear |

Every one of the report's three sections closes with its own
"through the lens of visitor personas" view, applying that section's
main findings to these 8 groups specifically. (An earlier plan to also
build a separate, dedicated cross-cutting "personas" section on top of
these three per-section views was considered and dropped — see section 8
— since it was judged redundant with what the three sections already
deliver.)

## 5. Report structure — final, 3 sections

1. **Traffic & Timing.** Daily and weekly volume patterns, who shows up
   when (by life stage), solo-vs-accompanied patterns by hour, and
   child/family traffic patterns by day type. Closes with each persona's
   own hour-of-day shape and which personas actually drive the
   weekend-vs-weekday swing.
2. **Demographics & Appearance.** Age/sex/life-stage composition, a
   build/grooming/presentation "mainstream, low-effort" anchor finding
   backed by three independent signals, and group composition (solo vs.
   accompanied, and the gender mix of accompanied visits). Closes with a
   demographic profile table for each of the 8 personas.
3. **Garments, Accessories, Carried Items, Brands & Spending Signal.**
   The most detailed section: overall spend-tier read, how rare visible
   branding actually is, what people wear/carry (with a small long tail
   of visit-purpose signal folded in — most visits show no distinct
   shopping purpose beyond passing through, but a genuine small minority
   read as browsing, stocking up, a quick top-up, immediate consumption,
   or a service-only visit), top brands overall and separately by
   premium vs. luxury tier, and brand culture/tech-ecosystem reads.
   Closes with each persona's premium-vs-luxury and loud-branding rates
   (these turn out not to move together — see the report itself for the
   three distinct patterns found), plus each persona's most-associated
   brand, accessory, and carried item.

Two originally-planned pieces were dropped from scope entirely, not
deferred — see section 8 for why: a fourth section on style/subculture/
lifestyle identity, and a fifth section on shopping behavior and
engagement.

## 6. How the report was built

Every section followed the same process: explore the relevant data first,
propose the specific views/findings to include, get explicit sign-off on
that plan, then build — and every single number that reaches the report
is backed by a runnable, reproducible calculation kept alongside the
report, so any figure can be traced back to exactly how it was computed
and re-verified at any time. Nothing in the report is eyeballed,
remembered, or asserted without that backing.

The report's writing style follows a small set of fixed rules, applied
consistently across all three sections:
- Plain business language throughout — no mention of "models," which
  underlying tool produced a given read, or any comparison between the
  two analysis systems' methodologies. The report states findings, never
  how they were derived.
- Percentages only, never raw visit/item counts, in any prose or chart
  label — counts depend on sample size and aren't durable; shares are.
- No editorializing about the dataset itself (e.g. calling a feature
  "rich" or a finding "surprising") — findings are stated as findings.
- Every chart shows its value directly on the chart, not only on hover.
- The 8 personas are treated as a fixed, given input throughout. Any
  concern about how reliable a given persona's numbers are (and one real
  such concern does exist — see section 9) is deliberately never
  surfaced in the report text, since the personas can't be redefined or
  adjusted as part of this work regardless.

## 7. Quality assurance

After every change to the report, an independent verification pass
checked every claim in the report against its underlying calculation and
the raw data itself, catching several real errors before they reached a
final version. Concrete examples of what this process caught and fixed
along the way:

- A timezone-handling bug in the very first section's weekly-pattern
  calculation had wrongly named the quietest day of the week and
  overstated the weekend traffic increase by roughly 2.5x. Caught on the
  first verification pass ever run on this project, fixed immediately.
- A claim that visitors were "least likely to be alone" during the same
  hours on both weekdays and weekends was found to be true for weekends
  only — weekdays have a different low point. Fixed to state both
  correctly.
- Several arithmetic and labeling issues in the third section: an
  unbranded-item count that had excluded some items from its own total,
  a caption implying two decorrelated measures were the same population,
  an inconsistent label for the same item type appearing under two
  different names, and a chart that silently skipped a couple of
  higher-ranked categories. All caught and corrected.
- A narrative claim that one persona showed "low spend despite loud
  branding" was checked and found to be the opposite — that persona
  actually ranks near the top on both spend signal and loud branding.
  The write-up was corrected to describe three genuinely distinct
  patterns across personas instead of an inaccurate two.
- A stakeholder later raised a pointed concern that the third section's
  premium/luxury figures might have secretly been derived from a
  visually loud-branding measure rather than an actual spend-tier
  reading. This was checked directly against the calculation logic and
  refuted with hard evidence — the two measures are computed from two
  entirely independent readings and never share logic — but the
  exercise did surface a real, separate clarity gap (two different,
  correctly-computed figures in the same section both happened to be
  labeled "premium/luxury" at very different scales) which was fixed
  with a clarifying caption.

No number currently in the report has an open, unresolved discrepancy —
every claim has been checked at least once against its source
calculation, and several rounds of fixes are logged and were re-verified
after being applied.

## 8. What was deliberately left out, and why

- **Time-in-frame ("dwell time")** was dropped entirely. It measures how
  long someone was visible to the specific camera that recorded them
  entering, not how long they spent in the mall — and even narrowed to
  that correct meaning, it wasn't judged commercially useful enough to
  include.
- **A raw week-over-week growth claim** was drafted, then retracted
  after validation work showed the apparent growth was confounded by a
  data-pipeline disruption partway through the collection window (see
  section 9), not a real change in footfall.
- **An open-ended keyword/descriptive-tag sweep** available in the
  underlying data was explored independently as its own analysis, found
  to mostly restate signal already covered by other fields more
  reliably, and excluded from the report entirely.
- **Carried items as a life-stage signal** was tried, then dropped — the
  specific interpretation offered wasn't a genuine, reproducible reading
  of the data, just a plausible-sounding guess. (Life stage itself,
  where it comes from a genuine source field rather than an invented
  interpretation, is used extensively elsewhere in the report.)
- **A style/subculture/lifestyle-identity section** was planned but never
  built — deprioritized in favor of finishing the other sections to a
  higher standard, then formally cut from scope.
- **A shopping-behavior-and-intent section** (covering momentary
  activity, engagement posture, whether a visible shopping vessel was
  full or empty, and visible merchandise in hand) was explored in full
  but ultimately not built as its own section. The exploration showed
  most of its candidate fields told the same single story four different
  ways — the large majority of visits show no distinguishing behavior
  beyond simply passing through — which wasn't enough distinct material
  for a standalone section. One genuinely useful piece from that
  exploration (a small, real long tail of visit purposes — browsing,
  stocking up, a quick top-up, immediate consumption, or a service-only
  visit) was kept and folded into the third section instead, right
  alongside a similar existing long-tail finding.
- **A separate, dedicated cross-cutting personas section** was planned
  from the outset but ultimately not built separately — each of the
  three sections already closes with its own persona-specific view, and
  that was judged to already deliver what a separate section would have.
- **A chart breaking down a smaller appearance signal by age bracket**
  was dropped at the report owner's discretion, unrelated to any data
  quality concern.

## 9. Known limitations — not disclosed in the report, but real

These are genuine analytical caveats worth knowing if this work is ever
extended, even though none of them appear in the client-facing report
(per the standing rule that the report states findings, not methodology
or data-quality hedging):

- **The coverage gap** described in section 2 (71.5% capture of true
  eligible traffic) — validated as safe for proportions, not for any
  absolute-count claim.
- **A real disruption hit the data-collection pipeline roughly midway
  through the collection window.** Session volume nearly tripled
  overnight and the completion rate for both analysis tools crashed in
  lockstep — clear evidence of a system change on that date, not a real
  behavior shift. This is also the exact date boundary behind the next
  point.
- **Two of the eight personas likely aren't fully reliable**, specifically
  for anything involving time or (to a lesser extent) branding/spend.
  Those two personas' underlying visits come almost entirely from
  disjoint, non-overlapping few-week windows on either side of the
  pipeline disruption above — which is a strong signal that the
  segmentation model's behavior shifted right at that boundary
  (plausibly because the segmentation depends partly on an open-ended
  descriptive-tag field whose schema also changed on that exact date),
  rather than these being two genuinely distinct customer types. This
  isn't proven beyond doubt, and it isn't something this project has the
  ability to fix or redefine, but it's a real, well-evidenced concern —
  not a stylistic choice — behind why it's never mentioned in the report
  text itself. The other six personas show no such issue (full, even
  coverage across the whole window).
- **One appearance field (a torso-silhouette shape read) contains enum
  values that don't match its own documented, current definition**, and
  the actual source of those unexplained values couldn't be traced. A
  cleaner, unaffected field covering a closely related concept (overall
  build/physique) was used instead for anything in the report touching
  that ground — the anomalous field simply isn't used, not fixed.
- **A handful of fields describing momentary activity and visit purpose
  are explicitly calibrated around the assumption that the camera sees a
  mall walkway/concourse, not the inside of a specific shop** — meaning
  a very high "just passing through" default is partly a function of
  where the camera sits, not necessarily a literal claim about the whole
  mall's shopper engagement. This is the same underlying scope issue
  that led to dropping the time-in-frame metric (section 8) and shaped
  how the visit-purpose long tail in section 5 was worded (stating the
  finding plainly, without importing this technical caveat into the
  report text).

## 10. Current status

The report is final at 3 sections. Section 1 (Traffic & Timing) and
Section 3 (Garments, Brands & Spending Signal) are locked — reviewed,
corrected where needed, and signed off. Section 2 (Demographics &
Appearance) is fully built and has passed its own verification pass but
is still awaiting an explicit final sign-off before being considered
locked. No further sections are planned.
