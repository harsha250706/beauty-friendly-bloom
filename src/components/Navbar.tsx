import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Academy", href: "#academy" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container flex items-center justify-between h-16 md:h-18">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-heading text-xl md:text-2xl font-bold text-primary">
            Beauty Friendly
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/917041545865?text=Hi%20Beauty%20Friendly!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm">
              <Phone className="w-3.5 h-3.5" />
              Book Now
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/917041545865?text=Hi%20Beauty%20Friendly!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="w-full mt-2">
                <Phone className="w-4 h-4" />
                Book Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
