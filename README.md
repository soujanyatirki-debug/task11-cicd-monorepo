# Task 11 — CI/CD: GitHub Actions, Workspaces, semantic-release

## Run locally
```
npm install
npm test
git init && npx husky    # enables commitlint hook
git commit -m "added stuff"        # REJECTED by commitlint
git commit -m "feat(api): add url builder"   # accepted
```

## Run in CI
1. Create a GitHub repo, push this folder to `main`.
2. Actions tab → CI runs: tests (Node 20 & 22 matrix) → Docker Buildx multi-arch image to GHCR → semantic-release.
3. `feat:` → minor bump, `fix:` → patch, `feat!:` / `BREAKING CHANGE:` → major. CHANGELOG.md + GitHub Release generated automatically.

## Interview points
- Conventional Commits make history machine-readable → automated SemVer, changelog, release triggers.
- Atomic commits = easy revert/bisect.
- Workspaces: shared packages linked locally; only rebuild affected packages (Turborepo/Nx for caching).
- CI best practices: cache deps, concurrency cancel, matrix, least-privilege `permissions`, secrets via GITHUB_TOKEN/OIDC, Buildx layer cache, immutable tags (git SHA).
- Branch strategy: trunk-based with short-lived feature branches + PR checks.
