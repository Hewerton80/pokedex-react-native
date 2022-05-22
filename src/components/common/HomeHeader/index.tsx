import { Image } from 'react-native'
import PokemonBollIcon from '../../../assets/images/Pokeball.png'
import { spacings } from '../../../styles/mainStyles'
import * as Styled from './styles'

function HomeHeader() {
  return (
    <Styled.Container>
      <Image
        source={PokemonBollIcon}
        style={{ width: spacings[6], height: spacings[8] }}
      />
      <Styled.HemeHeaderTitle>Pokédex</Styled.HemeHeaderTitle>
    </Styled.Container>
  )
}

export default HomeHeader
