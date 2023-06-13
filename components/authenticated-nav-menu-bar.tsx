"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Icons } from "./icons"
import { useUser } from "./providers/user-provider"
import SignOutButton from "./sign-out-button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import UserAvatar from "./user-avatar"

export function AuthenticatedNavMenuBar() {
  const { isLoading } = useUser()

  const list = siteConfig.authNav
  const signUpConfig = list[0]

  return (
    <Menubar className={cn("rounded-full border-0 p-0")}>
      <MenubarMenu>
        <MenubarTrigger className={cn("cursor-pointer rounded-full px-0 py-0")}>
          <UserAvatar height={null} width={null} />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            className={cn(
              "flex items-center text-sm font-medium text-muted-foreground",
              signUpConfig.disabled && "cursor-not-allowed opacity-80"
            )}
          >
            <SignOutButton isLoading={isLoading} />
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
