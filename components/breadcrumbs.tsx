'use client'

import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { usePathname } from 'next/navigation'
import React from 'react'

function generateBreadcrumbs(pathname: string) {
   return pathname
      .split('/')
      .filter(Boolean)
      .map((segment: string) => ({
         href: `/${pathname
            .split('/')
            .slice(1, pathname.split('/').indexOf(segment) + 1)
            .join('/')}`,
         label: segment
            .split('-')
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
      }))
}

export default function Breadcrumbs() {
   const pathname = usePathname()
   const breadcrumbs = generateBreadcrumbs(pathname)
   return (
      <Breadcrumb>
         <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
               <React.Fragment key={crumb.href}>
                  <BreadcrumbItem className="hidden md:block">
                     {index === breadcrumbs.length - 1 ? (
                        <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
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
   )
}
