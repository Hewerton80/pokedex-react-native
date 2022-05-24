import { useMemo } from 'react'
import { Image, ViewProps } from 'react-native'
import { colors } from '../../../styles/mainStyles'
import { IPokemon } from '../../../types/Pokemon'
import { PokemonTypeName } from '../../../types/PokemonType'
import * as Styled from './styles'
import { pokemonTheme } from './theme'
// import { SvgUri } from 'react-native-svg'
interface PokemonCardProps extends ViewProps {
  pokemon?: IPokemon
  isLoading?: boolean
  type?: PokemonTypeName
}

function PokemonCard({ pokemon, ...props }: PokemonCardProps) {
  const pokemonId = useMemo(() => String(pokemon?.id).padStart(3, '0'), [pokemon])
  const themeColor = useMemo(
    () => pokemonTheme[pokemon?.types![0]?.name!].color,
    [pokemon]
  )
  return (
    <Styled.Container style={{ borderColor: themeColor }}>
      <Styled.ImgWrapper>
        {/* <SvgUri
          uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${40}.svg`}
          width="100%"
          height="100%"
        /> */}
        <Image
          source={{
            // uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${1}.png`,
            uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`,
          }}
          style={{ width: '100%', height: '100%' }}
        />
      </Styled.ImgWrapper>
      <Styled.PokemonName style={{ backgroundColor: themeColor }}>
        {pokemon?.name}
      </Styled.PokemonName>
    </Styled.Container>
  )
}

export default PokemonCard
