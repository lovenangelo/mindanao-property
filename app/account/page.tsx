"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useUser } from "@/components/providers/user-provider"
import UserAvatar from "@/components/user-avatar"

import AccountForm from "./components/form"

export default function AccountPage() {
  const [allowedEdit, setAllowedEdit] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useUser()

  return (
    <div className="h-[464px] md:h-[720px] w-full overflow-y-auto flex flex-col justify-center items-center">
      <div className="grid row-auto h-full w-full max-w-lg items-center gap-2">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">My Profile</h2>
          {!allowedEdit ? (
            <Button
              disabled={isLoading}
              onClick={() => setAllowedEdit(true)}
              variant={"ghost"}
              className={cn("flex space-x-2 text-blue-500 hover:text-blue-800")}
            >
              <p className="text-blue">Edit</p>
              <Icons.edit className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              disabled={isLoading}
              onClick={() => setAllowedEdit(false)}
              variant={"ghost"}
              className={cn("text-red-500 hover:text-red-800")}
            >
              Cancel
            </Button>
          )}
        </div>
        <div className="w-full flex items-center space-x-2 mt-4">
          <UserAvatar height="h-20" width="w-20" />
          <Button size={"sm"} variant={"outline"}>
            Change photo
          </Button>
        </div>
        <div className="h-full w-full max-w-lg mt-4">
          <AccountForm
            setAllowedEdit={setAllowedEdit}
            allowedEdit={allowedEdit}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            user={user!}
          />
        </div>
      </div>
    </div>
  )
}
