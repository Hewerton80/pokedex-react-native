import { Animated, Dimensions, StatusBar } from 'react-native'
import styled, { css } from 'styled-components/native'
import { spacings } from '../../styles/mainStyles'

const heightHeader = spacings[8]
const StatusBarHeight = StatusBar.currentHeight ? Number(StatusBar.currentHeight) : 0

const widthWindow = Dimensions.get('window').width
const sizeImage = widthWindow * 0.555

export const Container = styled.SafeAreaView`
  ${({ theme: { spacings } }) => css`
    position: relative;
    flex: 1;
    padding: 0 ${spacings[2]}px ${spacings[1]}px ${spacings[2]}px;
  `}
`

export const Header = styled.SafeAreaView`
  ${({ theme: { spacings } }) => css`
    position: relative;
    flex-direction: row;
    align-items: center;
    margin-top: ${spacings[6] + StatusBarHeight}px;
    padding: 0 ${spacings[3.5]}px;
    height: ${heightHeader}px;
    margin-bottom: ${spacings[40]}px;
  `}
`

export const HeaderTitle = styled.Text`
  ${({ theme: { fontSize, lineHeight, fontFamylies, colors, spacings } }) => css`
    font-size: ${fontSize.xll}px;
    line-height: ${lineHeight.xl}px;
    font-family: ${fontFamylies.Poppins_700Bold};
    color: ${colors.white};
    margin-left: ${spacings[4]}px;
  `}
`
export const HeaderId = styled.Text`
  ${({ theme: { fontSize, lineHeight, fontFamylies, colors } }) => css`
    font-size: ${fontSize.xl}px;
    line-height: ${lineHeight.xl}px;
    font-family: ${fontFamylies.Poppins_700Bold};
    color: ${colors.white};
    margin-left: auto;
  `}
`

export const HeaderGoBackButton = styled.TouchableOpacity``

export const PokebollIconWrapper = styled(Animated.View)`
  ${({ theme: { spacings } }) => css`
    position: absolute;
    width: ${spacings[52]}px;
    height: ${spacings[52]}px;
    opacity: 0.1;
    top: ${StatusBarHeight}px;
    right: ${spacings[2]}px;
    z-index: -1;
  `}
`

export const ImgWrapper = styled.View`
  ${({ theme: { spacings } }) => css`
    margin-top: ${-spacings[36]}px;
    height: ${sizeImage}px;
    width: ${sizeImage}px;
  `}
`

export const PokemonCardInfo = styled.View`
  ${({ theme: { spacings, colors } }) => css`
    flex: 1;
    align-items: center;
    background-color: ${colors.white};
    border-radius: ${spacings[2]}px;
  `}
`

export const PokemonInfoWrapper = styled.View`
  ${({ theme: { spacings } }) => css`
    flex-direction: row;
    justify-content: center;
    margin-bottom: ${spacings[4]}px;
  `}
`

export const TitleInfoPokemon = styled.Text`
  ${({ theme: { lineHeight, fontFamylies, fontSize, spacings } }) => css`
    font-size: ${fontSize.xll}px;
    font-family: ${fontFamylies.Poppins_700Bold};
    line-height: ${lineHeight.xl}px;
    margin-bottom: ${spacings[4]}px;
  `}
`

export const PokemonAboutInfoColumn = styled.View`
  ${({ theme: { spacings } }) => css`
    justify-content: center;
    align-items: center;
    width: ${84}px;
    height: ${spacings[12]}px;
    margin-bottom: ${spacings[2]}px;
    /* background-color: red; */
  `}
`

export const PokemonAboutInfoColumnInner = styled.View`
  flex-direction: row;
`

export const PokemonAboutInfoColumnValueText = styled.Text`
  ${({ theme: { colors, fontFamylies, fontSize, spacings } }) => css`
    font-size: ${fontSize.sm}px;
    line-height: ${20}px;
    font-family: ${fontFamylies.Poppins_400Regular};
    color: ${colors.darkGray};
    margin-left: ${spacings[2]}px;
  `}
`

export const PokemonAboutInfoColumnText = styled.Text`
  ${({ theme: { colors, fontFamylies, fontSize } }) => css`
    font-size: ${fontSize.sm}px;
    line-height: ${20}px;
    font-family: ${fontFamylies.Poppins_400Regular};
    color: ${colors.medium};
    margin-top: auto;
  `}
`
