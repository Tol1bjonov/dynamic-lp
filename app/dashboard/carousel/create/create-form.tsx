'use client'
import { useRouter } from 'next/navigation'
import CarouselForm from '../form'
import { CarouselFormValues } from '../form'
import { createCarouselItem } from './axtions'
import { toast } from '@/hooks/use-toast'

export default function CreateForm() {
   const router = useRouter()
   const handleCreate = async (values: CarouselFormValues) => {
      const result = await createCarouselItem(values)
      if (result.success) {
         toast({
            title: 'Carousel item created',
            description: 'The carousel item has been created successfully',
         })
         router.push('/dashboard/carousel')
      } else {
         toast({
            variant: 'destructive',
            title: 'Error occured',
            description: result.error,
         })
      }
   }
   return <CarouselForm onSubmit={handleCreate} />
}
