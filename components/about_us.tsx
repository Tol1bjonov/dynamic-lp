import { FadeIn } from './fade-in'
import Image from 'next/image'
export function AboutUs() {
   return (
      <section className="mx-auto w-full max-w-7xl px-4 py-16">
         <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeIn>
               <Image
                  src="https://placehold.co/400x400/png"
                  alt="About Us"
                  width={400}
                  height={400}
               />
            </FadeIn>
            <FadeIn>
               <div>
                  <h2>About Us</h2>
                  <p>
                     We are dedicated to provide high-quality offline learning
                     experience to our students. Our center combines traditional
                     teaching methods with modern learning approaches to ensure
                     the best possible educational putcomes for our students.
                  </p>
               </div>
            </FadeIn>
         </div>
      </section>
   )
}
