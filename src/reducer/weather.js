import { LOAD_WEATHER } from '../actions/weather'

const initState = {
  weather: []
}

const weather = (state=initState, action) => {
  switch (action.type) {
    case LOAD_WEATHER:
      return {...state, state.weather}
    default:
      return state
  }
}

export default weather
