
import { useEffect } from "react";

export default function usePageMeta({
  title,
  description,
  robots = "index, follow",
}) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    function setMeta(attribute, key, content) {
      if (!content) return;

      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    }

    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }

    if (title) {
      setMeta("property", "og:title", title);
      setMeta("name", "twitter:title", title);
    }

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "THE REALM");
    setMeta("name", "twitter:card", "summary");

    // Canonical URL
    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `https://therealminternational.com${window.location.pathname}`
    );

    // Robots directive
    setMeta("name", "robots", robots);

  }, [title, description, robots]);
}
