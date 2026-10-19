# Mohit Bhat – Portfolio
React + Vite single-page site.

## Run locally
    npm install
    npm run dev

## Edit content
Everything (copy, scheduler link, projects, books) lives in `src/data.js`. Photos are in `public/images/`.

## Deploy on GitHub Pages
1. Create a repo (e.g. `mohit-portfolio`) and push this folder to `main`.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Each push to `main` builds and publishes automatically (`.github/workflows/deploy.yml`).
