import { motion } from "framer-motion";
import { GraduationCap, Code2, Lightbulb, Target } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stats = [
  { value: "2+", label: "Years coding" },
  { value: "10+", label: "Projects built" },
  { value: "5+", label: "Technologies" },
  { value: "∞", label: "Curiosity" },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Computer Engineering",
    description: "Currently pursuing a CE degree with a focus on software development and system design.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Specializing in modern React applications, clean UI, and performant front-end architecture.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "I enjoy breaking down complex challenges into elegant, maintainable solutions.",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Committed to growing as a professional developer and contributing to impactful projects.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-28 sm:py-36 relative overflow-hidden">
      {/* background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--electric)/0.04)] rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Computer Engineering{" "}
            <span className="gradient-text">Student</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — code block + stats */}
          <div className="space-y-6">
            {/* Code card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-border/60 overflow-hidden shadow-2xl shadow-black/30"
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-[hsl(0_0%_7%)]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="ml-2 text-xs text-muted-foreground/50 font-mono">developer.ts</span>
              </div>
              {/* Code body — always dark regardless of theme */}
              <div className="bg-[hsl(0_0%_6%)] px-6 py-5 font-mono text-sm leading-7">
                <p><span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">developer</span> <span className="text-[hsl(0_0%_55%)]">=</span> <span className="text-[hsl(0_0%_70%)]">{"{"}</span></p>
                <p className="pl-6"><span className="text-[hsl(0_0%_55%)]">name:</span>      <span className="text-[#ce9178]">"Meet Sanchaniya"</span><span className="text-[hsl(0_0%_45%)]">,</span></p>
                <p className="pl-6"><span className="text-[hsl(0_0%_55%)]">role:</span>      <span className="text-[#ce9178]">"Web Developer"</span><span className="text-[hsl(0_0%_45%)]">,</span></p>
                <p className="pl-6"><span className="text-[hsl(0_0%_55%)]">education:</span> <span className="text-[#ce9178]">"Computer Engineering"</span><span className="text-[hsl(0_0%_45%)]">,</span></p>
                <p className="pl-6"><span className="text-[hsl(0_0%_55%)]">passion:</span>   <span className="text-[#ce9178]">"Building great UX"</span><span className="text-[hsl(0_0%_45%)]">,</span></p>
                <p className="pl-6"><span className="text-[hsl(0_0%_55%)]">coffee:</span>    <span className="text-[#569cd6]">true</span><span className="text-[hsl(0_0%_45%)]">,</span></p>
                <p className="pl-6"><span className="text-[hsl(0_0%_55%)]">openToWork:</span> <span className="text-[#569cd6]">true</span></p>
                <p><span className="text-[hsl(0_0%_70%)]">{"}"}</span><span className="animate-[blink_1.1s_step-end_infinite] text-[hsl(var(--electric))]">▋</span></p>
              </div>
            </motion.div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="premium-card p-4 text-center"
                >
                  <p className="text-2xl font-bold text-foreground mb-0.5">{s.value}</p>
                  <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide leading-tight">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — bio + highlights */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5 text-[15px] leading-[1.8] text-muted-foreground"
            >
              <p>
                I'm a <span className="text-foreground font-semibold">Computer Engineering student</span> with a strong passion for web development. I enjoy building clean, efficient, and scalable web applications using modern technologies.
              </p>
              <p>
                I focus on creating <span className="text-foreground font-semibold">maintainable and secure solutions</span> while continuously learning new tools and best practices. My goal is to grow as a professional developer and contribute to impactful, real-world projects.
              </p>
            </motion.div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="group relative rounded-xl border border-border/60 bg-card p-5 overflow-hidden hover:border-[hsl(var(--electric)/0.3)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  {/* Subtle top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--electric)/0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start gap-3.5">
                    <div className="shrink-0 p-2.5 rounded-lg bg-[hsl(var(--electric)/0.07)] text-[hsl(var(--electric))] group-hover:bg-[hsl(var(--electric)/0.14)] transition-colors duration-200">
                      <h.icon size={15} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1.5">{h.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{h.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
