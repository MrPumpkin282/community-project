import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQAccordion({ faqs = [], title = 'Frequently Asked Practical Questions' }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg bg-navy-100 text-navy-700 flex items-center justify-center">
          <HelpCircle className="w-4 h-4" />
        </div>
        <h2 className="text-2xl font-bold text-navy-800">{title}</h2>
      </div>

      <Accordion type="single" collapsible defaultValue="faq-0" className="w-full space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-xl border border-gray-200 bg-white px-4 sm:px-5 data-[state=open]:border-navy-300 data-[state=open]:shadow-sm transition-all"
          >
            <AccordionTrigger className="text-sm sm:text-base font-semibold text-navy-800 hover:no-underline py-4">
              <span>{faq.q}</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-sm leading-relaxed pt-1 pb-4">
              <p>{faq.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
