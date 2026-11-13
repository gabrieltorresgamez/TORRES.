---
version: alpha
name: TORRES.
description: >-
  Gabriel Torres Gamez's design language: one look for all of his sites and the
  kit for anything new (a site, a presentation, a document). Warm coffee and
  cream neutrals, one electric orange, Bricolage Grotesque headings over the
  reader's own system font, flat surfaces, 12px and 6px corners.

colors:
  # Base values are the `light` theme. Every role also has `-dark`, `-hc-light`
  # and `-hc-dark` values; a theme swaps the whole set, never one token.
  primary: "#ff4f00"
  accent: "{colors.primary}"
  on-accent: "#201515"
  link: "#c2410c"
  ink: "#201515"
  ink-muted: "#605d52"
  canvas: "#fffefb"
  canvas-soft: "#f8f4f0"
  surface-raised: "{colors.canvas}"
  hairline: "#c5c0b1"
  border: "#8a877b"
  selection: "#ffe3d5"
  chart-blue: "#2f4f86"

  # dark (coffee)
  accent-dark: "#ff4f00"
  on-accent-dark: "#201515"
  link-dark: "#ff4f00"
  ink-dark: "#fffefb"
  ink-muted-dark: "#c5c0b1"
  canvas-dark: "#1a1210"
  canvas-soft-dark: "#241c19"
  surface-raised-dark: "{colors.canvas-soft-dark}"
  hairline-dark: "#3a332d"
  border-dark: "#807d72"
  selection-dark: "#7c2d12"
  chart-blue-dark: "#7db5e3"

  # hc-light (WCAG AAA)
  accent-hc-light: "#7c2d12"
  on-accent-hc-light: "#fffefb"
  link-hc-light: "#7c2d12"
  ink-hc-light: "#201515"
  ink-muted-hc-light: "#4a4740"
  canvas-hc-light: "#fffefb"
  canvas-soft-hc-light: "#f8f4f0"
  surface-raised-hc-light: "{colors.canvas-hc-light}"
  hairline-hc-light: "#807d72"
  border-hc-light: "#605d52"
  selection-hc-light: "#ffe3d5"
  chart-blue-hc-light: "#2f4f86"

  # hc-dark (WCAG AAA)
  accent-hc-dark: "#ff8a50"
  on-accent-hc-dark: "#120c0a"
  link-hc-dark: "#ff8a50"
  ink-hc-dark: "#fffefb"
  ink-muted-hc-dark: "#c5c0b1"
  canvas-hc-dark: "#120c0a"
  canvas-soft-hc-dark: "#1a1210"
  surface-raised-hc-dark: "{colors.canvas-soft-hc-dark}"
  hairline-hc-dark: "#807d72"
  border-hc-dark: "#a8a397"
  selection-hc-dark: "#7c2d12"
  chart-blue-hc-dark: "#7db5e3"

  # Terminal only (dark in every theme)
  terminal-ground: "#120c0a"
  terminal-bar: "#1a1210"
  terminal-rule: "#3a332d"
  terminal-amber: "#ffc46b"
  terminal-green: "#a9d18e"
  terminal-blue: "#8ecae6"

typography:
  hero:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: 6rem
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: -0.03em
  display:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: 3.5rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.025em
  section:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: 1.75rem
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: -0.01em
  title:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: 1.375rem
    fontWeight: 600
    lineHeight: 1.25
  heading-sm:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.3
  wordmark:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.01em
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  excerpt:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 1.0625rem
    fontWeight: 600
    lineHeight: 1.6
  meta:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  meta-small:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.3
  label-mono:
    fontFamily: "ui-monospace, 'SF Mono', SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace"
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.3
  code:
    fontFamily: "ui-monospace, 'SF Mono', SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace"
    fontSize: 0.9em
    fontWeight: 400
    lineHeight: 1.5

spacing:
  # Named by quarter-rems: "4" is 1rem.
  "2": 0.5rem
  "3": 0.75rem
  "4": 1rem
  "5": 1.25rem
  "6": 1.5rem
  "8": 2rem
  "10": 2.5rem
  "12": 3rem
  "16": 4rem
  # The only values off the scale
  panel-y: 1.1rem
  panel-x: 1.4rem
  code-inline-y: 0.1em
  code-inline-x: 0.3em

rounded:
  sm: 6px
  md: 12px

components:
  wordmark:
    textColor: "{colors.ink}"
    typography: "{typography.wordmark}"
  link:
    textColor: "{colors.link}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 0.75rem 1.25rem
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
  current-item:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.sm}"
  panel-quote:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 1.1rem 1.4rem
  panel-code:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: 1rem 1.25rem
  code-inline:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.sm}"
    padding: 0.1em 0.3em
  window:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.6}"
  window-bar:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label-mono}"
    height: 2.25rem
  window-bar-front:
    textColor: "{colors.ink}"
  theme-select:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.meta}"
    rounded: "{rounded.sm}"
    height: 2.75rem
    padding: 0 2rem 0 0.75rem
  terminal:
    backgroundColor: "{colors.terminal-ground}"
    textColor: "{colors.ink-dark}"
    typography: "{typography.code}"
---

# TORRES.

## Overview

TORRES. is Gabriel Torres Gamez's design language: one look for all of his sites (fuet, the architecture guide, torres.swiss), and the kit for anything new. Warm coffee and cream neutrals, one electric orange, Bricolage Grotesque headings over the reader's own system font, flat surfaces, 12px and 6px corners. Every rule here states the one TORRES. way.

- **Plain, calm, reader first.** Nothing competes with the content: no prompts, no cards, no decoration, no tracking.
- **Sentence case everywhere.** Headings, labels and buttons are sentence case at normal tracking. Never set text in uppercase with wide letter spacing. The only exception is the wordmark, which is always uppercase, at normal tracking.
- **First person, informal.** The author speaks as "I" ("Hi, I'm Gabo."). Texts are German or English; set `lang` on every text so hyphenation and screen readers are right.
- **No emoji, no exclamation-mark marketing.** The content carries the tone.
- **Short, concrete headings.** "Uncovering Crypto Scams with Reddit Data", "Wie ich mit Notion mein Lernen plane", "Work experience".

## Colors

Four themes from one set of names: `light` (cream), `dark` (coffee), and their high-contrast pair `hc-light` and `hc-dark`. The front matter holds the `light` values under the bare names (`ink`, `canvas`…) and the other themes under suffixed names (`ink-dark`, `ink-hc-light`, `ink-hc-dark`). In code, every theme uses the same bare token names; only their values change.

| Role | light | dark | hc-light | hc-dark | Use |
| --- | --- | --- | --- | --- | --- |
| `accent` (`primary`) | #ff4f00 | #ff4f00 | #7c2d12 | #ff8a50 | The one accent: fills, focus ring, caret, wordmark full stop, hover underline, key numbers |
| `on-accent` | #201515 | #201515 | #fffefb | #120c0a | Text and icons on an `accent` fill |
| `link` | #c2410c | #ff4f00 | #7c2d12 | #ff8a50 | Links in running text, always underlined |
| `ink` | #201515 | #fffefb | #201515 | #fffefb | Body text, headings, nav links, list titles |
| `ink-muted` | #605d52 | #c5c0b1 | #4a4740 | #c5c0b1 | Dates, authors, captions, list markers |
| `canvas` | #fffefb | #1a1210 | #fffefb | #120c0a | Page ground (elevation 0) |
| `canvas-soft` | #f8f4f0 | #241c19 | #f8f4f0 | #1a1210 | Panels in the flow of text (elevation 1) |
| `surface-raised` | = canvas | = canvas-soft | = canvas | = canvas-soft | Anything floating (elevation 2 and 3) |
| `hairline` | #c5c0b1 | #3a332d | #807d72 | #807d72 | Decorative 1px rules, outline of raised surfaces |
| `border` | #8a877b | #807d72 | #605d52 | #a8a397 | Edges of controls, axis lines, outline of the front surface |
| `selection` | #ffe3d5 | #7c2d12 | #ffe3d5 | #7c2d12 | Text selection, with `ink` on top |
| `chart-blue` | #2f4f86 | #7db5e3 | #2f4f86 | #7db5e3 | Charts only: the comparison series |

- Put text in `ink` on `canvas` or `canvas-soft`; secondary text (dates, authors, captions) in `ink-muted`.
- Use `canvas-soft` for quote and aside panels, code blocks and inline code. Panels get no border and no side stripe: the tone is enough.
- Use `hairline` for decorative 1px rules only. Use `border` for anything a visitor must see to operate a control.

### Color rules

- **One accent.** `accent` (Electric Orange, #ff4f00) is the only accent colour. It marks one thing of each kind: the wordmark's full stop, the one primary button, the focus ring, the caret, the hover underline, a key number. Everything else is coffee, cream or grey. Charts are the one exception (see Charts).
- **Large orange only on cream.** `accent` reaches only 3.27:1 on the light `canvas`: in the light theme use it for large text (24px and up), fills, marks and focus rings, never for body-size text. Body-size links use `link` (Burnt Orange #c2410c in light).
- **Text on orange is `on-accent`.** Coffee on Electric Orange (5.4:1). Never cream on #ff4f00 (3.3:1).
- **Four values.** A new colour gets one value per theme (`light`, `dark`, `hc-light`, `hc-dark`), never one theme only; check all four.
- **Coffee, not black.** The dark ground is #1a1210. No pure black surface and no light page surface in dark mode; the primary button's hover fill in `ink` is the one exception.

### High-contrast themes

`hc-light` and `hc-dark` meet WCAG AAA. They sit beside the brand themes, never in place of them, and use the same token names.

- **When:** on Auto, when the system asks for more contrast (`prefers-contrast: more`), in the light or dark that matches the colour scheme; and whenever the visitor picks High contrast.
- **Text is 7:1 or more** on every ground: `ink`, `ink-muted`, `link` and `accent` on `canvas`, `canvas-soft` and `surface-raised`; `on-accent` on `accent`; `ink` on `selection`.
- **Edges, not shade.** `hairline` and `border` are at least 3:1 on every ground. Every surface above level 0 gets a 1px outline.
- **The orange shifts, the rule does not.** `accent` and `link` become Rust #7c2d12 in `hc-light` and Light Orange #ff8a50 in `hc-dark`; there is still one accent. `on-accent` follows it.
- **Links stay underlined** and focus rings stay 2px solid `accent`; never rely on colour alone.

### Switching themes

The visitor's pick wins. On Auto, the theme follows the system and changes when it does. Put this in `<head>`, before any stylesheet that uses the tokens, so the page never draws in the wrong theme:

```html
<script>
  (function () {
    var root = document.documentElement;
    var dark = matchMedia('(prefers-color-scheme: dark)');
    var more = matchMedia('(prefers-contrast: more)');
    function applyTheme() {
      var choice = 'auto'; // auto | light | dark | hc
      try { choice = localStorage.getItem('theme') || 'auto'; } catch (e) {}
      var scheme = choice === 'light' || choice === 'dark' ? choice : dark.matches ? 'dark' : 'light';
      var hc = choice === 'hc' || (choice === 'auto' && more.matches);
      root.dataset.theme = hc ? 'hc-' + scheme : scheme;
      root.style.colorScheme = scheme;
    }
    applyTheme();
    dark.addEventListener('change', applyTheme);
    more.addEventListener('change', applyTheme);
    window.applyTheme = applyTheme;
  })();
</script>
```

- `color-scheme` follows the theme, so form controls and scrollbars are dark in the dark themes.
- **The select** is a native `<select aria-label="Theme">` at the right end of the masthead with four options: `auto` "Auto", `light` "Light", `dark` "Dark", `hc` "High contrast". It saves under `theme`, calls `applyTheme()`, and is hidden until its script runs. Its look is the `theme-select` component, with a 1px `border` edge, `appearance: none` and a chevron in `currentColor`.
- **A site that is dark by design** (a showcase) has no select and always uses `dark`; `hc-dark` still follows the contrast setting.
- **Without JavaScript** the page shows `light`.

### Charts

Charts keep the one-accent rule with one exception: blue, for a comparison. Blue and orange stay apart for every common kind of colour blindness, in all four themes.

- `accent` for the series that matters, `chart-blue` for the one it is compared with, `border` for everything else; a single series is `ink`.
- Labels, numbers and legends are `ink` or `ink-muted` in the `label` style, never the series colour.
- Never the charting library's default palette, a second orange, gradients or 3D.

### Terminal

A terminal is the one place colours beyond the accent are allowed, because it imitates a real terminal. Use them inside a terminal only, never on a page, slide or chart. The terminal is dark in every theme and all its text passes AAA.

- Body `terminal-ground` (#120c0a); title bar in front `terminal-bar` (#1a1210); the rule under it `terminal-rule` (#3a332d); output in cream, echoed commands in sand (#c5c0b1).
- `accent` keeps its meaning: the prompt, the block caret, entry titles, errors, the ASCII logo, the focus ring and text selection.
- Three colours of its own, each with one meaning: `terminal-amber` (#ffc46b, 12.3:1) for key terms and command names; `terminal-green` (#a9d18e, 11.3:1) for "now" on a current role; `terminal-blue` (#8ecae6, 10.8:1) for organisation names and URLs. No colour is decoration.

## Typography

Three voices, one font file.

- **Bricolage Grotesque Variable** (weights 200–800, self-hosted, preloaded) for names, titles, headings, the wordmark, numerals and previous/next links: `hero`, `display`, `section`, `title`, `heading-sm`, `wordmark`.
- **The system sans stack** for everything read at length: `body`, `excerpt`, `meta`, `meta-small`, `label`, `button`. It costs no download.
- **The system mono stack** for code, filenames and anything that belongs to the machine: `code`, and `label-mono` for window titles.

| Token | Use |
| --- | --- |
| `hero` | A name or title that owns the screen. Once per page or slide at most, in `accent` or `ink`. Fluid on the web: `clamp(3rem, min(6.6vw, 10vh), 6rem)`, wrapping at about 8ch |
| `display` | Page or post title (h1) and slide titles. Fluid: `clamp(2.25rem, 7vw, 3.5rem)` |
| `section` | h2 and the headline inside a window |
| `title` | A title in a list of entries. h3 uses the same size at weight 650, line height 1.2 |
| `heading-sm` | h4, entry titles (a job, a project), previous/next links |
| `wordmark` | A site's name in its masthead, always uppercase |
| `body` | Running text, about 70 characters per line |
| `excerpt` | The excerpt under a list title, short descriptions inside an entry |
| `meta` | Author and date lines, navigation, footer, in `ink-muted` |
| `meta-small` | Captions, the meta line in list rows, details summaries |
| `label` | The smallest text: chart labels, legends, small UI labels. Never running text |
| `code` | Inline code and code blocks, 0.9em of the surrounding text |

- `text-wrap: pretty` on paragraphs, `text-wrap: balance` on headings.
- Tabular figures (`font-variant-numeric: tabular-nums`) for numerals in columns, years and clocks.
- Load no other web font: no Inter, no third family, nothing from a font service.

## Layout

Spacing comes from one scale, named by quarter-rems: `2` is 0.5rem, `4` is 1rem, `16` is 4rem. Every margin, gap and padding comes from it.

- Separate things with space first, then a `canvas-soft` panel, then a 1px `hairline`, in that order of preference.
- `5` is the default gap between blocks and between bulleted items (1.25em between paragraphs in running text); `3` inside a component; `6` inside a window; `10` between entries in a list of posts or projects; `12` between sections; `16` under a page heading at its widest.
- The only values off the scale are the panel padding (`panel-y` × `panel-x`) and inline code padding (`code-inline-y` × `code-inline-x`, in em so it follows the text).
- The page gutter is fluid up to `8`: `clamp(1.25rem, 5vw, 2rem)`.
- Reading text sits in a 40rem column.
- Imported diagrams with fixed dark lines sit on a white plate with `3` padding and `md` corners, so they stay readable in the dark theme.

### New sites, presentations and documents

**A site** opens with the Wordmark top left, linking home, and the site's mark as its favicon. It offers the theme select, self-hosts and preloads the one font file, and loads nothing from another server. Reading goes in a 40rem column of `body`, page headings in `display`, a landing title in `hero` at most once.

**A presentation** is 1920 × 1080, and every type size is twice its web size; line heights and letter spacing stay the same. Margins 128px, gaps between blocks 40px. At 1280 × 720, take two thirds of each size.

| Style | Slide size |
| --- | --- |
| `hero` | 192px |
| `display` | 112px |
| `section` | 56px |
| `title` | 44px |
| `heading-sm`, `body` | 36px |
| `excerpt` | 34px |
| `meta` | 32px |
| `meta-small` | 30px |
| `label` | 26px |
| `wordmark` | 40px |

- Light theme in daylight and on shared screens; dark for a showcase or a dark room. Never mix themes in one deck.
- Open with a title slide: the wordmark top left, the title in `display`. One idea per slide: its sentence in `display`, a section slide in `hero`, supporting text in `body`. Keep a title to three lines.
- One orange thing per slide. Images with `md` corners; no shadows, no gradients, no clip-art.
- In Keynote or PowerPoint, use Bricolage Grotesque SemiBold for `section`, `title` and `heading-sm`, Bold for `display`, `hero` and the wordmark; share the deck as a PDF.

**A document** uses the light theme, a 40rem column, `section` and `title` for headings, `body` for text, panels for quotes and code, and tabular figures in tables. Set its `lang`.

## Elevation & Depth

Four levels. Each level is a fixed set of surface, outline and shadow: never mix parts of two levels. Levels 0 and 1 are the page itself and stay flat; a shadow appears only when one thing truly lies over another.

| Level | Name | Surface | Outline | Shadow | Use for |
| --- | --- | --- | --- | --- | --- |
| 0 | Ground | `canvas` | none | none | The page, the reading column, lists |
| 1 | Panel | `canvas-soft` | none | none | Quotes, asides, code blocks, inline code |
| 2 | Raised | `surface-raised` | 1px `hairline` | `elevation-2` | Something floating at rest: a window not in front, a menu, a popover, a sticky bar once content scrolls under it |
| 3 | Front | `surface-raised` | 1px `border` | `elevation-3` | The one active window or surface |

| Shadow | light and hc-light | dark and hc-dark |
| --- | --- | --- |
| `elevation-2` | `0 8px 20px -12px rgb(32 21 21 / 0.35)` | `0 8px 20px -12px rgb(0 0 0 / 0.6)` |
| `elevation-3` | `0 22px 44px -14px rgb(32 21 21 / 0.4)` | `0 22px 44px -14px rgb(0 0 0 / 0.8)` |

- **Tone first.** Lift with tone (`canvas` → `canvas-soft`) and space before reaching for a shadow. A page that overlaps nothing (a blog, a docs page) uses only levels 0 and 1.
- **A shadow means "lies on top of".** Never on a button, a card in a list, the masthead or anything on hover. Hover never changes the level.
- **One thing in front.** Only one surface is at level 3; when another comes forward, the old one drops to level 2.
- **The front is shown in more than shadow.** Level 3 also switches the outline from `hairline` to `border` and the title from `ink-muted` to `ink`.
- **Two shadows only.** Pure black in dark (a tinted shadow does not show on coffee); Coffee Ink at lower strength in light. No third shadow, no coloured or orange glow.
- **No modal level yet.** Add one, with a dimming veil, when a real modal ships.
- **High contrast outlines everything.** In `hc-light` and `hc-dark`, level 1 panels also get a 1px `hairline` outline; shadows never carry the meaning alone.

## Shapes

- Two radii and nothing else: `md` (12px, `--radius`) for images, covers, panels, code blocks, windows and the primary button; `sm` (6px, `--radius-sm`) for controls, inline code, sidebar links, small icons and the focus ring around text. No pills, no circles.
- Lines (rules, borders, outlines) are always 1px. Icons are the exception: 1.5px strokes.
- No gradients.

### Marks and icons

- **One mark per site, one construction:** the site's initial as an uppercase letter in cream (#fffefb), centred on an orange (#ff4f00) square with corners at 7/32 of its side. On the 32-unit grid every letter has a cap height of 15 units (from 9 to 24) and 4-unit strokes, so F, A and T sit as one family. Marks are for favicons, app icons and badges; cream on orange is fine for a logo, never a pattern for text.
- **The wordmark is type, not an image:** the name in uppercase, Bricolage 700 in `ink`, followed by a full stop in `accent`. Gabriel's own wordmark, used where no single site speaks (a talk, a CV, a document), is TORRES.; TORRES OS. is torres.swiss's; FUET. is fuet's.
- **Icons are drawn,** not taken from an icon font: a 40px grid, 1.5px strokes with round joins, `ink` lines on a `canvas-soft` fill. No emoji.

## Components

The parts list is Wordmark, Link, Button, Panel and Window. A pattern not listed here is built from the tokens and these rules, and stays flat unless it truly overlaps something.

- **Wordmark** (`wordmark`): the site's name in uppercase, `ink`, ending in a full stop in `accent`. Every site and deck opens with one, top left, linking home.
- **Link** (`link`): in running text, `link` colour, underlined 1px with an offset of 0.18em; the underline thickens to 2px on hover. Titles in lists and previous/next links are `ink` with no underline at rest, and a 2px `accent` underline on hover.
- **Button** (`button-primary`, `button-primary-hover`): the one primary action on a page or slide. `accent` fill with `on-accent` text, `md` corners; on hover the fill turns `ink` and the text `canvas`. No shadow.
- **Current item** (`current-item`): an `accent` fill with `on-accent` text, for the current page in a sidebar or the front window's icon.
- **Panel** (`panel-quote`, `panel-code`, `code-inline`): elevation 1 for quotes, asides and code. No border and no side stripe, except a 1px `hairline` outline in the high-contrast themes.
- **Window** (`window`, `window-bar`, `window-bar-front`): a surface that floats over the page with a title bar in `label-mono`. Elevation 2 at rest (1px `hairline`, `elevation-2`), elevation 3 in front (1px `border`, `elevation-3`, title in `ink`). Its headline is `section`; its body text is `excerpt` at most 68ch wide.
- **Theme select** (`theme-select`): see Switching themes.

### States

- **Focus:** one ring everywhere: 2px solid `accent`, 3px outside the element, following its corners (`sm` around text). Only where it cannot sit outside (inside a tight control) use `ink`.
- **Hover only on hover devices:** wrap hover styles in `@media (hover: hover) and (pointer: fine)`.
- **Caret and native controls:** `caret-color` and `accent-color` are `accent`.
- **Selection:** `selection` background, `ink` text.

### Motion

Motion is short and rare.

- **Curves:** `cubic-bezier(0.23, 1, 0.32, 1)` (ease-out) for anything that appears or responds; `cubic-bezier(0.77, 0, 0.175, 1)` (ease-in-out) only for something moving across the screen, such as an image carried between pages (250ms).
- **Press:** buttons and icons scale to 0.97 on `:active` (small icon buttons 0.95) in 140ms ease-out.
- **Colour change:** 160ms `ease`. Transition `text-decoration-color`, not `color`, so links do not lag behind a theme switch.
- **Open and close:** open fades in and scales from 0.96 to 1 in 180ms ease-out, growing from the icon it was opened from; close fades out and scales to 0.97 in 120ms. Opening is always a little slower than closing (a disclosure: 220ms open, 150ms close).
- **Keyboard is instant.** Anything started from the keyboard happens at once. Maximise and restore are instant too. Navigation, search and sidebars are never animated.
- **One staged sequence at most:** an intro may play once per session, skippable by any click or key, built in CSS so it ends even if the script fails, gone within about three seconds. No second intro, no scroll animations, no looping animation.
- **Reduced motion:** under `prefers-reduced-motion: reduce` drop the intro, scaling, press transitions and smooth scrolling; keep plain fades.
- A surface changes elevation level at once; only its open and close move.

## Do's and Don'ts

**Do**

- Use `accent` for exactly one thing of each kind, and `on-accent` for any text on it.
- Use `link` (not `accent`) for body-size links in the light theme.
- Give every new colour four values, one per theme, and check contrast in all four.
- Separate with space first, then tone, then a 1px `hairline`.
- Keep reading in a 40rem column of `body` text, and use `hero` at most once per page or slide.
- Keep links underlined and the one focus ring visible in every theme.
- Self-host and preload the one Bricolage Grotesque file; let body text use the system font.

**Don't**

- Don't add a second accent colour, an orange glow, or a terminal colour outside a terminal.
- Don't put cream text on Electric Orange, or body-size orange text on cream.
- Don't use pure black surfaces, or a light page surface in dark mode.
- Don't set uppercase text with wide letter spacing (the wordmark is the one uppercase thing).
- Don't use pills, circles, gradients, 2px borders, or a third radius.
- Don't put shadows on buttons, list cards, the masthead or hover states; don't add a third shadow.
- Don't load Inter, a third font family, or anything from a font service.
- Don't use emoji, icon fonts, exclamation-mark marketing, scroll animations or looping animation.
