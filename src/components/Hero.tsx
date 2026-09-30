import { SpaceBackground } from "@/components/SpaceBackground";

export const Hero = () => {
  return (
    <section className="hero-section">
      <SpaceBackground />
      <div className="hero-content site-shell">
        <div className="hero-copy">
          <h1 className="fade-up whitespace-nowrap text-[clamp(1.5rem,3.2vw,2.5rem)] leading-[0.95]">
            Ahmad Soboh
          </h1>

          <p className="fade-up fade-up-delay-1 font-serif text-base leading-relaxed text-foreground/80 md:text-[1.15rem]">
            I’m a student at the University of Ottawa studying Software Engineering, graduating
            December 2027. I’ve previously interned at Ciena, Ford, and Nokia.
          </p>

          <div className="fade-up fade-up-delay-2 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
            <a
              href="https://github.com/ahmadsobohhh"
              target="_blank"
              rel="noopener noreferrer"
              className="link-line"
            >
              GitHub
            </a>
            <a href="mailto:ahsoboh@outlook.com" className="link-line">
              ahsoboh@outlook.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
