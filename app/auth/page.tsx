"use client";

import { supabase } from "@/lib/supabase-client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Login = () => {
  return (
    <div className="h-[calc(100vh-64px)] mx-32 p-24">
      <div className="grid grid-cols-2 grid-row-1">
        <div className="hidden lg:flex flex-col bg-hero bg-cover lg:p-8 xl:p-12 justify-start items-center ">
          <div className="hidden lg:flex flex-col justify-between bg-[#fea621c7] lg:p-8 xl:p-12 xl:max-w-lg h-full min-w-[88vh] max-h-full">
            <div className="flex items-center justify-start space-x-3">
              <span className="bg-black rounded-full w-4 h-4" />
              <a href="#" className="font-medium text-xl">
                Mindao Property
              </a>
            </div>
            <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
              We offer the best real estate deals
            </h1>
            <p className="font-medium">© 2023 Company</p>
          </div>
        </div>
        <div className="w-full h-full p-12">
          <div className="flex items-center justify-center w-full">
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
