import Link from "next/link"

import { siteConfig } from "@/config/site"

import { AuthenticatedNavMenuBar } from "./authenticated-nav-menu-bar"
import { Icons } from "./icons"
import { ThemeToggle } from "./theme-toggle"

export default function AuthenticatedNav() {
  return (
    <div className="px-8 flex h-16 w-full items-center space-x-4">
      <div>
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="font-bold md:inline-block hidden">
            {siteConfig.name}
          </span>
        </Link>
      </div>
      <div className="h-full flex flex-1 items-center justify-end space-x-4">
        <div>
          <ThemeToggle />
        </div>

        <div className="h-full py-4">
          <div className="h-full w-[2px] bg-gray-300" />
        </div>
        <AuthenticatedNavMenuBar />
      </div>
    </div>
  )
}
