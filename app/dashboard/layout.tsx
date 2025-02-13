'use client'

import { AppSidebar } from '@/components/app-sidebar'
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
   SidebarInset,
   SidebarProvider,
   SidebarTrigger,
} from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import React from 'react'

type LayoutProps = {
   children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
   const pathname = usePathname()

   const breadcrumbs = pathname
      .split('/')
      .filter(Boolean)
      .map((segment) => ({
         href: `/${pathname
            .split('/')
            .slice(1, pathname.split('/').indexOf(segment) + 1)
            .join('/')}`,
         label: segment
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
      }))
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
                  <Breadcrumb>
                     <BreadcrumbList>
                        {breadcrumbs.map((crumb, index) => (
                           <React.Fragment key={crumb.href}>
                              <BreadcrumbItem className="hidden md:block">
                                 {index === breadcrumbs.length - 1 ? (
                                    <BreadcrumbPage>
                                       {crumb.label}
                                    </BreadcrumbPage>
                                 ) : (
                                    <BreadcrumbLink href={crumb.href}>
                                       {crumb.label}
                                    </BreadcrumbLink>
                                 )}
                              </BreadcrumbItem>
                              {index < breadcrumbs.length - 1 && (
                                 <BreadcrumbSeparator className="hidden md:block" />
                              )}
                           </React.Fragment>
                        ))}
                     </BreadcrumbList>
                  </Breadcrumb>
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
