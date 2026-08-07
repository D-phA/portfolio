import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}

/** A consistent section shell: anchor id, small eyebrow label, heading,
 * accent underline, and a revealed body. */
export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={"mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 " + className}
    >
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-mist-100 sm:text-4xl">
          {title}
        </h2>
        <div
          className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-400 to-iris-500"
          aria-hidden="true"
        />
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
