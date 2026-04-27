# Tesseracs HTML template

A static product starter for small dashboards, microsites, and internal tools.

This template intentionally stays framework-free while still feeling like a real project:

- semantic `index.html` structure
- polished, responsive `styles.css`
- `main.js` entry point that imports focused modules from `src/`
- realistic sample data and interactive rendering without a build step

Clone URL: `https://github.com/tesseracs/templates.html`

## Quick start

1. Open `index.html` directly in a browser for a quick preview.
2. Or run `./run.sh` to start a local server on port `8080`.
3. Visit `http://localhost:8080`.

## Project layout

- `index.html` - semantic shell and dashboard mount point
- `styles.css` - responsive layout, tokens, cards, and visual polish
- `main.js` - bootstraps the page
- `src/data.js` - sample launch data for the starter
- `src/dashboard.js` - rendering and small UI interactions
- `run.sh` - serves the folder with Python's built-in HTTP server

## Extend it

- Replace `src/data.js` with your own JSON or API-backed data
- Add more panels in `src/dashboard.js`
- Keep `main.js` as the single entry point for browser behavior
