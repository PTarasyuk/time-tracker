import { expect, it, vi } from 'vitest'
import { today, tomorrow } from '../src/time'

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

it.todo('gets end of hour date')

it.todo('checks if passed date is today')

it.todo('converts milliseconds to seconds')
