import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'

import config from './aws-exports'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'

function App() {
  // const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  // if (!isLoadingComplete) {
  //   return null
  // } else {
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  )
  // }
}
export default withAuthenticator(App)
