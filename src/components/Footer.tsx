import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-foreground/95" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20 border-b border-primary-foreground/8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                <span className="text-accent-foreground font-heading font-bold text-sm">S</span>
              </div>
              <span className="font-heading font-bold text-xl text-primary-foreground">Sansaar</span>
            </div>
            <p className="text-primary-foreground/40 text-sm leading-relaxed max-w-xs">
              The Event Universe — connecting people through extraordinary experiences across India.
            </p>
          </div>

          {[
            { title: "Platform", links: ["Discover Events", "For Organizers", "Pricing", "API Docs"] },
            { title: "Company", links: ["About Us", "Careers", "Blog", "Press Kit"] },
            { title: "Support", links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-primary-foreground text-sm uppercase tracking-wider mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © 2026 Sansaar. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <Link key={social} to="/" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
