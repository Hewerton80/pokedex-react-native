import styled from 'styled-components/native'
import { colors, fontSize, lineHeight, spacings } from '../../../styles/mainStyles'
import { Dimensions } from 'react-native'

const gap = spacings[2]
const numCols = 2
const paddingHorizontalWindow = spacings[6]

const widthWindow = Dimensions.get('window').width
const widthWindowSubtractedFromGapAndHorizontalPadding =
  widthWindow - (gap * numCols - 1) - paddingHorizontalWindow * 2

export const widthCard = widthWindowSubtractedFromGapAndHorizontalPadding / numCols
export const heightCard = (112 * widthCard) / 104

const heightBackGroundText = spacings[8]

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: ${spacings[2]}px;
  margin-top: ${spacings[2]}px;
  background-color: azure;
  width: ${widthCard}px;
  height: ${heightCard}px;
  border-width: 1px;
  border-style: solid;
  border-radius: ${spacings[2]}px;
  overflow: hidden;
`

export const ImgWrapper = styled.View`
  height: ${heightCard - heightBackGroundText}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${spacings[4]}px;
`
export const PokemonName = styled.Text`
  margin-top: auto;
  height: ${heightBackGroundText}px;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize.lg}px;
  font-family: 'Poppins_700Bold';
  line-height: ${lineHeight.sm}px;
  color: ${colors.white};
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${spacings[2]}px 0;
`
