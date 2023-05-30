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
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Mindanao Property
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
          <li>
            <Link href={"/"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/"}>Property</Link>
          </li>
          {user ? (
            <li>
                   <button onClick={handleSignOut}>Sign out</button>

            </li>
          ) : (
            <li>
              <Link href={"/auth"}>Sign in</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
