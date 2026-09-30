import { projects } from "@/content";

export const Projects = () => {
  return (
    <section id="projects" className="site-shell scroll-mt-20 py-20 md:py-32">
      <div className="section-heading">
        <h2 className="section-title">Projects</h2>
      </div>

      <ul className="company-grid">
        {projects.map((project) => (
          <li key={project.title} className="fade-in-view">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="company-card group"
                aria-label={`View ${project.title}`}
              >
                <div className="logo-stage project-logo-stage">
                  <img src={project.logo} alt={`${project.title} logo`} loading="lazy" />
                </div>

                <div className="company-card-copy">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {project.tech.join(" · ")}
                    </p>
                    <span className="external-arrow" aria-hidden="true">↗</span>
                  </div>
                </div>
              </a>
            ) : (
              <article className="company-card">
                <div className="logo-stage project-logo-stage">
                  <img src={project.logo} alt={`${project.title} logo`} loading="lazy" />
                </div>

                <div className="company-card-copy">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                      <span className="private-pill">Private</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {project.tech.join(" · ")}
                  </p>
                </div>
              </article>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
