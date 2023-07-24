"use client"

import MainLoader from "@/components/loaders/main-loader"
import { useUser } from "@/components/providers/user-provider"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function PropertiesLayout({ children }: RootLayoutProps) {
  const { isLoading, user } = useUser()
  if (isLoading || !user) {
    return <MainLoader />
  }

  return (
    <div className="h-max w-full flex">
      <div className="m-2 h-[calc(100%-16px)] md:my-4 md:mr-8 border md:h-[580px] w-full rounded-md">
        {children}
      </div>
    </div>
  )
}
