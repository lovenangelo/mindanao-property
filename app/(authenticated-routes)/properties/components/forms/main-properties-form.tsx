"use client"

import { useAppSelector } from "@/redux/hooks"

import BasicInformationForm from "./basic-information-form"
import LatLngForm from "./lat-lng-form"

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
}
