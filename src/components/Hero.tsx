import {
  profile,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
} from "../data/content";
import { GitHubIcon, LinkedInIcon, DocumentIcon, ArrowIcon } from "./icons";

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
        <div className="absolute -left-1/4 -top-1/3 h-[70vh] w-[70vh] animate-drift rounded-full bg-accent-500/20 blur-[110px]" />
        <div className="absolute -right-1/4 top-1/4 h-[60vh] w-[60vh] animate-drift rounded-full bg-iris-500/20 blur-[120px] [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-[50vh] w-[50vh] animate-drift rounded-full bg-accent-400/10 blur-[120px] [animation-delay:-12s]" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />
        {/* Fade to page background at the bottom for a clean handoff */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-900" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-20 sm:px-8">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-ink-800/50 px-4 py-1.5 text-sm font-medium text-accent-300 backdrop-blur">
          <span
            className="h-2 w-2 rounded-full bg-accent-400 animate-float"
            aria-hidden="true"
          />
          {profile.status}
        </p>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-mist-100 sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-300 sm:text-xl">
          {profile.tagline}
        </p>

        <p className="mt-3 text-sm text-mist-400">{profile.location}</p>

        {/* Primary routing buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-500 to-iris-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(99,102,241,0.7)]"
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
          {/* TODO(RESUME_URL): links to "#" until the resume PDF is hosted. */}
          <a
            href={RESUME_URL}
            target={RESUME_URL === "#" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-ink-600 bg-ink-800/40 px-5 py-3 text-sm font-semibold text-mist-100 backdrop-blur transition-colors duration-200 hover:border-accent-400/60 hover:text-accent-300"
          >
            <DocumentIcon /> Resume
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
