"use client"

import React, { useMemo, useState } from "react"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

import { Skeleton } from "@/components/ui/skeleton"

import PlacesAutocomplete from "./places"

const containerStyle = {
  width: "100%",
  height: "100%",
}

const GMap = () => {
  const [center, setCenter] = useState<{
    lat: number
    lng: number
  }>({ lat: 6.2707, lng: 124.6857 })

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

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <PlacesAutocomplete setCenter={setCenter} />
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <Skeleton className="w-full h-full" />
  )
}

export default React.memo(GMap)
