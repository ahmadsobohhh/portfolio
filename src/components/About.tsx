export const About = () => {
  return (
    <section id="about" className="site-shell py-20 md:py-28">
      <div className="rule mb-12" />
      <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">About</p>
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-foreground/80 md:text-xl">
          <p>
            Fourth-year Software Engineering at the University of Ottawa. Six internships across
            Nokia, Ciena, Ford, and MASV — from ASIC verification to full-stack tools teams actually
            use.
          </p>
          <p className="font-serif text-2xl italic text-foreground/70 md:text-3xl">
            Clean code. Clear systems. Quiet confidence.
          </p>
        </div>
      </div>
    </section>
  );
};
