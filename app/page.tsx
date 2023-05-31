"use client";

import { useRouter } from "next/navigation";
import Guest from "./components/Guest";
import { useUser } from "./providers/UserProvider";
import { useEffect } from "react";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
    return () => {};
  }, []);

  return (
    <main className="min-h-screen items-center">
      {user == null && <Guest />}
    </main>
  );
}
