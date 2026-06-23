import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import * as THREE from "three";

/* ── Floating 3-D geometry ── */
function FloatingRing({ position, rotation, scale }: { position: [number,number,number], rotation: [number,number,number], scale: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.18;
    mesh.current.rotation.y += delta * 0.12;
  });
  return (
    <mesh ref={mesh} position={position} rotation={rotation} scale={scale}>
      <torusGeometry args={[1, 0.25, 16, 60]} />
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

function FloatingSphere({ position, scale }: { position: [number,number,number], scale: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.3;
  });
  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#6366f1"
        wireframe
        transparent
        opacity={0.14}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.4} />
      <FloatingRing position={[-3.5, 1, -2]} rotation={[0.4, 0.2, 0]} scale={1.1} />
      <FloatingRing position={[3.8, -1, -3]} rotation={[0.8, 0.5, 0.2]} scale={0.8} />
      <FloatingSphere position={[4, 2, -2.5]} scale={0.7} />
      <FloatingSphere position={[-4, -1.5, -2]} scale={0.5} />
    </>
  );
}

/* ── Text reveal variants ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const word = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 3-D background canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Dot-grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_40%,hsl(var(--background))_100%)] pointer-events-none" />

      {/* Electric glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[hsl(var(--electric)/0.06)] blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-border/60 bg-card/60 backdrop-blur-sm text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--electric))] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--electric))]" />
            </span>
            Available for new opportunities
          </motion.div>

          {/* Headline */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mb-6"
          >
            {["Hi, I'm", "Meet Sanchaniya"].map((line, li) => (
              <div key={li} className="overflow-hidden">
                <motion.h1
                  variants={word}
                  className={`block leading-[1.05] tracking-tight font-extrabold ${
                    li === 0
                      ? "text-4xl sm:text-5xl md:text-6xl text-muted-foreground font-semibold"
                      : "text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text"
                  }`}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </motion.div>

          {/* Role badge row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-8"
          >
            {["Computer Engineering Student", "React Developer", "Web Developer"].map((role) => (
              <span key={role} className="tech-tag text-xs">
                {role}
              </span>
            ))}
          </motion.div>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10"
          >
            Building clean, efficient, and scalable web applications with modern technologies.
            Turning ideas into impactful digital experiences.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-14"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-85 transition-all duration-200 hover:-translate-y-0.5"
            >
              View my work
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm text-sm font-semibold text-foreground hover:border-[hsl(var(--electric)/0.4)] hover:bg-card/80 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { href: "https://github.com/Meet-4", icon: Github, label: "GitHub" },
              {
                href: "https://www.linkedin.com/in/meet-sanchaniya-2a4193338",
                icon: Linkedin,
                label: "LinkedIn",
              },
              { href: "mailto:sanchaniyameet476@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-card/50 text-muted-foreground hover:text-foreground hover:border-[hsl(var(--electric)/0.4)] hover:bg-card transition-all duration-200"
              >
                <Icon size={17} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
