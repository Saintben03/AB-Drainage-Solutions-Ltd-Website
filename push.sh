#!/bin/bash
set -e
if [ -z "$GITHUB_PERSONAL_ACCESS_TOKEN" ]; then
  echo "ERROR: GITHUB_PERSONAL_ACCESS_TOKEN is not set"
  exit 1
fi
git -C "$(dirname "$0")" push \
  "https://Saintben03:${GITHUB_PERSONAL_ACCESS_TOKEN}@github.com/Saintben03/AB-Drainage-Solutions-Ltd-Website.git" \
  main
