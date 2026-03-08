import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya S.",
    text: "Seetha Mam's guidance prepared me for my own salon! The business mentoring was invaluable. Best academy in Trichy!",
    service: "Academy Graduate",
  },
  {
    name: "Kavitha R.",
    text: "Ashwini Akka's skin peeling was magical. My skin has never looked this good. I keep coming back every month!",
    service: "Facial & Skin Care",
  },
  {
    name: "Deepa M.",
    text: "My bridal makeup was exactly what I dreamed of. Everyone at the wedding couldn't stop complimenting me!",
    service: "Bridal Makeup",
  },
  {
    name: "Revathi K.",
    text: "I was nervous about starting a beauty course at 35. Seetha Mam made me feel so comfortable and confident!",
    service: "Academy Student",
  },
  {
    name: "Anitha V.",
    text: "The friendliest salon in Cantonment! Unlike big salons, here they actually listen to what you want.",
    service: "Regular Client",
  },
  {
    name: "Meena B.",
    text: "Home service for my mother's birthday was such a thoughtful experience. Professional and on time!",
    service: "Home Service",
  },
  {
    name: "Sangeetha L.",
    text: "Best threading in Trichy, hands down. Quick, clean, and Ashwini is so gentle. ₹80 well spent!",
    service: "Threading",
  },
  {
    name: "Nandhini P.",
    text: "Completed my 6-month diploma and now earning well. Thank you Seetha Mam for believing in me!",
    service: "Academy Graduate",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Client Love</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mt-3">534 happy reviews and counting on JustDial</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background rounded-2xl p-5 shadow-soft hover:shadow-card transition-shadow duration-300 flex flex-col"
            >
              <Quote className="w-6 h-6 text-accent/40 mb-3" />
              <p className="text-sm text-foreground/80 leading-relaxed flex-1 italic">
                "{t.text}"
              </p>
              <div className="mt-4 pt-3 border-t border-border">
                <div className="flex mb-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-bold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
