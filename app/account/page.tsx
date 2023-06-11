"use client"

import { ChangeEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { AccountFields, UserProfile } from "@/types/account"
import { userAccountFields } from "@/config/user-account-fields"
import { cn } from "@/lib/utils"
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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import { useUser } from "@/components/providers/user-provider"
import UserAvatar from "@/components/user-avatar"

export default function AccountPage() {
  const { user } = useUser()
  const [userProfileValues, setUserProfileValues] = useState<UserProfile>({
    firstName: user?.user_metadata.first_name,
    lastName: user?.user_metadata.last_name,
    userName: "",
    bio: "",
    contact: "",
    birthDate: "",
    address: "",
  })

  const [allowedEdit, setAllowedEdit] = useState(false)

  const items = userAccountFields.map((item, index) => {
    const fieldDefaultVal = userProfileValues[item.name as keyof UserProfile]
    return (
      <div key={index} className="mt-4">
        <Label htmlFor={item.htmlFor}>{item.label}</Label>
        {item.name !== "bio" && (
          <Input
            onChange={(e) => changeHandler(e, item)}
            readOnly={!allowedEdit}
            value={
              item.name == "contact"
                ? fieldDefaultVal == ""
                  ? ""
                  : parseInt(fieldDefaultVal)
                : fieldDefaultVal
            }
            className="appearance-none"
            type={item.type}
            id={item.name}
          />
        )}
        {item.name == "bio" && (
          <Textarea
            onChange={(e) => changeHandler(e, item)}
            value={fieldDefaultVal}
            placeholder="Type your bio here."
          />
        )}
      </div>
    )
  })

  return (
    <div className="h-[464px] md:h-[720px] w-full overflow-y-auto flex flex-col justify-center items-center">
      <div className="grid row-auto h-full w-full max-w-lg items-center gap-2">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">My Profile</h2>
          {!allowedEdit && (
            <Button
              onClick={() => setAllowedEdit(true)}
              variant={"ghost"}
              className={cn("flex space-x-2 text-blue-500 hover:text-blue-800")}
            >
              <p className="text-blue">Edit</p>
              <Icons.edit className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="w-full flex justify-center items-center space-x-2 mt-4">
          <UserAvatar height="h-20" width="w-20" />
          <Button size={"sm"} variant={"outline"}>
            Change photo
          </Button>
        </div>
        <div className="h-full w-full max-w-lg mt-4">{items}</div>
        <Button
          onClick={() => {
            setAllowedEdit(false)
          }}
          className={cn("mt-2")}
        >
          Save
        </Button>
      </div>
    </div>
  )

  function changeHandler(
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    item: AccountFields
  ) {
    const temp = { ...userProfileValues }
    temp[item.name as keyof UserProfile] = e.currentTarget.value
    console.log(temp)

    setUserProfileValues(temp)
  }
}
