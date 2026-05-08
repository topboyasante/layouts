<script setup lang="ts">
import { PhCaretDown, PhCaretRight } from '@phosphor-icons/vue'

defineProps<{ label: string; open: boolean }>()
defineEmits<{ toggle: [] }>()
</script>

<template>
  <button
    @click="$emit('toggle')"
    class="w-full flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-black/35 dark:text-white/30 hover:text-black/60 dark:hover:text-white/50 transition-colors uppercase tracking-wide"
  >
    <PhCaretDown v-if="open" :size="10" weight="bold" />
    <PhCaretRight v-else :size="10" weight="bold" />
    {{ label }}
  </button>
</template>
