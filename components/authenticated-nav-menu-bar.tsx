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

export function AuthenticatedNavMenuBar() {
  const { user, isLoading } = useUser()

  const userInitials = user!.email![0].toUpperCase()

  const list = siteConfig.authNav
  const signUpConfig = list[0]
  const items = list.map(
    (item, index) =>
      item.href && (
        <Link key={index} href={item.href}>
          <MenubarItem
            className={cn(
              "flex items-center text-sm font-medium text-muted-foreground",
              item.disabled && "cursor-not-allowed opacity-80"
            )}
          >
            {item.title}
          </MenubarItem>
        </Link>
      )
  )

  return (
    <Menubar className={cn("rounded-full border-0 p-0")}>
      <MenubarMenu>
        <MenubarTrigger className={cn("cursor-pointer rounded-full px-0 py-0")}>
          <Avatar>
            <AvatarImage src="/" />
            <AvatarFallback className={cn("font-semibold border")}>
              {userInitials}
            </AvatarFallback>
          </Avatar>
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
