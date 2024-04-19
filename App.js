import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from './src/screens/UpcomingWeather';
import City from './src/screens/City';

const App = () => {
  return (
    <SafeAreaProvider style = {styles.container}>
      <UpcomingWeather />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App