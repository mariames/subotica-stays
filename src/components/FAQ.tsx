import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I book an apartment?", a: "Browse our listings and call the phone number next to the apartment photo to check availability and book your stay." },
  { q: "What is the cancellation policy?", a: "If you need to cancel your reservation, we kindly ask that you inform us as soon as possible so we can offer the apartment available for other guests." },
  { q: "Are utilities included in the price?", a: "Yes, all utility costs including water, electricity, heating, and WiFi are included in the nightly rate." },
  { q: "Is there a minimum stay?", a: "The minimum stay for our apartments is 1 night." },
  { q: "Do I need a visa to visit Serbia?", a: "Many nationalities can enter Serbia visa-free for up to 90 days. Check with your local Serbian embassy for specific requirements." },
];

const FAQ = () => (
  <section className="py-20" aria-labelledby="faq-heading">
    <div className="container max-w-3xl">
      <h2 id="faq-heading" className="text-center text-3xl text-foreground md:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-2 text-center text-muted-foreground font-body">
        Everything you need to know about staying with us
      </p>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="font-body text-left text-base font-medium">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
