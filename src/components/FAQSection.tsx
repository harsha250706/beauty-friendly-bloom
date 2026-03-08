import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What are your salon hours?",
    a: "We are open every day from 10:00 AM to 8:00 PM, including weekends and public holidays. Walk-ins are welcome, but WhatsApp booking is recommended for bridal and party makeup.",
  },
  {
    q: "Do you offer home service?",
    a: "Yes! We offer home beauty services for bridal makeup, party makeup, facials, and more across Trichy. Contact us on WhatsApp at 7041545865 to book a home visit.",
  },
  {
    q: "What courses does the academy offer?",
    a: "We offer government-recognized beautician diploma courses ranging from 3 to 12 months (₹15,000 – ₹35,000). Courses include hands-on training in hair, skin, makeup, and business mentoring by Seetha Lakshmi Mam herself.",
  },
  {
    q: "Do I need prior experience to join the academy?",
    a: "Not at all! Our courses are designed for complete beginners. Seetha Mam's patient teaching style ensures every student learns at their own pace. Many of our graduates have gone on to open their own salons.",
  },
  {
    q: "Where is the salon located?",
    a: "We are at F3, 1st Floor, Green House Apartment, McDonalds Road, Near Arun Hotel, Cantonment, Trichy – 620001. Easy to find and just a short walk from Arun Hotel.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Common Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border px-5 shadow-soft"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-sm md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
