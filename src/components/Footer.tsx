import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-sm">S</span>
              </div>
              <span className="font-heading font-bold text-xl text-background">Sansaar</span>
            </div>
            <p className="text-background/50 text-sm leading-relaxed">
              The Event Universe — connecting people through extraordinary experiences.
            </p>
          </div>

          {[
            {
              title: "Platform",
              links: ["Discover Events", "For Organizers", "Pricing", "API"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Blog", "Press"],
            },
            {
              title: "Support",
              links: ["Help Center", "Contact", "Privacy", "Terms"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-background mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link to="/" className="text-sm text-background/50 hover:text-background transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/40">
            © 2026 Sansaar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
