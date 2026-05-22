<script setup lang="ts">
import { PhCaretRight } from '@phosphor-icons/vue'

defineProps<{
  label: string
  active?: boolean
  hasChildren?: boolean
}>()
</script>

<template>
  <button
    :class="[
      'w-full flex items-center gap-2.5 px-3 py-1.5 text-[13px] rounded-md transition-colors text-left',
      active
        ? 'bg-[#6b6cce] dark:bg-[#5b5cc0] text-white font-medium'
        : 'text-[#3c3c43] dark:text-white/65 hover:bg-black/6 dark:hover:bg-white/6 hover:text-black dark:hover:text-white',
    ]"
  >
    <span class="shrink-0"><slot /></span>
    <span class="flex-1">{{ label }}</span>
    <PhCaretRight v-if="hasChildren" :size="11" :class="active ? 'text-white/70' : 'opacity-35'" />
  </button>
</template>
