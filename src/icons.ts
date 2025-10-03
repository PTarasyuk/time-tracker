import {
  ArrowPathIcon as ArrowPath,
  ChartBarIcon as ChartBar,
  CheckCircleIcon as CheckCircle,
  ClockIcon as Clock,
  ListBulletIcon as ListBullet,
  PauseIcon as Pause,
  PlayIcon as Play,
  PlusIcon as Plus,
  TrashIcon as Trash,
  XMarkIcon as XMark,
} from '@heroicons/vue/24/outline'
import type { Component } from 'vue'
import { IconName } from './types'

export const ICONS: Record<IconName, Component> = {
  [IconName.CHECK_CIRCLE]: CheckCircle,
  [IconName.LIST_BULLET]: ListBullet,
  [IconName.ARROW_PATH]: ArrowPath,
  [IconName.CHART_BAR]: ChartBar,
  [IconName.CLOCK]: Clock,
  [IconName.TRASH]: Trash,
  [IconName.XMARK]: XMark,
  [IconName.PAUSE]: Pause,
  [IconName.PLAY]: Play,
  [IconName.PLUS]: Plus,
}
