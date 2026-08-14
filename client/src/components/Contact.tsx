import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Send, Mail, MapPin, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const { ref, controls, variants } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1.3, 1, 1.3], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                  Let's <span className="text-gradient">Connect</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Let's bring ideas to life! Feel free to reach out about projects or collaborations.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className="p-3 rounded-full bg-primary/10 text-primary"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a href="mailto:aroobas2004@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      aroobas2004@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className="p-3 rounded-full bg-primary/10 text-primary"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <span className="text-muted-foreground">Sahiwal, Pakistan</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="p-6 rounded-2xl bg-secondary/30 border border-white/5"
                whileHover={{ scale: 1.02, borderColor: "rgba(139, 92, 246, 0.3)" }}
              >
                <h3 className="font-bold mb-2">Current Status</h3>
                <div className="flex items-center gap-2 text-green-400">
                  <motion.span
                    className="relative flex h-3 w-3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </motion.span>
                  <span className="font-mono text-sm">Open to work</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="glass-card p-8 rounded-3xl relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -skew-x-12 pointer-events-none"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="p-4 rounded-full bg-green-500/20 text-green-400"
                    >
                      <CheckCircle className="w-12 h-12" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-bold"
                    >
                      Message Sent!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-muted-foreground"
                    >
                      Thank you for reaching out. I'll get back to you soon.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button variant="outline" onClick={() => setSubmitted(false)}>Send another message</Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    action="https://formspree.io/f/mgvnydab"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6 relative"
                  >
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className={`bg-background/50 border-white/10 focus:border-primary h-12 rounded-xl transition-all duration-300 ${
                            focusedField === "name" ? "shadow-[0_0_15px_rgba(139,92,246,0.2)]" : ""
                          }`}
                          required
                        />
                        {focusedField === "name" && (
                          <motion.div
                            className="absolute inset-0 rounded-xl border border-primary/30 pointer-events-none"
                            layoutId="focus-ring"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </div>
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="hello@example.com"
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className={`bg-background/50 border-white/10 focus:border-primary h-12 rounded-xl transition-all duration-300 ${
                            focusedField === "email" ? "shadow-[0_0_15px_rgba(139,92,246,0.2)]" : ""
                          }`}
                          required
                        />
                        {focusedField === "email" && (
                          <motion.div
                            className="absolute inset-0 rounded-xl border border-primary/30 pointer-events-none"
                            layoutId="focus-ring"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </div>
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                      <div className="relative">
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project..."
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className={`bg-background/50 border-white/10 focus:border-primary min-h-[150px] rounded-xl resize-none transition-all duration-300 ${
                            focusedField === "message" ? "shadow-[0_0_15px_rgba(139,92,246,0.2)]" : ""
                          }`}
                          required
                        />
                        {focusedField === "message" && (
                          <motion.div
                            className="absolute inset-0 rounded-xl border border-primary/30 pointer-events-none"
                            layoutId="focus-ring"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button type="submit" className="w-full h-12 text-lg rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 relative overflow-hidden group">
                        <motion.span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative flex items-center">
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </span>
                      </Button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
