export const Hero = () => {
  return (
    <section className="relative min-h-[100svh]">
      <div className="site-shell flex min-h-[100svh] flex-col justify-center gap-8 py-24">
        <h1 className="fade-up text-3xl font-bold tracking-tight md:text-4xl">Ahmad Soboh</h1>

        <p className="fade-up fade-up-delay-1 max-w-xl text-lg leading-relaxed text-foreground/75 md:text-xl">
          I’m a student at the University of Ottawa studying Software Engineering, graduating
          December 2027. I’ve previously interned at Ciena, Ford, and Nokia.
        </p>

        <div className="fade-up fade-up-delay-2 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <a
            href="https://github.com/ahmadsobohhh"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
          <a href="mailto:ahsoboh@outlook.com" className="underline">
            ahsoboh@outlook.com
          </a>
        </div>
      </div>
    </section>
  );
};
