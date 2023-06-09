"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import UserAvatar from "@/components/user-avatar"

export default function AccountPage() {
  return (
    <div className="w-full flex flex-col row-auto justify-center items-center">
      <UserAvatar height="h-20" width="w-20" />
      <div className="grid row-auto w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    </div>
  )
}
