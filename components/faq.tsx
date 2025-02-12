import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion'
import { FadeIn } from './fade-in'

export function FAQ() {
   return (
      <section className="py-16 md:py-24 bg-muted/100" id="faq">
         <div className="container px-4 md:px-6 mx-auto">
            <FadeIn>
               <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
               </h2>
               <div className="mx-auto max-w-[800px]">
                  <Accordion type="single" collapsible>
                     <AccordionItem value="item-1">
                        <AccordionTrigger>
                           What are your class sizes?
                        </AccordionTrigger>
                        <AccordionContent>
                           Our classes typically have 8-12 students to ensure
                           personalized attention and optimal learning
                           conditions.
                        </AccordionContent>
                     </AccordionItem>
                     <AccordionItem value="item-2">
                        <AccordionTrigger>How do I enroll?</AccordionTrigger>
                        <AccordionContent>
                           You can enroll by filling out our contact form below
                           or visiting our center during business hours.
                        </AccordionContent>
                     </AccordionItem>
                     <AccordionItem value="item-3">
                        <AccordionTrigger>
                           What subjects do you offer?
                        </AccordionTrigger>
                        <AccordionContent>
                           We offer a wide range of subjects including
                           Mathematics, Sciences, Languages, and Test
                           Preparation.
                        </AccordionContent>
                     </AccordionItem>
                  </Accordion>
               </div>
            </FadeIn>
         </div>
      </section>
   )
}
