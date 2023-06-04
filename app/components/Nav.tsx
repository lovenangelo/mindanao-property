"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import Link from "next/link";
import { useUser } from "../providers/UserProvider";
import { IconMenu } from "@tabler/icons-react";
import { useMediaQuery } from "usehooks-ts";

const Nav = () => {
  const router = useRouter();
  const { user } = useUser();
  const desktop = useMediaQuery("(min-width: 768px)");
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const navLinks = (
    <ul
      tabIndex={0}
      className={
        desktop
          ? "menu menu-horizontal px-1 mr-16"
          : "dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      }
    >
      <li>
        <Link className="font-sans font-medium" href={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className="font-sans font-medium" href={"/pricing"}>
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
  );

  return (
    <div className="navbar justify-between container-lg bg-slate-50">
      <div className="flex lg:ml-14 xl:ml-28 items-center">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <img className="h-12 w-44" src="/assets/logo/logo.png" alt="" />
        </Link>
      </div>
      {desktop ? (
        <div className="flex-none">{navLinks}</div>
      ) : (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn m-1 bg-white border-0">
            <IconMenu />
          </label>
          {navLinks}
        </div>
      )}
    </div>
  );
};

export default Nav;
