import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ExternalLink, Github } from "lucide-react";
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
    short: "Client — Dubai Paint Services",
    description: "Professional client project for a paint services business in Dubai. Built a responsive, modern website with service listings, theme preview, and mobile-friendly layout deployed with a custom domain.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    links: { github: "https://github.com/arooba-shafique/paint-services", live: "https://royalpainterdubai.com/" },
    image: royalPainterImg,
    category: "Client",
  },
  {
    title: "NetLink ISP Management",
    short: "Client — ISP System",
    description: "Full-stack ISP management system serving 200+ customers with admin and customer dashboards. Package management, subscription tracking, payment verification, and complaint handling.",
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "Drizzle ORM"],
    links: { github: "https://github.com/arooba-shafique/isp-management", live: "https://isp-management-api-server.vercel.app" },
    image: ispManagementImg,
    category: "Client",
  },
  {
    title: "Institution Management",
    short: "Full Stack — Django",
    description: "Django-based school management system with role-based dashboards for admins, teachers, students, and parents. Features secure login, academic records, and password reset.",
    tags: ["Django", "Python", "HTML", "CSS", "SQLite"],
    links: { github: "https://github.com/arooba-shafique/Project", live: "https://arooba.pythonanywhere.com/" },
    image: institutionMgmtImg,
    category: "Full Stack",
  },
  {
    title: "Talkify",
    short: "Full Stack — WebSockets",
    description: "Real-time chat application with Django WebSockets. One-to-one & group messaging, message editing, reactions, and unread message tracking.",
    tags: ["Django", "WebSockets", "Tailwind CSS", "JavaScript"],
    links: { github: "https://github.com/arooba-shafique/talkify" },
    image: talkifyImg,
    category: "Full Stack",
  },
  {
    title: "Coffee Haven",
    short: "Mobile — Flutter",
    description: "Flutter and Firebase-powered coffee and snack app with MVVM architecture. Real-time product browsing, favourites, order management, and smooth onboarding.",
    tags: ["Flutter", "Dart", "Firebase", "GetX", "MVVM"],
    links: { github: "https://github.com/arooba-shafique/coffee-haven" },
    image: coffeeHavenImg,
    category: "Mobile",
  },
  {
    title: "Urban Aura",
    short: "Full Stack — E-Commerce",
    description: "Scalable e-commerce platform with Django backend. Product listing, categories, shopping cart, and checkout workflow with responsive Tailwind UI.",
    tags: ["Django", "JavaScript", "SQLite", "Tailwind CSS"],
    links: { github: "https://github.com/arooba-shafique/urban-aura-ecommerce" },
    image: urbanAuraImg,
    category: "Full Stack",
  },
  {
    title: "MovieHub",
    short: "Full Stack — TMDB API",
    description: "Django movie discovery platform integrating TMDB API for dynamic movie data. Search, detailed views, user authentication, and responsive UI.",
    tags: ["Django", "Python", "TMDB API", "Tailwind CSS"],
    links: { github: "https://github.com/arooba-shafique/MovieHub" },
    image: movieHubImg,
    category: "Full Stack",
  },
  {
    title: "Weather Dashboard",
    short: "Frontend — Weather API",
    description: "Dynamic web app fetching real-time weather and 5-day forecasts using OpenWeatherMap API. City search, geolocation, and responsive UI.",
    tags: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
    links: { github: "https://github.com/arooba-shafique/weather-dashboard" },
    image: weatherImg,
    category: "Frontend",
  },
  {
    title: "Blog Website",
    short: "Frontend — Responsive",
    description: "Responsive blog website with category filtering, real-time search, pagination, and smooth animations.",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    links: { github: "https://github.com/arooba-shafique/blog_website" },
    image: blogWebsiteImg,
    category: "Frontend",
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
              Hover over a card to flip and reveal project details
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

          {/* Flip card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <FlipCard key={project.title} project={project} index={index} />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FlipCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group perspective-1000 h-[360px]"
    >
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden border border-white/5 bg-secondary/20">
          <div className="h-[55%] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="p-5 h-[45%] flex flex-col justify-center">
            <span className="text-[11px] font-mono text-primary/80 uppercase tracking-wider mb-1">
              {project.category}
            </span>
            <h3 className="text-xl font-display font-bold mb-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.short}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden border border-primary/30"
          style={{
            background: "linear-gradient(135deg, hsl(240,10%,8%) 0%, hsl(270,20%,10%) 100%)",
          }}
        >
          <div className="p-6 h-full flex flex-col justify-center">
            <h3 className="text-xl font-display font-bold text-primary mb-3">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[10px] font-mono rounded-full bg-primary/15 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.links.live && (
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-lg shadow-primary/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo <ExternalLink className="h-3.5 w-3.5" />
                </motion.a>
              )}
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                Source <Github className="h-3.5 w-3.5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
