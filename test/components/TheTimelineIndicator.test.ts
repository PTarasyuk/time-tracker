import { flushPromises, shallowMount } from '@vue/test-utils'
import { expect, it, vi } from 'vitest'
import TheTimelineIndicator from '../../src/components/TheTimelineIndicator.vue'
import { HUNDRED_PERCENT } from '../../src/constants'
import { secondsSinceMidnightInPercentage } from '../../src/time'

it('has top offset that reflects current time of the day', async () => {
  const windowHight = 2700
  const offset = (secondsSinceMidnightInPercentage.value * windowHight) / HUNDRED_PERCENT
  const offsetRounded = Math.round(offset * 1000000) / 1000000 // Round to 6 decimal places
  window.HTMLDivElement.prototype.getBoundingClientRect = vi.fn(() => ({
    x: 0,
    y: 0,
    width: 0,
    height: windowHight,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    toJSON: vi.fn(),
  }))

  const wrapper = shallowMount(TheTimelineIndicator)
  await flushPromises()

  expect(wrapper.element.style.top).toBe(`${offsetRounded}px`)
  vi.resetAllMocks()
})
