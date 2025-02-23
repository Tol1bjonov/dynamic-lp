'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FadeIn } from './fade-in'
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
const formSchema = z.object({
   name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
   email: z.string().email({ message: 'Invalid email address.' }),
   message: z
      .string()
      .min(10, { message: 'Message must be at least 10 characters.' }),
})

export type ContactFormValues = z.infer<typeof formSchema>

type ContactFormProps = {
   onSubmit: (values: ContactFormValues) => void
   submitted: boolean
}

export function ContactForm({ onSubmit, submitted }: ContactFormProps) {
   const form = useForm<ContactFormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: '',
         email: '',
         message: '',
      },
   })

   return (
      <section id="contact" className="py-16 md:py-24">
         <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[600px]">
               <FadeIn>
                  <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl md:text-5xl">
                     Contact Us
                  </h2>
                  {submitted ? (
                     <Card className="max-w-md mx-auto text-center">
                        <CardHeader>
                           <CardTitle>Thank you for contacting us!</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p>We will get back to you as soon as possible.</p>
                        </CardContent>
                     </Card>
                  ) : (
                     <Form {...form}>
                        <form
                           onSubmit={form.handleSubmit(onSubmit)}
                           className="space-y-8"
                        >
                           <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                       <Input
                                          placeholder="Your name"
                                          {...field}
                                       />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                           <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                       <Input
                                          type="email"
                                          placeholder="Your email"
                                          {...field}
                                       />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                           <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                       <Textarea
                                          placeholder="Your message"
                                          className="min-h-[150px]"
                                          {...field}
                                       />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                           <Button type="submit" className="w-full">
                              Send Message
                           </Button>
                        </form>
                     </Form>
                  )}
               </FadeIn>
            </div>
         </div>
      </section>
   )
}
