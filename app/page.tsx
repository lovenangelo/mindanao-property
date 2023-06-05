"use client";

import Guest from "./components/Guest";
import { useUser } from "./providers/UserProvider";
import Authenticated from "./components/Authenticated";
import Loading from "./loading";

export default function Home() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="">{user == null ? <Guest /> : <Authenticated />}</main>
  );
}
