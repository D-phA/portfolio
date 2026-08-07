import { projects } from "../data/content";
import type { MediaSlot, Project } from "../data/content";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { GitHubIcon, ArrowIcon } from "./icons";

/** A media tile: renders a real image if a src is provided, otherwise a
 * clearly-marked placeholder so Daphne knows exactly where to drop assets. */
function Media({ slot }: { slot: MediaSlot }) {
  if (slot.src) {
    return (
      <figure className="overflow-hidden rounded-xl border border-ink-700/70">
        <img
          src={slot.src}
          alt={slot.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {slot.caption ? (
          <figcaption className="bg-ink-800/70 px-3 py-2 text-xs text-mist-400">
            {slot.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  // No real asset yet: render a tasteful placeholder tile. We intentionally
  // show a neutral "Media coming soon" label plus the descriptive alt text,
  // never a raw "TODO" string, so the card looks finished rather than broken.
  return (
    <div
      className="flex min-h-40 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-ink-600 bg-ink-800/40 p-6 text-center"
      role="img"
      aria-label={slot.alt}
    >
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="text-mist-400"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="m4 18 5-5 4 4 3-3 4 4" />
      </svg>
      <p className="text-xs font-semibold text-mist-300">Media coming soon</p>
      <p className="text-xs text-mist-400">{slot.alt}</p>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={
        "group rounded-2xl border border-ink-700/70 bg-ink-850/50 p-6 transition-all duration-300 hover:border-accent-400/40 hover:shadow-[0_24px_60px_-30px_rgba(56,189,248,0.5)] sm:p-8 " +
        (project.featured ? "ring-1 ring-accent-400/20" : "")
      }
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-bold text-mist-100 sm:text-2xl">
          {project.name}
        </h3>
        <span className="text-sm font-medium text-mist-400">
          {project.timeframe}
        </span>
      </div>

      {project.award ? (
        <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
          <span aria-hidden="true">★</span>
          {project.award}
        </p>
      ) : null}

      <p className="mt-4 text-base leading-relaxed text-mist-200">
        {project.blurb}
      </p>

      <ul className="mt-4 space-y-2.5">
        {project.bullets.map((b, i) => (
          <li
            key={i}
            className="flex gap-3 text-sm leading-relaxed text-mist-300"
          >
            <span
              className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-400"
              aria-hidden="true"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Media placeholders / gallery */}
      <div
        className={
          "mt-6 grid gap-4 " +
          (project.media.length > 1 ? "sm:grid-cols-2" : "grid-cols-1")
        }
      >
        {project.media.map((slot, i) => (
          <Media key={i} slot={slot} />
        ))}
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-ink-600 bg-ink-800/60 px-3 py-1 text-xs font-medium text-mist-300"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-300 transition-colors hover:text-accent-400"
          >
            <GitHubIcon /> View repository <ArrowIcon />
          </a>
        ) : null}
        {project.repoNote ? (
          <span className="text-xs text-mist-400">{project.repoNote}</span>
        ) : null}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="space-y-8">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 100}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
