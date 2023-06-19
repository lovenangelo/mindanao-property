import { Input } from "@/components/ui/input"

import GMap from "./components/google-map"

export default function PropertiesPage() {
  return (
    <div>
      <Input placeholder="Search..." />
      <div className="w-full h-full">
        <GMap />
      </div>
    </div>
  )
}
