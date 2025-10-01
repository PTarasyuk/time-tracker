import {
  HUNDRED_PERCENT,
  MILLISECONDS_IN_SECOND,
  SECONDS_IN_DAY,
  SECONDS_IN_HOUR,
} from '@/constants'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'

export const now: Ref<Date> = ref<Date>(today())

export const secondsSinceMidnightInPercentage = computed(
  (): number => (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY
)

const secondsSinceMidnight = computed(
  (): number => ((now.value as any) - midnight.value) / MILLISECONDS_IN_SECOND
)

const midnight = computed((): number => new Date(now.value).setHours(0, 0, 0, 0))

export function today(): Date {
  return new Date()
}

export function tomorrow(): Date {
  const tomorrow: Date = today()

  tomorrow.setDate(tomorrow.getDate() + 1)

  return tomorrow
}

export function endOfHour(date: Date): Date {
  const endOfHour: Date = new Date(date)

  endOfHour.setTime(endOfHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECOND)

  endOfHour.setMinutes(0, 0, 0)

  return endOfHour
}

export function isToday(date: Date): boolean {
  return date.toDateString() === today().toDateString()
}

export function toSeconds(milliseconds: number): number {
  return Math.round(milliseconds / MILLISECONDS_IN_SECOND)
}

export function startCurrentDateTimer(): void {
  setInterval((): void => {
    now.value = today()
  }, MILLISECONDS_IN_SECOND)
}
