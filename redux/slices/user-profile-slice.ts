import type { RootState } from "@/redux/store"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

import { Database } from "@/types/supabase"

type profile = {
  first_name: string
  last_name: string
  username: string
  contact: string
  date_of_birth: string
  bio: string
  address: string
  created_at: string
  user_id: string
  updated_at: string
}

// Define a type for the slice state
interface ProfileState {
  value: profile
}

// Define the initial state using that type
const initialState: ProfileState = {
  value: {
    address: "",
    bio: "",
    contact: "",
    date_of_birth: "",
    first_name: "",
    last_name: "",
    username: "",
    created_at: "",
    user_id: "",
    updated_at: "",
  },
}

export const userProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<profile>) => {
      const fields = {
        ...action.payload,
        date_of_birth:
          action.payload.date_of_birth.length == 0
            ? ""
            : action.payload.date_of_birth.slice(0, 10),
      }
      state.value = fields
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      }
    },
  },
})

export const { updateProfile } = userProfileSlice.actions
export const selectProfile = (state: RootState) => state.profile.value
export default userProfileSlice.reducer
