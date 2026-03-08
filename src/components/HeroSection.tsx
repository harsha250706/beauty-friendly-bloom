import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-salon.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Beauty Friendly Salon Academy Trichy - warm welcoming salon interior with beautician and happy client"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="container relative z-10 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-primary-foreground text-sm font-medium">
              4.8 Stars · 534 Reviews
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-4">
            Trichy's Most Trusted Salon & Beauty Academy
          </h1>

          <p className="flex items-center gap-1.5 text-primary-foreground/80 text-sm mb-2">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            McDonalds Road, Cantonment, Trichy
          </p>

          <p className="text-primary-foreground/90 text-base md:text-lg mb-8 max-w-xl">
            Hair · Skin · Bridal Makeup · Government-Recognized Diploma Courses.
            Where every woman leaves transformed and every student leaves equipped.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/917041545865?text=Hi%20Beauty%20Friendly!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="lg" className="w-full sm:w-auto">
                📱 Book on WhatsApp
              </Button>
            </a>
            <a href="#academy">
              <Button variant="hero-outline" className="w-full sm:w-auto">
                Academy Enquiry →
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
