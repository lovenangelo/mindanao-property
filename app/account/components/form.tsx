import { Dispatch, SetStateAction, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn, supabase } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"

const formSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must not exceed 50 characters" })
    .regex(/^[A-Za-z]+$/, {
      message: "Name should not contain numbers or special characters",
    }),
  last_name: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name must not exceed 50 characters" })
    .regex(/^[A-Za-z]+$/, {
      message: "Name should not contain numbers or special characters",
    }),
  username: z
    .string()
    .min(6, { message: "Username must be at least 6 characters" })
    .max(20, { message: "Username must not exceed 20 characters" })
    .regex(/^\w+$/),
  contact: z
    .string()
    .max(10, { message: "Contact number must not exceed 10 digits" }),
  date_of_birth: z.string(),
  address: z
    .string()
    .max(100, { message: "Address must not exceed 20 characters" }),
  bio: z.string().max(100),
})

export default function AccountForm({
  allowedEdit,
  isLoading,
  setIsLoading,
}: {
  allowedEdit: boolean
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}) {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      username: "",
      contact: "",
      date_of_birth: "",
      address: "",
      bio: "",
    },
  })

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-2"
        onSubmit={form.handleSubmit((values) => {
          console.log(values)
        })}
      >
        <div className="md:flex-row flex flex-col md:gap-2">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{"First name"}</FormLabel>
                <FormControl>
                  <Input
                    required
                    autoCapitalize="words"
                    readOnly={!allowedEdit}
                    className={cn(
                      !allowedEdit && "focus-visible:ring-0",
                      "appearance-none"
                    )}
                    type="text"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{"Last name"}</FormLabel>
                <FormControl>
                  <Input
                    autoCapitalize="words"
                    required
                    readOnly={!allowedEdit}
                    className={cn(
                      !allowedEdit && "focus-visible:ring-0",
                      "appearance-none"
                    )}
                    type="text"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>{"Username"}</FormLabel>
              <FormControl>
                <Input
                  required
                  readOnly={!allowedEdit}
                  className={cn(
                    !allowedEdit && "focus-visible:ring-0",
                    "appearance-none"
                  )}
                  type="text"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{"Bio"}</FormLabel>
              <FormControl>
                <Textarea
                  required
                  className={cn(!allowedEdit && "focus-visible:ring-0")}
                  readOnly={!allowedEdit}
                  placeholder="Type your bio here."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date_of_birth"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>{"Birth date"}</FormLabel>
              <FormControl>
                <Input
                  required
                  readOnly={!allowedEdit}
                  className={cn(
                    !allowedEdit && "focus-visible:ring-0",
                    "appearance-none"
                  )}
                  type="date"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>{"Contact Number"}</FormLabel>
              <FormControl>
                <Input
                  placeholder="ex. 935XXXXXXX"
                  required
                  readOnly={!allowedEdit}
                  className={cn(
                    !allowedEdit && "focus-visible:ring-0",
                    "appearance-none"
                  )}
                  type="number"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>{"Address"}</FormLabel>
              <FormControl>
                <Input
                  required
                  readOnly={!allowedEdit}
                  className={cn(
                    !allowedEdit && "focus-visible:ring-0",
                    "appearance-none"
                  )}
                  type="text"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {allowedEdit && (
          <Button
            disabled={isLoading}
            type="submit"
            className={cn("mt-2 w-full")}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Save
          </Button>
        )}
      </form>
    </Form>
  )
}
