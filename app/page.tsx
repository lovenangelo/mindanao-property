"use client";

import { useRouter } from "next/navigation";
import Guest from "./components/Guest";
import { useUser } from "./providers/UserProvider";
import { useEffect } from "react";
import Hero from "./components/Hero";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
    return () => {};
  }, []);

  return <main className="min-h-screen">{user == null && <Guest />}</main>;
}
