import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Wrench, Brain } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      "TypeScript",
      "SystemVerilog (UVM)",
      "Python",
      "Java",
      "C#",
      "C",
      "C++",
      "Kotlin",
      "JavaScript",
      "HTML/CSS"
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Django",
      "Spring",
      "Tailwind CSS",
      "Shadcn/Radix UI",
      "JUnit",
      "Bitbucket"
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: [
      "Docker",
      "AWS",
      "Git",
      "Linux",
      "PostgreSQL",
      "MongoDB",
      "Azure DevOps",
      "Azure Databricks",
      "PySpark",
      "CI/CD"
    ],
  },
  {
    title: "Concepts",
    icon: Brain,
    skills: [
      "Frontend",
      "Backend",
      "Fullstack",
      "Game Development",
      "Data Engineering",
      "Data Analysis",
      "DevOps",
      "Cloud Computing",
      "Mobile Development",
      "Database Management",
      "Machine Learning",
      "Artificial Intelligence",
      "Cybersecurity",
      "Design & Verification"
    ],
  },
];

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-xl p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-primary/10 glow">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1.5 text-sm bg-muted hover:bg-primary/20 text-foreground rounded-lg border border-border hover:border-primary/50 transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="gradient-text">Skills</span> & Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
