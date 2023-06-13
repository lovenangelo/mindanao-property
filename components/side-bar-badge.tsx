"use client"

import { useCallback, useEffect, useState } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { updateProfile } from "@/redux/slices/user-profile-slice"
import { User } from "@supabase/auth-helpers-nextjs"

import { cn, supabase } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export default function SideBarBadge({
  text,
  user,
}: {
  text: string
  user: User | null
}) {
  const [loading, setLoading] = useState(false)
  const [showBadge, setShowBadge] = useState(false)
  const dispatch = useAppDispatch()

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from("profiles")
        .select(
          "first_name,last_name,username,contact,date_of_birth,bio,address"
        )
        .eq("user_id", user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }
      if (data) {
        console.log(data)
        const values = {
          address: data.address ?? "",
          bio: data.bio ?? "",
          contact: data.contact ?? "",
          date_of_birth: data.date_of_birth ?? "",
          first_name: data.first_name ?? "",
          last_name: data.last_name ?? "",
          username: data.username ?? "",
        }
        dispatch(updateProfile(values))
        setShowBadge(false)
      }
    } catch (error) {
      setShowBadge(true)
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  if (loading || !showBadge) {
    return <></>
  }

  return (
    <div>
      <Badge
        variant={"destructive"}
        className={cn("text-[8px] w-max hidden md:block")}
      >
        {text}
      </Badge>
      <Badge
        variant={"destructive"}
        className={cn(
          "text-xs w-2 h-auto flex items-center justify-center font-semibold md:hidden"
        )}
      >
        !
      </Badge>
    </div>
  )
}
