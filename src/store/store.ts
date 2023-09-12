import { configureStore } from '@reduxjs/toolkit'
import surahList from './apps/blog-posts'
import counter from './apps/counter'

export const store = configureStore({
  reducer: {
    counter,
    surahList

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch