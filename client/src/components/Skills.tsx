import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Code2, Layout, Database, Terminal, Wrench, Shield, Globe } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Python", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "shadcn/ui"],
  },
  {
    title: "Backend",
    icon: <Database className="w-5 h-5" />,
    skills: ["Django", "Express", "Node.js", "REST API", "WebSockets"],
  },
  {
    title: "Database",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["PostgreSQL", "SQLite", "SQL", "Drizzle ORM", "Django ORM"],
  },
  {
    title: "Authentication",
    icon: <Shield className="w-5 h-5" />,
    skills: ["JWT", "bcrypt"],
  },
  {
    title: "APIs",
    icon: <Globe className="w-5 h-5" />,
    skills: ["TMDB API", "OpenWeatherMap API", "WooCommerce API"],
  },
  {
    title: "Deployment & Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Vite", "pnpm", "Vercel", "PythonAnywhere", "Netlify", "Git", "GitHub"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.04, type: "spring", stiffness: 200, damping: 12 },
  }),
};

export function Skills() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="space-y-12"
        >
          <motion.div
            className="text-center space-y-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and tools I work with
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto"
          >
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-5 rounded-2xl hover:border-primary/40 transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors"
                  >
                    {group.icon}
                  </motion.div>
                  <h3 className="text-base font-display font-bold text-foreground">
                    {group.title}
                  </h3>
                </div>

                <div className="relative flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      custom={i}
                      variants={badgeVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -3, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary/60 text-muted-foreground border border-white/5 hover:border-primary/40 hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
