import React, { ChangeEvent } from "react"
import useOnclickOutside from "react-cool-onclickoutside"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

const PlacesAutocomplete = ({
  setCenter,
}: {
  setCenter: React.Dispatch<
    React.SetStateAction<{
      lat: number
      lng: number
    }>
  >
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  })
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions()
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    // Update the keyword of the input element
    setValue(e.target.value)
  }

  const handleSelect =
    ({ description }: { description: string }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false)
      clearSuggestions()

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0])
        console.log("📍 Coordinates: ", { lat, lng })
        setCenter({ lat: lat, lng: lng })
      })
    }

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion

      return (
        <li
          className="hover:cursor-pointer w-full h-max"
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })

  return (
    <div className="w-full relative">
      <div
        className="w-full absolute z-20 mt-4 flex items-center flex-col"
        ref={ref}
      >
        <Input
          className={cn("bg-white shadow-md", "md:w-96")}
          placeholder="Search a location..."
          value={value}
          onChange={handleInput}
          disabled={!ready}
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === "OK" && (
          <ul className="p-2 md:w-96 space-y-2">{renderSuggestions()}</ul>
        )}
      </div>
    </div>
  )
}

export default PlacesAutocomplete
