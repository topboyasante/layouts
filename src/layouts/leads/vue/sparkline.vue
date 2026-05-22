<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ data: number[]; extraClass?: string }>()

const W = 110
const H = 32

const points = computed(() => {
  if (props.data.length === 0) return ''
  const min = Math.min(...props.data)
  const max = Math.max(...props.data)
  const range = max - min || 1
  const step = W / (props.data.length - 1)
  return props.data
    .map((v, i) => `${i * step},${H - ((v - min) / range) * H}`)
    .join(' ')
})
</script>

<template>
  <svg
    v-if="data.length > 0"
    :viewBox="`0 0 ${W} ${H}`"
    preserveAspectRatio="none"
    :class="['w-full h-full', extraClass]"
  >
    <polyline
      :points="points"
      fill="none"
      stroke="#f97316"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
