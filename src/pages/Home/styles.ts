import styled from 'styled-components/native'
import { colors, spacings } from '../../styles/mainStyles'

export const Container = styled.View`
  background-color: ${colors.backGround};
  padding: 0 ${spacings[6]}px;
`

export const ContainerInner = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: ${-spacings[1]}px;
  margin-top: ${-spacings[2]}px;
  padding-bottom: ${spacings[40]}px;
`
