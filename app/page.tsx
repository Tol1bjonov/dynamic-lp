import { Navigation } from '@/components/navigation'
import { Carousel } from '@/components/carousel'
import { Features } from '@/components/featurest'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { Contact } from './contact'
import { Footer } from '@/components/footer'
import { AboutUs } from '@/components/about_us'
import { createClient } from '@/utils/supabase/client'

export default async function Home() {
   const supabase = await createClient()
   const { data: aboutUs } = await supabase.from('about_us').select().single()
   const { data: carouselItems } = await supabase.from('carousel').select()
   console.log(carouselItems)
   return (
      <div className="flex flex-col min-h-[100dvh]">
         <Navigation />
         <main className="flex-1">
            {carouselItems && <Carousel items={carouselItems} />}
            <AboutUs aboutUs={aboutUs} />
            <Features />
            <Testimonials />
            <FAQ />
            <Contact />
         </main>
         <Footer />
      </div>
   )
}
