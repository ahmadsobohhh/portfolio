const activities = [
  "5× Hackathon Finisher (uOttaHack, Hack the Hill)",
  "uOttaHack — Executive (2 years)",
  "uOttawa Rocketry Club — Member",
  "PlayVer Inc. — Dev Lead",
];

export const Education = () => {
  return (
    <section id="education" className="site-shell py-20 md:py-28">
      <div className="rule mb-12" />
      <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Education</p>

        <div className="max-w-2xl space-y-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tight md:text-4xl">University of Ottawa</h3>
            <p className="mt-2 text-lg text-foreground/75">Bachelor of Software Engineering</p>
            <p className="mt-4 text-sm text-muted-foreground">
              GPA 3.92 / 4.00 · Ottawa, ON · Graduating April 2027
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">Selected involvement</p>
            <ul className="space-y-2 text-foreground/75">
              {activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
