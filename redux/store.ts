import { configureStore } from "@reduxjs/toolkit"

import userProfileReducer from "./slices/user-profile-slice"

export const store = configureStore({
  reducer: {
    profile: userProfileReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
