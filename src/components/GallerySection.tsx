import heroImg from "@/assets/hero-salon.jpg";
import bridalImg from "@/assets/bridal-makeup.jpg";
import academyImg from "@/assets/academy-class.jpg";
import hairImg from "@/assets/hair-styling.jpg";
import manicureImg from "@/assets/manicure.jpg";
import threadingImg from "@/assets/threading.jpg";
import partyImg from "@/assets/party-makeup.jpg";
import skinImg from "@/assets/skincare-result.jpg";
import { motion } from "framer-motion";

const images = [
  { src: bridalImg, alt: "Bridal makeup transformation at Beauty Friendly salon Trichy", span: "col-span-2 row-span-2" },
  { src: hairImg, alt: "Hair styling service beauty parlour McDonalds Road Trichy", span: "" },
  { src: partyImg, alt: "Party makeup look at Beauty Friendly Cantonment Trichy", span: "" },
  { src: academyImg, alt: "Beautician course training class at Beauty Friendly Academy Trichy", span: "col-span-2" },
  { src: skinImg, alt: "Glowing skin result after facial treatment Trichy", span: "" },
  { src: manicureImg, alt: "Manicure nail care service Beauty Friendly Trichy", span: "" },
  { src: heroImg, alt: "Beauty Friendly Salon interior warm welcoming atmosphere Trichy", span: "col-span-2" },
  { src: threadingImg, alt: "Expert eyebrow threading service Trichy beauty parlour", span: "" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Gallery of Transformations
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-xl group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
