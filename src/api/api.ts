import axios from 'axios';

// A baseURL, deveria está contida dentro do env, porém, como é um desafio, resolvi não colocar dentro do env
export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});
