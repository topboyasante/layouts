<script setup lang="ts">
defineProps<{
  label: string
  active?: boolean
}>()
</script>

<template>
  <button
    :class="[
      'w-full flex items-center gap-2 pl-4 pr-2 py-1.25 rounded-md text-[13px] transition-colors text-left',
      active
        ? 'text-black dark:text-white font-semibold'
        : 'text-black/55 dark:text-white/40 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white',
    ]"
  >
    <span class="w-1 h-1 rounded-full bg-current opacity-40 shrink-0" />
    {{ label }}
  </button>
</template>
