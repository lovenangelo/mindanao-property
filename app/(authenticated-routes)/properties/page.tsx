import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

import GMap from "./components/google-map"

export default function PropertiesPage() {
  return (
    <div className="h-full w-full">
      <Input
        className={cn(
          "absolute z-20 left-1/2 mt-4 bg-primary-foreground shadow-lg",
          "w-96"
        )}
        placeholder="Search..."
      />
      <div className="z-10 w-full h-full">
        <GMap />
      </div>
    </div>
  )
}
