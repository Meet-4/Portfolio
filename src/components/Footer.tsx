import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/Meet-4", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/meet-sanchaniya-2a4193338",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:sanchaniyameet476@gmail.com", icon: Mail, label: "Email" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60 overflow-hidden">
      {/* Glow divider */}
      <div className="absolute top-0 left-0 right-0 glow-divider" />

      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <a href="#" className="inline-flex items-baseline gap-0.5 text-lg font-bold text-foreground">
              MS
              <span className="text-[hsl(var(--electric))]">.</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Computer Engineering student building the web, one project at a time.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-[hsl(var(--electric)/0.35)] hover:bg-[hsl(var(--electric)/0.06)] transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/60">
            © {year} Meet Sanchaniya. Built with React, TypeScript &amp; Tailwind.
          </p>

          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground/60 hover:text-foreground transition-colors duration-200"
          >
            Back to top
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
