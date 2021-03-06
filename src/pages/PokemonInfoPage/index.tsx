import { useNavigation, useRoute } from '@react-navigation/native'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { Animated, Image, View, StatusBar as NativeStatusBar, Easing } from 'react-native'
import usePokemon from '../../hooks/usePokemon'
import { pokemonTheme } from '../../styles/pokemonTheme'
import * as Styled from './styles'
import { colors, lineHeight, spacings } from '../../styles/mainStyles'
import { StatusBar } from 'expo-status-bar'
import ArrowLeftIcon from '../../assets/images/arrow-left.svg'
import PokebollIcon from '../../components/icons/PokebollIcon'
import PokemonBadge from '../../components/layout/PokemonBadge'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirtLetter'
import WeightIcon from '../../assets/images/weight.png'
import HeighttIcon from '../../assets/images/height.png'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types/Navigation'
import ProgressBar from '../../components/dataDisplay/ProgressBar'

type PokemonInfoPageProps = NativeStackScreenProps<RootStackParamList, 'PokemonInfoPage'>

const StatusBarHeight = NativeStatusBar.currentHeight
  ? Number(NativeStatusBar.currentHeight)
  : 0
function PokemonInfoPage() {
  const { getPokemonById, pokemon, isLoading } = usePokemon()
  const route = useRoute<PokemonInfoPageProps['route']>()
  const navigation = useNavigation<PokemonInfoPageProps['navigation']>()

  const rotateAnimation = useRef(new Animated.Value(0)).current

  const startRotateAnimation = useCallback(() => {
    rotateAnimation.setValue(0)
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startRotateAnimation())
  }, [])

  useEffect(() => {
    if (!isLoading && pokemon?.id) {
      startRotateAnimation()
    }
  }, [isLoading, pokemon, startRotateAnimation])

  const pokemonId = useMemo(() => {
    return route.params.pokemonId
  }, [route])

  const themeColor = useMemo(
    () =>
      pokemon?.id ? pokemonTheme[pokemon?.types![0]?.name!].color : colors.backGround,
    [pokemon]
  )

  const pokemonIdText = useMemo(() => String(pokemonId).padStart(3, '0'), [pokemonId])

  useEffect(() => {
    if (pokemonId) {
      getPokemonById(pokemonId)
    }
  }, [pokemonId, getPokemonById])

  const handleGoBak = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  return (
    <>
      <StatusBar backgroundColor={themeColor} style="light" />
      {!isLoading && pokemon?.id && (
        <Styled.Container style={{ backgroundColor: themeColor }}>
          <Styled.Header>
            <Styled.HeaderGoBackButton onPress={() => handleGoBak()}>
              <ArrowLeftIcon />
            </Styled.HeaderGoBackButton>
            <Styled.HeaderTitle>
              {capitalizeFirstLetter(pokemon?.name)}
            </Styled.HeaderTitle>
            <Styled.HeaderId>#{pokemonIdText}</Styled.HeaderId>
          </Styled.Header>
          <Styled.PokebollIconWrapper
            style={{
              transform: [
                {
                  rotate: rotateAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            }}
          >
            <PokebollIcon color={colors.white} style={{ zIndex: 1 }} />
          </Styled.PokebollIconWrapper>

          <Styled.PokemonCardInfo>
            <Styled.ImgWrapper>
              <Image
                source={{
                  uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonIdText}.png`,
                }}
                style={{ width: '100%', height: '100%', zIndex: 5 }}
              />
            </Styled.ImgWrapper>
            <Styled.PokemonInfoWrapper>
              {pokemon?.types?.map((type) => (
                <PokemonBadge
                  key={type.name}
                  type={type.name!}
                  style={{ marginHorizontal: spacings[2] }}
                />
              ))}
            </Styled.PokemonInfoWrapper>
            <Styled.TitleInfoPokemon style={{ color: themeColor }}>
              About
            </Styled.TitleInfoPokemon>
            <Styled.PokemonInfoWrapper>
              <Styled.PokemonAboutInfoColumn>
                <Styled.PokemonAboutInfoColumnInner>
                  <Image source={WeightIcon} />
                  <Styled.PokemonAboutInfoColumnValueText>
                    {pokemon?.weight! / 10} kg
                  </Styled.PokemonAboutInfoColumnValueText>
                </Styled.PokemonAboutInfoColumnInner>
                <Styled.PokemonAboutInfoColumnText>
                  Weight
                </Styled.PokemonAboutInfoColumnText>
              </Styled.PokemonAboutInfoColumn>

              <Styled.PokemonAboutInfoColumn>
                <Styled.PokemonAboutInfoColumnInner>
                  <Image source={HeighttIcon} />
                  <Styled.PokemonAboutInfoColumnValueText>
                    {pokemon?.height! / 10} m{/* {'0,7'} m */}
                  </Styled.PokemonAboutInfoColumnValueText>
                </Styled.PokemonAboutInfoColumnInner>
                <Styled.PokemonAboutInfoColumnText>
                  Height
                </Styled.PokemonAboutInfoColumnText>
              </Styled.PokemonAboutInfoColumn>

              <Styled.PokemonAboutInfoColumn>
                {pokemon?.abilities?.map((ability) => (
                  <Styled.PokemonAboutInfoColumnValueText
                    key={ability.name}
                    style={{ lineHeight: lineHeight.xs }}
                  >
                    {capitalizeFirstLetter(ability.name)}
                  </Styled.PokemonAboutInfoColumnValueText>
                ))}
                {/* <Styled.PokemonAboutInfoColumnValueText>
                  Chlorophyll
                </Styled.PokemonAboutInfoColumnValueText> */}
                <Styled.PokemonAboutInfoColumnText>
                  Moves
                </Styled.PokemonAboutInfoColumnText>
              </Styled.PokemonAboutInfoColumn>
            </Styled.PokemonInfoWrapper>
            <Styled.TitleInfoPokemon style={{ color: themeColor }}>
              Base Stats
            </Styled.TitleInfoPokemon>
            <View
              style={{
                maxWidth: 352,
                width: '100%',
                paddingHorizontal: spacings[2],
              }}
            >
              {pokemon?.stats?.map((stat, i) => (
                <ProgressBar
                  key={'start' + i}
                  label={stat?.name!}
                  max={235}
                  themeColor={themeColor}
                  value={stat?.base_stat!}
                  style={{ marginBottom: spacings[1] }}
                />
              ))}
            </View>
          </Styled.PokemonCardInfo>
        </Styled.Container>
      )}
    </>
  )
}

export default PokemonInfoPage
