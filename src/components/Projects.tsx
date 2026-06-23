import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
  year: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A premium, modern developer portfolio built with React, TypeScript, Tailwind CSS, Framer Motion, and Three.js. Features smooth animations, 3D elements, dark/light mode, and a working contact form via EmailJS.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion", "Three.js", "EmailJS"],
    github: "https://github.com/Meet-4/Portfolio",
    featured: true,
    year: "2024",
  },
  {
    title: "Chat with PDF — PDFMind AI",
    description:
      "Full-stack AI study tool with RAG-powered PDF Q&A, auto-generated summaries, MCQ / true-false / short-answer quizzes, and 3D flip flashcard decks with spaced repetition. Supports Groq Llama 3, OpenAI GPT-3.5, and offline Ollama. JWT + Google OAuth authentication.",
    tags: ["React", "FastAPI", "ChromaDB", "Groq", "Tailwind", "Framer Motion"],
    github: "https://github.com/Meet-4/chat-with-pdf",
    year: "2024",
  },
  {
    title: "Target Game",
    description:
      "A fast-paced 2-D browser shooting game built with Java Swing. Click moving image targets before the timer runs out — features a custom crosshair cursor, explosion hit effects, score tracking, and a high-score board.",
    tags: ["Java", "Swing", "AWT", "Game Dev"],
    github: "https://github.com/Meet-4/targetgame4",
    live: "https://targetgame4.vercel.app",
    year: "2024",
  },
  {
    title: "FlowMind AI — Workflow Builder",
    description:
      "Build production-ready AI workflows with natural language. Describe automation tasks and the AI engine generates interactive nodes and coordinates multi-step agent actions. Features a visual canvas, MongoDB-backed persistence, and analytics dashboard.",
    tags: ["Next.js 15", "TypeScript", "React Flow", "MongoDB", "Tailwind", "shadcn/ui"],
    github: "https://github.com/Meet-4/ai-workflow-builder",
    year: "2024",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Projects = () => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 sm:py-36 relative overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 glow-divider" />

      {/* Bg blob */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[hsl(var(--electric)/0.04)] rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="section-label mb-3">What I've built</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/Meet-4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-xl border border-border/60 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-[hsl(var(--electric)/0.4)] transition-all duration-200 shrink-0"
          >
            <Github size={15} />
            View all on GitHub
            <ArrowUpRight size={13} />
          </a>
        </motion.div>

        {/* Featured project — large spotlight */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="premium-card p-8 sm:p-10 relative overflow-hidden group">
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[hsl(var(--electric)/0.06)] rounded-full blur-[80px] pointer-events-none group-hover:opacity-150 transition-opacity" />

              <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Left */}
                <div className="flex-1 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[hsl(var(--electric)/0.1)] text-[hsl(var(--electric))] border border-[hsl(var(--electric)/0.2)]">
                      ✦ Featured
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{featured.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{featured.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed max-w-xl">{featured.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-85 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <Github size={15} />
                      Source code
                    </a>
                    {featured.live && (
                      <a
                        href={featured.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 h-10 px-5 rounded-xl border border-border/60 text-sm font-semibold text-foreground hover:border-[hsl(var(--electric)/0.4)] transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <ExternalLink size={14} />
                        Live demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right — decorative code window */}
                <div className="lg:w-72 xl:w-80 shrink-0">
                  <div className="premium-card p-0 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-secondary/30">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                      </div>
                      <span className="ml-2 text-xs text-muted-foreground font-mono">portfolio.tsx</span>
                    </div>
                    <div className="p-4 font-mono text-xs leading-6 text-muted-foreground">
                      <p><span className="text-[hsl(var(--electric))]">import</span> <span className="text-foreground">React</span> <span className="text-[hsl(var(--electric))]">from</span> <span className="text-emerald-400">'react'</span></p>
                      <p><span className="text-[hsl(var(--electric))]">import</span> {"{"} <span className="text-foreground">motion</span> {"}"} <span className="text-[hsl(var(--electric))]">from</span></p>
                      <p className="pl-4"><span className="text-emerald-400">'framer-motion'</span></p>
                      <p className="mt-2"><span className="text-[hsl(var(--electric))]">export default function</span></p>
                      <p><span className="text-yellow-400">Portfolio</span><span className="text-foreground">()</span> {"{"}</p>
                      <p className="pl-4"><span className="text-[hsl(var(--electric))]">return</span> <span className="text-foreground">&lt;</span><span className="text-emerald-400">App</span> <span className="text-foreground">/&gt;</span></p>
                      <p>{"}"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="premium-card p-6 flex flex-col gap-4 group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono text-muted-foreground/60">{project.year}</span>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <Github size={15} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all duration-200"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <h3 className="text-base font-semibold text-foreground group-hover:text-[hsl(var(--electric))] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
