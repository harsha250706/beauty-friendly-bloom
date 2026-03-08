import { useState } from "react";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Beauty Friendly! I'm ${form.name}.%0APhone: ${form.phone}%0AService: ${form.service}%0ADate: ${form.date}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/917041545865?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Visit Us or Book Now
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Address</p>
                  <p className="text-muted-foreground text-sm">F3, 1st Floor, Green House Apartment, McDonalds Road, Near Arun Hotel, Cantonment, Trichy 620001</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Phone / WhatsApp</p>
                  <a href="tel:+917041545865" className="text-primary text-sm hover:underline">+91 70415 45865</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Hours</p>
                  <p className="text-muted-foreground text-sm">Open Daily: 10:00 AM – 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Instagram</p>
                  <a href="https://instagram.com/beautyfriendlytrichy" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">@beautyfriendlytrichy</a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden shadow-soft">
              <iframe
                title="Beauty Friendly Salon Academy Trichy Location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0!2d78.6953!3d10.8155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMcDonalds+Road+Cantonment+Trichy!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Lead form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-6 md:p-8 shadow-card space-y-4" id="academy">
              <h3 className="font-heading text-xl font-bold text-foreground">Book Appointment / Academy Enquiry</h3>
              <p className="text-sm text-muted-foreground">Fill the form and we'll reach you on WhatsApp instantly.</p>

              <input
                type="text"
                placeholder="Your Name *"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                maxLength={15}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="">Select Service / Course</option>
                <option value="Hair Care">Hair Care & Styling</option>
                <option value="Skin & Facials">Skin & Facials</option>
                <option value="Bridal Makeup">Bridal / Party Makeup</option>
                <option value="Waxing & Threading">Waxing & Threading</option>
                <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                <option value="Academy Diploma">Academy Diploma Course</option>
                <option value="Home Service">Home Service</option>
              </select>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <textarea
                placeholder="Your Message (optional)"
                maxLength={500}
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
              <Button type="submit" variant="default" size="lg" className="w-full">
                Send via WhatsApp →
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
