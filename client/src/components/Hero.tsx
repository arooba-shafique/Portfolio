import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/50 border border-white/5 text-sm font-mono text-primary mb-6">
              Available for new opportunities
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6">
              Building digital <br />
              <span className="text-gradient">experiences</span> that matter.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm Arooba Shafique, a Full Stack Developer passionate about crafting clean, efficient, and user-centric web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full text-lg h-14 px-8 bg-primary hover:bg-primary/90" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 border-white/10 hover:bg-white/5" asChild>
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-12 flex items-center justify-center gap-6"
          >
            <SocialLink href="https://github.com" icon={<Github className="h-6 w-6" />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/arooba-shafique/" icon={<Linkedin className="h-6 w-6" />} label="LinkedIn" />
            <SocialLink href="mailto:aroobas2004@gmail.com" icon={<Mail className="h-6 w-6" />} label="Email" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-secondary/50 border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
