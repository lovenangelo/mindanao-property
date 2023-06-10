"use client"

import { Button } from "@nextui-org/react"

import { userAccountFields } from "@/config/user-account-fields"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import UserAvatar from "@/components/user-avatar"

export default function AccountPage() {
  const items = userAccountFields.map((item) => {
    return (
      <div className="mt-2">
        <Label htmlFor={item.htmlFor}>{item.label}</Label>
        <Input type={item.type} id={item.name} />
      </div>
    )
  })

  return (
    <div className="h-[464px] md:h-[720px] w-full overflow-y-auto flex flex-col justify-center items-center">
      <div className="grid row-auto h-full w-full max-w-lg items-center gap-2">
        <UserAvatar height="h-20" width="w-20" />
        {items}
        <Button>Save</Button>
      </div>
    </div>
  )
}
