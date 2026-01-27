import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ExternalLink, Github, Code2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Placeholder project data - user can update later
const projects = [
  {
    title: "Movie Discovery Platform",
    description: "A full-stack application for discovering movies, featuring search, filtering, and user favorites. Built with Django and TMDB API.",
    tags: ["Django", "Python", "Tailwind CSS", "TMDB API"],
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60" // Unsplash: movie theater screen
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking application with interactive maps and 5-day forecasts. Uses OpenWeatherMap API for data.",
    tags: ["JavaScript", "API Integration", "CSS3", "HTML5"],
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=60" // Unsplash: weather clouds
  },
  {
    title: "E-Commerce Storefront",
    description: "Responsive e-commerce interface with product catalog, cart functionality, and checkout flow simulation.",
    tags: ["React", "TypeScript", "Tailwind", "State Management"],
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60" // Unsplash: shopping cart tech
  }
];

export function Projects() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none -z-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
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
            <h2 className="text-3xl md:text-5xl font-display font-bold">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">
              A selection of projects that showcase my technical skills and design capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-2xl overflow-hidden border border-white/5 bg-secondary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
        {/* Unsplash image with descriptive comment */}
        {/* Project thumbnail - dynamic/placeholder */}
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button size="icon" variant="secondary" className="rounded-full h-10 w-10 shadow-lg" asChild>
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="View Source">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button size="icon" className="rounded-full h-10 w-10 shadow-lg bg-primary text-white hover:bg-primary/90" asChild>
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="View Demo">
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs font-mono">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
