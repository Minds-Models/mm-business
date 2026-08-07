#!/usr/bin/env bash
# Scaffold a new client folder. Usage: scripts/new-client.sh <slug>
set -euo pipefail
SLUG="$1"; DIR="$(dirname "$0")/../clients/$SLUG"
[ -e "$DIR" ] && { echo "clients/$SLUG already exists"; exit 1; }
mkdir -p "$DIR/delivered" "$DIR/assets"
cp "$(dirname "$0")/../clients/_template/facts.yaml" "$DIR/facts.yaml"
echo "Created clients/$SLUG — fill facts.yaml before producing any deliverable."
