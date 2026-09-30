import { useEffect, useState } from "react";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="site-shell flex h-16 items-center justify-between">
        <a href="#" className="font-display text-sm font-bold tracking-tight no-underline">
          AS
        </a>
        <div className="flex items-center gap-5 md:gap-8">
          <a
            href="#experience"
            className="nav-link hidden sm:inline-block"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="nav-link hidden sm:inline-block"
          >
            Projects
          </a>
          <a
            href="/resume.pdf?v=20260929-2"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Resume
          </a>
          <a
            href="https://github.com/ahmadsobohhh"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};
