# resume-builder

A browser-based resume editor built with [Astro](https://astro.build). Edit your resume in-place, auto-saves to `localStorage`, and prints to a clean A4 PDF — no backend required.

## How it works

### Stack

- **Astro 5** — static site framework; the resume is server-rendered at build time from the default data, then hydrated client-side
- **TypeScript** — strict mode throughout
- No UI framework, no build-time DB, no server

### Project structure

```
src/
  data/
    resume.ts        # Resume type + defaultResume seed data
  layouts/
    Layout.astro     # Base HTML shell (imports global/print CSS)
  pages/
    index.astro      # Single-page app: renders the resume + inline client script
  scripts/
    editor.ts        # Toggles contenteditable on all [data-field] elements
    storage.ts       # load() / save() helpers backed by localStorage
  styles/
    global.css       # Resume layout (A4 grid, toolbar, edit-mode styles)
    print.css        # @media print overrides (hides toolbar, resets page to A4)
```

### Data flow

1. **Seed data** — `src/data/resume.ts` exports a `Resume` type and a `defaultResume` object with placeholder content.
2. **Server render** — `index.astro` imports `defaultResume` and renders the full resume into the HTML. Every editable element carries a `data-field="<key>"` attribute.
3. **Client hydration** — on `DOMContentLoaded`, the inline script calls `storage.load()`, which reads `localStorage` (falling back to `defaultResume`), and populates every `[data-field]` element with the stored values.
4. **Editing** — clicking **Edit** calls `toggleEdit()` in `editor.ts`, which sets `contentEditable="true"` on every `[data-field]` element and adds the `edit-mode` CSS class to `<body>` (shows dashed-underline highlights). Clicking **Done Editing** reverses this.
5. **Auto-save** — every `blur` event on a `[data-field]` element triggers a debounced (300 ms) `persistAll()` call that reads the current text of every field and writes the full resume object back to `localStorage`.
6. **Printing** — clicking **Print** calls `window.print()`. `print.css` hides the toolbar and renders the resume at A4 size (15 mm margins) with no box-shadow.

### Sections

| Section | Location in layout |
|---|---|
| Name, title, contact info | Full-width header |
| Summary, Experience, Education | Left main column (65 %) |
| Skills, Open Source, Talks, Hobbies | Right sidebar (35 %) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production static output → dist/
npm run preview  # preview the build locally
```

## Customizing your resume

Edit `src/data/resume.ts` and update the `defaultResume` object with your own information. The first time a user visits, `localStorage` is empty so the default data is shown; after any edit the saved version takes over.
