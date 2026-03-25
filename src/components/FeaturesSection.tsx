import { motion } from "framer-motion";
import { Calendar, Users, BarChart3, Zap, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Event Lifecycle Management",
    description: "From concept to curtain call — create, schedule, publish, and manage every event detail in one place.",
    gradient: "from-blue-500/10 to-blue-500/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Community Ecosystem",
    description: "Build lasting communities around your events. Engage attendees before, during, and after each experience.",
    gradient: "from-emerald/10 to-emerald/5",
    iconBg: "bg-emerald/10",
    iconColor: "text-emerald",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track attendance, revenue, engagement, and more with powerful dashboards and actionable insights.",
    gradient: "from-violet/10 to-violet/5",
    iconBg: "bg-violet/10",
    iconColor: "text-violet",
  },
  {
    icon: Zap,
    title: "Smart Registration",
    description: "Dynamic ticketing, automated waitlists, and seamless payment processing for a frictionless experience.",
    gradient: "from-accent/10 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-28 bg-warm-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-40" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4"
          >
            Platform Features
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 tracking-tight">
            Built for the Entire
            <br />
            <span className="text-gradient">Event Universe</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Every tool organizers and attendees need — unified in one powerful platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/40 hover:-translate-y-1 bg-gradient-to-br ${feature.gradient} relative overflow-hidden`}>
                {/* Hover glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="font-heading font-bold text-xl text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
