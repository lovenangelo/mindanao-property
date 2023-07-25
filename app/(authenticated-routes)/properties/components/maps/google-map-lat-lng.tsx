"use client"

import React, { Dispatch, SetStateAction, useState } from "react"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"

import { Skeleton } from "@/components/ui/skeleton"

import PlacesAutocomplete from "./places"

const containerStyle = {
  width: "100%",
  height: "100%",
}

const GMap = ({
  setShowError,
}: {
  setShowError: Dispatch<SetStateAction<boolean>>
}) => {
  const [center, setCenter] = useState<{
    lat: number
    lng: number
  }>({ lat: 43.68, lng: -79.43 })

  const [clickedLocation, setClickedLocation] =
    useState<google.maps.LatLng | null>(null)
  console.log(clickedLocation?.lat(), clickedLocation?.lng())

  const onMapClick = (e: google.maps.MapMouseEvent) => {
    const latLng = e.latLng
    setClickedLocation(latLng)
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    libraries: ["places"],
  })

  const [map, setMap] = React.useState<
    null | boolean | Error | google.maps.Map
  >(null)

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    // setMap(map)
    // addMarkers(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onMapClick}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        }}
      >
        <PlacesAutocomplete setCenter={setCenter} />
        {/* Child components, such as markers, info windows, etc. */}
        <>
          {clickedLocation && (
            <Marker
              position={{
                lat: clickedLocation.lat(),
                lng: clickedLocation.lng(),
              }}
            />
          )}
        </>
      </GoogleMap>
    </>
  ) : (
    <Skeleton className="w-full h-full" />
  )
}

export default React.memo(GMap)
