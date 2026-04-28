import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What are your opening hours?",
    answer: "We are open 7 days a week, from 8 AM to 10 PM. Stop by for fresh pastries in the morning or a delicious sub for dinner!"
  },
  {
    question: "Do you offer vegetarian and vegan options?",
    answer: "Absolutely! We have a dedicated section of our menu for both vegetarian and vegan subs, as well as several dairy-free baked goods."
  },
  {
    question: "Can I place a custom order for an event?",
    answer: "Yes, we cater to all sizes of events! Whether it's a corporate lunch with our sub platters or a custom birthday cake, please contact us at least 48 hours in advance."
  },
  {
    question: "Do you offer delivery?",
    answer: "Yes, we deliver within a 5-mile radius of our Jalandhar location. You can order directly through our website or via popular delivery apps."
  },
  {
    question: "Are your ingredients locally sourced?",
    answer: "We pride ourselves on using fresh, locally sourced ingredients from Punjab farms whenever possible, ensuring the highest quality and supporting our local community."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 px-4 bg-background relative z-30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-primary mb-6">
            <HelpCircle className="h-10 w-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Frequently Asked Questions</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
          <p className="text-muted-foreground text-xl mt-6">Got questions? We've got answers.</p>
        </div>
        
        <div className="bg-card/50 backdrop-blur-md p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10 px-2 last:border-0">
                <AccordionTrigger className="text-left text-xl font-headline font-semibold hover:text-primary transition-colors py-6 data-[state=open]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
