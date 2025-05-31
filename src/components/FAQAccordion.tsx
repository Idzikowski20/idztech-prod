import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTheme } from '@/utils/themeContext';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, title, className }) => {
  const { theme } = useTheme();
  return (
    <section className={`py-20 relative overflow-hidden ${className || ''}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {title && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">{title}</h2>
          </div>
        )}
        <div className="grid grid-cols-1 justify-center">
          <div className="space-y-4 w-full max-w-[50rem] mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`${theme === 'light' ? 'border-gray-300' : 'border-white/10'}`}
                >
                  <AccordionTrigger
                    className={`text-xl font-medium py-4 hover:no-underline hover:text-premium-purple text-left ${theme === 'light' ? 'text-black' : 'text-white'}`}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className={`${theme === 'light' ? 'text-premium-dark' : 'text-premium-light/70'} accordion-content`}>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion; 