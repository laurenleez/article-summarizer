import { configureStore } from '@reduxjs/toolkit'
import articleReducer from './feature'
import { articleApi } from './article'

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    articles: articleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
