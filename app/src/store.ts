import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import customersReducer from "./CustomerReducer"
// ...

export const store = configureStore({
  reducer: {
    customers: customersReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['GET_CUSTOMERS'],
    },
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch