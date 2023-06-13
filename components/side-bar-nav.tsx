"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { useUser } from "./providers/user-provider"
import SideBarBadge from "./side-bar-badge"

export function SideBarNav() {
  const { isLoading, user } = useUser()

  const path = usePathname()

  const list = siteConfig.sideBarNav
  const items = list.map((item, index) => (
    <div
      key={index}
      className={cn(
        "w-full",
        path.includes(`/${item.title.toLowerCase()}`) && "bg-secondary"
      )}
    >
      <div className={cn("relative w-full py-4 px-4 md:py-6 md:px-12")}>
        {item.title == "Account" && (
          <div className="absolute top-2 -right-1 md:right-10">
            <SideBarBadge user={user} text="complete your profile" />
          </div>
        )}
        <Link
          className={cn(
            "flex space-x-4 justify-center items-center md:justify-start md:items-start"
          )}
          href={item.href}
        >
          <item.icon />
          <p className={cn("hidden md:block")}>{item.title}</p>
        </Link>
      </div>
    </div>
  ))

  if (!isLoading && !user) {
    return <div></div>
  }

  return (
    <>
      {!isLoading && user && (
        <div className="w-max h-[calc(100vh-65px)] border-r border-slate-400 flex flex-col">
          <div className="md:flex md:flex-col md:items-center justify-center hidden p-4 h-max">
            <h2 className="font-medium">{user.user_metadata.first_name}</h2>
            <p className="text-xs">{user.email}</p>
          </div>
          <div className="w-full grid grid-cols-1 row-auto gap-2 md:mt-4">
            {items}
          </div>
        </div>
      )}
    </>
  )
}
