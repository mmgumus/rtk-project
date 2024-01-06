'use client';
import Image from 'next/image';
import React from 'react';
import PokemonDetail from './ui/PokemonDetail';
import Providers from './lib/api/Provider';
import PokemonList from './ui/PokemonList';
import { Button } from '@/components/ui/button';

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
                  <div className="flex flex-col px-4 py-4 text-2xl">
                     <PokemonDetail pokemonName={selectedPokemon} />
                     <Button
                        className="text-xl justify-center items-center mt-4 "
                        onClick={() => selectPokemon(undefined)}
                     >
                        back
                     </Button>
                  </div>
               </>
            ) : (
               <PokemonList onPokemonSelected={selectPokemon} />
            )}
         </div>
      </>
   );
}
