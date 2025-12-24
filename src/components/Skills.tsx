import { 
  Code2, 
  Github, 
  GitBranch, 
  Cloud, 
  Database, 
  Flame, 
  Wrench, 
  Globe, 
  FileCode,
  Palette,
  Terminal,
  Sparkles,
  Zap,
  Server,
  Coffee
} from "lucide-react";

const programmingLanguages = [
  { name: "C", icon: Terminal, color: "text-blue-500", bgColor: "bg-blue-500/10" },
  { name: "C++", icon: Code2, color: "text-cyan-500", bgColor: "bg-cyan-500/10" },
  { name: "HTML", icon: FileCode, color: "text-orange-500", bgColor: "bg-orange-500/10" },
  { name: "CSS", icon: Palette, color: "text-blue-400", bgColor: "bg-blue-400/10" },
  { name: "JavaScript (ES6+)", icon: Zap, color: "text-yellow-500", bgColor: "bg-yellow-500/10" },
];

const frontendTechnologies = [
  { name: "React.js", icon: Sparkles, color: "text-cyan-400", bgColor: "bg-cyan-400/10" },
  { name: "Tailwind CSS", icon: Palette, color: "text-sky-500", bgColor: "bg-sky-500/10" },
];

const backendAndDatabase = [
  { name: "Firebase (Auth, Firestore, Hosting)", icon: Flame, color: "text-orange-400", bgColor: "bg-orange-400/10" },
  { name: "Node.js", icon: Coffee, color: "text-green-500", bgColor: "bg-green-500/10" },
];

const toolsAndPlatforms = [
  { name: "Git", icon: GitBranch, color: "text-orange-600", bgColor: "bg-orange-600/10" },
  { name: "GitHub", icon: Github, color: "text-gray-300", bgColor: "bg-gray-300/10" },
  { name: "VS Code", icon: Code2, color: "text-blue-500", bgColor: "bg-blue-500/10" },
  { name: "Vercel", icon: Cloud, color: "text-black dark:text-white", bgColor: "bg-black/10 dark:bg-white/10" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-card/30">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="section-container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">Skills & Technologies</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Programming Languages */}
          <div className="glow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Programming Languages</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {programmingLanguages.map((lang, index) => (
                <div
                  key={lang.name}
                  className="p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${lang.bgColor} ${lang.color} group-hover:scale-110 transition-transform`}>
                      <lang.icon size={18} />
                    </div>
                    <span className="font-medium text-sm text-foreground">{lang.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Technologies */}
          <div className="glow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Frontend Technologies</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {frontendTechnologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-accent/30 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${tech.bgColor} ${tech.color} group-hover:scale-110 transition-transform`}>
                      <tech.icon size={18} />
                    </div>
                    <span className="font-medium text-sm text-foreground">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Database */}
          <div className="glow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Flame size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Backend & Database</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {backendAndDatabase.map((item, index) => (
                <div
                  key={item.name}
                  className="p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon size={18} />
                    </div>
                    <span className="font-medium text-sm text-foreground">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="glow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Wrench size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Tools & Platforms</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {toolsAndPlatforms.map((tool, index) => (
                <div
                  key={tool.name}
                  className="p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-accent/30 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${tool.bgColor} ${tool.color} group-hover:scale-110 transition-transform`}>
                      <tool.icon size={18} />
                    </div>
                    <span className="font-medium text-sm text-foreground">{tool.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
