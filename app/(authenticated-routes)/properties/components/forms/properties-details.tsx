import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import NavButtons from "./components/nav-button"
import propertiesScheme from "./schema"

const propertyDetailsSchema = propertiesScheme.PropertyDetailsSchema
export default function PropertyDetailsForm() {
  const form = useForm<z.infer<typeof propertyDetailsSchema>>({
    resolver: zodResolver(propertyDetailsSchema),
    defaultValues: {
      price: "",
      bedrooms: 1,
      bathrooms: 1,
      area_sqft: "",
      lot_size_acres: "",
      additional_info: "",
      status: "for sale",
    },
  })
  function onSubmit(values: z.infer<typeof propertyDetailsSchema>) {
    console.log(values)
    // dispatch(changeFormSection({ value: "lat-lng-form" }))
  }
  return (
    <>
      <h1 className="font-semibold mb-4">Property details</h1>
      <div className="flex flex-col justify-between h-full w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4 p-2"
          >
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Price <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full space-x-4">
              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Bedrooms <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Bathrooms <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="area_sqft"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Area (sqft) <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="number" {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lot_size_acres"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Lot Size (acres) <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="number" {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additional_info"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Additional Information{" "}
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="For rent" />
                      </SelectTrigger>
                      <SelectContent defaultValue={"for rent"}>
                        <SelectItem value="for rent">For rent</SelectItem>
                        <SelectItem value="for sale">For sale</SelectItem>
                        <SelectItem value="for lease">For lease</SelectItem>
                        <SelectItem value="sold">Sold</SelectItem>
                        <SelectItem value="rented">Rented</SelectItem>
                        <SelectItem value="leased">Leased</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additional_info"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Additional Information{" "}
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <NavButtons />
      </div>
    </>
  )
}
