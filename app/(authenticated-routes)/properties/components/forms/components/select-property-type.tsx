import { UseFormReturn } from "react-hook-form"

import { propertyTypes } from "@/config/properties"
import {
  Form,
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

export default function SelectPropertyType({
  form,
}: {
  form: UseFormReturn<
    {
      property_type: string
      city: string
      state: string
      zip_code: string
      country: string
    },
    any,
    undefined
  >
}) {
  const selectOptions = propertyTypes.map((type) => (
    <SelectItem value={type.id}>{type.label}</SelectItem>
  ))

  return (
    <FormField
      control={form.control}
      name="property_type"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Property type</FormLabel>
          <FormControl>
            <Select {...field}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent className="w-full">{selectOptions}</SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
