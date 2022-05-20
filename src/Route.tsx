import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/Home'
import { PagesEnum } from './utils/pagesEnum'

const Stack = createNativeStackNavigator()

export default function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={PagesEnum.Home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}