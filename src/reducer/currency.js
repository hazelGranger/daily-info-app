// reducer
const initState = {
  bank: 'BC',
  country: 'NZD',
  rates: []
}

const currency = (state=initState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE_ITEM':
      return state
    default:
      return state
  }
}

export default currency
