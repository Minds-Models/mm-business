# mm-business

Business content & deliverables for Minds & Models: data reports, sales decks, investor
materials, outreach templates, client facts. **Start with `CLAUDE.md`** — it is the
operating manual (for humans and agents alike).

- `messaging/` — approved copy, stats with sources, objection answers
- `templates/` — deliverable specs + references (data report, decks, one-pagers, outreach)
- `clients/<x>/` — facts.yaml (source of truth) + delivered archive
- `brand/` — tokens.css, logos, guidelines
- `data/` — SQL queries + snapshot manifests behind every report
- `.claude/skills/` — /data-report, /sales-deck, /one-pager
- `blitzkrieg/decks/`: final pitch decks: `brand/`, `retailer/`, `investor/`, each as `mm-<audience>-deck-<lang>.{html,pdf}` (lang = `en` / `cz`); shared images in `assets/`, superseded generic decks in `_outdated/`
- `decks/`: client-specific and one-off decks, plus `logos/` and `avatars/`

Code lives elsewhere: datalayer (ETL/analysis), dashboard-backend (product).
Raw media (videos, PSD, photos) stays on local disk / Drive — not in git.
