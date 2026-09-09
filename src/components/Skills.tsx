import { skills, spokenLanguages, activities } from "../data/content";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-6">
        {skills.map((group) => (
          <div key={group.label} className="sm:flex sm:gap-8">
            <dt className="w-44 flex-none text-sm font-medium text-accent-400">
              {group.label}
            </dt>
            <dd className="mt-1 text-base leading-relaxed text-mist-200 sm:mt-0">
              {group.items.join(", ")}
            </dd>
          </div>
        ))}
        <div className="sm:flex sm:gap-8">
          <dt className="w-44 flex-none text-sm font-medium text-accent-400">
            Spoken
          </dt>
          <dd className="mt-1 text-base leading-relaxed text-mist-200 sm:mt-0">
            {spokenLanguages.join(", ")}
          </dd>
        </div>
        <div className="sm:flex sm:gap-8">
          <dt className="w-44 flex-none text-sm font-medium text-accent-400">
            Around campus
          </dt>
          <dd className="mt-1 text-base leading-relaxed text-mist-200 sm:mt-0">
            {activities.join(", ")}
          </dd>
        </div>
      </dl>
    </Section>
  );
}
