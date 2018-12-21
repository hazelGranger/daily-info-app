// action types
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION'
export const ADD_TO_QUEUE = 'ADD_TO_QUEUE'
export const PROCESS_QUEUE = 'PROCESS_QUEUE'

export const showNotification = (message) => {
  return (dispatch, getState) => {
    dispatch(addToQueue({ ...message, key: new Date().getTime()}))
    if (getState().notification.open) {
      dispatch(closeNotification())
    } else {
      dispatch(processQueue())
    }
  }
}

export const closeNotification = () => {
  return { type: CLOSE_NOTIFICATION }
}

export const addToQueue = (message) => {
  return { type: ADD_TO_QUEUE, message }
}

export const processQueue = () => {
  return { type: PROCESS_QUEUE }
}
