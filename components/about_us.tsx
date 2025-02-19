import { FadeIn } from './fade-in'
import Image from 'next/image'
import { AboutUs as AboutUsType } from '@/shared/types/about-us.type'

type AboutUsProps = {
   aboutUs: AboutUsType
}

export function AboutUs({ aboutUs }: AboutUsProps) {
   return (
      <section className="mx-auto w-full max-w-7xl px-4 py-16">
         <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeIn>
               <Image
                  src={aboutUs.image_url}
                  alt="About Us"
                  width={400}
                  height={400}
               />
            </FadeIn>
            <FadeIn>
               <div>
                  <h2 className="text-2xl font-bold mb-2">{aboutUs.title}</h2>
                  <p className="text-gray-600">{aboutUs.description}</p>
               </div>
            </FadeIn>
         </div>
      </section>
   )
}
