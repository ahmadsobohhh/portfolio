import { experiences } from "@/content";
import type { CSSProperties } from "react";

export const Experience = () => {
  return (
    <section id="experience" className="site-shell scroll-mt-20 py-20 md:py-32">
      <div className="section-heading">
        <h2 className="section-title">Experience</h2>
      </div>

      <ul className="company-grid">
        {experiences.map((experience, index) => (
          <li key={`${experience.company}-${experience.period}`} className="fade-in-view">
            <a
              href={experience.website}
              target="_blank"
              rel="noreferrer"
              className="company-card experience-card group"
              aria-label={`Visit ${experience.company}`}
            >
              <div
                className={`logo-stage experience-logo-stage${experience.whiteLogo ? " white-logo" : ""}`}
                style={{ "--brand-background": experience.brandBackground } as CSSProperties}
              >
                <img src={experience.logo} alt={`${experience.company} logo`} loading="lazy" />
              </div>

              <div className="company-card-copy">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">{experience.company}</h3>
                  {index === 0 && experience.current && <span className="current-pill">Current</span>}
                </div>

                <div className="experience-detail">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-foreground/90">{experience.role}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                        {experience.period}
                      </p>
                    </div>
                    <span className="external-arrow" aria-hidden="true">↗</span>
                  </div>

                  {experience.technologies.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                      {experience.technologies.map((technology) => (
                        <li key={technology} className="technology-chip">{technology}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
