import { motion } from "framer-motion";
import { Calendar, Users, BarChart3, Zap } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Event Lifecycle Management",
    description: "From concept to curtain call — create, schedule, publish, and manage every event detail in one place.",
  },
  {
    icon: Users,
    title: "Community Ecosystem",
    description: "Build lasting communities around your events. Engage attendees before, during, and after each experience.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track attendance, revenue, engagement, and more with powerful dashboards and actionable insights.",
  },
  {
    icon: Zap,
    title: "Smart Registration",
    description: "Dynamic ticketing, automated waitlists, and seamless payment processing for a frictionless experience.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-warm-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built for the Entire Event Universe
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every tool organizers and attendees need — unified in one powerful platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
