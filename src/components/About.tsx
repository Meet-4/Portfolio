const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-glow-purple/20 rounded-2xl blur-2xl" />
              <div className="relative bg-card border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  {/* Code block decoration */}
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-destructive/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <p><span className="text-primary">const</span> <span className="text-accent">developer</span> = {"{"}</p>
                    <p className="pl-4"><span className="text-muted-foreground">name:</span> <span className="text-green-400">"Meet Sanchaniya"</span>,</p>
                    <p className="pl-4"><span className="text-muted-foreground">role:</span> <span className="text-green-400">"Developer"</span>,</p>
                    <p className="pl-4"><span className="text-muted-foreground">passion:</span> <span className="text-green-400">"Building great UX"</span>,</p>
                    <p className="pl-4"><span className="text-muted-foreground">coffee:</span> <span className="text-primary">true</span></p>
                    <p>{"}"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
              <span className="gradient-text">Computer Engineering</span> Student
            </h2>
            <div className="space-y-5 text-base sm:text-lg leading-relaxed">
              <p className="text-muted-foreground">
                I'm a <strong className="text-foreground font-semibold">Computer Engineering student</strong> with a strong passion for <span className="text-primary font-medium">web development</span>. I enjoy building <em className="text-accent not-italic">clean, efficient, and scalable web applications</em> using <span className="text-primary font-medium">modern technologies</span>.
              </p>
              
              <p className="text-muted-foreground">
                I focus on creating <strong className="text-foreground font-semibold">maintainable and secure solutions</strong> while continuously learning <span className="text-primary font-medium">new tools and best practices</span>. My goal is to <em className="text-accent not-italic font-medium">grow as a professional web developer</em> and contribute to <strong className="text-foreground font-semibold">impactful, real-world projects</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
