import CarouselDataTable from './data-table'
import { createClient } from '@/utils/supabase/server'

export default async function CarouselManagement() {
   const supabase = await createClient()
   const { data: carouselItems } = await supabase.from('carousel').select('*')
   return (
      <div>
         <h3 className="text-xl font-bold mb-4">Carousel Management</h3>
         <CarouselDataTable items={carouselItems} />
      </div>
   )
}
