'use client';
import React from 'react';
import { useGetPokemonDetailQuery } from '../lib/api/apiSlice';

const PokemonDetail = ({ pokemonName }: { pokemonName: string }) => {
   const { isUninitialized, isLoading, isError, isSuccess, data } =
      useGetPokemonDetailQuery({ name: pokemonName });

   if (isLoading || isUninitialized) {
      return <div>Loading...</div>;
   }
   if (isError) {
      return <div>something went wrong </div>;
   }
   const listFormatter = new Intl.ListFormat('en-GB', {
      style: 'short',
      type: 'conjunction',
   });
   return (
      <article>
         <h2>{data.name}</h2>
         <ul>
            <li>id: {data.id}</li>
            <li>height: {data.height}</li>
            <li>weight: {data.weight}</li>
            <li>
               types:
               {listFormatter.format(data.types.map((item) => item.type.name))}
            </li>
         </ul>
      </article>
   );
};

export default PokemonDetail;
