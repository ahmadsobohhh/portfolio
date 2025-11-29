import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Ahmad Soboh</p>
      </footer>
    </div>
  );
};

export default Index;
