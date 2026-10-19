# Mohit Bhat · Portfolio

A single-page portfolio for freelance CRM and data operations work, built with **React 18** and **Vite 5** and deployed to **GitHub Pages** through GitHub Actions. It uses a dark theme with light, high-contrast text.

It is aimed at four kinds of clients: higher-ed admissions and student engagement teams, small nonprofits and associations that run on spreadsheets, education and coaching businesses, and small teams that need an "ops person" for a few days a month.

Live site (after deploy): `https://bhatmohit.github.io/mohit-portfolio/`

---

## Page sections

| Section | What it shows |
| --- | --- |
| Hero | Headline, short pitch, headshot in an arch frame, two calls to action |
| How I can help | Four service cards, one per target audience |
| Case study | Mays Business School CRM role as an expandable walkthrough, plus the Study Habits App project with live-site and code links |
| About | Experience timeline, skills, education, football photo, a bookshelf graphic for literature, and a philosophy note |
| Let's talk | Scheduler button plus email and LinkedIn links |

---

## Project structure

```
mohit-portfolio/
├── .github/workflows/deploy.yml
├── public/images/
│   ├── headshot.jpg
│   └── football.jpg
├── src/
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

### What each file does

**Root files**

- **`package.json`**: Declares the project and its dependencies (`react`, `react-dom`, `vite`, `@vitejs/plugin-react`). Defines the scripts `dev` (local dev server), `build` (production build into `dist/`), and `preview` (serve the built site locally).
- **`vite.config.js`**: Enables the React plugin and sets `base: './'`, so the built site uses relative asset paths and works under any GitHub Pages URL.
- **`index.html`**: The HTML shell. Holds the title, meta description, emoji favicon, dark `color-scheme` and `theme-color` tags, Google Fonts links (Bricolage Grotesque for headings, Newsreader for body text), and the `#root` element React mounts into.
- **`.gitignore`**: Keeps `node_modules` and `dist` out of version control.
- **`README.md`**: This file.

**`src/` (application code)**

- **`main.jsx`**: Entry point. Mounts `App` into `#root` and loads the stylesheet.
- **`App.jsx`**: The whole page layout: sticky navigation, hero, services, case study, About, and contact. Has a small reusable `Section` component and one piece of state (which case-study item is open). All content comes from `data.js`.
- **`data.js`**: **The file you will edit most.** Holds the scheduler URL, profile text, services, case study, projects, experience, skills, education, bookshelf spines, and hobby blurbs. Also exports `base`, the path prefix used for image URLs.
- **`styles.css`**: All styling. The dark palette is defined as variables at the top (`--bg`, `--card`, `--ink` for text, `--line` for borders, `--pink`, `--maroon`, `--gold`). Also holds the layout, mobile rules, keyboard focus styles, and `prefers-reduced-motion` handling.

**`public/images/`**

- **`headshot.jpg`**: Your portrait, shown in the hero.
- **`football.jpg`**: Your football photo, shown in the About section. It carries a ©RFYS watermark, so confirm you have the rights or replace it.

**`.github/workflows/deploy.yml`**: On every push to `main` (or a manual run), installs dependencies, runs `npm run build`, and publishes `dist/` to GitHub Pages.

---

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build && npm run preview   # test the production build
```

---

## Customize

1. **Scheduler link**: replace `SCHEDULER_URL` in `src/data.js`. It is a placeholder until you do.
2. **Projects**: edit the `projects` array (`name`, `blurb`, `repo`, `live`, `stack`).
3. **Case study**: edit `caseStudy.points`. Concrete outcomes will make it stronger.
4. **Bookshelf**: edit `shelf` (label `t`, colour `c`, height `h`; add `d: true` to a light spine so its text turns dark). Pick spine colours that stand out against the dark card.
5. **Colours and fonts**: change the CSS variables at the top of `styles.css` and the font link in `index.html`.

---

## Deploy to GitHub Pages

```bash
git init -b main
git add .
git commit -m "Initial portfolio site"
git remote add origin https://github.com/bhatmohit/mohit-portfolio.git
git push -u origin main
```

In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions** (not the Jekyll or Static HTML templates). Later pushes to `main` redeploy automatically. For a root URL, name the repo `bhatmohit.github.io`.

---

## Troubleshooting

- **Workflow missing in Actions**: run `git add .github`, commit, and push.
- **First deploy failed**: enable Pages as above, then re-run the workflow.
- **Images missing**: check `public/images/` has `headshot.jpg` and `football.jpg`.
- **Blank page on Pages**: make sure `vite.config.js` still has `base: './'`.

---

## Tech stack

React 18 · Vite 5 · plain CSS · GitHub Actions · GitHub Pages
