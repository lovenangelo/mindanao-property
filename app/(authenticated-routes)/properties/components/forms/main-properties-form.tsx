"use client"

import { useAppSelector } from "@/redux/hooks"

import BasicInformationForm from "./basic-information-form"
import LatLngForm from "./lat-lng-form"
import PropertyDetailsForm from "./properties-details"

export default function PropertiesForm() {
  const formSection = useAppSelector(
    (state) => state.propertiesFormSection.value
  )

  console.log(formSection)

  if (formSection == "basic-info-form") {
    return (
      <div className="w-full h-full overflow-auto">
        <BasicInformationForm />
      </div>
    )
  }

  if (formSection == "lat-lng-form") {
    return (
      <div className="w-full h-full">
        <LatLngForm />
      </div>
    )
  }

  if (formSection == "property-details") {
    return (
      <div className="w-full h-full overflow-auto">
        <PropertyDetailsForm />
      </div>
    )
  }
}
