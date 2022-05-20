import { ViewProps } from 'react-native'
import * as Styled from './styles'

interface PokemonCardProps extends ViewProps {}

function PokemonCard({ children }: PokemonCardProps) {
  return <Styled.Container>{children}</Styled.Container>
}

export default PokemonCard
