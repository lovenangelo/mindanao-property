"use client"

import { cn } from "@/lib/utils"

import { useUser } from "./providers/user-provider"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function UserAvatar () {
  const { user } = useUser()

  const userInitials = user!.email![0].toUpperCase()
  return (
    <Avatar>
      <AvatarImage src="/" />
      <AvatarFallback className={cn("font-semibold border")}>
        {userInitials}
      </AvatarFallback>
    </Avatar>
  )
}
