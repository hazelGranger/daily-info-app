import { SET_TIME_FOR_EXPENSE } from '../actions/time'

// reducer

const initalState = {
  timeForExpense: {
    name: 'SHOW_LAST_DAYS',
    num: 7
  }
}

const time = (state=initalState, action) => {
  switch (action.type) {
    case SET_TIME_FOR_EXPENSE:
      return { ...state, timeForExpense: action.time }
    default:
      return state
  }
}

export default time
