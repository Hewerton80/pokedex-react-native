import { spacings } from '../../../styles/mainStyles'
import * as Styled from './styles'
import PokebollIcon from '../../icons/PokebollIcon'

function HomeHeader() {
  return (
    <Styled.Container>
      <PokebollIcon width={spacings[6]} height={spacings[8]} />
      <Styled.HemeHeaderTitle>Pokédex</Styled.HemeHeaderTitle>
    </Styled.Container>
  )
}

export default HomeHeader
