import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Code2, Layout, Database, Terminal, Wrench, Smartphone, BarChart3 } from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Python", "JavaScript", "TypeScript", "Dart", "R", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React", "Tailwind CSS", "shadcn/ui", "Bootstrap", "Vite"],
  },
  {
    title: "Backend",
    icon: <Database className="w-5 h-5" />,
    skills: ["Django", "DRF", "Django Channels", "Express", "Node.js", "REST API", "WebSockets"],
  },
  {
    title: "Mobile & State Management",
    icon: <Smartphone className="w-5 h-5" />,
    skills: ["Flutter", "Firebase", "GetX", "MVVM"],
  },
  {
    title: "Database & ORM",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["PostgreSQL", "SQLite", "Firebase Firestore", "Drizzle ORM", "Django ORM"],
  },
  {
    title: "Authentication & APIs",
    icon: <BarChart3 className="w-5 h-5" />,
    skills: ["JWT", "bcrypt", "Firebase Auth", "TMDB API", "OpenWeatherMap API", "WooCommerce API"],
  },
  {
    title: "Tools & Deployment",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "GitHub", "VS Code", "PyCharm", "Vercel", "Netlify", "pnpm", "PythonAnywhere"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none -z-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="space-y-12"
        >
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and tools I work with
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={cardVariants}
                className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary/60 text-muted-foreground border border-white/5 hover:border-primary/30 hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-default"
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
