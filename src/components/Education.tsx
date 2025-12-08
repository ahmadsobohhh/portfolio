import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, MapPin, Calendar, BookOpen, Users } from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Design & Analysis of Algorithms",
  "Discrete Mathematics & Structures",
  "Object-Oriented Programming",
  "System Design with Java",
  "Databases",
  "Computer Architecture",
  "Operating Systems",
  "Software Requirements & Specifications",
  "Software Testing & Quality Assurance",
  "Embedded Systems",
  "Web Applications",
  "Probability & Statistics for Engineers",
  "Linear Algebra & Calculus I + II"
];

const activities = [
  "5× Hackathon Finisher (uOttaHack, Hack the Hill)",
  "uOttaHack — Executive (2 years)",
  "uOttawa Rocketry Club — Member (1 year)",
  "PlayVer Inc. — Dev Lead (2 months)",
  "Bullfinch Inc. — Market Research Lead (2 months)",
  "Radar Media — Product Lead (2 months)",
  "Aperio Development — Product Lead (2 months)",
  "Jenik Services Inc. — Product Lead (2 months)",
  "Nexgen Accounting Inc. — Tech Lead (2 months)",
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
            <span className="gradient-text">Education</span>
          </h2>

          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="p-4 rounded-xl bg-primary/10 glow">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  University of Ottawa
                </h3>
                <p className="text-lg text-primary font-semibold mb-4">
                  Bachelor of Software Engineering
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-semibold text-foreground">
                    <Award className="w-5 h-5 text-primary" />
                    GPA 3.92 / 4.00
                  </span>
                  <span className="flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-semibold text-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    Ottawa, ON
                  </span>
                  <span className="flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-semibold text-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    Graduating April 2027
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold">Coursework</h4>
                </div>
                <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                  {coursework.map((course) => (
                    <p key={course} className="rounded-lg border border-border/40 bg-secondary/40 px-3 py-2">
                      {course}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold">Activities & Involvement</h4>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {activities.map((activity) => (
                    <li key={activity} className="flex gap-3 rounded-lg border border-dashed border-primary/30 bg-primary/5 px-3 py-2">
                      <span className="text-primary">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
