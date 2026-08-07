#!/usr/bin/env bash
# Render an HTML deliverable to PDF via headless Chrome.
# Usage: scripts/render-pdf.sh path/to/report.html [out.pdf]
set -euo pipefail
IN="$1"; OUT="${2:-${IN%.html}.pdf}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || CHROME="chromium"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT" "file://$(cd "$(dirname "$IN")" && pwd)/$(basename "$IN")"
echo "PDF: $OUT"
