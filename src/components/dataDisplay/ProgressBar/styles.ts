import { Animated } from 'react-native'
import styled from 'styled-components/native'
import {
  colors,
  fontFamylies,
  fontSize,
  lineHeight,
  spacings,
} from '../../../styles/mainStyles'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  height: ${spacings[4]}px;
  overflow: hidden;
`

export const Label = styled.Text`
  font-size: ${fontSize.sm}px;
  line-height: ${lineHeight.sm}px;
  font-family: ${fontFamylies.Poppins_700Bold};
  width: 90px;
`

export const Value = styled.Text`
  color: ${colors.darkGray};
  font-size: ${fontSize.sm}px;
  line-height: ${lineHeight.sm}px;
  font-family: ${fontFamylies.Poppins_400Regular};
  width: 20px;
`

export const WrapperBar = styled.View`
  flex-direction: row;
  max-width: 100%;
  width: 100%;
  height: ${spacings[1]}px;
  margin-left: ${spacings[4]}px;
  border-radius: ${spacings[1]}px;
  overflow: hidden;
`

export const Bar = styled(Animated.View)`
  position: absolute;
  flex-direction: row;
  height: 100%;
`
