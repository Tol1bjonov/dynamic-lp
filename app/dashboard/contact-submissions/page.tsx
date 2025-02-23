import { createClient } from '@/utils/supabase/server'
import ContactSubmissionsDataTable from './data-table'

export default async function ContactFormManagement() {
   const supabase = await createClient()
   const { data, error } = await supabase
      .from('contact_form_submissions')
      .select('*')
      .order('created_at', { ascending: true })
   if (error) {
      console.error('Error fetching contact form submissions', error)
   }
   return (
      <div>
         <h3 className="text-lg font-bold mb-4">
            Contact Submissions Management
         </h3>
         <ContactSubmissionsDataTable items={data} />
      </div>
   )
}
