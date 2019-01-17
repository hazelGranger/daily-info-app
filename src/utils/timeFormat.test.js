import { getYMD, getLastDays, getDateBefore } from './timeFormat'

jest.useFakeTimers()
Date.now = jest.fn(() => 1547694465104)// mock the date as 2019-01-17

test('getYMD', () => {
  const date = getYMD(new Date('1995-02-07T03:24:00'))
  expect(date).toBe('1995-02-07')
  const date1 = getYMD(new Date('2019-11-03T03:24:00'))
  expect(date1).toBe('2019-11-03')
})

test('getLastDays', () => {
  const amount = 7
  const lastDays = getLastDays(amount)
  expect(lastDays).toEqual([
    '2019-01-11',
    '2019-01-12',
    '2019-01-13',
    '2019-01-14',
    '2019-01-15',
    '2019-01-16',
    '2019-01-17'
  ])
})

test('getDateBefore', () => {
  const amount = 14
  const dateBefore = getDateBefore(amount)
  expect(dateBefore).toBe('2019-01-03')
})
