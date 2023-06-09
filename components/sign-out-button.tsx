import { useRouter } from "next/navigation"

import { cn, supabase } from "@/lib/utils"

import { Button } from "./ui/button"
import { toast } from "./ui/use-toast"

export default function SignOutButton({ isLoading }: { isLoading: boolean }) {
  const router = useRouter()

  const signOutHandler = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error)
      toast({
        title: "Uh oh! Something went wrong.",
        description: error.message,
      })
    } else {
      router.push("/")
    }
  }

  return (
    <Button
      variant={"ghost"}
      key={"signout"}
      className={cn(
        "justify-start w-full",
        isLoading && "cursor-not-allowed opacity-80"
      )}
      onClick={signOutHandler}
    >
      Sign out
    </Button>
  )
}
