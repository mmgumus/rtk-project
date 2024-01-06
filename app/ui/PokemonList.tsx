import React from 'react';
import { useGetPokemonListQuery } from '../lib/api/apiSlice';
import { Button } from '@/components/ui/button';

function PokemonList({
   onPokemonSelected,
}: {
   onPokemonSelected: (pokemonName: string) => void;
}) {
   const { isUninitialized, isLoading, isError, isSuccess, data } =
      useGetPokemonListQuery();

   if (isLoading || isUninitialized) {
      return <p>loading, please wait</p>;
   }

   if (isError) {
      return <p>something went wrong</p>;
   }

   return (
      <div className="flex flex-col items-start justify-center space-y-4 py-4 ml-4 ">
         {data.results.map((pokemon) => (
            <button
               key={pokemon.name}
               className="bg-red-300 text-black-300 text-xl rounded px-6 py-2"
               onClick={() => onPokemonSelected(pokemon.name)}
            >
               {pokemon.name}
            </button>
         ))}
      </div>
   );
}

export default PokemonList;
