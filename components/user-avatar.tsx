"use client"

import { cn } from "@/lib/utils"

import { useUser } from "./providers/user-provider"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function UserAvatar({
  height,
  width,
  src,
}: {
  height: string | null
  width: string | null
  src: string
}) {
  const { user } = useUser()

  const userInitials = user!.email![0].toUpperCase()
  return (
    <Avatar className={cn(height, width)}>
      <AvatarImage src={src} />
      <AvatarFallback className={cn("font-semibold border text-2xl")}>
        {userInitials}
      </AvatarFallback>
    </Avatar>
  )
}
