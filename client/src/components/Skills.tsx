import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal } from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Python", "C++", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-5 h-5" />,
    skills: ["Django", "REST API", "WebSockets", "SQLite", "Firebase", "DRF"],
  },
  {
    title: "Tools & IDEs",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["Git", "PyCharm", "Vercel", "Netlify"], // Added Vercel & Netlify here
  },
];

// Flatten all skills
const allSkills = skillGroups.flatMap(group =>
  group.skills.map(skill => ({
    name: skill,
    icon: group.icon,
  }))
);

// Repeat the skills array enough times so the line never feels empty
const repeatedSkills = [...allSkills, ...allSkills, ...allSkills];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gray-900/10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Skills & Expertise
        </h2>
       
        {/* Floating line */}
        <div className="overflow-hidden whitespace-nowrap relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }} // move left continuously
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="inline-flex gap-6"
          >
            {repeatedSkills.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.3, color: "#10B981" }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-primary font-medium cursor-pointer shadow-md"
              >
                {item.icon}
                <span className="text-sm">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
