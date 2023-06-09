import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export default function SideBarBadge({ text }: { text: string }) {
  return <Badge className={cn("text-[8px] w-max")}>{text}</Badge>
}
