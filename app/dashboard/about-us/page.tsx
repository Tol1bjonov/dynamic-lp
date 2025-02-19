import AboutForm from './form'
import { createClient } from '@/utils/supabase/server'

export default async function AboutUsManagement() {
   const supabase = await createClient()
   const { data: aboutUs } = await supabase.from('about_us').select().single()
   console.log(aboutUs)
   return <AboutForm aboutUs={aboutUs} />
}
