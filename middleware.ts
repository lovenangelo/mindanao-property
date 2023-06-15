import { NextResponse, type NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

import type { Database } from "@/types/supabase"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })
  await supabase.auth.getSession()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // if user is signed in and the current path is / redirect the user to /account
  if (
    user &&
    (req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/auth")
  ) {
    return NextResponse.redirect(new URL("/overview", req.url))
  }

  // if user is not signed in and the current path is not /overview redirect the user to /
  if (!user && req.nextUrl.pathname == "/overview") {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return res
}

export const config = {
  matcher: ["/", "/overview", "/auth"],
}
