"use client"

import { useState } from "react"

import { userAccountFields } from "@/config/user-account-fields"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"
import { useUser } from "@/components/providers/user-provider"
import UserAvatar from "@/components/user-avatar"

type UserProfile = {
  firstName: string
  lastName: string
  userName: string
  bio: string
  contact: number
  birthDate: string
  address: string
}

export default function AccountPage() {
  const { user } = useUser()
  const date = "1979-12-31"
  const [userProfileValues, setUserProfileValues] = useState<UserProfile>({
    firstName: user?.user_metadata.first_name,
    lastName: user?.user_metadata.last_name,
    userName: "",
    bio: "",
    contact: 9357476865,
    birthDate: date,
    address: "",
  })

  const items = userAccountFields.map((item, index) => {
    const fieldDefaultVal = userProfileValues[item.name as keyof UserProfile]
    return (
      <div key={index} className="mt-2">
        <Label htmlFor={item.htmlFor}>{item.label}</Label>
        {item.name !== "Bio" && (
          <Input
            value={fieldDefaultVal}
            className="appearance-none"
            type={item.type}
            id={item.name}
          />
        )}
        {item.name == "Bio" && <Textarea placeholder="Type your bio here." />}
      </div>
    )
  })

  return (
    <div className="h-[464px] md:h-[720px] w-full overflow-y-auto flex flex-col justify-center items-center">
      <div className="grid row-auto h-full w-full max-w-lg items-center gap-2">
        <div className="flex justify-between">
          <h2 className="font-semibold">My Profile</h2>
          <div className="flex space-x-2">
            <p className="text-blue">Edit</p>
            <Icons.edit />
          </div>
        </div>
        <div className="w-full flex justify-center items-center space-x-2">
          <UserAvatar height="h-20" width="w-20" />
          <Button variant={"outline"}>Change photo</Button>
        </div>
        {items}
        <Button>Save</Button>
      </div>
    </div>
  )
}
