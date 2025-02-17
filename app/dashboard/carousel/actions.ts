'use server'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
//bu supabase serverdan id ni topib berilgan qatorni uchiradigann function
export const deleteCarouselItem = async (id: string) => {
   const supabase = await createClient()
   const { error } = await supabase.from('carousel').delete().eq('id', id)
   if (error) {
      return { success: false, error: error.message }
   }
   revalidatePath('/dashboard/carousel')
   return { success: true, message: 'Item deleted successfully' }
}
