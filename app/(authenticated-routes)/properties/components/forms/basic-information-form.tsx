"use client"

import { useAppDispatch } from "@/redux/hooks"
import { changeFormSection } from "@/redux/slices/properties-form-slice"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import GMap from "@/app/(authenticated-routes)/properties/components/maps/google-map-lat-lng"

import LocationFields from "./components/basic-information-forms/location-fields"
import SelectPropertyType from "./components/basic-information-forms/select-property-type"
import propertiesScheme from "./schema"

const basicInformationFormSchema = propertiesScheme.BasicInformationSchema

export default function BasicInformationForm() {
  const dispatch = useAppDispatch()
  const form = useForm<z.infer<typeof basicInformationFormSchema>>({
    resolver: zodResolver(basicInformationFormSchema),
    defaultValues: {
      property_type: "single_family",
      street_address: "",
      city: "",
      state: "",
      zip_code: "",
      country: "Philippines",
    },
  })
  function onSubmit(values: z.infer<typeof basicInformationFormSchema>) {
    console.log(values)
    dispatch(changeFormSection({ value: "lat-lng-form" }))
  }
  return (
    <>
      <h1 className="font-semibold">Basic Information</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <div className="flex flex-col w-full h-full space-y-4 p-2">
            <SelectPropertyType form={form} />
            <LocationFields form={form} />
            <div className="h-full w-full">
              <GMap />
            </div>
            <div className="w-full flex justify-end">
              <Button className="w-24" type="submit">
                Next
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  )
}
