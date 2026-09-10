import {
  profile,
  RESUME_URL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "../data/content";
import { GitHubIcon, LinkedInIcon, ArrowIcon } from "./icons";

/**
 * Hero: name, one-line positioning, and the primary routing buttons
 * (GitHub, LinkedIn, Resume) plus a smooth-scroll anchor into the page.
 * The background uses layered radial gradients with a slow drift animation.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Animated gradient accent background (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-ink-900" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />
        {/* Fade to page background at the bottom for a clean handoff */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-900" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-20 sm:px-8">

        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-mist-100 sm:text-5xl">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-balance text-mist-300">
          {profile.tagline}
        </p>

        <p className="mt-3 text-sm text-mist-400">{profile.location}</p>

        {/* Primary routing buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors duration-200 hover:bg-accent-300"
          >
            <GitHubIcon /> GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-ink-600 bg-ink-800/40 px-5 py-3 text-sm font-semibold text-mist-100 backdrop-blur transition-colors duration-200 hover:border-accent-400/60 hover:text-accent-300"
          >
            <LinkedInIcon /> LinkedIn
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-ink-600 bg-ink-800/40 px-5 py-3 text-sm font-semibold text-mist-100 transition-colors duration-200 hover:border-accent-400/60 hover:text-accent-300"
          >
            Resume
          </a>
        </div>

        <a
          href="#about"
          className="group mt-16 inline-flex items-center gap-2 text-sm font-medium text-mist-400 transition-colors hover:text-accent-300"
        >
          Explore my work
          <ArrowIcon className="rotate-45 transition-transform duration-200 group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
