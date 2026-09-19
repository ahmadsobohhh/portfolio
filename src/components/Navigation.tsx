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
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="site-shell flex h-16 items-center justify-between">
        <a href="#" className="font-display text-sm font-bold tracking-tight no-underline">
          AS
        </a>
        <div className="flex items-center gap-6 md:gap-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground no-underline transition-colors hover:text-foreground"
          >
            Resume
          </a>
          <a
            href="https://github.com/ahmadsobohhh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground no-underline transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};
