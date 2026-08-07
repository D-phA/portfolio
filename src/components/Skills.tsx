import {
  skills,
  interests,
  spokenLanguages,
  activities,
} from "../data/content";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={i * 80}>
            <div className="h-full rounded-2xl border border-ink-700/70 bg-ink-850/50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-400">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-ink-600 bg-ink-800/60 px-3 py-1.5 text-sm text-mist-200 transition-colors hover:border-accent-400/50 hover:text-mist-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <Reveal delay={0}>
          <div className="h-full rounded-2xl border border-ink-700/70 bg-ink-850/50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-400">
              Interests
            </h3>
            <ul className="mt-4 space-y-2">
              {interests.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm text-mist-200"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-iris-400"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="h-full rounded-2xl border border-ink-700/70 bg-ink-850/50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-400">
              Languages
            </h3>
            <ul className="mt-4 space-y-2">
              {spokenLanguages.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm text-mist-200"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-iris-400"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="h-full rounded-2xl border border-ink-700/70 bg-ink-850/50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-400">
              Activities
            </h3>
            <ul className="mt-4 space-y-2">
              {activities.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm text-mist-200"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-iris-400"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
