import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "HaadinGlobal",
    period: "June 2026 - Present",
    location: "On-site",
    description: [
      "Developing and maintaining client projects including an ISP management system, product catalogue application, and painting services website using React, TypeScript, Express, and PostgreSQL."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Intern Intelligence",
    period: "Sept 2025 - Oct 2025",
    location: "Remote",
    description: [
      "Developed full-stack web applications, including a movie discovery platform and e-commerce sites, using Django, JavaScript, and Tailwind CSS."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Elevvo Pathways",
    period: "August 2025 - August 2025",
    location: "Remote",
    description: [
      "Designed and developed tech landing pages, personal blogs, weather dashboards, and contact forms using HTML, CSS, JavaScript, and Tailwind CSS."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Code Sentinel",
    period: "July 2025 - July 2025",
    location: "Remote",
    description: [
      "Designed and developed responsive landing pages, to-do apps, and portfolio websites using HTML5, CSS3, JavaScript and Tailwind CSS."
    ]
  }
];

export function Experience() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Animated background line */}
      <motion.div
        className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="space-y-12 max-w-4xl mx-auto"
        >
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </motion.div>

          <div className="relative border-l border-primary/20 ml-3 md:ml-6 space-y-12 pb-4">
            {/* Animated timeline line */}
            <motion.div
              className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const isCurrent = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 80 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline dot with pulse */}
      <motion.span
        className={`absolute -left-[5px] top-2 h-3 w-3 rounded-full ring-4 ring-background ${
          isCurrent ? "bg-green-400" : "bg-primary"
        }`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
      />
      {isCurrent && (
        <motion.span
          className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-green-400"
          animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        className={`glass-card p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden ${
          isCurrent ? "border-green-500/30" : ""
        }`}
      >
        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none"
          initial={{ x: "-200%" }}
          whileHover={{ x: "200%" }}
          transition={{ duration: 0.8 }}
        />

        <div className="relative flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">{experience.role}</h3>
              {isCurrent && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-green-500/20 text-green-400 border border-green-500/30"
                >
                  CURRENT
                </motion.span>
              )}
            </div>
            <motion.div
              className="flex items-center gap-2 text-primary font-medium mt-1"
              whileHover={{ x: 4 }}
            >
              <Briefcase className="w-4 h-4" />
              <span>{experience.company}</span>
            </motion.div>
          </div>
          <div className="flex flex-col md:items-end text-sm text-muted-foreground gap-1">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: -4 }}
            >
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </motion.div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
        
        <ul className="space-y-2 text-muted-foreground">
          {experience.description.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + i * 0.1 + 0.3 }}
              className="flex items-start gap-2"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
