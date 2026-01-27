import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Send, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const { ref, controls, variants } = useScrollAnimation();

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Let's Connect</h2>
                <p className="text-muted-foreground text-lg">
Let’s bring ideas to life! Feel free to reach out about projects or collaborations.               </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a href="mailto:aroobas2004@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      aroobas2004@gmail.com
                    </a>
                  </div>
                </div>
                
                
              </div>

              <div className="p-6 rounded-2xl bg-secondary/30 border border-white/5">
                <h3 className="font-bold mb-2">Current Status</h3>
                <div className="flex items-center gap-2 text-green-400">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="font-mono text-sm">Open to work</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="p-4 rounded-full bg-primary/20 text-primary">
                    <Send className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Submitted!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>Send another message</Button>
                </div>
              ) : (
                <form 
                  action="https://formspree.io/f/mgvnydab" 
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      className="bg-background/50 border-white/10 focus:border-primary h-12 rounded-xl"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="hello@example.com" 
                      className="bg-background/50 border-white/10 focus:border-primary h-12 rounded-xl"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell me about your project..." 
                      className="bg-background/50 border-white/10 focus:border-primary min-h-[150px] rounded-xl resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
