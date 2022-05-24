import { useEffect } from 'react'
import { ScrollView } from 'react-native'
import PokemonCard from '../../components/layout/PokemonCard'
import HomeHeader from '../../components/common/HomeHeader'
import usePokemon from '../../hooks/usePokemon'

import * as Styled from './styles'

function Home() {
  const { pokemons, isLoading, getPokemons } = usePokemon()

  useEffect(() => {
    getPokemons({})
  }, [getPokemons])

  return (
    <>
      <Styled.Container>
        <HomeHeader />
        <ScrollView>
          <Styled.ContainerInner>
            {pokemons?.docs?.map((pokemon, i) => (
              <PokemonCard key={i + 'pokemon'} type="dragon" pokemon={pokemon} />
            ))}
          </Styled.ContainerInner>
        </ScrollView>
      </Styled.Container>
    </>
  )
}

export default Home
