<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="mt-5">
    <div class="flex items-center gap-2 px-3 mb-1">
      <span class="text-black/35 dark:text-white/30">
        <slot name="icon" />
      </span>
      <span class="text-[11px] font-semibold tracking-wider text-black/40 dark:text-white/35 uppercase">{{ title }}</span>
    </div>
    <slot />
  </div>
</template>
