import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Ciena Corporation",
    role: "Software Engineer Intern",
    period: "May 2025 – Aug 2025",
    highlights: [
      "Verified NeutrinoX & Neso ASIC FEC modules using SystemVerilog UVM testbenches",
      "Designed reusable UVM scoreboard for SERDES, SFEC, DFEC → saved 10+ hours/week",
    ],
  },
  {
    company: "Ciena Corporation",
    role: "Software Engineer Intern",
    period: "Jan 2025 – Apr 2025",
    highlights: [
      "Achieved 100% functional coverage for FEC signals using C++, SystemVerilog/UVM, Synopsys VCS",
      "Created Python automation scripts to track regressions — reduced debug time 25%",
      "Integrated XPROP with SystemVerilog bind to fix 50+ X-propagation issues",
    ],
  },
  {
    company: "Ford Motor Company",
    role: "Software Engineer Intern",
    period: "Sept 2024 – Dec 2024",
    highlights: [
      "Built defect-tracking platform with React, Node, PostgreSQL → improved QA by 35%",
      "Deployed software to 50+ ECUs, triaged 1,000+ bugs using Jenkins + CAN tools",
    ],
  },
  {
    company: "Ford Motor Company",
    role: "Software Engineer Intern",
    period: "Jan 2024 – Apr 2024",
    highlights: [
      "Improved module reliability by triaging 200+ bugs",
      "Developed beta testing portal using React/Node/Jira API → reduced resolution time 20%",
      "Led a 30% increase in FordPass app usage; presented results to engineering leadership",
    ],
  },
  {
    company: "MASV Inc.",
    role: "Software Engineer Intern",
    period: "May 2023 – Aug 2023",
    highlights: [
      "Built full-stack admin site using React/Node/PostgreSQL → accelerated ticket resolution 25%",
      "Led CI/CD upgrades using Docker + Git",
      "Delivered production hotfixes & on-call support",
    ],
  },
];

const ExperienceCard = ({ experience, index }: { experience: ExperienceItem; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary glow" />
      
      {/* Timeline line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-border" />
      )}

      <div className="glass rounded-xl p-6 hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-start mb-4 gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">{experience.company}</h3>
            <p className="text-primary font-semibold mt-1">{experience.role}</p>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">{experience.period}</span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mb-2 gap-2"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show Details
            </>
          )}
        </Button>

        <motion.ul
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden space-y-2"
        >
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="text-muted-foreground flex items-start gap-3">
              <span className="text-primary leading-6">•</span>
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="gradient-text">Experience</span>
          </h2>

          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
