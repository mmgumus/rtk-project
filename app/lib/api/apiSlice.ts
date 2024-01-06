// api/apiSlice.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
   endpoints: (builder) => ({
      getPokemonList: builder.query<PokemonListing, void>({
         query() {
            return {
               url: '/pokemon',
               params: {
                  limit: 9,
               },
            };
         },
      }),
      getPokemonDetail: builder.query<PokemonDetailData, { name: string }>({
         query: ({ name }) => `/pokemon/${name}`,
      }),
   }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailQuery } = apiSlice;
