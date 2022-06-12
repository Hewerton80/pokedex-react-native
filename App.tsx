import Routers from './src/Route'
import * as theme from './src/styles/mainStyles'
import { ThemeProvider } from 'styled-components'
import AnimatedAppLoader from './src/components/feedBack/AnimatedAppLoader'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AnimatedAppLoader>
        <Routers />
      </AnimatedAppLoader>
    </ThemeProvider>
  )
}
