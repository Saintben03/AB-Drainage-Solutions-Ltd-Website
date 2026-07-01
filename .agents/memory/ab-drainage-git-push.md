---
name: ab-drainage shell git push blocked
description: shell `git push` against this repo's GitHub remote hangs/fails auth; use Replit's Git panel UI instead.
---

Shell `git push` (even with the origin remote already configured to
`https://github.com/Saintben03/AB-Drainage-Solutions-Ltd-Website.git`) does not work in this
environment: it either times out with no output or errors with "Invalid username or token.
Password authentication is not supported for Git operations." This is a credential/auth
limitation of the shell environment, not a code or remote-config problem.

**Why:** Replit's shell has no interactive credential helper for this GitHub remote, so `git
push` hangs waiting for auth input instead of using Replit's managed GitHub connection.

**How to apply:** Do not keep retrying `git push` from the shell/bash tool. Tell the user to use
Replit's Git panel (sidebar) and click its **Push** button — that path uses Replit's managed
GitHub connection and has worked for this project before (including getting past a "Branch
already exists" dialog via "Set upstream to origin/main").
