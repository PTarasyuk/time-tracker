<script setup lang="ts">
import { activitySelectOptions } from '../activities'
import TimelineStopwatch from '../components/TimelineStopwatch.vue'
import { updateTimelineItem } from '../timeline-items'
import type { TimelineItem } from '../types.js'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'

defineProps<{ timelineItem: TimelineItem }>()
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      placeholder="Rest"
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      @select="updateTimelineItem(timelineItem, { activityId: $event })"
    />
    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>
