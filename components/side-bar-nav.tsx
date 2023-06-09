"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
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
      <div className={cn("w-full py-4 px-4 md:py-8 md:px-12")}>
        <Link className={cn("flex space-x-4")} href={item.href}>
          <item.icon />
          {item.title !== "Account" ? (
            <p className={cn("hidden md:block")}>{item.title}</p>
          ) : (
            <div className="relative">
              <div className="absolute bottom-6">
                <SideBarBadge text="complete your profile" />
              </div>
              <p className={cn("hidden md:block")}>Account</p>
            </div>
          )}
        </Link>
      </div>
    </div>
  ))

  if (!isLoading && !user) {
    return <></>
  }

  return (
    <>
      {!isLoading && user && (
        <div className="w-max min-h-screen border-r border-slate-400">
          <div className="w-full grid grid-cols-1 row-auto">{items}</div>
        </div>
      )}
    </>
  )
}
