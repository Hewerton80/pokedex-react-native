import styled from 'styled-components/native'
import {
  colors,
  fontFamylies,
  fontSize,
  lineHeight,
  spacings,
} from '../../../styles/mainStyles'

export const Container = styled.Text`
  font-size: ${fontSize.xl}px;
  line-height: ${lineHeight.xl}px;
  font-family: ${fontFamylies.Poppins_700Bold};
  color: ${colors.white};
  border-radius: ${spacings[2.5]}px;
  padding: ${spacings[0.5]}px ${spacings[2]}px;
`
