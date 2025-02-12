import { FadeIn } from './fade-in'

export function Features() {
   const features = [
      {
         title: 'Small Class Sizes',
         description: 'Personalized attention for every student',
      },
      {
         title: 'Expert Teachers',
         description: 'Learn from experienced professionals',
      },
      {
         title: 'Modern Facilities',
         description: 'State-of-the-art learning environment',
      },
      {
         title: 'Flexible Schedule',
         description: 'Classes that fit your timeline',
      },
      {
         title: 'Hands-on Learning',
         description: 'Practice-based education approach',
      },
      {
         title: 'Career Support',
         description: 'Guidance for your future success',
      },
   ]

   return (
      <section id="features" className="py-16 md:py-24 bg-muted/50 ">
         <div className="container px-4 md:px-6 mx-auto ">
            <FadeIn>
               <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl md:text-5xl">
                  Our Features
               </h2>
               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature, index) => (
                     <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-shadow"
                     >
                        <h3 className="text-xl font-bold mb-2">
                           {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                           {feature.description}
                        </p>
                     </div>
                  ))}
               </div>
            </FadeIn>
         </div>
      </section>
   )
}
