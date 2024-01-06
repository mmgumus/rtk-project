'use client';
import Image from 'next/image';
import React from 'react';
import PokemonDetail from './ui/PokemonDetail';
import Providers from './lib/api/Provider';
import PokemonList from './ui/PokemonList';

export default function Home() {
   const [selectedPokemon, selectPokemon] = React.useState<string | undefined>(
      undefined
   );

   return (
      <>
         <header>
            <div className="flex text-6xl items-center justify-center">
               My Pokedx
            </div>
         </header>
         <div className="flex ">
            {selectedPokemon ? (
               <>
                  <PokemonDetail pokemonName={selectedPokemon} />
                  <button onClick={() => selectPokemon(undefined)}>back</button>
               </>
            ) : (
               <PokemonList onPokemonSelected={selectPokemon} />
            )}
         </div>
      </>
   );
}
