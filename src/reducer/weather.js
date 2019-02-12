import { LOAD_WEATHER } from '../actions/weather'

const initState = {
  nz: []
}

const weather = (state=initState, action) => {
  switch (action.type) {
    case LOAD_WEATHER:
      return {...state, nz: action.weather}
    default:
      return state
  }
}

export default weather
