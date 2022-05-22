import styled from 'styled-components/native'
import { colors, fontSize, lineHeight, spacings } from '../../../styles/mainStyles'
import { StatusBar } from 'react-native'

export const Container = styled.View`
  flex-direction: row;
  height: ${spacings[12]}px;
  margin-top: ${StatusBar.currentHeight}px;
  padding: 0 ${spacings[6]}px;
  align-items: center;
  background-color: ${colors.backGround};
`

export const HemeHeaderTitle = styled.Text`
  font-size: ${fontSize.xll}px;
  font-family: 'Poppins_700Bold';
  line-height: ${lineHeight.xl}px;
  margin-left: ${spacings[4]}px;
`
