# Panel

A soft panel in the flow of text (elevation 1) for quotes, asides and code.

**Use** for a block that should stand a step apart from the running text without floating over it. Lists are never panels: separate them with space and a `hairline` rule instead.

**You provide** the content: a quote, an aside, a code block, inline code. Set `lang` on a quote in another language.

**Values:** fill `canvas-soft`, corners `radius`, no border and no side stripe. Quote and aside: padding `panel-y` by `panel-x`. Code block: padding `space-4` by `space-5`, the `code` style (code inside it keeps that size, it does not shrink again), scrolls sideways when needed. Inline code: padding `code-inline-y` by `code-inline-x`, corners `radius-sm`. In `hc-light` and `hc-dark`, add a 1px `hairline` outline.

**Don't** add a coloured left border, a quotation-mark graphic or a shadow.

**Component:** `Torres.Panel` in `components/bundle.js` (with `components/bundle.css` and React 18); props are on its card. Example: `h(Torres.Panel, { kind: "quote" }, text)`; inline code: `h(Torres.Panel.Code, null, "docker compose up -d")`.
