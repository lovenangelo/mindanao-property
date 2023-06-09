import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export default function SideBarBadge({ text }: { text: string }) {
  return (
    <div>
      <Badge
        variant={"destructive"}
        className={cn("text-[8px] w-max hidden md:block")}
      >
        {text}
      </Badge>
      <Badge
        className={cn(
          "text-xs w-2 h-auto flex items-center justify-center font-semibold md:hidden"
        )}
      >
        !
      </Badge>
    </div>
  )
}
