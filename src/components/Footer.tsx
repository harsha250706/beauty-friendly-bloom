import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-heading text-lg font-bold mb-3">Beauty Friendly</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Trichy's most trusted salon and government-recognized beautician academy on McDonalds Road, Cantonment.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
              <li><a href="#academy" className="hover:text-primary-foreground transition-colors">Academy Courses</a></li>
              <li><a href="#gallery" className="hover:text-primary-foreground transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-3">Connect</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="tel:+917041545865" className="hover:text-primary-foreground transition-colors">+91 70415 45865</a></li>
              <li><a href="https://instagram.com/beautyfriendlytrichy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">@beautyfriendlytrichy</a></li>
              <li><a href="https://wa.me/917041545865" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 fill-accent text-accent" /> Beauty Friendly Salon Academy © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
