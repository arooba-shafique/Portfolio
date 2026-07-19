import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import talkifyImg from "@/assets/projects/talkify.png";
import urbanAuraImg from "@/assets/projects/urban-aura.png";
import movieHubImg from "@/assets/projects/moviehub.png";
import weatherImg from "@/assets/projects/weather.png";
import coffeeHavenImg from "@/assets/projects/coffee-haven.png";
import blogWebsiteImg from "@/assets/projects/blog_site.png";
import royalPainterImg from "@/assets/projects/royal-painter.png";
import ispManagementImg from "@/assets/projects/isp-management.png";
import institutionMgmtImg from "@/assets/projects/institution-mgmt.png";

const categories = ["All", "Full Stack", "Frontend", "Mobile", "Client"];

const projects = [
  {
    title: "Royal Paint Dubai",
    description: "Professional client project for a paint services business in Dubai. Built a responsive, modern website with service listings, theme preview, and mobile-friendly layout deployed with a custom domain.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    links: { github: "https://github.com/arooba-shafique/paint-services", live: "https://royalpainterdubai.com/" },
    image: royalPainterImg,
    category: "Client",
    featured: true,
  },
  {
    title: "NetLink ISP Management Portal",
    description: "Full-stack ISP management system serving 200+ customers with separate admin and customer dashboards. Built with React, Express, PostgreSQL, and Drizzle ORM. Features include package management, subscription tracking, payment verification, and complaint handling.",
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    links: { github: "https://github.com/arooba-shafique/isp-management", live: "https://isp-management-api-server.vercel.app" },
    image: ispManagementImg,
    category: "Client",
    featured: true,
  },
  {
    title: "Institution Management System",
    description: "A Django-based school management system with role-based dashboards for admins, teachers, students, and parents. Features secure login, academic records management, and password reset functionality.",
    tags: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
    links: { github: "https://github.com/arooba-shafique/Project", live: "https://arooba.pythonanywhere.com/" },
    image: institutionMgmtImg,
    category: "Full Stack",
    featured: true,
  },
  {
    title: "Talkify - Real-Time Chat App",
    description: "Developed a full-stack real-time chat application with Django, WebSockets, Tailwind CSS, and JavaScript. Implemented one-to-one & group messaging, message editing/deletion, reactions and unread message tracking.",
    tags: ["Django", "WebSockets", "Tailwind CSS", "JavaScript", "SQLite"],
    links: { github: "https://github.com/arooba-shafique/talkify" },
    image: talkifyImg,
    category: "Full Stack",
    featured: false,
  },
  {
    title: "Urban Aura - E-Commerce",
    description: "Developed a scalable e-commerce platform with Django backend and Tailwind CSS for responsive, modern UI. Implemented product listing, categories, shopping cart, and checkout workflow for seamless user experience.",
    tags: ["Python", "Django", "JavaScript", "SQLite", "Tailwind CSS"],
    links: { github: "https://github.com/arooba-shafique/urban-aura-ecommerce" },
    image: urbanAuraImg,
    category: "Full Stack",
    featured: false,
  },
  {
    title: "MovieHub - Movie Discovery",
    description: "Developed a Django-based movie discovery platform integrating TMDB API for dynamic movie data and posters. Implemented movie search, detailed movie views, user authentication, and responsive UI.",
    tags: ["Django", "Python", "Tailwind CSS", "JavaScript", "TMDB API"],
    links: { github: "https://github.com/arooba-shafique/MovieHub" },
    image: movieHubImg,
    category: "Full Stack",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "Developed a dynamic web app to fetch and display real-time weather and 5-day forecasts using Open WeatherMap API. Implemented city search, geolocation, and responsive UI.",
    tags: ["JavaScript", "HTML", "CSS", "Tailwind CSS", "OpenWeatherMap API"],
    links: { github: "https://github.com/arooba-shafique/weather-dashboard" },
    image: weatherImg,
    category: "Frontend",
    featured: false,
  },
  {
    title: "Coffee Haven - Coffee & Snack App",
    description: "Flutter and Firebase-powered coffee and snack app designed with MVVM architecture. Features real-time product browsing, favourites, order management, user profiles, and smooth onboarding with a mobile-friendly UI.",
    tags: ["Flutter", "Dart", "Firebase", "GetX", "MVVM"],
    links: { github: "https://github.com/arooba-shafique/coffee-haven" },
    image: coffeeHavenImg,
    category: "Mobile",
    featured: true,
  },
  {
    title: "Personal Blog Website",
    description: "Responsive blog website with category filtering, real-time search, pagination, and smooth animations.",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    links: { github: "https://github.com/arooba-shafique/blog_website" },
    image: blogWebsiteImg,
    category: "Frontend",
    featured: false,
  },
];

export function Projects() {
  const { ref, controls, variants } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A selection of projects I've built — from client work to personal experiments
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-white/5"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Project grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group rounded-2xl overflow-hidden border border-white/5 bg-secondary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
    >
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 opacity-70" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}
        {/* Hover overlay with links */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/60 backdrop-blur-sm">
          {project.links.live && (
            <motion.a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="h-5 w-5" />
            </motion.a>
          )}
          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-foreground shadow-lg border border-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
          </motion.a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono text-primary/80 uppercase tracking-wider">{project.category}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-grow leading-relaxed">
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
