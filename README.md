# Torres

Torres is Gabriel Torres Gamez's design language: one look for all of his sites, and the kit for anything new: a site, a presentation, a document. Warm coffee and cream neutrals, one electric orange, Bricolage Grotesque headings over the reader's own system font, flat surfaces, 12px and 6px corners.

Every rule below states the one Torres way.

## Content fundamentals

- **Plain, calm, reader first.** Nothing competes with the content: no prompts, no cards, no decoration, no tracking.
- **Sentence case everywhere.** Headings, labels and buttons are sentence case at normal tracking. Never set text in uppercase with wide letter spacing. The one exception is the wordmark, which is always uppercase, at normal tracking.
- **First person, informal.** The author speaks as "I" ("Hi, I'm Gabo."). Texts are German or English; set `lang` on every text so hyphenation and screen readers are right.
- **No emoji, no exclamation-mark marketing.** Let the content carry the tone.
- **Short, concrete headings.** "Uncovering Crypto Scams with Reddit Data", "Wie ich mit Notion mein Lernen plane", "Work experience".

## Colour

Four themes from one set of names: `light` (cream), `dark` (coffee), and their high-contrast pair `hc-light` and `hc-dark`. A site offers a theme select with Auto (the default), Light, Dark and High contrast. A site that is dark by design, such as a showcase, uses `dark`, and `hc-dark` when the visitor asks for more contrast.

- Put text in `ink` on `canvas` or `canvas-soft`. Put secondary text (dates, authors, captions) in `ink-muted`.
- Use `canvas-soft` for quote and aside panels, code blocks and inline code. Give panels no border and no side stripe: the tone is enough.
- Use `hairline` for decorative 1px rules only. Use `border` for anything a visitor must see to operate a control.
- Use `selection` for text selection, with `ink` on top.

### Rules

- **One accent.** `accent` (Electric Orange, #ff4f00) is the only accent colour. It marks one thing of each kind: the wordmark's full stop, the one primary button, the focus ring, the caret, the hover underline, a key number. Everything else is coffee, cream or grey. Add no second accent; charts are the one exception (see Charts).
- **Large orange only on cream.** `accent` reaches only 3.27:1 on the light `canvas`: in the light theme use it for large text (24px and up), fills, marks and focus rings, never for body-size text. Body-size links use `link` (Burnt Orange #c2410c in light, Electric Orange in dark).
- **Text on orange is `on-accent`.** Coffee on Electric Orange (5.4:1). Never put cream on #ff4f00 (3.3:1).
- **Four values.** Add a new colour with one value per theme (`light`, `dark`, `hc-light`, `hc-dark`), never for one theme only, and check all four.
- **Coffee, not black.** The dark ground is `canvas` dark (#1a1210). Use no pure black surface and no light page surface in dark mode; the primary button's hover fill in `ink` is the one exception.

### High-contrast themes

`hc-light` and `hc-dark` meet WCAG AAA. They sit beside the brand themes, never in place of them, and use the same token names, so nothing else changes in the code.

- **When:** on Auto, when the visitor's system asks for more contrast (`prefers-contrast: more`), in the light or dark that matches their colour scheme; and whenever the visitor picks High contrast. See Switching themes.
- **Text is 7:1 or more** on every ground: `ink`, `ink-muted`, `link` and `accent` on `canvas`, `canvas-soft` and `surface-raised`; `on-accent` on `accent`; `ink` on `selection`.
- **Edges, not shade.** `hairline` and `border` are at least 3:1 on every ground. Give every surface above level 0 a 1px outline (see Elevation).
- **The orange shifts, the rule does not.** `accent` and `link` become Rust #7c2d12 in `hc-light` and Light Orange #ff8a50 in `hc-dark`; there is still only one accent. `on-accent` follows it: cream on Rust, Terminal Ground on Light Orange.
- **Links stay underlined** and focus rings stay 2px solid `accent`; never remove an underline on hover or rely on colour alone.

### Switching themes

The visitor's pick wins. On Auto, the theme follows their system: light or dark from their colour scheme, high contrast when they ask for more contrast, and it changes when their system does. Put this script in `<head>`, before any stylesheet that uses the tokens, so the page never draws in the wrong theme:

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

- **`color-scheme` follows the theme,** so form controls and scrollbars are dark in the dark themes.
- **The select:** a native `<select aria-label="Theme">` at the right end of the masthead, with four options: `auto` "Auto", `light` "Light", `dark` "Dark", `hc` "High contrast". On load it shows the saved choice (Auto when there is none); on change it saves the value under `theme` and calls `applyTheme()`. It is hidden until its script runs, so it never appears without working.
- **The select's look:** 2.75rem high, text in the `meta` style, `canvas` ground, `ink` text, a 1px `border` edge, `radius-sm` corners, padding 0 2rem 0 0.75rem, `appearance: none` with a chevron in `currentColor` (no image, no gradient), and the one focus ring (see States).
- **A site that is dark by design** has no select and sets `scheme` to `'dark'` always; `hc-dark` still follows the visitor's contrast setting.
- **Without JavaScript** the page shows `light`.

## Typography

Three voices, one font file.

- **Bricolage Grotesque Variable** (`display`, weights 200–800, self-hosted from `fonts/`, preloaded) for names, titles, headings, the wordmark, numerals and previous/next links. Styles: `hero`, `display`, `section`, `title`, `heading-sm`, `wordmark`.
- **The system sans stack** (`sans`) for everything read at length. Styles: `body`, `excerpt`, `meta`, `meta-small`, `label`. It costs no download. `label` (13px, weight 500) is the smallest text: chart labels, small UI labels, and, set in mono, window titles.
- **The system mono stack** (`mono`) for code, filenames and anything that belongs to the machine. Style: `code`.

Rules:
- Set running text in `body` (18px, line height 1.6) in a column of about 70 characters; `text-wrap: pretty` on paragraphs, `text-wrap: balance` on headings.
- Use `hero` once per page or slide at most, for a name or a title that owns the screen. On the web make it and `display` fluid: `clamp(3rem, min(6.6vw, 10vh), 6rem)` and `clamp(2.25rem, 7vw, 3.5rem)`.
- Use tabular figures (`font-variant-numeric: tabular-nums`) for numerals in columns, years and clocks.
- Load no other web font: no Inter, no third family, nothing from a font service.

## Spacing and layout

Spacing comes from one scale, named by quarter-rems: `space-2` (0.5rem), `space-3` (0.75rem), `space-4` (1rem), `space-5` (1.25rem), `space-6` (1.5rem), `space-8` (2rem), `space-10` (2.5rem), `space-12` (3rem), `space-16` (4rem). Take every margin, gap and padding from it.

- Separate things with space first, then a `canvas-soft` panel, then a 1px `hairline`, in that order of preference.
- Use `space-5` as the default gap between blocks (1.25em between paragraphs in running text) and between items in a bulleted list, `space-3` inside a component, `space-10` between entries in a list of posts or projects, `space-12` between sections.
- The only values off the scale are the panel padding (`panel-y` × `panel-x`) and inline code padding (`code-inline-y` × `code-inline-x`), which is in em so it follows the text.
- Keep the page gutter fluid up to `space-8`: `clamp(1.25rem, 5vw, 2rem)`.
- Keep reading text in a 40rem column.
- Put imported diagrams with fixed dark lines (SVG exports from other tools) on a white plate with `space-3` padding and `radius` corners, so they stay readable in the dark theme.

## Shapes and borders

- Use two radii and nothing else: `radius` (12px) for images, panels, code blocks, windows and the primary button; `radius-sm` (6px) for controls, inline code, sidebar links and small icons. No pills, no circles.
- Lines (rules, borders, outlines) are always 1px. Icons are the exception: 1.5px strokes, and corners of their own.
- No gradients.

## Elevation

Four levels. Each level is a fixed set of surface, outline and shadow: never mix parts of two levels. Levels 0 and 1 are the page itself and stay flat; a shadow appears only when one thing truly lies over another. See the Panel (level 1) and Window (levels 2 and 3) previews.

| Level | Name | Surface | Outline | Shadow | Use for |
| --- | --- | --- | --- | --- | --- |
| 0 | Ground | `canvas` | none | none | The page, the reading column, lists. |
| 1 | Panel | `canvas-soft` | none | none | Quotes, asides, code blocks, inline code: in the flow of the text. |
| 2 | Raised | `surface-raised` | 1px `hairline` | `elevation-2` | Something floating at rest: a window not in front, a menu, a popover, a sticky bar once content scrolls under it. |
| 3 | Front | `surface-raised` | 1px `border` | `elevation-3` | The one active window or surface the visitor is working in. |

Rules:
- **Tone first.** Lift with tone (`canvas` → `canvas-soft`) and space before you reach for a shadow. A page that overlaps nothing (a blog, a docs page) uses only levels 0 and 1.
- **A shadow means "lies on top of".** Never put a shadow on a button, a card in a list, the masthead or anything on hover. Hover never changes the level.
- **One thing in front.** Only one surface carries level 3 at a time; when another comes forward, the old one drops to level 2.
- **The front is shown in more than shadow.** Moving to level 3 also switches the outline from `hairline` to `border` and the title from `ink-muted` to `ink`, so the change reads without the shadow.
- **Two shadows only.** `elevation-2` and `elevation-3` are the whole scale. Pure black in dark, because a tinted shadow does not show on coffee; Coffee Ink at lower strength in light. Add no third shadow and no coloured or orange glow.
- **No modal level yet.** Add one (with a dimming veil behind it) when a real modal ships, not before.
- **No elevation in motion.** A surface changes level at once; only its open and close move (see Motion).
- **High contrast outlines everything.** In `hc-light` and `hc-dark`, level 1 panels get a 1px `hairline` outline too; the shadows stay but never carry the meaning alone.

## States

- **Focus:** one ring everywhere: 2px solid `accent`, 3px outside the element, following the element's own corners (`radius-sm` around text). It lands on the ground around the element, so it shows on an orange fill too. Only where it cannot sit outside (a ring drawn inside a tight control) use `ink`.
- **Links in text:** `link`, underlined 1px with an offset of 0.18em; the underline thickens to 2px on hover. See the Link preview.
- **Titles in lists and previous/next links:** `ink`, no underline at rest; a 2px `accent` underline appears on hover.
- **Primary button:** `accent` fill, `on-accent` text; on hover the fill turns `ink` and the text `canvas`. See the Button preview.
- **Current item:** an `accent` fill with `on-accent` text (the current page in a sidebar, the front window's icon).
- **Hover only on hover devices:** wrap hover styles in `@media (hover: hover) and (pointer: fine)`.
- **Caret and native controls:** `caret-color` and `accent-color` are `accent`.

## Motion

Motion is short and rare.

- **Curves:** `cubic-bezier(0.23, 1, 0.32, 1)` (ease-out) for anything that appears or responds; `cubic-bezier(0.77, 0, 0.175, 1)` (ease-in-out) only for something moving across the screen, such as an image carried from one page to the next (250ms).
- **Press:** buttons and icons scale to 0.97 on `:active` (small icon buttons to 0.95) in 140ms ease-out.
- **Colour change:** 160ms `ease` (button fill, underline colour). Transition `text-decoration-color`, not `color`, so links do not lag behind a theme switch.
- **Open and close:** opening fades in and scales from 0.96 to 1 in 180ms ease-out; something opened from an icon grows from that icon. Closing fades out and scales to 0.97 in 120ms. Opening is always a little slower than closing (a disclosure: 220ms open, 150ms close).
- **Keyboard is instant.** Anything started from the keyboard (Enter, Escape, a typed command) happens at once, with no transition. Maximise and restore are instant too.
- **One staged sequence at most.** An intro may play once per session, skippable by any click or key, built in CSS so it ends even if the script fails, and gone within about three seconds. Its rhythm is uneven on purpose (two quick steps, then one that hangs), its cursor blinks in steps, and it fades out in four steps over 240ms. Add no second intro, no scroll animations and no looping animation.
- **Navigation, search and sidebars stay instant;** they are used too often to animate.
- **Reduced motion:** under `prefers-reduced-motion: reduce` drop the intro, scaling, press transitions and smooth scrolling; keep plain fades.

## Charts

Charts keep the one-accent rule with one exception: blue, for a comparison. Blue and orange stay apart for every common kind of colour blindness, in all four themes.

- **Colours:** `accent` for the series that matters, `chart-blue` for the one it is compared with, `border` for everything else; a single series is `ink`.
- **Text** (labels, numbers, legend) is `ink` or `ink-muted` in the `label` style, never the series colour.
- **Never** the charting library's default palette, a second orange, gradients or 3D.

## New sites, presentations and documents

Everything above applies; these are the choices each kind of work adds.

**A new site**
- Open with the Wordmark top left, linking home, and the site's mark as its favicon (see Logos). Offer the theme select: Auto, Light, Dark, High contrast.
- Self-host the one font file and preload it. Load nothing from another server.
- Put reading in a 40rem column of `body` text, page headings in `display`, and a name or landing title in `hero` at most once.
- Use the components as the parts list: Wordmark, Link, Button, Panel and Window, on `window.Torres` in `components/bundle.js` (load `tokens.css`, `components/bundle.css` and React 18 first). A pattern not shown there is built from the tokens and these rules, and stays flat unless it truly overlaps something.

**A presentation**
- Use the light theme in daylight and on shared screens; use the dark theme for a showcase or a dark room. Never mix themes within one deck.
- Slides are 1920 × 1080, and every size is twice its web size (see the Slide preview):

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
| `code` | 0.9em of the text around it |

- Line heights and letter spacing stay as on the web; they are ratios. Margins 128px, gaps between blocks 40px. In Keynote or PowerPoint, install the fonts in `downloads/fonts/`: Bricolage Grotesque SemiBold for `section`, `title` and `heading-sm`, Bold for `display`, `hero` and the wordmark. Body text uses the system font of the machine you build on, so build a deck on one machine and share it as a PDF. At 1280 × 720, take two thirds of each size.
- Open with a title slide: the wordmark top left, the title in `display`. A talk of your own carries TORRES.; a talk for one site carries that site's wordmark.
- One idea per slide: its sentence in `display`, a section slide in `hero`, supporting text in `body`.
- One orange thing per slide: a key number, the one action, the wordmark's full stop. Never orange behind text other than `on-accent`.
- Images with `radius` corners; no shadows, no gradients, no clip-art.
- Charts follow Charts, at slide sizes.
- Keep a title to three lines.

**A document**
- The light theme, a 40rem column, `section` and `title` for headings, `body` for text, panels for quotes and code.
- Set the document's `lang`; numbers in tables use tabular figures.

## Iconography and marks

- **One mark per site, one construction:** the site's initial as an uppercase letter in cream (#fffefb), centred on an orange (#ff4f00) square with corners at 7/32 of its side. On the 32-unit grid every letter has a cap height of 15 units (from 9 to 24) and strokes 4 units wide, so F, A and T sit as one family. The marks are for favicons, app icons and badges; the wordmark names the site everywhere else. Cream on orange is 3.3:1: fine for a logo, which contrast rules exempt, never a pattern for text. A new site gets its initial drawn on the same grid. See Logos.
- **The wordmark is type, not an image:** the name in uppercase, Bricolage 700 in `ink`, followed by a full stop in `accent`. Your own wordmark, used where no single site speaks (a talk, a CV, a document of your own), is TORRES.; TORRES OS. is torres.swiss's.
- **Icons** are drawn, not taken from an icon font: a 40px grid, 1.5px strokes with round joins, `ink` lines on a `canvas-soft` fill. The Icons set holds a document, a folder and a terminal, each for light and dark grounds; draw new ones the same way. No emoji.

## Terminal

A terminal is the one place Torres allows colours beyond the accent, because it imitates a real terminal. Use them inside a terminal only, never on a page, a slide or a chart.

- **Surfaces and text are Torres colours:** the body is the darkest coffee, #120c0a (the `hc-dark` `canvas`); the title bar in front is #1a1210 (the `dark` `canvas`); the rule under it is #3a332d (the `dark` `hairline`); output is `ink` cream and echoed commands are `ink-muted` sand.
- **Orange** (`accent`) keeps its meaning: the prompt, the block caret, entry titles, errors and the ASCII logo; the focus ring and text selection inside the terminal are orange too.
- **Three colours of its own, each with one meaning:**

| Name | Value | Means | On #120c0a |
| --- | --- | --- | --- |
| Terminal Amber | #ffc46b | key terms and command names | 12.3:1 |
| Terminal Green | #a9d18e | "now" on a current role | 11.3:1 |
| Terminal Blue | #8ecae6 | organisation names and URLs | 10.8:1 |

- The same markup that the page shows as a marker, bold or link becomes amber, blue or green in the terminal; no colour is decoration.
- The terminal is dark in every theme, and all its text passes AAA on its ground.

---

## This repository

A snapshot of the Torres design system. Torres is edited in its design system on Claude; this repository is a copy of it, refreshed from there.

| Path | What |
| --- | --- |
| `tokens.json` | Every token: colours in four themes, type, spacing, radii, shadows. The source the rest is built from. |
| `tokens.css` | The same tokens as CSS variables, one block per theme (`data-theme`: `light`, `dark`, `hc-light`, `hc-dark`), the type styles as classes, and the `@font-face` for the display font. Generated from `tokens.json`. |
| `components/` | `bundle.js` (the components on `window.Torres`, for React 18), `bundle.css`, `index.d.ts`, and a README and preview for each component. `Cover` and `Slide` are previews only. |
| `assets/Logos/`, `assets/Icons/` | The three marks and the six icons, as SVG. |
| `fonts/` | Bricolage Grotesque Variable (woff2), for the web. |
| `downloads/fonts/` | Bricolage Grotesque SemiBold and Bold, for Keynote and PowerPoint. |
| `design-system.json` | The design system's own index (asset records, libraries), kept so the system can be restored from this copy. |

## License

The code, tokens and guide are MIT licensed (see `LICENSE`). The marks and wordmarks are not, and the fonts keep their own license (see `NOTICE`).
