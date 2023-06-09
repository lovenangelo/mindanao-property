"use client"

import MainLoader from "@/components/loaders/main-loader"
import { useUser } from "@/components/user-provider"

export default function DashboardPage() {
  const { isLoading, user } = useUser()

  if (isLoading || !user) {
    return <MainLoader />
  }

  return <div className="p-4">OverviewPage</div>
}
