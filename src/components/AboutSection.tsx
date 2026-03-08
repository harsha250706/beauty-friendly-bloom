import { Award, Users, Home, ShieldCheck } from "lucide-react";
import academyImg from "@/assets/academy-class.jpg";
import { motion } from "framer-motion";

const badges = [
  { icon: Award, label: "6+ Years", sub: "of Excellence" },
  { icon: ShieldCheck, label: "Govt Recognized", sub: "Academy" },
  { icon: Users, label: "534 Reviews", sub: "4.8 Star Rating" },
  { icon: Home, label: "Home Service", sub: "Available" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              More Than a Salon — <br />
              <span className="text-primary">A Family of Beauty</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded by <strong className="text-foreground">Seetha Lakshmi Mam</strong>, Beauty Friendly began as a small dream on McDonalds Road, Cantonment. Over 6 years, it has grown into Trichy's most loved salon and government-recognized beautician academy — all through word of mouth from happy clients.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Seetha Mam is known for her patient teaching style and real-world business mentoring. Our star team member <strong className="text-foreground">Ashwini</strong> brings warmth and skill to every service. Here, you're never just a client — you're family.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">{badge.label}</p>
                    <p className="text-xs text-muted-foreground">{badge.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={academyImg}
              alt="Beauty academy training class at Beauty Friendly Trichy - students learning makeup techniques"
              className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-primary-foreground rounded-xl p-4 shadow-gold">
              <p className="font-heading text-2xl font-bold">6+</p>
              <p className="text-xs font-medium">Years Trusted</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
