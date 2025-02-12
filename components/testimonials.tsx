import { FadeIn } from './fade-in'

export function Testimonials() {
   const testimonials = [
      {
         name: 'Alex Thompson',
         role: 'Student',
         content:
            'The learning center has transformed my educational journey. The personalized attention is incredible.',
      },
      {
         name: 'Sarah Chen',
         role: 'Parent',
         content:
            'My children have shown remarkable improvement since joining. The teachers are exceptional.',
      },
      {
         name: 'Michael Roberts',
         role: 'Student',
         content:
            'The flexible schedule and expert instruction helped me achieve my academic goals.',
      },
   ]

   return (
      <section id="testimonials" className="py-16 md:py-24">
         <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <FadeIn>
               <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl md:text-5xl">
                  What Our Students Say
               </h2>
               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {testimonials.map((testimonial, index) => (
                     <div key={index} className="rounded-lg border bg-card p-6">
                        <p className="mb-4 text-muted-foreground">
                           {testimonial.content}
                        </p>
                        <div>
                           <p className="font-semibold">{testimonial.name}</p>
                           <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>
         </div>
      </section>
   )
}
