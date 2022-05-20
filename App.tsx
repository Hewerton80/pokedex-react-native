import { StatusBar } from 'expo-status-bar'
import Routers from './src/Route'
import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins'

export default function App() {
  const [loaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })
  if (!loaded) {
    return <></>
  }
  return (
    <>
      <StatusBar style="auto" />
      <Routers />
    </>
  )
}
