"use client"

import OverviewLoader from "@/components/loaders/overview-loader"
import { useUser } from "@/components/user-provider"

export default function DashboardPage() {
  const { isLoading, user } = useUser()

  if (isLoading || !user) {
    return <OverviewLoader />
  }

  return <div className="p-4">OverviewPage</div>
}
