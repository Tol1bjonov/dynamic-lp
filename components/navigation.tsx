'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)

   return (
      <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
         <div className="container flex h-16 items-center justify-between mx-auto">
            <div className="text-xl font-semibold">Learning Center</div>
            <div className="md:hidden">
               <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
               >
                  {isMenuOpen ? (
                     <X className="h-6 w-6" />
                  ) : (
                     <Menu className="h-6 w-6" />
                  )}
               </Button>
            </div>
            <div
               className={`${isMenuOpen ? 'absolute top-16 left-0 w-full border-b bg-background p-4 md:static md:block md:w-auto md:border-none md:p-0' : 'hidden md:block'}`}
            >
               <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
                  <a
                     href="#features"
                     className="text-muted-foreground hover:text-foreground"
                  >
                     Features
                  </a>
                  <a
                     href="#testimonials"
                     className="text-muted-foreground hover:text-foreground"
                  >
                     Testimonials
                  </a>
                  <a
                     href="#faq"
                     className="text-muted-foreground hover:text-foreground"
                  >
                     FAQ
                  </a>
                  <a
                     href="#contact"
                     className="text-muted-foreground hover:text-foreground"
                  >
                     Contact
                  </a>
               </div>
            </div>
         </div>
      </nav>
   )
}
