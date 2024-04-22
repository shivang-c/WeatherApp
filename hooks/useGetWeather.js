import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])

  const fetchWeatherData = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
      const data = await res.json()
      if (data.cod != 200) {
        const errorMessage = {
          code: data.cod,
          message: data.message
        }
        throw errorMessage
      }
      setWeather(data)
    } catch (e) {
      const errorMessage = {
        code: e.code,
        message: e.message
      }
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        const errorMessage = {
          code: '000',
          message: 'Permission to access location was denied!'
        }
        setError(errorMessage)
        setLoading(false)
        return
      }
      const location = await Location.getCurrentPositionAsync({})
      await fetchWeatherData(
        location.coords.latitude,
        location.coords.longitude
      )
    })()
  }, [])

  return {loading, error, weather};
}
