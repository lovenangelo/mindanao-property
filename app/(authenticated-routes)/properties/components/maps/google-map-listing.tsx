"use client"

import React, { useState } from "react"
import {
  MarkerClusterer,
  SuperClusterAlgorithm,
} from "@googlemaps/markerclusterer"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

import trees from "@/lib/trees"
import { Skeleton } from "@/components/ui/skeleton"

import PlacesAutocomplete from "./places"

const containerStyle = {
  width: "100%",
  height: "100%",
}

function addMarkers(map: google.maps.Map) {
  const infoWindow = new google.maps.InfoWindow()

  const markers: google.maps.Marker[] = trees.map(([name, lat, lng]) => {
    const marker = new google.maps.Marker({ position: { lat, lng } })
    marker.addListener("click", () => {
      infoWindow.setPosition({ lat, lng })
      infoWindow.setContent(
        `<div className='bg-primary'>
        <h2>${name}</h2>
        </div>`
      )
      infoWindow.open({ map })
    })
    return marker
  })

  new MarkerClusterer({
    markers,
    map,
    algorithm: new SuperClusterAlgorithm({ radius: 200 }),
  })
}

const GMap = () => {
  const [center, setCenter] = useState<{
    lat: number
    lng: number
  }>({ lat: 43.68, lng: -79.43 })

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
    addMarkers(map)
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
      options={{
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      }}
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
