import styled from 'styled-components/native'
import { colors, fontSize, lineHeight, spacings } from '../../../styles/mainStyles'
import { Dimensions } from 'react-native'

const widthWindow = Dimensions.get('window').width
const widthCard = widthWindow / 3
const heightCard = (112 * widthCard) / 104
export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: azure;
  align-items: center;
  width: ${widthCard}px;
  height: ${heightCard}px;
  border: 1px solid ${colors.grass};
  border-radius: ${spacings[2]}px;
  overflow: hidden;
`
export const PokemonName = styled.Text`
  margin-top: auto;
  background-color: ${colors.grass};
  height: ${spacings[8]}px;
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
