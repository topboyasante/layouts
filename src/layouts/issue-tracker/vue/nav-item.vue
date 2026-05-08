<script setup lang="ts">
defineProps<{
  label: string
  active?: boolean
  indent?: boolean
}>()
</script>

<template>
  <button
    :class="[
      'w-full flex items-center gap-2 px-2 py-1 rounded-md text-[13px] transition-colors text-left',
      indent ? 'pl-6' : '',
      active
        ? 'bg-black/8 dark:bg-white/8 text-black dark:text-white'
        : 'text-black/60 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white',
    ]"
  >
    <span class="shrink-0 opacity-70"><slot /></span>
    {{ label }}
  </button>
</template>
