import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/data/pgData";

const PGFAQSection = () => (
  <div>
    <h2 className="text-xl font-heading font-bold text-secondary mb-4">Frequently Asked Questions</h2>
    <Accordion type="single" collapsible className="w-full">
      {FAQ_ITEMS.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`}>
          <AccordionTrigger className="text-left text-sm">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default PGFAQSection;
