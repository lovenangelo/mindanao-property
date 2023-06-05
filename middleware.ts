import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/types/supabase";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = "/auth";
      return NextResponse.redirect(redirectUrl);
    }
  } else {
    if (req.nextUrl.pathname.startsWith("/auth")) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = "/";
      return NextResponse.redirect(redirectUrl);
    }
  }

  return res;
}
