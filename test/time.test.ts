import { expect, it, vi } from 'vitest'
import { MILLISECONDS_IN_SECOND } from '../src/constants'
import { endOfHour, isToday, today, tomorrow, toSeconds } from '../src/time'

it('gets current date', () => {
  const dateA = new Date('1990-01-01')
  const dateB = new Date('2025-10-07')
  const dateC = new Date('2030-05-12')

  vi.setSystemTime(dateA)
  expect(today()).toEqual(dateA)

  vi.setSystemTime(dateB)
  expect(today()).toEqual(dateB)

  vi.setSystemTime(dateC)
  expect(today()).toEqual(dateC)

  vi.useRealTimers()
})

it('gets date of tomorrow', () => {
  const dateA = new Date('1990-01-01')
  const tomorrowDateA = new Date('1990-01-02')

  const dateB = new Date('2025-10-07')
  const tomorrowDateB = new Date('2025-10-08')

  const dateC = new Date('2030-05-12')
  const tomorrowDateC = new Date('2030-05-13')

  vi.setSystemTime(dateA)
  expect(tomorrow()).toEqual(tomorrowDateA)

  vi.setSystemTime(dateB)
  expect(tomorrow()).toEqual(tomorrowDateB)

  vi.setSystemTime(dateC)
  expect(tomorrow()).toEqual(tomorrowDateC)

  vi.useRealTimers()
})

it('gets end of hour date', () => {
  const dateA = new Date('2024-04-10T10:15:00')
  const endOfHourDateA = new Date('2024-04-10T11:00:00')

  const dateB = new Date('2024-04-10T20:00:00')
  const endOfHourDateB = new Date('2024-04-10T21:00:00')

  const dateC = new Date('2024-04-10T23:59:00')
  const endOfHourDateC = new Date('2024-04-11T00:00:00')

  expect(endOfHour(dateA)).toEqual(endOfHourDateA)

  expect(endOfHour(dateB)).toEqual(endOfHourDateB)

  expect(endOfHour(dateC)).toEqual(endOfHourDateC)
})

it('checks if passed date is today', () => {
  const dateA = new Date('2024-01-01')
  const dateB = new Date('2024-01-02')

  vi.setSystemTime(dateA)

  expect(isToday(dateA)).toBe(true)
  expect(isToday(dateB)).toBe(false)

  vi.setSystemTime(dateB)

  expect(isToday(dateB)).toBe(true)
  expect(isToday(dateA)).toBe(false)

  vi.useRealTimers()
})

it('converts milliseconds to seconds', () => {
  expect(toSeconds(-MILLISECONDS_IN_SECOND * 10)).toBe(-10)
  expect(toSeconds(-MILLISECONDS_IN_SECOND * 1)).toBe(-1)
  expect(toSeconds(MILLISECONDS_IN_SECOND * 0)).toBe(0)
  expect(toSeconds(MILLISECONDS_IN_SECOND * 1)).toBe(1)
  expect(toSeconds(MILLISECONDS_IN_SECOND * 10)).toBe(10)
})
