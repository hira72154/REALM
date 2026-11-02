import { useEffect } from "react";

export default function usePageMeta({ title, description }) {
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
  }, [title, description]);
}
