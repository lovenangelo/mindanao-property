"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import Link from "next/link";
import { useUser } from "../providers/UserProvider";

const Nav = () => {
  const router = useRouter();

  const { user } = useUser();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="navbar container-lg bg-slate-50 border-b-2 border-gray-200">
      <div className="flex-1 ml-28 ">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <img className="h-12 w-44" src="/assets/logo/logo.png" alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 mr-16">
          <li>
            <Link className="font-sans font-medium" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="font-sans font-medium" href={"/"}>
              Pricing
            </Link>
          </li>
          <li>
            <Link className="font-sans font-medium" href={"/properties"}>
              Properties
            </Link>
          </li>
          {user ? (
            <li>
              <button className="font-sans font-medium" onClick={handleSignOut}>
                Sign out
              </button>
            </li>
          ) : (
            <li>
              <Link className="font-sans font-medium" href={"/auth"}>
                Sign in
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
    // Hero Section
  );
};

export default Nav;
