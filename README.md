# jgbrasier.github.io

Personal website for Jean-Guillaume Brasier, built with [Astro](https://astro.build/) and hosted on GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

The local site runs at `http://localhost:4321`.

## Checks

```sh
npm run build
```

This runs Astro's type and content checks, then generates the static site in `dist/`.

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds the Astro site and deploys it to GitHub Pages.

In the repository's **Settings → Pages** screen, the publishing source must be set to **GitHub Actions**.
