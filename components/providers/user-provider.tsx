"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { updateProfile } from "@/redux/slices/user-profile-slice"
import { Session, User } from "@supabase/supabase-js"

import { supabase } from "@/lib/utils"

const UserContext = createContext<
  | { isLoading: boolean; user: null }
  | {
      isLoading: boolean
      user: User | null
    }
>({
  isLoading: true,
  user: null,
})

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // create state values for user data and loading
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    function saveSession(session: Session | null) {
      const currentUser = session?.user
      setUser(currentUser ?? null)
      setLoading(false)
    }

    async function saveUserProfile() {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .single()

      if (error) {
      } else {
        // const dispatch = useAppDispatch(updateProfile({ data }))
      }
    }

    supabase.auth
      .getSession()
      .then(({ data: { session } }) => saveSession(session))

    const { subscription } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event == "SIGNED_IN" || event == "SIGNED_OUT") {
          setLoading(true)
          saveSession(session)
        }
      }
    ).data

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // create signUp, signIn, signOut functions
  const value = {
    isLoading: loading,
    user: user,
  }

  // use a provider to pass down the value
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
