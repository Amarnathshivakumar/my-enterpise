/**
 * =====================================================
 *  NAME    : index.tsx
 *  DATE      : 20/08/2025
 *  DATE_MODIFY       : 22/09/2025
 *  DESCRIPTION: STORE FOR REDUX TOOLKIT
 * =====================================================
 */

// DEPENDENCIES
import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/services";

// GLOBAL STATE
import themeReducer from "./themeState";

// STORE
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// DISPATCH & STATE TYPES
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
