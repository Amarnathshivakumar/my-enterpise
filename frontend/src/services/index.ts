/**
 * =====================================================
 *  NAME    : index.ts
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 21/09/25
 *  DESCRIPTION: SERVICES FOR API WITH REDUX TOOLKIT QUERY
 * =====================================================
 */

// DEPENDENCIES
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "./restype";

// API SERVICE
const BASE_URL = "https://jsonplaceholder.typicode.com";

// API
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users?_limit=5",
    }),
  }),
});
export const { useGetUsersQuery } = api;
