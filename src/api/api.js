import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

 export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pizza-and-desserts.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '31d0429662msh7d6af10f914e25fp1c0fd6jsnca7ac3ad6886');
      headers.set('X-RapidAPI-Host', 'pizza-and-desserts.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPizza: builder.query({
      query: () => `/pizzas`,
    }),
  }),
});

export const { useGetPizzaQuery } = api;
