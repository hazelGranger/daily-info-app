import {
  CLOSE_NOTIFICATION,
  ADD_TO_QUEUE,
  PROCESS_QUEUE
} from '../actions/notification'

const initState = {
  queue: [],
  message: {},
  open: false
}
// reducer
const notification = (state=initState, action) => {
  switch (action.type) {
    case CLOSE_NOTIFICATION:
      return { ...state, open: false }
    case ADD_TO_QUEUE:
      return { ...state, queue: [...state.queue, action.message]}
    case PROCESS_QUEUE:
      return state.queue.length > 0 ?
      { ...state, message: state.queue.shift(), open: true } : state
    default:
      return state
  }
}

export default notification
