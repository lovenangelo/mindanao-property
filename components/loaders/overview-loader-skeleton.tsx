import { Skeleton } from "../ui/skeleton"

export default function OverviewLoader() {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="space-y-2">
        <Skeleton className="h-[113px] w-full md:w-[567px] md:h-[80px]" />
        <Skeleton className="w-full h-[84px]  md:h-[56px] md:w-[700px]" />
      </div>
      <div className="flex space-x-2">
        <Skeleton className="w-[113px] h-[40px]" />
        <Skeleton className="w-[81px] h-[40px]" />
      </div>
    </div>
  )
}
