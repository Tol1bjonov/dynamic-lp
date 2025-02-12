export function Footer() {
   return (
      <footer className="border-t py-6 md:py-0 bg-muted/150">
         <div className="container flex flex-col gap-4 py-6 md:h-24 md:flex-row md:items-center md:justify-between md:py-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
               © 2025 Learning Center. All rights reserved.
            </p>
            <div className="flex justify-center gap-4">
               <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
               >
                  Privacy Policy
               </a>
               <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
               >
                  Terms of Service
               </a>
            </div>
         </div>
      </footer>
   )
}
