import { Github, Linkedin, Mail, Send, ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "sanchaniyameet476@gmail.com",
      });
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    {
      icon: Mail,
      label: "Email",
      value: "sanchaniyameet476@gmail.com",
      href: "mailto:sanchaniyameet476@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Meet-4",
      href: "https://github.com/Meet-4",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Meet Sanchaniya",
      href: "https://www.linkedin.com/in/meet-sanchaniya-2a4193338",
    },
  ];

  return (
    <section id="contact" className="py-28 sm:py-36 relative overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 glow-divider" />

      {/* Bg blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--electric)/0.04)] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Let's work{" "}
            <span className="gradient-text">together</span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground max-w-lg">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Availability card */}
            <div className="premium-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-sm font-semibold text-foreground">Available for work</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Open to full-time roles, freelance projects, and internships. Response time within 24 hours.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-border/60 bg-card/50">
              <MapPin size={16} className="text-[hsl(var(--electric))] shrink-0" />
              <span className="text-sm text-muted-foreground">India · Remote friendly</span>
            </div>

            {/* Social links */}
            <div className="space-y-2.5">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="group flex items-center justify-between p-4 rounded-xl border border-border/60 bg-card/50 hover:border-[hsl(var(--electric)/0.35)] hover:bg-card transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary/60 text-muted-foreground group-hover:text-[hsl(var(--electric))] group-hover:bg-[hsl(var(--electric)/0.08)] transition-all duration-200">
                      <s.icon size={15} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                      <p className="text-sm font-medium text-foreground">{s.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-foreground/40 group-hover:text-[hsl(var(--electric))] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="premium-card p-7 sm:p-9">
              <form onSubmit={handleSubmit} className="space-y-5" aria-live="polite">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      name="from_name"
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="premium-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      name="from_email"
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="premium-input"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="premium-input resize-none"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 h-12 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="block w-4 h-4 border-2 border-background/30 border-t-background rounded-full"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send message
                    </>
                  )}
                </button>

                {/* Feedback */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-400"
                  >
                    <span className="text-base">✓</span>
                    Message sent! I'll get back to you within 24 hours.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400"
                  >
                    <span className="text-base">✕</span>
                    Something went wrong. Email me directly at sanchaniyameet476@gmail.com
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
