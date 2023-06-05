"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import Link from "next/link";
import { useUser } from "../providers/UserProvider";
import { IconMenu } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import AutoAvatar from "./AutoAvatar";

const Nav = () => {
  const router = useRouter();
  const { user } = useUser();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const [desktop, setDesktop] = useState(window.innerWidth);

  useEffect(() => {
    // Update the window width when the component mounts
    setDesktop(window.innerWidth);

    // Update the window width when the window is resized
    const handleResize = () => {
      setDesktop(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = (
    <ul
      tabIndex={0}
      className={
        desktop >= 768 && user == null
          ? "menu menu-horizontal px-1 mr-16"
          : "dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      }
    >
      {user == null && (
        <>
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
        </>
      )}
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

  const menu = (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn m-1 bg-white border-0">
        <IconMenu />
      </label>
      {navLinks}
    </div>
  );

  return (
    <div className="navbar justify-between container-lg bg-slate-50 border-b-[1px] border-slate-400">
      <div className="flex lg:ml-14 xl:ml-28 items-center">
        {user == null && (
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <img className="h-12 w-44" src="/assets/logo/logo.png" alt="" />
          </Link>
        )}
      </div>
      <div>
        {user && <AutoAvatar email={user.email!} />}
        {user == null && desktop >= 768 ? (
          <div className="flex-none">{navLinks}</div>
        ) : (
          menu
        )}
      </div>
    </div>
  );
};

export default Nav;
