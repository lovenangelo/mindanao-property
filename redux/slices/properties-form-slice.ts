import type { RootState } from "@/redux/store"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

// Define a type for the slice state
interface FormSection {
  value: "basic-info-form" | "lat-lng-form" | "property-details"
}

// Define the initial state using that type
const initialState: FormSection = {
  value: "basic-info-form",
}

export const propertiesFormSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeFormSection: (state, action: PayloadAction<FormSection>) => {
      state.value = action.payload.value
    },
    resetFormSection: (state) => {
      state.value = "basic-info-form"
    },
  },
})

export const { changeFormSection, resetFormSection } =
  propertiesFormSlice.actions
export const selectProfile = (state: RootState) => state.profile.value
export default propertiesFormSlice.reducer
