import { useState } from 'react'

import { Button, StatusBar, Text } from 'react-native'
import PokemonCard from '../../components/layout/PokemonCard'
import { colors } from '../../styles/mainStyles'

import * as Styled from './styles'

function Home() {
  const [count, setCount] = useState(0)
  return (
    <Styled.Container>
      <StatusBar backgroundColor={colors.backGround} />
      <PokemonCard />
    </Styled.Container>
  )
}

export default Home
