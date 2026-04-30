# Git & GitHub Guide — The Hive

A practical reference for managing the project across **Replit (backend)**, **your local machine (frontend design)**, and **GitHub (`slysheik/the-hive`)**.

---

## 1. Repository

| Field | Value |
|---|---|
| GitHub URL | `https://github.com/slysheik/the-hive.git` |
| Default branch | `main` |
| Replit remote name | `origin` |
| Local backup remote | `gitsafe-backup` (Replit-managed, do not touch) |

---

## 2. First-Time Setup

### On your local machine

```bash
# Clone the repo
git clone https://github.com/slysheik/the-hive.git
cd the-hive

# Tell git who you are (only once per machine)
git config --global user.name "slysheik"
git config --global user.email "your@email.com"

# Cache your GitHub credentials so you don't paste a token every push
git config --global credential.helper store
```

The first `git push` will ask for your GitHub username and a **Personal Access Token** (not your password). After that it's cached.

### Generate a Personal Access Token (PAT)

1. Go to https://github.com/settings/tokens?type=beta
2. **Generate new token** → name it `the-hive local`
3. Repository access → **Only select repositories** → `slysheik/the-hive`
4. Permissions → **Contents: Read and write**
5. Copy the token (starts with `github_pat_...`) — paste it as the password when git asks

---

## 3. Daily Workflow — Local Frontend Work

```bash
# 1. Pull latest backend changes from Replit before starting
git pull origin main

# 2. Make your frontend changes (edit files, etc.)

# 3. See what changed
git status                    # list changed files
git diff                      # see actual line-by-line changes

# 4. Stage your changes
git add .                     # stage everything
# OR
git add artifacts/the-hive/   # stage only frontend folder

# 5. Commit with a clear message
git commit -m "frontend: redesign offer card with KES badge"

# 6. Push to GitHub
git push origin main
```

### Recommended commit message style

| Prefix | When to use |
|---|---|
| `frontend:` | UI / styling / React component changes |
| `backend:` | API routes, Express server, validators |
| `db:` | Drizzle schema, migrations, seed data |
| `docs:` | Anything in `the-hive/docs/` |
| `fix:` | Bug fix |
| `chore:` | Dependencies, configs, cleanup |

Examples:
- `frontend: add tier filter to offers list`
- `backend: log click IP hash on /go/:platform`
- `db: seed 3 more Tier C offers`

---

## 4. Daily Workflow — Replit Backend Work

In Replit, I (the agent) handle this automatically. But for reference:

```bash
# Pull your latest frontend changes
git pull origin main

# After backend changes, the Replit checkpoint auto-commits.
# Then push to GitHub:
git push origin main
```

**Replit-specific note:** Most destructive git commands (`commit`, `push -f`, `reset`, `checkout`, `rm`, `clean`) are blocked in the main agent for safety. They run via background tasks — that's why pushes from the agent take an extra approval step.

---

## 5. Switching Repositories

If you ever switch GitHub repos (like when you moved from `System-Hive` → `the-hive`):

```bash
# See current remote
git remote -v

# Update to new repo
git remote set-url origin https://github.com/slysheik/NEW-REPO.git

# Verify
git remote -v

# Push to new remote
git push -u origin main
```

---

## 6. Branching (Optional — for Parallel Work)

If you want to design the frontend in a separate branch while I keep working on backend in `main`:

```bash
# Create + switch to a new branch
git checkout -b frontend-redesign

# Work, commit as usual...
git add .
git commit -m "frontend: new hero layout"

# Push the branch (first time)
git push -u origin frontend-redesign

# Later: merge into main
git checkout main
git pull origin main
git merge frontend-redesign
git push origin main

# Delete the branch when done
git branch -d frontend-redesign
git push origin --delete frontend-redesign
```

---

## 7. Common Fixes

### "Updates were rejected because the remote contains work that you do not have locally"

Someone (or Replit) pushed before you. Pull first:

```bash
git pull origin main --rebase
git push origin main
```

### "Authentication failed"

Your token expired or wasn't saved. Regenerate (see Section 2) and:

```bash
# macOS
git credential-osxkeychain erase
host=github.com
protocol=https
[press Enter twice]

# Linux
rm ~/.git-credentials
```

Then retry `git push` — it will ask for your token again.

### "I committed something I shouldn't have"

```bash
# Undo the last commit but KEEP your changes
git reset --soft HEAD~1

# Undo the last commit AND throw away changes (destructive)
git reset --hard HEAD~1
```

### Merge conflict

```bash
# git will tell you which files conflict
git status

# Open each file, find <<<<<<<, =======, >>>>>>> markers, decide what to keep
# Then:
git add <conflicted-file>
git commit
```

---

## 8. Inspecting History

```bash
# Last 10 commits
git log --oneline -10

# Who changed what in a file
git blame artifacts/the-hive/src/pages/home.tsx

# See changes in a specific commit
git show <commit-hash>

# What's different between local and GitHub
git fetch origin
git log HEAD..origin/main --oneline    # commits on GitHub I don't have
git log origin/main..HEAD --oneline    # commits I have but haven't pushed
```

---

## 9. The Two-Environment Workflow (Your Setup)

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│  Local Machine  │ ──push─▶│      GitHub      │◀──push──│     Replit      │
│  (frontend)     │ ◀─pull──│  slysheik/the-   │ ──pull─▶│   (backend)     │
└─────────────────┘         │      hive        │         └─────────────────┘
                            └──────────────────┘
```

**Golden rule: pull before you start, push when you're done.**

This avoids 95% of conflicts.

---

## 10. Quick Cheatsheet

| Action | Command |
|---|---|
| See what changed | `git status` |
| See line-level diff | `git diff` |
| Stage everything | `git add .` |
| Commit | `git commit -m "msg"` |
| Push to GitHub | `git push origin main` |
| Pull from GitHub | `git pull origin main` |
| Switch branches | `git checkout <branch>` |
| Create + switch branch | `git checkout -b <branch>` |
| List branches | `git branch` |
| See remote URL | `git remote -v` |
| See last 10 commits | `git log --oneline -10` |
| Undo last commit (keep changes) | `git reset --soft HEAD~1` |
| Discard local changes to a file | `git checkout -- <file>` |
