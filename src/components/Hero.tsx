import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitPlaceholder from "@/assets/ahmadsoboh.jpg";

const heroHighlights = [
  "Software Eng @ uOttawa",
  "ASIC Design/Verification",
  "Data / backend / cloud",
  "Embedded systems + UX"
];

const heroStats = [
  { label: "uOttawa year", value: "4th" },
  { label: "Internships completed", value: "5" },
  { label: "Teams partnered", value: "6" },
  { label: "Prototypes/week", value: "2" }
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-3xl opacity-70" aria-hidden="true" />
        <div className="soft-grid absolute inset-0 opacity-30" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.4em] text-muted-foreground"
            >
              Software engineering • University of Ottawa
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight"
            >
              <span className="gradient-text">Ahmad Soboh</span>
              <span className="block text-foreground/80">Student engineer building software systems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            >
I am a dedicated software engineer eager to continue developing my skills. From projects to coursework, I genuinely enjoy problem solving and learning new concepts. I take pride in building practical, well-designed solutions and constantly pushing myself to grow. I’m excited about the wide range of opportunities in software and look forward to the vast opportunities it will present in the future.            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/70 bg-secondary/60 px-4 py-2 text-sm text-foreground/80 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                View Resume
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 border-t border-border/60 pt-6"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/40 to-accent/30 blur-3xl opacity-60" aria-hidden="true" />

            <figure className="relative rounded-[2.5rem] border border-border/80 bg-card/80 p-6 shadow-[var(--shadow-card)] backdrop-blur-xl">
              <div className="aspect-square overflow-hidden rounded-[2rem] border border-border/70 bg-muted flex items-center justify-center">
                <img
                  src={portraitPlaceholder}
                  alt="Portrait placeholder"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                Ahmad Soboh
              </span>
            </figure>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mt-16 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
