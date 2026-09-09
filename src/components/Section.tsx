import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={"mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 " + className}
    >
      <h2 className="text-3xl font-semibold tracking-tight text-mist-100 sm:text-4xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-16 bg-accent-400" aria-hidden="true" />
      <div className="mt-10">{children}</div>
    </section>
  );
}
