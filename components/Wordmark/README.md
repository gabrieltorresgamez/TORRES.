# Wordmark

A site's name set in uppercase type, in `ink`, always ending in a full stop in `accent`; every Torres site and deck opens with one.

**Use** it once, top left of the masthead, linking home; on a title slide, top left at 40px, while the talk's title carries the slide. It is type, not an image: the square marks in Logos are for favicons and badges, not a replacement for it.

**You provide** the name without the full stop: "FUET", "ARC", "TORRES OS". The component sets it in uppercase and adds the orange full stop. Your own wordmark, used where no single site speaks (a talk, a CV, a document of your own), is "TORRES.". In a masthead give it `href` (the home page); on a slide leave it out and it renders as text.

**Values:** the `wordmark` style: Bricolage Grotesque 700, 1.25rem on every screen, line height 1, -0.01em; on a 1920×1080 slide it is 40px. Colour `ink`; the full stop alone in `accent`; no underline, at rest or on hover.

**Don't** set it in lowercase or sentence case, drop the full stop, colour the whole name orange, add a second coloured character, track it wider, or set it in the system font.

**Component:** `Torres.Wordmark` in `components/bundle.js` (with `components/bundle.css` and React 18); props are on its card. Example: `h(Torres.Wordmark, { name: "FUET" })`.
