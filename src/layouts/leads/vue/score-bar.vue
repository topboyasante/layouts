<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ score: number }>()

function colorFor(s: number): string {
  if (s >= 8) return 'bg-emerald-500'
  if (s >= 6) return 'bg-yellow-400'
  if (s >= 4) return 'bg-amber-500'
  return 'bg-rose-500'
}

const fill = computed(() => colorFor(props.score))
const segments = Array.from({ length: 10 }, (_, i) => i)
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="flex items-center gap-[2px]">
      <span
        v-for="i in segments"
        :key="i"
        :class="[
          'block w-[3px] h-3.5 rounded-[1px]',
          i < score ? fill : 'bg-black/[0.08] dark:bg-white/[0.1]',
        ]"
      />
    </div>
    <span class="text-[12px] text-black/45 dark:text-white/45 tabular-nums">{{ score }}/10</span>
  </div>
</template>
