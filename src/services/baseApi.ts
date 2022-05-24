import axios from 'axios'

export const baseApi = axios.create({
  baseURL: 'https://pokedex-nextjs-tailwind-graphql.vercel.app/api',
})
