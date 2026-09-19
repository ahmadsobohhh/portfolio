interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
}

const projects: Project[] = [
  {
    title: "Kalim",
    description: "Dialectal Arabic speaking app with an AI conversation partner.",
    tech: ["React Native", "Python", "OpenAI"],
  },
  {
    title: "PlayVer",
    description: "Sports meetup platform so local teens can organize pickup games.",
    tech: ["Next.js", "Supabase"],
    github: "https://github.com/Playver/playver",
  },
  {
    title: "Encrypted",
    description: "End-to-end encrypted web chatrooms with signed media exchange.",
    tech: ["Node.js", "Express"],
    github: "https://github.com/ahmadsobohhh/Encrypted",
  },
  {
    title: "LettuceEat",
    description: "Group meal planning — 1st place at uOttaHack.",
    tech: ["React", "Node.js"],
    github: "https://github.com/arohao/LettuceEat",
  },
  {
    title: "CryptoPulse",
    description: "Serverless crypto price alerts via Lambda, DynamoDB, and SNS.",
    tech: ["AWS", "TypeScript"],
    github: "https://github.com/ahmadsobohhh/CryptoPriceAlerting",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="site-shell py-20 md:py-28">
      <div className="rule mb-12" />
      <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Projects</p>

        <ul>
          {projects.map((project) => (
            <li key={project.title} className="rule group py-7 first:border-t-0 first:pt-0">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
                <div className="max-w-xl">
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{project.title}</h3>
                  <p className="mt-2 text-foreground/70">{project.description}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {project.tech.join(" · ")}
                  </p>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
