'use client'
import { ContactForm } from '@/components/contact-form'
import { ContactFormValues } from '@/components/contact-form'
import { sendEmail } from './actions'
import { toast } from '@/hooks/use-toast'
import { useState } from 'react'
export function Contact() {
   const [submitted, setSubmitted] = useState(false)
   const handleSubmit = async (values: ContactFormValues) => {
      const { success, error } = await sendEmail(values)
      if (success) {
         toast({
            title: 'Email sent successfully',
            description: 'Thank you for contacting us!',
         })
         setSubmitted(true)
      } else {
         toast({
            title: 'Error sending email',
            description: error,
            variant: 'destructive',
         })
      }
   }
   return <ContactForm onSubmit={handleSubmit} submitted={submitted} />
}
