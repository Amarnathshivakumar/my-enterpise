/**
 * =====================================================
 *  NAME    : index.tsx
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 22/09/2025
 *  DESCRIPTION: STORE FOR REDUX TOOLKIT
 * =====================================================
 */

// DEPENDENCIES
import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/services";

// SLICES
import themeReducer from "./tasks/themeState";
import langReducer from "./tasks/langState";

// STORE
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    theme: themeReducer,
    lang: langReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// DISPATCH & STATE TYPES
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
