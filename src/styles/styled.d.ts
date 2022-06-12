import 'styled-components'

import * as theme from './mainStyles'

declare module 'styled-components' {
  type ThemeType = typeof theme
  export interface DefaultTheme extends ThemeType {}
}
