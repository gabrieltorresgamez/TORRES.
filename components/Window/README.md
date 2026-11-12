# Window

A surface that floats over the page, with a title bar: elevation 2 at rest, elevation 3 in front.

**Use** for anything that truly overlaps other content: a window on a desktop-style page, a menu, a popover, a panel on a slide that sits over an image. Only one surface is in front at a time. Content that does not overlap anything stays at level 0 or 1.

**You provide** a short title (a filename, when the window stands for a file) and the content.

**Values:** fill `surface-raised`, corners `radius`, content clipped to them. Raised: 1px `hairline` outline, shadow `elevation-2`, title in `ink-muted`. Front: 1px `border` outline, shadow `elevation-3`, title in `ink`. Title bar: at least 2.25rem high, `space-6` in from the left, lined up with the body, a `hairline` rule below, the title in the `label` style set in mono. Body: padding `space-6`. Opening fades in and scales from 0.96 in 180ms; closing scales to 0.97 in 120ms; from the keyboard, both are instant.

**Don't** put a window on a page that overlaps nothing, show two windows in front, or nest windows.

**Component:** `Torres.Window` in `components/bundle.js` (with `components/bundle.css` and React 18); props are on its card. Example: `h(Torres.Window, { title: "about.md", front: true }, …)`.
