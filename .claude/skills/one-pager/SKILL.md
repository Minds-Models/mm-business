---
name: one-pager
description: Build a one-page document — mandate letter, study prospectus, board one-pager, LOI form. Usage: /one-pager <type> <client-or-context>
---

# Build a one-pager

Types & sources:
- **mandate** → fill `templates/one-pager/mandate-letter-cz.md` from the retailer's
  `facts.yaml` (legal_entity, approved_fallback, named-brand list from the user).
  Output is a DRAFT for legal review — say so.
- **prospectus** (study offer to brands) → one page: category read name, what's inside
  (persona × category × basket, daypart, conversion), fixed price band, 4-week delivery,
  "3 founding seats", pre-order contingent on retailer agreement. CZ.
- **board** (champion's internal one-pager for a retailer) → their numbers, the
  revenue-line math, control/veto/firewall bullets, dunnhumby precedent.
- **loi** (contingent LOI / commitment form for events) → fields: brand, scope, intended
  2027 budget range, density threshold, budget owner, "contingent on definitive agreement
  with [retailer]" clause.

Rules: numbers from `messaging/stats.yaml` + client `facts.yaml` only; internal_only
pricing appears ONLY in prospectus/loi price fields when founder explicitly confirms;
every one-pager fits one A4 at 11pt. Output to `clients/<x>/delivered/YYYY-MM-DD-<type>/`.
