"use client"

import { useState } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { useUser } from "./user-provider"

export function SideBarNav() {
  const { isLoading, user } = useUser()

  const list = siteConfig.sideBarNav
  const items = list.map(
    (item, index) =>
      item.href && (
        <Link key={index} href={item.href}>
          {item.title}
        </Link>
      )
  )

  if (!isLoading && !user) {
    return <></>
  }

  return (
    <>
      {!isLoading && user && (
        <div className="md:px-8 w-max min-h-screen border-r border-slate-400">
          <ul className="w-full space-y-8 justify-start items-start p-4">
            <li className="w-full">
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.overview />
                <p className={cn("transition duration-500 hidden md:block")}>
                  Overview
                </p>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.property />
                <p className={cn("transition duration-500 hidden md:block")}>
                  Properties
                </p>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.analytics />
                <p className={cn("transition duration-500 hidden md:block")}>
                  Reports
                </p>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.notification />
                <p className={cn("transition duration-500 hidden md:block")}>
                  Notifications
                </p>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.chat />
                <p className={cn("transition duration-500 hidden md:block")}>
                  Messages
                </p>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.account />
                <p className={cn("transition duration-500 hidden md:block")}>
                  Account
                </p>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.settings />
                <p className={cn("transition duration-500 hidden md:block")}>
                  Settings
                </p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
