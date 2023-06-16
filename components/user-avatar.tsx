"use client"

import { useEffect, useState } from "react"

import { cn, supabase } from "@/lib/utils"

import { Icons } from "./icons"
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
  const [avatar, setAvatar] = useState<Blob | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const { user } = useUser()

  const userInitials = user!.email![0].toUpperCase()

  useEffect(() => {
    const getAvatar = async () => {
      const { data, error } = await supabase.storage
        .from("profiles")
        .download(`${user!.id}/profile-photo`)
      if (error) {
        console.log(error)
      } else {
        setAvatar(data)
      }
    }
    getAvatar()
    console.log("use effect running")
  }, [user])

  return (
    <Avatar className={cn(height, width)}>
      <AvatarImage src={avatar ? URL.createObjectURL(avatar) : src} />
      <AvatarFallback className={cn("font-semibold border text-2xl")}>
        {isLoading ? <Icons.spinner /> : userInitials}
      </AvatarFallback>
    </Avatar>
  )
}
