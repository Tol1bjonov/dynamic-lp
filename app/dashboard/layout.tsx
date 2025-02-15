import { AppSidebar } from '@/components/app-sidebar'

import { Separator } from '@/components/ui/separator'
import {
   SidebarInset,
   SidebarProvider,
   SidebarTrigger,
} from '@/components/ui/sidebar'
import React from 'react'
import Breadcrumbs from '@/components/breadcrumbs'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

type LayoutProps = {
   children: React.ReactNode
}

export default async function Layout({ children }: LayoutProps) {
   const supabase = await createClient()

   const { data, error } = await supabase.auth.getUser()
   if (!data || error) {
      redirect('/login')
   }
   //bu joyda breadcrumblar dynamic qilingan, admin panelga utganda tepadan shu joygacha kelgan path kurinadi
   //masalan: dashboard va agar biz footer tanlasak footer paydo buladi, about tanlasak about buladi !!
   return (
      <SidebarProvider>
         <AppSidebar />
         <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
               <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumbs />
               </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
               {children}
               <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
            </div>
         </SidebarInset>
      </SidebarProvider>
   )
}
