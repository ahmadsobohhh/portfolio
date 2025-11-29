import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const focusAreas = [
  "Fullstack + platform",
  "Backend systems",
  "Embedded & hardware",
  "Data + observability"
];

const internshipHighlights = [
  { company: "Ciena", detail: "Optical networking verification & tooling", timeline: "2x intern" },
  { company: "Ford Motors", detail: "Connected vehicle data + diagnostics", timeline: "2x intern" },
  { company: "MASV", detail: "Shipping features for petabyte-scale transfers", timeline: "Product intern" }
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
I’m Ahmad, a software engineer focused on building reliable, efficient, and well-designed software. I enjoy solving complex problems, creating intuitive solutions, and continuously improving my skills across development, systems, and engineering fundamentals. I take pride in writing clean code, learning quickly, and delivering work that makes a real impact.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <motion.span
                aria-hidden="true"
                className="absolute -top-10 right-4 h-32 w-32 rounded-full bg-primary/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  I'm a <span className="text-foreground font-semibold">student engineer + intern</span> who spends most
                  of my time stitching together <span className="text-primary font-semibold">fullstack systems</span>,
                  <span className="text-primary font-semibold"> data/infra pipelines</span>, and
                  <span className="text-primary font-semibold"> embedded tooling</span> so teams can move faster.
                </p>
                <p>
                  I've shipped production work across <span className="text-foreground font-semibold">Ciena</span> (twice),
                  <span className="text-foreground font-semibold">Ford Motors</span> (twice), and
                  <span className="text-foreground font-semibold">MASV</span>—owning everything from hardware-in-the-loop
                  validation to high-traffic backend services.
                </p>
                <p>
                  Coursework plus internships forged a reliable toolkit in
                  <span className="text-foreground font-semibold"> algorithms</span>,
                  <span className="text-foreground font-semibold"> system design</span>, and
                  <span className="text-foreground font-semibold"> modern web tech</span>. I keep UI polish and
                  observability baked in so teams can debug less and deliver more.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {focusAreas.map((area) => (
                    <motion.span
                      key={area}
                      className="rounded-full border border-border/60 bg-secondary/60 px-4 py-2 text-sm text-foreground/80"
                      whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(15,118,255,0.15)" }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="rounded-2xl border border-border/70 bg-gradient-to-b from-primary/20 via-background to-background p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="text-xl font-semibold mb-4">Internship snapshots</h3>
              <ul className="space-y-4">
                {internshipHighlights.map((internship) => (
                  <li key={internship.company} className="rounded-xl border border-border/60 bg-background/80 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold text-foreground">{internship.company}</p>
                      <span className="text-xs uppercase tracking-wide text-primary">{internship.timeline}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{internship.detail}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-muted-foreground">
                Currently lining up a <span className="text-primary font-semibold">Summer 2025 internship</span>—let's
                talk if you need someone who prototypes fast and ships even faster.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
