# Button

The one primary action on a page or slide: an `accent` fill with `on-accent` text.

**Use** at most once per page or slide, for the action that matters most ("Connect on LinkedIn"). Every other action is a link. There is no secondary or ghost button in Torres.

**You provide** a short label that says what happens, in sentence case.

**Values:** padding `space-3` by `space-5`; corners `radius`; fill `accent`, text `on-accent`; 1.0625rem at weight 600 in the system font. Hover (fine pointers only): fill `ink`, text `canvas`, over 160ms. Press: scale to 0.97 in 140ms with `cubic-bezier(0.23, 1, 0.32, 1)`; no scaling and no transition under reduced motion. Focus: 2px solid `accent`, 3px out. No shadow, at rest or on hover.

**Don't** put cream text on Electric Orange, round it into a pill, or add an icon unless the label alone is unclear.

**Component:** `Torres.Button` in `components/bundle.js` (with `components/bundle.css` and React 18); props are on its card. Example: `h(Torres.Button, { href }, "Connect on LinkedIn")`.
