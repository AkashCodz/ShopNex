import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:3001/';

export const loginApi = createApi({
  reducerPath: 'login',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      }),
      onError: (error) => {
        console.error('Login error:', error);
      },
    }),
    getProducts: builder.query({
      query: () => ({
        url:'products/all',
        method: 'GET',
      })
    }),
    getComputers: builder.query({
      query: () => ({
        url:'products/computers',
        method: 'GET',
      })
    }),
    getFashion: builder.query({
      query: () => ({
        url:'products/fashion',
        method: 'GET',
      })
    }),
    getHomeKitchen: builder.query({
      query: () => ({
        url:'products/homeKitchen',
        method: 'GET',
      })
    }),
    getMobiles: builder.query({
      query: () => ({
        url:'products/mobiles',
        method: 'GET',
      })
    }),
    getWatches: builder.query({
      query: () => ({
        url:'products/Watches',
        method: 'GET',
      })
    }),
    getEarBuds: builder.query({
      query: () => ({
        url:'products/EarBuds',
        method: 'GET',
      })
    }),
    getPowerBank: builder.query({
      query: () => ({
        url:'products/PowerBank',
        method: 'GET',
      })
    }),
    postCart: builder.mutation({
      query: (product) => ({
        url: 'api/cart',
        method: 'POST',
        body: product,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      }),
      onError: (error) => {
        console.error('Error adding product to cart:', error);
      },
    }),
        // New logout endpoint
        postLogout: builder.mutation({
          query: () => ({
            url: 'logout', // Assuming your backend has a /logout endpoint
            method: 'POST',
          }),
          onError: (error) => {
            console.error('Logout error:', error);
          },
        }),
  }),
});

// export const { usePostLoginMutation, usePostEmailMutation } = loginApi;
export const { usePostLoginMutation, useGetProductsQuery, usePostCartMutation, useGetComputersQuery, useGetFashionQuery, useGetHomeKitchenQuery, useGetMobilesQuery,useGetWatchesQuery,useGetEarBudsQuery,useGetPowerBankQuery, usePostLogoutMutation } = loginApi;