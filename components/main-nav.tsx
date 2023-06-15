"use client"

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const links = items!.slice(1)?.map(
    (item, index) =>
      item.href && (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground",
            item.disabled && "cursor-not-allowed opacity-80"
          )}
        >
          {item.title}
        </Link>
      )
  )

  return (
    <div className="flex gap-6 md:gap-10">
      <nav className="flex gap-6">{links}</nav>
    </div>
  )
}
