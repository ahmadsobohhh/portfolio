import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  demo?: string;
}

interface ProjectCategory {
  title: string;
  description: string;
  projects: Project[];
}

const projectCategories: ProjectCategory[] = [
  {
    title: "Mobile & Web Applications",
    description: "User-facing experiences spanning iOS, React Native, and cross-platform desktop apps.",
    projects: [
      {
        title: "Kalim",
        description: "Dialectal Arabic Speaking App",
        tech: ["Expo", "React Native", "OpenAI API", "Python"],
        highlights: [
          "AI conversation partner that adapts to multiple Arabic dialects.",
          "Coordinated mobile front-end with Python services that handle prompts + scoring.",
        ],
      },
      {
        title: "PlayVer",
        description: "Sports meetup platform for youth",
        tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
        highlights: [
          "Built pro bono to help local teens organize weekly basketball, soccer, and volleyball sessions.",
          "Implemented RSVP tracking, gear checklists, and SMS reminders so pickup games actually happen.",
        ],
        github: "https://github.com/Playver/playver",
      },
      {
        title: "Encrypted",
        description: "End-to-end encrypted chatrooms for web",
        tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
        highlights: [
          "Users spin up private rooms to exchange 256-bit encrypted messages, photos, and files with digital signatures to block MITM attacks.",
          "Locked-down controllers + backend plus strict validation/sanitization keep the attack surface minimal while the UI stays clean.",
        ],
        github: "https://github.com/ahmadsobohhh/Encrypted",
      },
    ],
  },
  {
    title: "Data Engineering, Backend & Cloud Systems",
    description:
      "High-throughput data processing pipelines, cloud deployments, and distributed backend systems built for reliability.",
    projects: [
      {
        title: "CryptoPulse",
        description: "Serverless crypto price alerts",
        tech: ["AWS Lambda", "API Gateway", "DynamoDB", "SNS", "TypeScript"],
        highlights: [
          "Users submit targets through a minimal API and DynamoDB stores alert state with no servers to babysit.",
          "Scheduled Lambda checks exchange prices and fires SNS SMS notifications the moment a threshold hits.",
        ],
        github: "https://github.com/ahmadsobohhh/CryptoPriceAlerting",
      },
    ],
  },
  // Robotics and Game categories temporarily removed
];

const projectSummary = [
  { name: "CryptoPulse", domain: "Serverless", languages: "TypeScript", tech: "Lambda, DynamoDB, SNS" },
  { name: "Kalim", domain: "Mobile AI", languages: "JS/TS, Python", tech: "React Native, OpenAI" },
  { name: "PlayVer", domain: "Community", languages: "TypeScript", tech: "Next.js, Supabase" },
  { name: "Encrypted", domain: "Security / Web", languages: "JavaScript", tech: "Node.js, Express" },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="glass rounded-xl p-6 md:p-8 transition-all duration-300 group will-change-transform hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-2">
          {project.github && (
            <Button
              asChild
              size="icon"
              variant="ghost"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
          )}
          {project.demo && (
            <Button
              asChild
              size="icon"
              variant="ghost"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <a href={project.demo} target="_blank" rel="noreferrer">
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          )}
        </div>
      </div>

      <p className="text-primary font-semibold mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="space-y-2">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="text-muted-foreground flex gap-2 items-start">
            <span className="text-primary leading-6">•</span>
            <span className="leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="space-y-16">
            {projectCategories.map((category, categoryIndex) => (
              <div key={category.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="mb-8 text-center"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">{category.title}</p>
                  <p className="text-base text-muted-foreground max-w-3xl mx-auto">{category.description}</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {category.projects.map((project, index) => (
                    <ProjectCard key={`${category.title}-${project.title}`} project={project} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};
