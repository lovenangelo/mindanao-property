import { UseFormReturn } from "react-hook-form"

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

export default function SelectPropertyType({
  form,
}: {
  form: UseFormReturn<
    {
      street_address: string
      property_type: string
      city: string
      state: string
      zip_code: number
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
