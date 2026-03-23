import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
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

const EventCard = ({ id, title, date, location, image, category, attendees, price, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link to={`/event/${id}`} className="group block">
        <div className="bg-card rounded-xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
          <div className="relative h-52 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute top-3 left-3">
              <Badge className="bg-accent text-accent-foreground font-heading text-xs font-semibold">
                {category}
              </Badge>
            </div>
            <div className="absolute top-3 right-3">
              <span className="bg-background/90 backdrop-blur-sm text-foreground text-sm font-heading font-semibold px-3 py-1 rounded-full">
                {price}
              </span>
            </div>
          </div>

          <div className="p-5">
            <h3 className="font-heading font-semibold text-lg text-card-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
              {title}
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="h-4 w-4 shrink-0" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="truncate">{location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Users className="h-4 w-4 shrink-0" />
                <span>{attendees} attending</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
