const API_KEY = 'fd5019452695be9557a5e67f2c2fa6b2'

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather () {
  return {
    type: FETCH_WEATHER
  }
}
