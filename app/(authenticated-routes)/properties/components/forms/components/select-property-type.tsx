import { UseFormReturn } from "react-hook-form"
import * as z from "zod"

import { propertyTypes } from "@/config/properties"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import propertiesScheme from "../schema"

const basicInformationSchema = propertiesScheme.BasicInformationSchema

export default function SelectPropertyType({
  form,
}: {
  form: UseFormReturn<z.infer<typeof basicInformationSchema>>
}) {
  const selectOptions = propertyTypes.map((type, index) => (
    <SelectItem key={index} value={type.id}>
      {type.label}
    </SelectItem>
  ))

  return (
    <FormField
      control={form.control}
      name="property_type"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            Property type <span className="text-destructive">*</span>
          </FormLabel>
          <FormControl>
            <Select defaultValue={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <div className="h-48 overflow-y-auto">{selectOptions}</div>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
