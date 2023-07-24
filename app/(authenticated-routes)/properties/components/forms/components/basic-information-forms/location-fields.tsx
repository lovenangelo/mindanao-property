import { Asterisk } from "lucide-react"
import { UseFormReturn } from "react-hook-form"
import * as z from "zod"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import propertiesScheme from "../../schema"

const basicInformationSchema = propertiesScheme.BasicInformationSchema

export default function LocationFields({
  form,
}: {
  form: UseFormReturn<z.infer<typeof basicInformationSchema>>
}) {
  return (
    <>
      <FormField
        control={form.control}
        name="street_address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Street Address <span className="text-destructive">*</span>
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Enter street address"
                autoCapitalize="word"
                required
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              City <span className="text-destructive">*</span>
            </FormLabel>
            <FormControl>
              <Input placeholder="Enter city" required {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="state"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Province <span className="text-destructive">*</span>
            </FormLabel>
            <FormControl>
              <Input placeholder="Enter province" required {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="zip_code"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Zip code <span className="text-destructive">*</span>
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Enter 4 digit zip code"
                required
                type="number"
                {...field}
                onChange={(event) => {
                  let value = parseInt(event.target.value)
                  if (value < 0) {
                    value = 0
                  }
                  console.log(value)
                  field.onChange(value)
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Country <span className="text-destructive">*</span>
            </FormLabel>
            <FormControl>
              <Input required readOnly {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
