import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  category: string;
  attendees: number;
  price: string;
  index: number;
}

const categoryColors: Record<string, string> = {
  Conference: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  Music: "bg-violet/10 text-violet border-violet/20",
  Workshop: "bg-emerald/10 text-emerald border-emerald/20",
  Gala: "bg-gold/10 text-gold border-gold/20",
  Sports: "bg-accent/10 text-accent border-accent/20",
  Art: "bg-purple-500/10 text-purple-600 border-purple-500/20",
};

const EventCard = ({ id, title, date, location, image, category, attendees, price, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/event/${id}`} className="group block">
        <div className="bg-card rounded-2xl overflow-hidden shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 border border-border/40">
          <div className="relative h-56 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute top-4 left-4">
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border backdrop-blur-sm ${categoryColors[category] || "bg-accent/10 text-accent border-accent/20"}`}>
                {category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-card/90 backdrop-blur-md text-foreground text-sm font-heading font-bold px-3.5 py-1.5 rounded-full shadow-sm">
                {price}
              </span>
            </div>
            {/* Hover arrow */}
            <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-glow">
              <ArrowUpRight className="h-4 w-4 text-accent-foreground" />
            </div>
          </div>

          <div className="p-5">
            <h3 className="font-heading font-bold text-lg text-card-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="h-3.5 w-3.5 shrink-0 text-accent/60" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-accent/60" />
                <span className="truncate">{location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Users className="h-3.5 w-3.5 shrink-0 text-accent/60" />
                <span>{attendees.toLocaleString()} attending</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
