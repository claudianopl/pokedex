/* eslint-disable consistent-return */
import { toast } from 'react-toastify';
import { api } from '../api';
import {
  getAllPokemonFactory,
  getFilterPokemonFactory,
  getOnePokemonFactory,
  getPokemonSpeciesFactory,
  getSearchPokemonFactory,
  getTypesPokemonFactory,
} from '../factory/pokemonFactory';

export const getTypesPokemon = async (id: string): Promise<any> => {
  const res = await api.get(`/pokemon/${id}`);

  return getTypesPokemonFactory(res.data);
};

export const getPokemonSpecies = async (id: string): Promise<any> => {
  const res = await api.get(`/pokemon-species/${id}`);

  return getPokemonSpeciesFactory(res.data.flavor_text_entries);
};

export const getAllPokemon = async (
  page: number,
  limit: number,
): Promise<any> => {
  const res = await api.get('/pokemon/', {
    params: {
      limit,
      offset: page,
    },
    validateStatus: (status: number): any => {
      if (status >= 200 && status < 300) {
        return status;
      }
      if (status >= 400 && status < 500) {
        toast.error('Pokémons não encontrados.');
      } else if (status >= 500) {
        toast.error('Infelizmente, algo deu errado.');
      }
    },
  });

  return getAllPokemonFactory(res.data);
};

export const getSearchPokemon = async (name: string): Promise<any> => {
  const res = await api.get(`/pokemon/${name.toLowerCase()}`, {
    validateStatus: (status: number): any => {
      if (status >= 200 && status < 300) {
        return status;
      }
      if (status >= 400 && status < 500) {
        toast.error('Pokémon não encontrado.');
      } else if (status >= 500) {
        toast.error('Infelizmente, algo deu errado.');
      }
    },
  });

  return getSearchPokemonFactory(res.data);
};

export const getFilterPokemon = async (type: string): Promise<any> => {
  const res = await api.get(`/type/${type}`, {
    validateStatus: (status: number): any => {
      if (status >= 200 && status < 300) {
        return status;
      }
      if (status >= 400 && status < 500) {
        toast.error('Pokémons não encontrados.');
      } else if (status >= 500) {
        toast.error('Infelizmente, algo deu errado.');
      }
    },
  });

  return getFilterPokemonFactory(res.data.pokemon);
};

export const getOnePokemon = async (id: string): Promise<any> => {
  const res = await api.get(`/pokemon/${id}`, {
    validateStatus: (status: number): any => {
      if (status >= 200 && status < 300) {
        return status;
      }
      if (status >= 400 && status < 500) {
        toast.error('Pokémon não encontrado.');
      } else if (status >= 500) {
        toast.error('Infelizmente, algo deu errado.');
      }
    },
  });

  return getOnePokemonFactory(res.data);
};
