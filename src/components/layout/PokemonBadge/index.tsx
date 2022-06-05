import { StyleProp, TextProps, TextStyle } from 'react-native'
import { pokemonTheme } from '../../../styles/pokemonTheme'
import { PokemonTypeName } from '../../../types/PokemonType'
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirtLetter'
import { isObject } from '../../../utils/isType'
import * as Styled from './styles'

interface PokemonBadgeProps extends TextProps {
  type: PokemonTypeName
}

function PokemonBadge({ type, style }: PokemonBadgeProps) {
  return (
    <Styled.Container
      style={{
        backgroundColor: pokemonTheme[type].color,
        ...(isObject(style) ? (style as object) : {}),
      }}
    >
      {capitalizeFirstLetter(type)}
    </Styled.Container>
  )
}
export default PokemonBadge
