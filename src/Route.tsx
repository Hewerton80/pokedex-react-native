import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './pages/HomePage'
import PokemonInfoPage from './pages/PokemonInfoPage'
import { RootStackParamList } from './types/Navigation'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Routers() {
  return (
    <NavigationContainer>
      {/* @ts-ignore:next-line */}
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PokemonInfoPage"
          component={PokemonInfoPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
