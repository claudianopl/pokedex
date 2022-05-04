/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { extractIdUrl } from '../../utils/extractIdUrl';
import { getTypesPokemon } from '../services/pokemon';

export const getTypesPokemonFactory = (data: any): any => {
  const factory = data.types.map((type: any) => ({
    typeName: type.type.name,
  }));
  return factory;
};

export const getAllPokemonFactory = async (data: any): Promise<any> => {
  const factoryPokemon = await Promise.all(
    data.results.map(async (pokemon: any) => ({
      id: extractIdUrl(pokemon.url),
      name: pokemon.name,
      imageUrl: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${extractIdUrl(
        pokemon.url,
      )}.svg`,
      types: await getTypesPokemon(extractIdUrl(pokemon.url)),
    })),
  );

  const factory = {
    pokemons: factoryPokemon,
    qtdPokemons: data.count,
  };

  return factory;
};

export const getSearchPokemonFactory = (data: any): any => {
  const factory = {
    id: data.order,
    name: data.name,
    imageUrl: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.order}.svg`,
    types: data.types.map((type: any) => ({
      typeName: type.type.name,
    })),
  };

  return factory;
};

export const getFilterPokemonFactory = async (data: any): Promise<any> => {
  const factory = await Promise.all(
    data.map(async ({ pokemon }: any) => ({
      id: extractIdUrl(pokemon.url),
      name: pokemon.name,
      imageUrl: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${extractIdUrl(
        pokemon.url,
      )}.svg`,
      types: await getTypesPokemon(extractIdUrl(pokemon.url)),
    })),
  );

  return factory;
};
