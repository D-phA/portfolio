import { useEffect, useState } from "react";
import { nav, profile, GITHUB_URL, LINKEDIN_URL } from "../data/content";
import { GitHubIcon, LinkedInIcon } from "./icons";

/**
 * Sticky header. Starts transparent over the hero, then gains a subtle
 * frosted background + shadow once the user scrolls. Includes a mobile menu.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-ink-900/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(120,150,200,0.12),0_10px_30px_-15px_rgba(0,0,0,0.6)]"
          : "bg-transparent")
      }
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a
          href="#top"
          className="group flex items-center gap-2 text-mist-100"
          aria-label={`${profile.name} home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent-400/40 bg-ink-800/60 text-sm font-bold tracking-tight text-transparent bg-clip-text [background-image:linear-gradient(120deg,var(--color-accent-400),var(--color-iris-400))]">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-mist-200 transition-colors group-hover:text-mist-100 sm:inline">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-mist-300 transition-colors hover:text-mist-100"
            >
              {item.label}
            </a>
          ))}
          <span className="mx-2 h-5 w-px bg-ink-600" aria-hidden="true" />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="rounded-md p-2 text-mist-300 transition-colors hover:text-accent-300"
          >
            <GitHubIcon />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="rounded-md p-2 text-mist-300 transition-colors hover:text-accent-300"
          >
            <LinkedInIcon />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-mist-200 transition-colors hover:bg-ink-800/70 md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={
          "overflow-hidden border-t border-ink-700/60 bg-ink-900/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden " +
          (menuOpen ? "max-h-96" : "max-h-0")
        }
      >
        <div className="flex flex-col gap-1 px-5 py-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-base font-medium text-mist-200 transition-colors hover:bg-ink-800/70 hover:text-mist-100"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-1 flex gap-2 px-3 py-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-3 py-2 text-sm text-mist-200 transition-colors hover:border-accent-400/60 hover:text-accent-300"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-3 py-2 text-sm text-mist-200 transition-colors hover:border-accent-400/60 hover:text-accent-300"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
