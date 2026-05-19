<script setup lang="ts">
defineProps<{
  value: string
  positive: boolean
}>()
</script>

<template>
  <span
    :class="[
      'inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium',
      positive
        ? 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400'
        : 'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400',
    ]"
  >
    {{ value }}
  </span>
</template>
