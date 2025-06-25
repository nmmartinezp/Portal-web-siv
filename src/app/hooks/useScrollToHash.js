import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollToHash(
  offset = 0,
  delay = 0,
  containerSelector = null
) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    const scrollToElement = () => {
      const target = document.getElementById(id);
      if (!target) return;

      const container = containerSelector
        ? document.querySelector(containerSelector)
        : window;

      if (container && container !== window) {
        const containerRect = container.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const scrollTop =
          container.scrollTop + (targetRect.top - containerRect.top) - offset;

        container.scrollTo({ top: scrollTop, behavior: "smooth" });
      } else {
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    const timeout = setTimeout(scrollToElement, delay);
    return () => clearTimeout(timeout);
  }, [hash, offset, delay, containerSelector]);
}
