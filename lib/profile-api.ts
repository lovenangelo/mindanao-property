import { supabase } from "./utils"

export const getUserProfile = async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("first_name,last_name,username,contact,date_of_birth,bio,address")
    .eq("user_id", userId)

  if (error) {
    return null
  } else {
    return data
  }
}
