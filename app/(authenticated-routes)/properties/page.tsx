import { Input } from "@/components/ui/input"

import GMap from "./components/google-map"

export default function PropertiesPage() {
  return (
    <div>
      <Input placeholder="Search" />
      <div>
        <GMap />
      </div>
    </div>
  )
}
