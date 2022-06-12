import * as Font from 'expo-font'
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { View, Animated, StyleSheet } from 'react-native'
import { useAssets } from 'expo-asset'
import Constants from 'expo-constants'
import SplashImagePath from '../../../assets/splash.png'
import { fontFamylies } from '../../styles/mainStyles'

console.log('constants: ', Constants?.manifest?.splash?.image)

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
})

interface AnimatedAppLoaderProps {
  children?: any
}

interface AnimatedSplashScreenProps extends AnimatedAppLoaderProps {
  image: { uri: string }
}

function AnimatedAppLoader({ children }: AnimatedAppLoaderProps) {
  const [isSplashReady, setSplashReady] = useState(false)
  // console.log('splashImagePath: ', splashImagePath)

  const [assets, error] = useAssets([SplashImagePath])

  useEffect(() => {
    if (Array.isArray(assets)) {
      // console.log('assets: ', assets[0].uri)
      setSplashReady(true)
    }
  }, [assets])

  useEffect(() => {
    console.log('error: ', error)
    if (error) {
      setSplashReady(true)
    }
  }, [error])

  if (!isSplashReady) {
    return <></>
  }

  return (
    <AnimatedSplashScreen image={{ uri: String(assets?.[0]?.uri) }}>
      {children}
    </AnimatedSplashScreen>
  )
}

function AnimatedSplashScreen({ children, image }: AnimatedSplashScreenProps) {
  const animation = useMemo(() => new Animated.Value(1), [])
  const [isAppReady, setAppReady] = useState(false)
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true))
    }
  }, [isAppReady])

  const onImageLoaded = useCallback(async () => {
    try {
      console.log('loading...')
      await SplashScreen.hideAsync()
      // Load stuff
      await Promise.all([
        Font.loadAsync({
          [fontFamylies.Poppins_400Regular]: Poppins_400Regular,
          [fontFamylies.Poppins_700Bold]: Poppins_700Bold,
        }),
      ])
    } catch (e) {
      // handle errors
      console.warn(e)
    } finally {
      console.log('loaded!')

      setAppReady(true)
    }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants?.manifest?.splash?.backgroundColor,
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: Constants?.manifest?.splash?.resizeMode || 'contain',
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  )
}

export default AnimatedAppLoader
