"use client";

import { supabase } from "@/lib/supabase-client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Login = () => {
  return (
    <div className="h-[calc(100vh-64px)] p-24 w-full overflow-hidden">
      <div className="grid grid-cols-2 grid-row-1 h-full w-full">
        <div className="h-full flex justify-center items-center">
          <img
            className="h-3/4"
            src="/assets/img/Travel.svg"
            alt="travel illustration"
          />
        </div>
        <div className="px-48">
          <div>
            <div className="flex items-center justify-center w-full">
              <img
                className="w-auto h-28 text-gray-900 fill-current"
                src="/assets/logo/footer-logo.png"
                alt="Logo"
              />
            </div>
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
              }}
              providers={["google", "facebook", "apple"]}
              redirectTo="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
