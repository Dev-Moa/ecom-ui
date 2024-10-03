import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://fakestoreapi/" }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (userInfo) => ({
                url: '/register',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: userInfo,
            }),
        }),
        login : builder.mutation({
            query : (userInfo)=>({
                url:'/login',
                method:'POST',
                header:{"Content-Type":"application/json"},
                body:userInfo
            })
        })
    }),
});

export const { useSignupMutation, useLoginMutation } = authApi;