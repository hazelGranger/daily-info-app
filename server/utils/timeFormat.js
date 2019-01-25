export const getYMD = (date) =>{
  let month = date.getMonth() + 1,
      day = date.getDate()

  if (month < 10) {
    month = '0' + (date.getMonth()+1)
  }

  if (day < 10) {
    day = '0' + (date.getDate())
  }

  return `${date.getFullYear()}-${month}-${day}`
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
