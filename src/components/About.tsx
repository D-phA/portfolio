import { about } from "../data/content";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  const { paragraphs, education } = about;

  return (
    <Section id="about" eyebrow="About" title="Hi, I'm Daphne.">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-mist-300 sm:text-lg">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <aside className="rounded-2xl border border-ink-700/70 bg-ink-850/60 p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-400">
              Education
            </h3>
            <p className="mt-3 text-lg font-semibold text-mist-100">
              {education.school}
            </p>
            <p className="mt-1 text-sm text-mist-300">{education.degree}</p>
            <p className="mt-1 text-sm text-mist-400">{education.dates}</p>

            <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <div>
                <dt className="text-mist-400">GPA</dt>
                <dd className="font-semibold text-mist-100">
                  {education.gpa}
                </dd>
              </div>
              <div>
                <dt className="text-mist-400">Honors</dt>
                <dd className="font-semibold text-mist-100">
                  {education.honors}
                </dd>
              </div>
            </dl>

            <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-mist-400">
              Relevant Coursework
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <li
                  key={course}
                  className="rounded-md border border-ink-700 bg-ink-800/60 px-2.5 py-1 text-xs text-mist-200"
                >
                  {course}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
