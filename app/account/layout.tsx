"use client"

import MainLoader from "@/components/loaders/main-loader"
import { useUser } from "@/components/providers/user-provider"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { isLoading, user } = useUser()

  if (isLoading || !user) {
    return <MainLoader />
  }

  return (
    <div className="p-4 h-full w-full space-y-2 bg-secondary">
      <h1 className="font-medium text-lg nd:text-2xl">Account Settings</h1>
      <div className="w-full h-full bg-background p-8 rounded-lg">
        {children}
      </div>
    </div>
  )
}
