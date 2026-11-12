/* @ds-bundle: {"format":4,"namespace":"Torres","components":[{"name":"Wordmark"},{"name":"Link"},{"name":"Button"},{"name":"Panel"},{"name":"Window"}]} */
(function () {
  "use strict";
  var h = window.React.createElement;
  function cx() {
    return Array.prototype.filter.call(arguments, Boolean).join(" ");
  }

  /* A site's name in uppercase type with an orange full stop. A link when given href, otherwise text. */
  function Wordmark(props) {
    var name = String(props.name || "").replace(/[\s.]+$/, "").trim() || "TORRES";
    var kids = [name, h("span", { key: "dot", className: "t-dot" }, ".")];
    var attrs = { className: cx("t-wordmark", props.className), style: props.style };
    if (props.href) { attrs.href = props.href; return h("a", attrs, kids); }
    return h("span", attrs, kids);
  }

  /* A link in running text. state: "hover" or "focus" shows that state at rest (for previews). */
  function Link(props) {
    return h("a", { className: cx("t-link", props.state && "is-" + props.state), href: props.href || "#" }, props.children);
  }

  /* The one primary action on a page or slide. */
  function Button(props) {
    return h("a", { className: cx("t-button", props.state && "is-" + props.state), href: props.href || "#" }, props.children);
  }

  /* A panel in the flow of text. kind: "quote", "aside" or "code". */
  function Panel(props) {
    var kind = props.kind || "quote";
    if (kind === "code") {
      return h("pre", { className: "t-panel t-panel--code" }, h("code", null, props.children));
    }
    return h(kind === "aside" ? "aside" : "blockquote", { className: "t-panel t-panel--" + kind, lang: props.lang },
      typeof props.children === "string" ? h("p", null, props.children) : props.children);
  }
  /* Inline code, for use inside running text. */
  Panel.Code = function (props) {
    return h("code", { className: "t-code" }, props.children);
  };

  /* A surface that floats over the page. front: the one surface in front (elevation 3). */
  function Window(props) {
    return h("section", { className: cx("t-window", props.front && "is-front", props.className), style: props.style },
      h("div", { className: "t-window__bar" }, props.title),
      h("div", { className: "t-window__body" }, props.children));
  }

  window.Torres = { Wordmark: Wordmark, Link: Link, Button: Button, Panel: Panel, Window: Window };
})();
