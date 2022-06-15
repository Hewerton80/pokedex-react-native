import { RFValue } from 'react-native-responsive-fontsize'
import { Dimensions } from 'react-native'

const heightWindow = Dimensions.get('window').height

export const colors = {
  darkGray: '#212121',
  medium: '#666666',
  lightGray: '#e0e0e0',
  white: '#ffffff',
  backGround: '#f7f7f7',
  rock: '#b69e31',
  ghost: '#70559b',
  steel: '#b7b9f0',
  water: '#6493eb',
  grass: '#74cb48',
  normal: '#aaa67f',
  fighting: '#c12239',
  flying: '#a891ec',
  poison: '#a43e9e',
  ground: '#dec169',
  psychic: '#fb5584',
  ice: '#9ad6df',
  dark: '#75574c',
  fairy: '#e69eac',
  bug: '#a7b723',
  fire: '#f57f31',
  electric: '#F9CF30',
  dragon: '#7037ff',
}

// export const fontSize = {
//   xs: 8,
//   sm: 10,
//   lg: 12,
//   xl: 14,
//   xll: 24,
// }
export const fontSize = {
  xs: RFValue(8, heightWindow),
  sm: RFValue(10, heightWindow),
  lg: RFValue(12, heightWindow),
  xl: RFValue(14, heightWindow),
  xll: RFValue(24, heightWindow),
}

export const lineHeight = {
  xs: RFValue(12, heightWindow),
  sm: RFValue(16, heightWindow),
  lg: RFValue(18, heightWindow),
  xl: RFValue(32, heightWindow),
}

export const spacings = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
}

export const fontFamylies = {
  Poppins_400Regular: 'Poppins_400Regular',
  Poppins_700Bold: 'Poppins_700Bold',
}
