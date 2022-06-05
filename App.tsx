import Routers from './src/Route'
import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins'
import { fontFamylies } from './src/styles/mainStyles'
import { Text } from 'react-native'

export default function App() {
  const [loaded] = useFonts({
    [fontFamylies.Poppins_400Regular]: Poppins_400Regular,
    [fontFamylies.Poppins_700Bold]: Poppins_700Bold,
  })
  if (!loaded) {
    return <></>
  }
  return (
    <>
      <Routers />
    </>
  )
}
