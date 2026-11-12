# Link

A link inside running text: `link` colour, always underlined, the underline thickening on hover.

**Use** for every link in body text, captions and meta lines. Titles in lists and previous/next links are the exception: `ink`, no underline at rest, a 2px `accent` underline on hover.

**You provide** the link text, which names where it goes ("RSS feed", not "click here").

**Values:** colour `link`; `text-decoration: underline 1px`, offset 0.18em; 2px thick on hover, inside `@media (hover: hover) and (pointer: fine)`; the change is instant; never transition the text colour. Focus: the shared ring, 2px solid `accent`, 3px out, `radius-sm` corners.

**Don't** remove the underline, colour links with `accent` in the light theme (too pale for text), or show a link on the `selection` colour: selected text is set in `ink`.

**Component:** `Torres.Link` in `components/bundle.js` (with `components/bundle.css` and React 18); props are on its card. Example: `h(Torres.Link, { href }, "RSS feed")`.
