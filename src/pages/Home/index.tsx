import { useState } from 'react'

import { Button, Text } from 'react-native'
import PokemonCard from '../../components/PokemonCard'

import * as Styled from './styles'

function Home() {
  const [count, setCount] = useState(0)
  return (
    <Styled.Container>
      <PokemonCard>
        <Text>count: {count}</Text>
        <Button title="click-me" onPress={() => setCount(count + 1)} />
      </PokemonCard>
    </Styled.Container>
  )
}

export default Home
