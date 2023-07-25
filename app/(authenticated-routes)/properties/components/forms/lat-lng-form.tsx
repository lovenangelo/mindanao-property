import { useState } from "react"

import GMap from "../maps/google-map-lat-lng"
import NavButtons from "./components/nav-button"

export default function LatLngForm() {
  const [showError, setShowError] = useState(false)
  return (
    <div className="w-full h-full flex flex-col space-y-2">
      <h1>Please point the location of the property on the map</h1>
      {showError && <p className="text-destructive">Please put lat lng</p>}
      <div className="w-full h-full">
        <GMap setShowError={setShowError} />
      </div>
      <NavButtons />
    </div>
  )
}
