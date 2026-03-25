import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-2xl border-b border-border/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform duration-300">
            <span className="text-accent-foreground font-heading font-bold text-sm">S</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground tracking-tight">Sansaar</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {["Discover", "For Organizers", "Community"].map((item) => (
            <Link
              key={item}
              to="/"
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/60"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-xl">
            <Search className="h-4 w-4" />
          </Button>
          <Link to="/login">
            <Button variant="ghost" size="sm" className="rounded-lg">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button variant="hero" size="sm" className="rounded-lg gap-1.5">
              Get Started <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden rounded-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-2xl"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {["Discover", "For Organizers", "Community"].map((item) => (
                <Link
                  key={item}
                  to="/"
                  className="text-sm font-medium py-3 px-3 rounded-lg text-muted-foreground hover:bg-secondary/60 hover:text-foreground transition-all"
                >
                  {item}
                </Link>
              ))}
              <div className="flex gap-2 pt-3 mt-2 border-t border-border/50">
                <Link to="/login" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">Sign In</Button>
                </Link>
                <Link to="/signup" className="flex-1">
                  <Button variant="hero" size="sm" className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
