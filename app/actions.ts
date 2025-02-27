'use server'

import { ContactFormValues } from '@/components/contact-form'
import { createClient } from '@/utils/supabase/server'

export async function sendEmail(values: ContactFormValues) {
   const supabase = await createClient()
   const { error } = await supabase
      .from('contact_form_submissions')
      .insert(values)

   if (error) {
      console.error(
         'Error inserting into contact_form_submission:',
         error.message
      )
      return { success: false, error: error.message }
   }

   return { success: true }
}
