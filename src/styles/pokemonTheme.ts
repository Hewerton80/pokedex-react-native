import { colors } from './mainStyles'
import { PokemonTypeNameEnum } from '../types/PokemonType'

type IPokemonTheme = {
  [Property in keyof typeof PokemonTypeNameEnum]: {
    color: string
  }
}
export const pokemonTheme: IPokemonTheme = {
  normal: {
    color: colors.normal,
  },
  fighting: {
    color: colors.fighting,
  },
  flying: {
    color: colors.flying,
  },
  poison: {
    color: colors.poison,
  },
  ground: {
    color: colors.ground,
  },
  rock: {
    color: colors.rock,
  },
  bug: {
    color: colors.bug,
  },
  ghost: {
    color: colors.ghost,
  },
  steel: {
    color: colors.steel,
  },
  fire: {
    color: colors.fire,
  },
  water: {
    color: colors.water,
  },
  grass: {
    color: colors.grass,
  },
  electric: {
    color: colors.electric,
  },
  psychic: {
    color: colors.psychic,
  },
  ice: {
    color: colors.ice,
  },
  dragon: {
    color: colors.dragon,
  },
  dark: {
    color: colors.dark,
  },
  fairy: {
    color: colors.fairy,
  },
}
