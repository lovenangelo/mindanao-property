"use client";

import { createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthChangeEvent, Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase-client";

const UserContext = createContext<
  | { isLoading: boolean; user: null }
  | {
      isLoading: boolean;
      user: User | null;
    }
>({
  isLoading: true,
  user: null,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // create state values for user data and loading
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    function saveSession(
      session: Session | null,
      event: AuthChangeEvent | null
    ) {
      const currentUser = session?.user;
      if (event != null && event == "SIGNED_IN") {
        console.log("signed in");
        router.replace("/");
      }
      setUser(currentUser ?? null);
      setLoading(false);
    }

    supabase.auth
      .getSession()
      .then(({ data: { session } }) => saveSession(session, null));

    const { subscription } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(event);
        setLoading(true);
        return saveSession(session, event);
      }
    ).data;

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // create signUp, signIn, signOut functions
  const value = {
    isLoading: loading,
    user: user,
  };

  // use a provider to pass down the value
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
