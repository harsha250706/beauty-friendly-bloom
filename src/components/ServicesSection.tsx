import { Scissors, Sparkles, Crown, Hand, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import hairImg from "@/assets/hair-styling.jpg";
import skinImg from "@/assets/skincare-result.jpg";
import bridalImg from "@/assets/bridal-makeup.jpg";
import manicureImg from "@/assets/manicure.jpg";
import threadingImg from "@/assets/threading.jpg";
import academyImg from "@/assets/academy-class.jpg";
import { motion } from "framer-motion";

const services = [
  {
    icon: Scissors,
    title: "Hair Care & Styling",
    price: "₹150 – ₹2,500",
    desc: "Haircuts, blow-dry, straightening, keratin, coloring & more for every occasion.",
    img: hairImg,
    alt: "Professional hair styling service at Beauty Friendly Trichy salon",
  },
  {
    icon: Sparkles,
    title: "Skin & Facials",
    price: "₹80 – ₹1,200",
    desc: "Threading, facials, skin peeling, de-tan & glow treatments for radiant skin.",
    img: skinImg,
    alt: "Skin facial treatment result - glowing skin at Beauty Friendly Trichy",
  },
  {
    icon: Crown,
    title: "Bridal & Party Makeup",
    price: "₹2,000 – ₹10,000",
    desc: "HD bridal makeup, engagement looks, party makeover with saree draping.",
    img: bridalImg,
    alt: "Bridal makeup service at Beauty Friendly salon Cantonment Trichy",
  },
  {
    icon: Hand,
    title: "Manicure & Pedicure",
    price: "₹200 – ₹800",
    desc: "Relaxing hand & foot care with premium products for beautiful nails.",
    img: manicureImg,
    alt: "Manicure pedicure nail care service at Beauty Friendly Trichy",
  },
  {
    icon: Heart,
    title: "Waxing & Threading",
    price: "₹80 – ₹600",
    desc: "Gentle waxing, expert threading & clean-up services in a hygienic setting.",
    img: threadingImg,
    alt: "Eyebrow threading and waxing service beauty parlour McDonalds Road Trichy",
  },
  {
    icon: GraduationCap,
    title: "Beautician Diploma",
    price: "₹15,000 – ₹35,000",
    desc: "3-12 month govt-recognized courses with hands-on training & business mentoring.",
    img: academyImg,
    alt: "Beautician diploma course training at Beauty Friendly Academy Trichy",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Our Services & Courses
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            From everyday grooming to dream bridal looks and career-building courses — all under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-bold text-primary">{service.price}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <service.icon className="w-5 h-5 text-accent" />
                  <h3 className="font-heading font-bold text-foreground text-lg">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://wa.me/917041545865?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="lg">
              Enquire About Services
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
