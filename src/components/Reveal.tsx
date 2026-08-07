import type { ReactNode, Ref } from "react";
import { useScrollReveal } from "./useScrollReveal";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms for a nice cascade when several are grouped. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}

/**
 * Wraps content in a fade-and-rise transition that plays when it scrolls
 * into view. Falls back to instantly visible under reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as Ref<HTMLDivElement & HTMLLIElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={
        "transition-all duration-700 ease-out will-change-transform " +
        (visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6") +
        (className ? " " + className : "")
      }
    >
      {children}
    </Tag>
  );
}
