#!/bin/bash

# ============================================================
# Meridian — Template Export Script
# Creates a clean zip ready for marketplace upload
# Run from the root of the project: bash scripts/zip.sh
# ============================================================

set -e

TEMPLATE_NAME="meridian"
OUTPUT_DIR="./dist"
ZIP_NAME="${TEMPLATE_NAME}-$(date +%Y%m%d).zip"

echo "🏨 Meridian — Building release zip..."
echo ""

# ── Clean previous dist ──────────────────────────────────────
if [ -d "$OUTPUT_DIR" ]; then
  rm -rf "$OUTPUT_DIR"
fi
mkdir -p "$OUTPUT_DIR"

# ── Create the zip ───────────────────────────────────────────
# Using zip with exclusions — works on macOS and Linux
zip -r "$OUTPUT_DIR/$ZIP_NAME" . \
  --exclude "*/node_modules/*" \
  --exclude "*/.next/*" \
  --exclude "*/.sanity/*" \
  --exclude "*/dist/*" \
  --exclude "*/.git/*" \
  --exclude "*/.gitignore" \
  --exclude "*/.DS_Store" \
  --exclude "*/Thumbs.db" \
  --exclude "*/.env" \
  --exclude "*/.env.local" \
  --exclude "*/.env.*.local" \
  --exclude "*/.env.production" \
  --exclude "*/coverage/*" \
  --exclude "*/.nyc_output/*" \
  --exclude "*/out/*" \
  --exclude "*/build/*" \
  --exclude "*.log" \
  --exclude "*.tsbuildinfo" \
  --exclude "*/.turbo/*" \
  --exclude "*/scripts/zip.sh"

echo ""
echo "✅ Done!"
echo "📦 Output: $OUTPUT_DIR/$ZIP_NAME"
echo "📏 Size:   $(du -sh "$OUTPUT_DIR/$ZIP_NAME" | cut -f1)"