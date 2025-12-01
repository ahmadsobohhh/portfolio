import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin } from "lucide-react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 glow">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:ahsoboh@outlook.com"
                    className="text-primary hover:underline"
                  >
                    ahsoboh@outlook.com
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Shoot me an email and I’ll get back to you as soon as I can.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 glow">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/ahmadsoboh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    /in/ahmadsoboh
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Prefer chatting on LinkedIn? Send a message and let’s connect.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
