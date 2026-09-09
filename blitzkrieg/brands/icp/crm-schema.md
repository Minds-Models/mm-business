# CRM schema for the brands pillar (derived from R7)

Closes the open half of 2.6's DoD: **"how they buy" field live in the CRM.**
Source of truth for the picklist values: [`icp-one-pager-v1.md`](icp-one-pager-v1.md).
**What to actually say to each `persona` value: [`icp-brands.md` Part II, the persona playbook](icp-brands.md#part-ii-the-persona-playbook).**

---

## 1. Which Person records to create, by bin

**The position to seek is bin-dependent. Creating the wrong two records is how the calendar gets burned.**

### Bin A (owner-managed CZ/SK, or a country GM who is a registered statutory officer)
**Create two records, not three.** The buying centre genuinely is two people, and at the smallest
firms it is one.

| Seq | Position to seek | Exact titles to search |
|---|---|---|
| 1 | **The pen** | jednatel · majitel · předseda představenstva · generální ředitel · Country GM (verify he is a registered statutory officer in the obchodní rejstřík, not a prokurista) |
| 2 | **The commercial lead** | obchodní ředitel · Trade Marketing Manager · Shopper Marketing Manager · Manažer podpory prodeje |

Do **not** create insights, NPD, procurement or category records at a Bin-A firm. They do not exist,
and the repo screen plus independent job-board search both confirm it.

### Bin B (escalates to a CEE cluster: P&G, Colgate, Haleon, L'Oréal, Coty, Henkel, Beiersdorf, Mars CZ)
**Create four**, and expect the deal to be a 2027 conversation.

| Seq | Position to seek | Exact titles to search |
|---|---|---|
| 1 | **Trade / shopper marketing** (the wallet, lowest provenance bar) | Trade Marketing Manager CZ/SK · Shopper Marketing Manager |
| 2 | **Legal / privacy / DPO** (neutralise first) | DPO · pověřenec pro ochranu osobních údajů · Legal Counsel · for tobacco also **Corporate & Regulatory Affairs, a different human** |
| 3 | **KAM for our estate** (the access route, never the buyer) | Key Account Manager · NKAM · Manažer prodeje pro čerpací stanice |
| 4 | **CEE cluster insights lead** (the real veto, sits in Warsaw / Bucharest / Budapest) | Consumer Insights Lead CEE · CMK · Market Intelligence Manager |

### Retailer-side, where the estate is ours (the sanctioned D1 exception)
| Seq | Position to seek | Exact titles to search |
|---|---|---|
| 1 | **Private-label / own-brand lead** | Business Unit Manager Private Label · Brand manager privátních značek · Category manager (90–110k CZK band at Teta) |
| 2 | **Distributor / importer commercial lead** | obchodní ředitel velkoobchodu · go to the pen, never the category buyer |

---

## 2. Person record fields

| Field | Type | Values / note |
|---|---|---|
| `persona` | picklist | owner-jednatel · sales-director · trade-shopper · private-label-lead · distributor-lead · kam · brand-mktg · category-manager · legal-dpo · commercial-analyst · insights-cz · insights-cee · procurement · finance-controller |
| `buying_role` | multi-select | economic_buyer · champion · user · technical_gatekeeper · blocker · influencer · saboteur |
| `is_statutory_officer` | bool | Verified in the obchodní rejstřík. **This is the field the whole pillar turns on.** A prokurista is not a statutory officer. |
| `warm_path` | text | Who we know who knows them, or an explicit `cold` flag |
| `use_case_owned` | picklist | sales/trade · marketing · NPD |

## 3. Company record fields

| Field | Type | Values / note |
|---|---|---|
| `autonomy` | picklist | **bin_a_local_pen** · **bin_b_cluster** · **unknown_must_ask** |
| `autonomy_evidence` | text | Registry citation, or the verbatim answer to the autonomy question |
| `estate_match` | picklist | on_our_estate · pipeline_estate · no_estate (a brand with no presence on our estate has nothing to buy) |
| `rights_status` | picklist | signed · verbal_only · none (**currently `none` almost everywhere; gates what may be offered**) |
| `margin_test` | number | EUR 40k = CZK ~980,000 as a % of filed net profit. Above ~2% prices at study, not seat. |
| `renewal_month` | month | R3. The renewal date **is** that account's calendar. |

## 4. The "how they buy" field (the DoD item)

One record per methodology meeting, filled **within 30 minutes** of the call.

| Sub-field | Type | Capture |
|---|---|---|
| `trigger` | picklist | conditions_strategy_aug_oct · cenik_to_chains_aug_oct · brief_season_sep_nov · **budget_lock_sep_nov** · rocni_jednani_nov_dec · **unspent_budget_december** · category_review · lost_or_won_listing · principal_going_direct · retail_media_launch · regulatory_date |
| `budget_line` | picklist | trade_shopper_activation · owner_p_and_l · brand_media · test_bucket · research_line_exists (rare) · none_identified |
| `approval_chain` | text | Verbatim answer to: *"would that be your signature, or would it need to clear above Prague?"* Asked at the **end**, before any price. |
| `first_objection` | picklist + verbatim | Match to the one-pager table, and record their exact words |
| `format` | multi-select | one_a4_page · one_slide · quarterly_excel_incumbent_shape · pdf_read · method_annex · chat (**not deliverable today**) |
| `autonomy_answer` | picklist | mine · region · unclear |

## 4b. Talk-track fields (what was said, and what came back)

The playbook gives the message; these fields record whether it worked, so the value propositions
get falsified by contact rather than repeated because we like them.

| Field | Type | Capture |
|---|---|---|
| `value_prop_used` | picklist | Which persona value proposition opened the conversation. Values are the 18 rows in the playbook index. |
| `objection_heard` | picklist + verbatim | Match to the persona's predicted first objection, or log `new` with their exact words. **A `new` objection is the most valuable row in this CRM**: it is the only evidence that the research missed something. |
| `objection_answered` | picklist | worked, partly, failed, not-reached |
| `never_line_breached` | bool | Did we say the thing the playbook says never to say. Post-call honesty field, for us, not for them. |
| `format_requested` | multi-select | What they asked to receive, against the playbook's prediction. Feeds R8. |
| `persona_confirmed` | picklist | as-predicted, different-persona, role-does-not-exist. The third value is a finding, not a blank. |

**Review rule.** After every five meetings, read `objection_heard = new` and
`persona_confirmed != as-predicted` together. If either is running above about a third, the
playbook is wrong rather than the market, and Part II gets rewritten from primary data. The guide
weights primary over secondary three to one, and this is the field pair that enforces it.

## 5. How to find them

- **LinkedIn:** `"Key Account Manager" AND (Czechia OR Slovakia)` filtered to the target company.
  For the fast converters: **past company = NielsenIQ / GfK / Kantar, current = a brand.**
- **jobs.cz / profesia.sk:** search the title at the company. A live ad names the tools, the
  reporting line, the KPIs and the budget scope, and is the most honest artifact a company
  publishes about a role.
- **obchodní rejstřík / ARES:** the only way to set `is_statutory_officer`. Do it before the first
  meeting, not after.
- **Negative search is evidence too:** no brand-side FMCG consumer-insights role is listed anywhere
  in CZ and there are zero shopper-insights roles in all of SK. If you cannot find the person,
  record `persona = none_exists` rather than leaving the company blank.

## 6. Two records nobody has created and both block the plan

- **The EuroOil station tenant / Teta franchisee.** Stations are tenant-operated and rent is
  turnover-based. **Their per-site consent decides whether the density escrow can ever be
  satisfied.** They fund nothing and can stop everything.
- **The tobacco Corporate & Regulatory Affairs officer**, distinct from the DPO. Legal fears GDPR
  purpose-change and AI Act classification; CORA fears the advertising statute and being seen near
  a youth-adjacent method. Different human, different fear, different document.
