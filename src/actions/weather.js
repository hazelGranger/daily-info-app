import axios from 'axios'

// action types
export const LOAD_WEATHER = 'LOAD_WEATHER'
export const FETCH_WEATHER_DATA = 'GET_WEATHER_DATA'

const WEATHER_DATA_METSERVICE = 'https://www.metservice.com/publicData/mainPageW'

export const fetchWeatherData = () => {
  return async (dispatch) => {
    const res = axios.get(WEATHER_DATA_METSERVICE)
    console.log(res);
    dispatch(loadWeather(res))
  }
}

export const loadWeather = (weather) => (
  { type: LOAD_WEATHER, weather}
)
