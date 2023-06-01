"use client";

import { supabase } from "@/lib/supabase-client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col w-full h-full items-center justify-center text-start">
        <Image
          src="/assets/logo/auth-logo.png"
          alt="logo"
          width={500}
          height={500}
        />
        <h1 className="text-4xl font-bold">Welcome to Mindanao Property!</h1>
        <h1 className="text-2xl font-bold underline">
          Log in to discover more features
        </h1>
      </div>
      <div className="py-36 px-64 ">
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
