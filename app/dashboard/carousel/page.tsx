import CarouselDataTable from './data-table'
import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'

export default async function CarouselManagement() {
   const supabase = await createClient()
   const { data: carouselItems } = await supabase.from('carousel').select('*')
   return (
      <div>
         <div className="mb-4 flex justify-between items-center">
            <h3 className="text-xl font-bold ">Carousel Management</h3>
            <Link href="/dashboard/carousel/create">
               <Button>
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add Carousel
               </Button>
            </Link>
         </div>
         <CarouselDataTable items={carouselItems} />
      </div>
   )
}
