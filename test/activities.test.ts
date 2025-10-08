import { describe, expect, it } from 'vitest'
import { calculateActivityCompletionPercentage, updateActivity } from '../src/activities'
import { HUNDRED_PERCENT, SECONDS_IN_HOUR } from '../src/constants'
import type { Activity } from '../src/types'

describe('updateActivity', () => {
  const originalActivity: Activity = {
    id: '1',
    name: 'Training',
    secondsToComplete: SECONDS_IN_HOUR * 1,
  }

  const updatedFields: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: SECONDS_IN_HOUR * 2,
  }

  it('updates original activity', () => {
    const activity: Activity = { ...originalActivity }

    updateActivity(activity, updatedFields)

    expect(activity).toEqual(updatedFields)
  })

  it('returns updated activity', () => {
    const activity: Activity = { ...originalActivity }

    expect(updateActivity(activity, updatedFields)).toEqual(updatedFields)
  })
})

it('calculate activity completion percentage', () => {
  const activity: Activity = {
    id: '1',
    name: 'Training',
    secondsToComplete: SECONDS_IN_HOUR * 1,
  }

  expect(calculateActivityCompletionPercentage(activity, SECONDS_IN_HOUR * 0)).toBe(
    HUNDRED_PERCENT * 0
  )
  expect(calculateActivityCompletionPercentage(activity, SECONDS_IN_HOUR * 0.5)).toBe(
    HUNDRED_PERCENT * 0.5
  )
  expect(calculateActivityCompletionPercentage(activity, SECONDS_IN_HOUR * 1)).toBe(
    HUNDRED_PERCENT * 1
  )
})
