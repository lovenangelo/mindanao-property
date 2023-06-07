import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import type { Database } from "@/types/supabase"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const supabase = createClientComponentClient<Database>()
