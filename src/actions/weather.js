import axios from 'axios'

// action types
export const LOAD_WEATHER = 'LOAD_WEATHER'
export const FETCH_WEATHER_DATA = 'GET_WEATHER_DATA'

const WEATHER_DATA_METSERVICE = '/api/weather'

export const fetchWeatherData = () => {
  return async (dispatch) => {
    const res = await axios.get(WEATHER_DATA_METSERVICE)
    dispatch(loadWeather(res.data))
  }
}

export const loadWeather = (weather) => (
  { type: LOAD_WEATHER, weather}
)
