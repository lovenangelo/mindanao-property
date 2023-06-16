"use client"

import MainLoader from "@/components/loaders/main-loader"
import { useUser } from "@/components/providers/user-provider"

export default function DashboardPage() {
  const { isLoading, user } = useUser()
  console.log(isLoading, user)

  if (isLoading || !user) {
    return <MainLoader />
  }

  return <div className="p-4">OverviewPage</div>
}
