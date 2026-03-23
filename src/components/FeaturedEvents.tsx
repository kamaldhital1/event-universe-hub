import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import EventCard from "./EventCard";
import eventConference from "@/assets/event-conference.jpg";
import eventMusic from "@/assets/event-music.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";
import eventGala from "@/assets/event-gala.jpg";
import eventSports from "@/assets/event-sports.jpg";
import eventArt from "@/assets/event-art.jpg";

const events = [
  {
    id: "1",
    title: "Global Tech Summit 2026",
    date: "Apr 15–17, 2026",
    location: "Bangalore International Centre",
    image: eventConference,
    category: "Conference",
    attendees: 2400,
    price: "₹4,999",
  },
  {
    id: "2",
    title: "Midnight Echoes — Live Music Festival",
    date: "May 3, 2026",
    location: "Sunset Arena, Mumbai",
    image: eventMusic,
    category: "Music",
    attendees: 8500,
    price: "₹1,499",
  },
  {
    id: "3",
    title: "Design Thinking Masterclass",
    date: "Apr 22, 2026",
    location: "WeWork Galaxy, Bangalore",
    image: eventWorkshop,
    category: "Workshop",
    attendees: 120,
    price: "Free",
  },
  {
    id: "4",
    title: "Annual Charity Gala Night",
    date: "Jun 8, 2026",
    location: "The Taj Mahal Palace, Mumbai",
    image: eventGala,
    category: "Gala",
    attendees: 350,
    price: "₹15,000",
  },
  {
    id: "5",
    title: "City Marathon & Fun Run",
    date: "May 18, 2026",
    location: "Marine Drive, Mumbai",
    image: eventSports,
    category: "Sports",
    attendees: 12000,
    price: "₹999",
  },
  {
    id: "6",
    title: "Contemporary Art Exhibition",
    date: "Apr 28 – May 10, 2026",
    location: "National Gallery, New Delhi",
    image: eventArt,
    category: "Art",
    attendees: 680,
    price: "₹299",
  },
];

const categories = ["All", "Conference", "Music", "Workshop", "Gala", "Sports", "Art"];

const FeaturedEvents = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Featured Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Curated experiences across every category — find what moves you.
          </p>
        </motion.div>

        {/* Category pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === "All" ? "hero" : "secondary"}
              size="sm"
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Event grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <EventCard key={event.id} {...event} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero-outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
