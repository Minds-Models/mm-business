#!/usr/bin/env bash
# Render an HTML deliverable to PDF.
# Usage: scripts/render-pdf.sh path/to/file.html [out.pdf]
#
# Default: the baked render (scripts/render-pdf.js), identical in Chrome, Mac Preview, pdf.js/Slack.
#   One-time setup:  cd scripts && npm install
# Fallback when Node/Playwright is missing: plain headless Chrome print (flat look, print layer).
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
IN="$1"; OUT="${2:-${IN%.html}.pdf}"

if command -v node >/dev/null && [ -d "$DIR/node_modules/playwright" ]; then
  node "$DIR/render-pdf.js" "$IN" "$OUT"
else
  echo "note: baked render unavailable (run: cd scripts && npm install). Using plain Chrome print." >&2
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  [ -x "$CHROME" ] || CHROME="chromium"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$OUT" "file://$(cd "$(dirname "$IN")" && pwd)/$(basename "$IN")"
  echo "PDF: $OUT"
fi

# Fails on constructs that render wrong in Mac Preview (grey boxes) or pdf.js/Slack (pink).
python3 "$DIR/pdf-check.py" "$OUT" || echo "WARNING: PDF will not render the same in every viewer, see templates/deck-style/STYLE.md#pdf-export"
