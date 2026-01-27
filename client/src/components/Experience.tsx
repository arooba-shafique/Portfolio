import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
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
    period: "Sep 2025 - Sep 2025",
    location: "Remote",
    description: [
      "Designed and developed tech landing pages, personal blogs, weather dashboards, and contact forms using HTML, CSS, JavaScript, and Tailwind CSS."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Code Sentinel",
    period: "Aug 2025 - Aug 2025",
    location: "Remote",
    description: [
      "Designed and developed responsive landing pages, to-do apps, and portfolio websites using HTML5, CSS3, JavaScript and Tailwind CSS."
    ]
  }
];

export function Experience() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="space-y-12 max-w-4xl mx-auto"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Experience</h2>
           
          </div>

          <div className="relative border-l border-primary/20 ml-3 md:ml-6 space-y-12 pb-4">
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
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline dot */}
      <span className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
      
      <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">{experience.role}</h3>
            <div className="flex items-center gap-2 text-primary font-medium mt-1">
              <Briefcase className="w-4 h-4" />
              <span>{experience.company}</span>
            </div>
          </div>
          <div className="flex flex-col md:items-end text-sm text-muted-foreground gap-1">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
        
        <ul className="space-y-2 text-muted-foreground">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
