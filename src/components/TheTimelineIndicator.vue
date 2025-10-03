<script setup lang="ts">
import { computed, ref } from 'vue'
import { HUNDRED_PERCENT } from '../constants'
import { secondsSinceMidnightInPercentage } from '../time'

const indicatorRef = ref<HTMLHRElement | null>(null)

const topOffset = computed(
  (): number => (secondsSinceMidnightInPercentage.value * getTimelineHight()) / HUNDRED_PERCENT
)

function getTimelineHight(): number {
  return indicatorRef.value?.parentElement?.getBoundingClientRect().height ?? 0
}
</script>

<template>
  <hr
    ref="indicatorRef"
    class="pointer-events-none absolute z-10 w-full border-b-2 border-red-600"
    :style="{ top: `${topOffset}px` }"
  />
</template>
