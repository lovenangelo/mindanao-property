"use client"

import { cn } from "@/lib/utils"

import { useUser } from "./providers/user-provider"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function UserAvatar({
  height,
  width,
}: {
  height: string | null
  width: string | null
}) {
  const { user } = useUser()

  const userInitials = user!.email![0].toUpperCase()
  return (
    <Avatar className={cn(height, width)}>
      <AvatarImage src="/" />
      <AvatarFallback className={cn("font-semibold border text-2xl")}>
        {userInitials}
      </AvatarFallback>
    </Avatar>
  )
}
