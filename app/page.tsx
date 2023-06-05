"use client";

import Guest from "./components/Guest";
import { useUser } from "./providers/UserProvider";
import Authenticated from "./components/Authenticated";

export default function Home() {
  const { user } = useUser();

  return (
    <main className="">{user == null ? <Guest /> : <Authenticated />}</main>
  );
}
