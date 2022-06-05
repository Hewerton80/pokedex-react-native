import { rgba } from 'polished'
import { ViewProps } from 'react-native'
import { isObject } from '../../../utils/isType'

import * as Styled from './styles'

interface ProgressBarProps extends ViewProps {
  label: string
  value: number
  max: number
  themeColor: string
}

function ProgressBar({ label, value, max, themeColor, ...restProps }: ProgressBarProps) {
  const width = `${(value / max) * 100}%`

  return (
    <Styled.Container {...(isObject(restProps) ? (restProps as object) : {})}>
      <Styled.Label style={{ color: themeColor }}>{label}</Styled.Label>
      <Styled.Value>{String(value).padStart(3, '0')}</Styled.Value>
      <Styled.WrapperBar style={{ backgroundColor: rgba(themeColor, 0.2) }}>
        <Styled.Bar style={{ backgroundColor: themeColor, maxWidth: '100%', width }} />
      </Styled.WrapperBar>
    </Styled.Container>
  )
}

export default ProgressBar
