import sanitizeHtml from "sanitize-html";

/** Sanitize blog post HTML for safe rendering. Allows article content classes and embeds. */
export function sanitizeBlogContent(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      "img",
      "iframe",
      "details",
      "summary",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "figure",
      "figcaption",
    ],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "class", "loading", "width", "height"],
      iframe: [
        "src",
        "width",
        "height",
        "frameborder",
        "allow",
        "allowfullscreen",
        "title",
      ],
      a: ["href", "target", "rel", "class"],
      div: ["class"],
      span: ["class"],
      td: ["class", "colspan", "rowspan"],
      th: ["class", "colspan", "rowspan"],
      details: ["open"],
      table: ["class"],
      ol: ["class"],
      ul: ["class"],
      p: ["class"],
      h2: ["class", "id"],
      h3: ["class", "id"],
    },
    allowedIframeHostnames: ["www.youtube.com", "player.vimeo.com"],
  });
}
