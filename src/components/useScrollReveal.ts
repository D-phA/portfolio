import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll hook backed by IntersectionObserver.
 * Returns a ref to attach to an element and a boolean that flips to true
 * once the element scrolls into view. It only fires once (then unobserves).
 *
 * Users with prefers-reduced-motion get the visible state immediately, so
 * nothing is hidden behind an animation that never plays.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 },
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}
