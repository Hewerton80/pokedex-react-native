import type {
  CompositeScreenProps,
  //   NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
//   import type { StackScreenProps } from '@react-navigation/stack';
//   import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  HomePage: undefined
  PokemonInfoPage: { pokemonId: string }
}

// export type RootStackScreenProps<T extends keyof RootStackParamList> =
//   NativeStackScreenProps<RootStackParamList, T>

// // export type HomeTabParamList = {
// //   Popular: undefined
// //   Latest: undefined
// // }

// export type HomeTabScreenProps = CompositeScreenProps<
//   //   BottomTabScreenProps<HomeTabParamList, T>,
//   any,
//   NativeStackScreenProps<RootStackParamList>
// >

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }
