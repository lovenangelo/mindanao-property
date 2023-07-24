import { useAppDispatch } from "@/redux/hooks"
import { changeFormSection } from "@/redux/slices/properties-form-slice"

import { Button } from "@/components/ui/button"

import GMap from "../maps/google-map-lat-lng"

export default function LatLngForm() {
  const dispatch = useAppDispatch()
  return (
    <div className="w-full h-full flex flex-col space-y-2">
      <h1>Please point the location of the property on the map</h1>
      <div className="w-full h-full">
        <GMap />
      </div>
      <div className="w-full flex justify-end">
        <Button
          onClick={() => {
            dispatch(changeFormSection({ value: "property-details" }))
          }}
          className="w-24"
          type="submit"
        >
          Next
        </Button>
      </div>
    </div>
  )
}
