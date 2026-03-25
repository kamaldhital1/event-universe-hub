import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Sparkles, Play } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ scale: imageScale, opacity: imageOpacity }}>
        <img
          src={heroImage}
          alt="Live event with thousands of attendees"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/50 to-background" />
      <div className="absolute inset-0 bg-mesh opacity-60" />

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet/10 rounded-full blur-[100px]"
      />

      {/* Content */}
      <motion.div className="relative z-10 container mx-auto px-4 text-center pt-20" style={{ y: contentY }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/15 backdrop-blur-md border border-accent/20 mb-10"
          >
            <Sparkles className="h-4 w-4 text-coral-light" />
            <span className="text-sm font-medium text-primary-foreground/90">India's #1 Event Platform</span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-primary-foreground mb-7 leading-[0.92]">
            Where Every
            <br />
            <span className="text-gradient">Moment Matters</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-primary-foreground/65 max-w-2xl mx-auto mb-12 font-body leading-relaxed"
          >
            Discover, create, and manage extraordinary events. From intimate workshops
            to massive festivals — Sansaar is the universe that connects them all.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="relative w-full sm:w-[420px] group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/80 group-focus-within:text-accent transition-colors" />
              <input
                type="text"
                placeholder="Search events, venues, communities..."
                className="w-full h-13 pl-12 pr-5 rounded-2xl bg-background/90 backdrop-blur-md border border-border/50 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 font-body text-sm shadow-elevated transition-all"
              />
            </div>
            <Button variant="hero" size="lg" className="h-13 px-8 rounded-2xl">
              Explore Events
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center gap-8 md:gap-20 mt-20"
          >
            {[
              { value: "50K+", label: "Events Hosted" },
              { value: "2M+", label: "Attendees" },
              { value: "10K+", label: "Organizers" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.15 }}
                className="text-center"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight">{stat.value}</div>
                <div className="text-xs md:text-sm text-primary-foreground/50 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/40 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-primary-foreground/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-primary-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
