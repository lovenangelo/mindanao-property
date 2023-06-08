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

export function NavMenuBar() {
  const list = siteConfig.mainNav
  const items = list.slice(1, list.length - 1)?.map(
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
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className={cn("cursor-pointer")}>
          <Icons.navMenu />
        </MenubarTrigger>
        <MenubarContent>{items}</MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
