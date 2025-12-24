import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section id="projects" className="py-32 sm:py-40 relative">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Here are some of the projects I've worked on. Each project demonstrates different
          </p>
          
          <Button variant="glow" size="lg" asChild>
            <a 
              href="https://github.com/Meet-4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              View more on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
