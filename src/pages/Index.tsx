import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>

      <footer className="site-shell pb-10 pt-16 text-sm text-muted-foreground">
        <div className="rule pt-6">
          <p>Ahmad Soboh · Software Engineer</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
