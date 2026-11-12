// TORRES. components. Load tokens.css, components/bundle.css, React 18 and components/bundle.js;
// the components are on window.Torres.

/** Preview-only: show a state at rest. */
type State = "hover" | "focus";

export interface WordmarkProps {
  /** The name, e.g. "FUET"; it is set in uppercase and the orange full stop is added (a typed one is dropped). Default "TORRES", your own wordmark. */
  name?: string;
  /** Where it links, usually the home page. Without href it renders as text (e.g. on a slide). */
  href?: string;
  className?: string;
  style?: Record<string, string | number>;
}
/** A site's name in uppercase type with an orange full stop. */
export declare function Wordmark(props: WordmarkProps): any;

export interface LinkProps {
  href?: string;
  /** The link text: say where it goes. */
  children: any;
  state?: State;
}
/** A link in running text: link colour, always underlined, 2px on hover. */
export declare function Link(props: LinkProps): any;

export interface ButtonProps {
  href?: string;
  /** A short label in sentence case that says what happens. */
  children: any;
  state?: State;
}
/** The one primary action on a page or slide: accent fill, on-accent text. */
export declare function Button(props: ButtonProps): any;

export interface PanelProps {
  /** "quote" (default), "aside" or "code". */
  kind?: "quote" | "aside" | "code";
  /** Language of a quote in another language, e.g. "de". */
  lang?: string;
  /** Text or elements; for kind "code", the code as text. */
  children: any;
}
/** A panel in the flow of text (elevation 1). Panel.Code renders inline code. */
export declare function Panel(props: PanelProps): any;
export declare namespace Panel {
  /** Inline code inside running text. */
  function Code(props: { children: any }): any;
}

export interface WindowProps {
  /** The title in the bar, e.g. a filename. */
  title: string;
  /** The one surface in front (elevation 3); otherwise raised (elevation 2). */
  front?: boolean;
  /** The content: usually an h2 and a paragraph. */
  children: any;
  className?: string;
  style?: Record<string, string | number>;
}
/** A surface that floats over the page, with a title bar. */
export declare function Window(props: WindowProps): any;
