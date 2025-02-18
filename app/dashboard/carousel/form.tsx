'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
   Form,
   FormField,
   FormItem,
   FormLabel,
   FormControl,
   FormDescription,
   FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
   title: z.string().min(2).max(100),
   description: z.string().min(30).max(300),
   text: z.string().min(2).max(50),
   cta_link: z.string().min(2).max(50).url(),
})

export type CarouselFormValues = z.infer<typeof formSchema>

type CarouselFormProps = {
   onSubmit: (values: CarouselFormValues) => void
   defaultValues?: CarouselFormValues
   isEdit?: boolean
}

export default function CarouselForm({
   onSubmit,
   defaultValues,
   isEdit,
}: CarouselFormProps) {
   const router = useRouter()
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues,
   })

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
               control={form.control}
               name="title"
               render={({ field }) => (
                  <FormItem className="mt-4">
                     <FormLabel>Title</FormLabel>
                     <FormControl>
                        <Input placeholder="Title" {...field} />
                     </FormControl>
                     <FormDescription>
                        This is the titleof the carousel item.
                     </FormDescription>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="description"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Description</FormLabel>
                     <FormControl>
                        <Input placeholder="Description" {...field} />
                     </FormControl>
                     <FormDescription>
                        This is the description of the carousel item.
                     </FormDescription>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <div className="grid grid-cols-2 gap-4">
               <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Text</FormLabel>
                        <FormControl>
                           <Input placeholder="CTA Text" {...field} />
                        </FormControl>
                        <FormDescription>
                           This is a text of the CTA item.
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="cta_link"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>CTA Link</FormLabel>
                        <FormControl>
                           <Input placeholder="CTA Link" {...field} />
                        </FormControl>
                        <FormDescription>
                           This is a link of the CTA link.
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className="flex justify-end gap-2">
               <Button
                  variant={'outline'}
                  type="button"
                  onClick={() => router.push('/dashboard/carousel')}
               >
                  Cancel
               </Button>
               <Button type="submit">{isEdit ? 'Update' : 'Create'}</Button>
            </div>
         </form>
      </Form>
   )
}
