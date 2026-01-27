import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Code2, Layout, Database, Terminal } from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Python", "C++", "JavaScript"]
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    skills: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["Django", "REST API", "WebSockets", "Django Channels", "SQLite", "Firebase", "DRF"]
  },
  {
    title: "Tools & IDEs",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["VS Code", "Git", "GitHub", "Debugging", "PyCharm", "Android Studio", "Jupyter Notebook"]
  }
];

export function Skills() {
  const { variants } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technical tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: groupIndex * 0.1,
                    staggerChildren: 0.1
                  }
                }
              }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6 text-primary">
                {group.icon}
                <h3 className="font-bold text-lg">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
