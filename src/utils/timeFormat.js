export const getYMD = (date) =>{
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

export const getLastDays = (amount) => {
  let lastDays = []
  for (let i = amount-1; i > -1; i--) {
    let date = new Date()
    date.setDate(date.getDate() - i)
    lastDays.push(getYMD(date))
  }
  return lastDays
}

export const getDateBefore  = (amount) => {
  let date = new Date()
  date.setDate(date.getDate() - amount)
  return getYMD(date)
}
