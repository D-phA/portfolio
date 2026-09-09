import { experience } from "../data/content";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        {/* Vertical timeline rail (decorative, hidden on small screens) */}
        <div
          className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent-400/60 via-ink-600 to-transparent sm:block"
          aria-hidden="true"
        />

        <ol className="space-y-10">
          {experience.map((job) => (
            <li key={`${job.company}-${job.dates}`} className="relative sm:pl-10">
                <span
                  className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-accent-400 bg-ink-900 sm:block"
                  aria-hidden="true"
                />
                <article className="rounded-lg border border-ink-700/70 bg-ink-850/50 p-6 transition-colors duration-300 hover:border-accent-400/40 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-xl font-bold text-mist-100">
                      {job.company}
                    </h3>
                    <span className="text-sm font-medium text-accent-300">
                      {job.dates}
                    </span>
                  </div>
                  <p className="mt-1 text-base font-semibold text-mist-200">
                    {job.role}
                  </p>
                  <p className="text-sm text-mist-400">{job.location}</p>

                  <p className="mt-4 text-sm leading-relaxed text-mist-300">
                    {job.summary}
                  </p>

                  <ul className="prose-bullets mt-4 space-y-2.5">
                    {job.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-mist-300"
                      >
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-ink-600 bg-ink-800/60 px-3 py-1 text-xs font-medium text-mist-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
