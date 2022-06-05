import { useMemo } from 'react'
import { Image, TouchableOpacityProps } from 'react-native'
import { IPokemon } from '../../../types/Pokemon'
import * as Styled from './styles'
import { pokemonTheme } from '../../../styles/pokemonTheme'
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirtLetter'
import { isObject } from '../../../utils/isType'
// import { SvgUri } from 'react-native-svg'
interface PokemonCardProps extends TouchableOpacityProps {
  pokemon?: IPokemon
  isLoading?: boolean
}

function PokemonCard({ pokemon, isLoading, style, ...restProps }: PokemonCardProps) {
  const pokemonId = useMemo(() => String(pokemon?.id).padStart(3, '0'), [pokemon])
  const themeColor = useMemo(
    () => pokemonTheme[pokemon?.types![0]?.name!].color,
    [pokemon]
  )
  return (
    <Styled.Container
      style={{ borderColor: themeColor, ...(isObject(style) ? (style as object) : {}) }}
      {...(isObject(restProps) ? (restProps as object) : {})}
    >
      <Styled.ImgWrapper>
        <Styled.PokemonId style={{ color: themeColor }}>#{pokemonId}</Styled.PokemonId>
        {/* <SvgUri
          uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${40}.svg`}
          width="100%"
          height="100%"
        /> */}
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`,
            // uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`,
          }}
          style={{ width: '100%', height: '100%' }}
        />
      </Styled.ImgWrapper>
      <Styled.PokemonName style={{ backgroundColor: themeColor }}>
        {capitalizeFirstLetter(pokemon?.name)}
      </Styled.PokemonName>
    </Styled.Container>
  )
}

export default PokemonCard
