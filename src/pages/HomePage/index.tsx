import { useCallback, useEffect, useMemo, useState } from 'react'
import { ActivityIndicator, FlatList, ListRenderItem, View } from 'react-native'
import PokemonCard from '../../components/layout/PokemonCard'
import HomeHeader from '../../components/common/HomeHeader'
import usePokemon from '../../hooks/usePokemon'
import * as Styled from './styles'
import { IPokemon } from '../../types/Pokemon'
import { colors, spacings } from '../../styles/mainStyles'
import { StatusBar } from 'expo-status-bar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../types/Navigation'

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'HomePage'>

function HomePage() {
  const navigation = useNavigation<HomePageProps['navigation']>()
  const { pokemons, isLoading, getPokemons } = usePokemon()

  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getPokemons({ currentPage: 1 })
  }, [getPokemons])

  const [pokemonsCache, setPokemonsCache] = useState<IPokemon[]>([])

  const renderPokemonItem: ListRenderItem<IPokemon> = useMemo(
    () =>
      ({ item: pokemon, index }) => {
        return (
          <PokemonCard
            pokemon={pokemon}
            style={{ marginLeft: index % 2 === 0 ? 0 : spacings[2] }}
            onPress={() =>
              navigation.navigate('PokemonInfoPage', {
                pokemonId: String(pokemon?.id),
              })
            }
          />
        )
      },
    []
  )

  const renderPokemonFooter = useMemo(() => {
    if (!isLoading) return <></>
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size={40} color={colors.water} />
      </View>
    )
  }, [isLoading])

  useEffect(() => {
    setPokemonsCache((currentsPoekmonsCash) =>
      pokemons?.docs ? [...currentsPoekmonsCash, ...pokemons?.docs] : []
    )
  }, [pokemons])

  const handleGetMorePokemons = useCallback(() => {
    const nextPage = currentPage + 1
    getPokemons({ currentPage: nextPage })
    setCurrentPage(nextPage)
  }, [currentPage])

  useEffect(() => {
    console.log('currentPage: ', currentPage)
  }, [currentPage])

  const FlatListPokemonElement = useMemo(() => {
    if (!pokemonsCache.length) return <></>

    return (
      <FlatList
        data={pokemonsCache}
        renderItem={renderPokemonItem}
        keyExtractor={(pokemon) => String(pokemon?.id)}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: spacings[20] }}
        onEndReached={() => !isLoading && handleGetMorePokemons()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderPokemonFooter}
        removeClippedSubviews
      />
    )
  }, [
    renderPokemonFooter,
    pokemonsCache,
    isLoading,
    handleGetMorePokemons,
    renderPokemonItem,
  ])

  return (
    <>
      <StatusBar style="auto" />
      <Styled.Container>
        <HomeHeader />
        {FlatListPokemonElement}
      </Styled.Container>
    </>
  )
}

export default HomePage
