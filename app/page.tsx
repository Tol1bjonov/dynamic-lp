import { Navigation } from '@/components/navigation'
import { Carousel } from '@/components/carousel'
import { Features } from '@/components/featurest'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { AboutUs } from '@/components/about_us'
export default function Home() {
   return (
      <div className="flex flex-col min-h-[100dvh]">
         <Navigation />
         <main className="flex-1">
            <Carousel />
            <AboutUs />
            <Features />
            <Testimonials />
            <FAQ />
            <ContactForm />
         </main>
         <Footer />
      </div>
   )
}
