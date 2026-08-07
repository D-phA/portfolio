import { profile, GITHUB_URL, LINKEDIN_URL } from "../data/content";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Reveal } from "./Reveal";

/**
 * Footer doubles as the contact CTA. By design there is NO email on the
 * public page (spam avoidance); people reach Daphne via LinkedIn or GitHub.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-ink-700/60"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-64 w-[80vw] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-mist-100 sm:text-4xl">
            Let's get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-mist-300">
            The best way to reach me is on LinkedIn. My code and projects live
            on GitHub.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-500 to-iris-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <LinkedInIcon /> Connect on LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-600 bg-ink-800/40 px-5 py-3 text-sm font-semibold text-mist-100 transition-colors duration-200 hover:border-accent-400/60 hover:text-accent-300"
            >
              <GitHubIcon /> View GitHub
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-ink-700/60 pt-8 text-sm text-mist-400 sm:flex-row">
          <p>
            &copy; {year} {profile.name}
          </p>
          <p>Built with React, TypeScript, Vite, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
