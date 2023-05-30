"use client";

import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/lib/supabase-client";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>landing page</div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google", "facebook", "twitter"]}
      />
    </main>
  );
}
