interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Nokia",
    role: "Software Engineer Intern",
    period: "Sept 2026 – Dec 2026",
    highlights: [],
  },
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

export const Experience = () => {
  return (
    <section id="experience" className="site-shell py-20 md:py-28">
      <div className="rule mb-12" />
      <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Experience</p>

        <ul className="space-y-0">
          {experiences.map((exp, index) => (
            <li key={`${exp.company}-${exp.period}`} className="rule py-8 first:border-t-0 first:pt-0">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{exp.company}</h3>
                  <p className="mt-1 text-muted-foreground">{exp.role}</p>
                </div>
                <p className="shrink-0 text-sm text-muted-foreground tabular-nums">{exp.period}</p>
              </div>

              {exp.highlights.length > 0 && (
                <ul className="mt-5 max-w-2xl space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                  {exp.highlights.map((item) => (
                    <li key={item} className="pl-0">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {index === 0 && exp.highlights.length === 0 && (
                <p className="mt-4 text-sm text-muted-foreground">Current role</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
