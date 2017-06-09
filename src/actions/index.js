const API_KEY = 'fd5019452695be9557a5e67f2c2fa6b2'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`
  return {
    type: FETCH_WEATHER
  }
}
