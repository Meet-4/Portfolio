import { motion } from "framer-motion";
import {
  Code2, Github, GitBranch, Cloud, Flame, Wrench,
  Globe, FileCode, Palette, Terminal, Sparkles, Zap,
  Coffee, Server,
} from "lucide-react";

type Skill = { name: string; icon: React.ElementType; color: string };
type Category = { id: string; label: string; icon: React.ElementType; color: string; skills: Skill[] };

const categories: Category[] = [
  {
    id: "languages",
    label: "Languages",
    icon: Terminal,
    color: "hsl(220 100% 60%)",
    skills: [
      { name: "C", icon: Terminal, color: "#3b82f6" },
      { name: "C++", icon: Code2, color: "#06b6d4" },
      { name: "HTML5", icon: FileCode, color: "#f97316" },
      { name: "CSS3", icon: Palette, color: "#60a5fa" },
      { name: "JavaScript", icon: Zap, color: "#eab308" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Globe,
    color: "hsl(160 84% 39%)",
    skills: [
      { name: "React.js", icon: Sparkles, color: "#22d3ee" },
      { name: "Tailwind CSS", icon: Palette, color: "#38bdf8" },
    ],
  },
  {
    id: "backend",
    label: "Backend & DB",
    icon: Server,
    color: "hsl(32 98% 53%)",
    skills: [
      { name: "Node.js", icon: Coffee, color: "#4ade80" },
      { name: "Firebase", icon: Flame, color: "#fb923c" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    color: "hsl(280 80% 60%)",
    skills: [
      { name: "Git", icon: GitBranch, color: "#f97316" },
      { name: "GitHub", icon: Github, color: "#94a3b8" },
      { name: "VS Code", icon: Code2, color: "#3b82f6" },
      { name: "Vercel", icon: Cloud, color: "#e2e8f0" },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 sm:py-36 relative overflow-hidden">
      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 glow-divider" />

      {/* Bg blob */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[hsl(280_80%_60%/0.04)] rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">What I work with</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card p-5 flex flex-col gap-5"
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-xl"
                  style={{ background: `${cat.color}15` }}
                >
                  <cat.icon size={18} style={{ color: cat.color }} />
                </div>
                <span className="text-sm font-semibold text-foreground">{cat.label}</span>
              </div>

              {/* Skills */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-2"
              >
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-secondary/60 transition-colors cursor-default"
                  >
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-transform group-hover:scale-110 duration-200"
                      style={{ background: `${skill.color}18` }}
                    >
                      <skill.icon size={15} style={{ color: skill.color }} />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 overflow-hidden"
        >
          <div className="glow-divider mb-8" />
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground/50 font-medium">
            Always learning · Always building · Always improving
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
