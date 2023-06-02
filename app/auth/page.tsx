"use client";

import { supabase } from "@/lib/supabase-client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-row w-full">
        <div className="hidden lg:flex flex-col bg-hero bg-cover lg:p-8 xl:p-12 xl:max-w-l justify-center min-w-[100vh] ">
          <div className='hidden lg:flex flex-col justify-between bg-[#fea621c7] lg:p-8 xl:p-12 xl:max-w-lg h-full min-w-[88vh] max-h-full'>
            <div className="flex items-center justify-start space-x-3">
              <span className="bg-black rounded-full w-8 h-8"></span>
              <a href="#" className="font-medium text-xl">Mindao Property</a>
            </div>
            <div className='space-y-5 py-7'>
              <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">We are offering the
              Best Real Estate Deals</h1>
              <p className="text-lg">You do not have an account?</p>
              <button
                className="inline-block tracking-normal flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Create
                account here</button>
            </div>
            <p className="font-medium">© 2023 Company</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col  justify-center relative">
          <div className="flex flex-1 flex-col items-center justify-center space-y-5 ">
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
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
