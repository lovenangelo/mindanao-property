"use client"

import { useCallback, useEffect, useState } from "react"
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
        setShowBadge(false)
      }
    } catch (error) {
      setShowBadge(true)
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

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
