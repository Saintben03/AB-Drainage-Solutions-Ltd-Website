---
name: ab-drainage shell git push hangs (askpass password)
description: shell `git push` hangs because replit-git-askpass returns no password token; GitHub connection not authorized. Fix via Git panel.
---

Shell `git push` on this repo hangs forever (times out with no output), even with
`GIT_TERMINAL_PROMPT=0` and `--no-verify`. Root cause was diagnosed precisely:

- Remote `origin` = `https://github.com/Saintben03/AB-Drainage-Solutions-Ltd-Website.git`.
- `git ls-remote` (read) succeeds instantly — network/remote are fine.
- No `credential.helper` is set, but `GIT_ASKPASS=replit-git-askpass`.
- Testing the helper directly: `replit-git-askpass "Username..."` returns `token` instantly (exit 0),
  but `replit-git-askpass "Password..."` **hangs** (times out). The password step is the hang point.
- There is also a Git LFS `pre-push` hook (two LFS-tracked ZIPs in attached_assets), but the hang
  persists with `--no-verify`, so LFS is NOT the cause — the credential (askpass password) is.

**Why:** the Replit-managed GitHub connection for this Repl is not returning an auth token, so the
push's password lookup blocks indefinitely. Read works (public), write (push) needs the token.

**How to apply:** Do NOT keep retrying `git push` from the shell — it will hang every time until the
GitHub connection is authorized. Tell the user to open Replit's **Git panel** (sidebar) and use its
**Push** button; if offered, (re)connect/authorize GitHub there. Authorizing the connection is what
makes the askpass password resolve, after which shell `git push` also works. This is why other Repls
with an authorized GitHub connection push fine from the shell.
