import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FadeIn } from '../components/fade-in'

export function ContactForm() {
   return (
      <section id="contact" className="py-16 md:py-24">
         <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto max-w-[600px]">
               <FadeIn>
                  <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl md:text-5xl">
                     Contact Us
                  </h2>
                  <form className="space-y-4">
                     <div>
                        <Input placeholder="Your name" />
                     </div>
                     <div>
                        <Input type="email" placeholder="Your email" />
                     </div>
                     <div>
                        <Textarea
                           placeholder="Your message"
                           className="min-h-[150px]"
                        />
                     </div>
                     <Button className="w-full">Send Message</Button>
                  </form>
               </FadeIn>
            </div>
         </div>
      </section>
   )
}
