<script setup lang="ts">
import { PhBell } from '@phosphor-icons/vue'
</script>

<template>
  <header class="shrink-0">
    <div class="flex items-center justify-between px-4 h-11 border-b border-black/6 dark:border-white/6">
      <div class="flex items-center gap-2">
        <div class="w-5 h-5 rounded bg-green-500 shrink-0" />
        <span class="text-sm font-medium text-black dark:text-white">AMS</span>
      </div>
      <button class="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
        <PhBell :size="16" weight="duotone" />
      </button>
    </div>
  </header>
</template>
