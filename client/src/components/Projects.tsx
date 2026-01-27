import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ExternalLink, Github, Code2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import talkifyImg from "@/assets/projects/talkify.png";
import urbanAuraImg from "@/assets/projects/urban-aura.png";
import movieHubImg from "@/assets/projects/moviehub.png";
import weatherImg from "@/assets/projects/weather.png";


// Placeholder project data - user can update later
const projects = [
  {
    title: "Talkify - Real-Time Chat App",
    description: "Developed a full-stack real-time chat application with Django, WebSockets, Tailwind CSS, and JavaScript. Implemented one-to-one & group messaging, message editing/deletion, reactions and unread message tracking.",
    tags: ["Django", "WebSockets", "Tailwind CSS", "JavaScript", "SQLite"],
    links: { github: "https://github.com/arooba-shafique/talkify" },
    image: talkifyImg,
  },
  {
    title: "Urban Aura - E-Commerce Website",
    description: "Developed a scalable e-commerce platform with Django backend and Tailwind CSS for responsive, modern UI. Implemented product listing, categories, shopping cart, and checkout workflow for seamless user experience.",
    tags: ["Python", "Django", "JavaScript", "SQLite", "Tailwind CSS"],
    links: { github: "https://github.com/arooba-shafique/urban-aura-ecommerce" },
image: urbanAuraImg,  },
  {
    title: "MovieHub - Django Movie Discovery Platform",
    description: "Developed a Django-based movie discovery platform integrating TMDB API for dynamic movie data and posters. Implemented movie search, detailed movie views, user authentication, and responsive UI.",
    tags: ["Django", "Python", "Tailwind CSS", "JavaScript", "TMDB API"],
    links: { github: "https://github.com/arooba-shafique/MovieHub" },
image: movieHubImg,  },
  {
    title: "Weather Dashboard - Real-Time Weather App",
    description: "Developed a dynamic web app to fetch and display real-time weather and 5-day forecasts using Open WeatherMap API. Implemented city search, geolocation, and responsive UI.",
    tags: ["JavaScript", "HTML", "CSS", "Tailwind CSS", "OpenWeatherMap API"],
    links: {  github: "https://github.com/arooba-shafique/weather-dashboard" },
image: weatherImg,  }
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
          
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
