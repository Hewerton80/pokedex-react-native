import { Image, ViewProps } from 'react-native'
import { IPokemon } from '../../../types/Pokemon'
import { PokemonTypeName } from '../../../types/PokemonType'
import * as Styled from './styles'

interface PokemonCardProps extends ViewProps {
  pokemon?: IPokemon
  isLoading?: boolean
  type?: PokemonTypeName
}

function PokemonCard({ ...props }: PokemonCardProps) {
  return (
    <Styled.Container>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${1}.png`,
        }}
        style={{ width: '100%', height: '100%' }}
      />
      <Styled.PokemonName>Bulbasaur</Styled.PokemonName>
    </Styled.Container>
  )
}

export default PokemonCard
