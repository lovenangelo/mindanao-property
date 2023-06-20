"use client"

import MainLoader from "@/components/loaders/main-loader"
import { useUser } from "@/components/providers/user-provider"

import PropertiesSidebar from "./components/properties-sidebar"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function PropertiesLayout({ children }: RootLayoutProps) {
  const { isLoading, user } = useUser()

  if (isLoading || !user) {
    return <MainLoader />
  }

  return (
    <div className="h-[calc(100vh-65px)] w-full flex">
      <PropertiesSidebar />
      <div className="m-2 h-[calc(100%-16px)] md:my-4 md:mr-8 border md:h-[calc(100%-32px)] w-full rounded-md">
        {children}
      </div>
    </div>
  )
}
