import type { RootState } from "@/redux/store"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

import { Database } from "@/types/supabase"

type profile = Database["public"]["Tables"]["profiles"]["Row"]

// Define a type for the slice state
interface ProfileState {
  value: profile
}

// Define the initial state using that type
const initialState: ProfileState = {
  value: {
    address: null,
    bio: null,
    contact: 0,
    created_at: null,
    date_of_birth: null,
    first_name: "",
    last_name: "",
    updated_at: null,
    user_id: "",
    username: null,
  },
}

export const userProfileSlice = createSlice({
  name: "profile",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateProfile: (state, action: PayloadAction<profile>) => {
      state.value = action.payload
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

export default userProfileSlice.reducer
