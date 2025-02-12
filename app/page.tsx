import { Button } from '@/components/ui/button'
export default function Home() {
   return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <div className="flex flex-col gap-4">
            {/* Default button */}
            <Button>Default Button</Button>

            {/* Button variants */}
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link Button</Button>

            {/* Button sizes */}
            <Button size="lg">Large Button</Button>
            <Button size="sm">Small Button</Button>

            {/* Disabled state */}
            <Button disabled>Disabled Button</Button>

            {/* With icon */}
            <Button>
               <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
               </svg>
               With Icon
            </Button>

            {/* Loading state */}
            <Button disabled>
               <svg
                  className="mr-2 h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
               >
                  <circle
                     className="opacity-25"
                     cx="12"
                     cy="12"
                     r="10"
                     stroke="currentColor"
                     strokeWidth="4"
                  />
                  <path
                     className="opacity-75"
                     fill="currentColor"
                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
               </svg>
               Loading...
            </Button>
         </div>
      </div>
   )
}
