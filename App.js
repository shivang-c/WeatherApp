import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { ActivityIndicator, StyleSheet, View,} from 'react-native';
import Error from './src/screens/Error';
import { useGetWeather } from './hooks/useGetWeather';

const App = () => {
  const { error, loading, weather } = useGetWeather();
  
  if(error !== null) {
    return <Error error = {error} />
  } else if(loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  } else if(!loading) {
    return (
      <NavigationContainer>
        <Tabs weather = {weather}/>
      </NavigationContainer>
    )
  } else return null;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App