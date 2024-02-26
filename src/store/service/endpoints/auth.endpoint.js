import { ApiService } from "../ApiService";

const authEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (arg) => ({
        url: "/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: arg,
      }),
    }),
    signUp: builder.mutation({
      query: (arg) => ({
        url: "/register",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: arg,
      }),
    }),
  }),
});
export const { useSignInMutation, useSignUpMutation } = authEndpoint;
