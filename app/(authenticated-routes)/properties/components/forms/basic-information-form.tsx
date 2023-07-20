import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import SelectPropertyType from "./components/select-property-type"
import propertiesScheme from "./schema"

const basicInformationFormSchema = propertiesScheme.BasicInformationSchema

export default function BasicInformationForm() {
  const form = useForm<z.infer<typeof basicInformationFormSchema>>({
    resolver: zodResolver(basicInformationFormSchema),
    defaultValues: {
      property_type: "",
      city: "",
      state: "",
      zip_code: "",
      country: "",
    },
  })
  function onSubmit(values: z.infer<typeof basicInformationFormSchema>) {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <div className="flex flex-col w-full h-full space-y-4">
          <SelectPropertyType form={form} />
          <div className="w-full flex justify-end">
            <Button className="w-24" type="submit">
              Next
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
