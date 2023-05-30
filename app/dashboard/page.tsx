"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";

const DashboardPage = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div>
      <h1>Logged in</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default DashboardPage;
