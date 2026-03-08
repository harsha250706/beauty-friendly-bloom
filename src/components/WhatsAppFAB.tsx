import { MessageCircle } from "lucide-react";

const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/917041545865?text=Hi%20Beauty%20Friendly!%20I%20would%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp to book appointment"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-float"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppFAB;
