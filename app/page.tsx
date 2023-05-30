"use client";

import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/lib/supabase-client";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="min-h-screen items-center">
      <Nav />
    </main>
  );
}
