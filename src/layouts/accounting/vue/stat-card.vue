<script setup lang="ts">
import { PhCaretDown, PhInfo, PhPlus } from '@phosphor-icons/vue'
import Badge from './badge.vue'

defineProps<{
  title: string
  current: { value: string; change: string; positive: boolean }
  overdue: { value: string; change: string; positive: boolean }
}>()
</script>

<template>
  <div class="flex-1 rounded-lg border border-black/8 dark:border-white/8 p-4 bg-white dark:bg-[#0F1010]">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-1.5">
        <span class="text-[13px] font-medium text-black dark:text-white">{{ title }}</span>
        <PhInfo :size="13" class="text-black/30 dark:text-white/30" />
      </div>
      <button class="flex items-center gap-1 text-[12px] text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
        <PhPlus :size="12" weight="bold" /> New
      </button>
    </div>
    <div class="flex gap-6">
      <div>
        <p class="text-[10px] uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">Current</p>
        <p class="text-[18px] font-semibold text-black dark:text-white leading-none mb-1.5">{{ current.value }}</p>
        <Badge :value="current.change" :positive="current.positive" />
      </div>
      <div class="w-px bg-black/6 dark:bg-white/6" />
      <div>
        <p class="text-[10px] uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">Overdue</p>
        <p class="text-[18px] font-semibold text-black dark:text-white leading-none mb-1.5">{{ overdue.value }}</p>
        <Badge :value="overdue.change" :positive="overdue.positive" />
      </div>
    </div>
    <div class="mt-4 pt-3 border-t border-black/6 dark:border-white/6">
      <button class="flex items-center gap-1 text-[12px] text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
        Last 30 days <PhCaretDown :size="11" />
      </button>
    </div>
  </div>
</template>
