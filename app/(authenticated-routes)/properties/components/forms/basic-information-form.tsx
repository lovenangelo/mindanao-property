import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import LocationFields from "./components/location-fields"
import SelectPropertyType from "./components/select-property-type"
import propertiesScheme from "./schema"

const basicInformationFormSchema = propertiesScheme.BasicInformationSchema

export default function BasicInformationForm() {
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
  }
  return (
    <>
      <h1>Basic Information</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <div className="flex flex-col w-full h-96 overflow-auto space-y-4 p-2">
            <SelectPropertyType form={form} />
            <LocationFields form={form} />
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
