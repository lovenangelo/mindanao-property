import { zodResolver } from "@hookform/resolvers/zod"
import { Form, useForm } from "react-hook-form"
import * as z from "zod"

import NavButtons from "./components/nav-button"
import propertiesScheme from "./schema"

const propertyDetailsSchema = propertiesScheme.PropertiesSchema
export default function PropertyDetailsForm() {
  const form = useForm<z.infer<typeof propertyDetailsSchema>>({
    resolver: zodResolver(propertyDetailsSchema),
    defaultValues: {},
  })
  function onSubmit(values: z.infer<typeof propertyDetailsSchema>) {
    console.log(values)
    // dispatch(changeFormSection({ value: "lat-lng-form" }))
  }
  return (
    <>
      <h1>Property details</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        ></form>
      </Form>
      <NavButtons />
    </>
  )
}
