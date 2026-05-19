<script setup lang="ts">
import { PhCaretRight } from '@phosphor-icons/vue'

defineProps<{
  label: string
  hasChildren?: boolean
}>()
</script>

<template>
  <button class="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[13px] text-black/65 dark:text-white/55 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors text-left">
    <span class="shrink-0 text-black/40 dark:text-white/35">
      <slot />
    </span>
    <span class="flex-1">{{ label }}</span>
    <PhCaretRight v-if="hasChildren" :size="11" class="opacity-35 shrink-0" />
  </button>
</template>
