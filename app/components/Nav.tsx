"use client";

import Link from "next/link";

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Mindanao Property</a>
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
          <li>
            <Link href={"/auth/login"}>Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
