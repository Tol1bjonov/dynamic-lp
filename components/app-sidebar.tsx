'use client'

import * as React from 'react'
import {
   AudioWaveform,
   Command,
   GalleryVerticalEnd,
   SquareTerminal,
} from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import { TeamSwitcher } from '@/components/team-switcher'
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarRail,
} from '@/components/ui/sidebar'

// This is sample data.
const data = {
   teams: [
      {
         name: 'Learning Center',
         logo: GalleryVerticalEnd,
         plan: 'Dashboard',
      },
      {
         name: 'Acme Corp.',
         logo: AudioWaveform,
         plan: 'Startup',
      },
      {
         name: 'Evil Corp.',
         logo: Command,
         plan: 'Free',
      },
   ],
   navMain: [
      {
         title: 'Dashboard Management',
         url: '#',
         icon: SquareTerminal,
         isActive: true,
         items: [
            {
               title: 'Navbar',
               url: '/dashboard/navbar',
            },
            {
               title: 'Hero',
               url: '/dashboard/hero',
            },
            {
               title: 'About Us',
               url: '/dashboard/about-us',
            },
            {
               title: 'Feautures',
               url: '/dashboard/features',
            },
            {
               title: 'Testimonials',
               url: '/dashboard/testimonials',
            },
            {
               title: 'FAQs',
               url: '/dashboard/faqs',
            },
            {
               title: 'Contact submissions',
               url: '/dashboard/contact-submissions',
            },
            {
               title: 'Footer',
               url: '/dashboard/footer',
            },
         ],
      },
   ],
}

type AppSidebarProps = { email?: string } & React.ComponentProps<typeof Sidebar>

export function AppSidebar({ email, ...props }: AppSidebarProps) {
   return (
      <Sidebar collapsible="icon" {...props}>
         <SidebarHeader>
            <TeamSwitcher teams={data.teams} />
         </SidebarHeader>
         <SidebarContent>
            <NavMain items={data.navMain} />
         </SidebarContent>
         {email && (
            <SidebarFooter>
               <NavUser email={email} />
            </SidebarFooter>
         )}
         <SidebarRail />
      </Sidebar>
   )
}
