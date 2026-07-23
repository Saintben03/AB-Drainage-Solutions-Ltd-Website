#!/usr/bin/env bash
set -e

if [ -z "$GitHub_Personal_Acess_Token" ]; then
  echo "ERROR: GitHub_Personal_Acess_Token secret is not set."
  exit 1
fi

REMOTE="https://x-token:${GitHub_Personal_Acess_Token}@github.com/Saintben03/AB-Drainage-Solutions-Ltd-Website.git"

git push --force "$REMOTE" HEAD:main
