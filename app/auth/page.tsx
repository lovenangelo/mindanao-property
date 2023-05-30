"use client";

import { supabase } from "@/lib/supabase-client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import React from "react";

const Login = () => {
  return (
    <div className="grid grid-cols-2">
      <div></div>
      <div className="py-32 px-64">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google", "facebook", "twitter"]}
          redirectTo="/"
        />
      </div>
    </div>
  );
};

export default Login;
