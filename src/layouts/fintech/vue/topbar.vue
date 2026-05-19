<script setup lang="ts">
import { PhBell } from '@phosphor-icons/vue'
</script>

<template>
  <header class="h-14 flex items-center justify-between px-6 bg-white dark:bg-[#0f1117] border-b border-black/[0.08] dark:border-white/[0.08] shrink-0">
    <!-- Left: page title -->
    <h1 class="text-base font-semibold text-black dark:text-white">Overview</h1>

    <!-- Right: actions -->
    <div class="flex items-center gap-3">
      <!-- Date range pill -->
      <button class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/[0.1] dark:border-white/[0.12] bg-white dark:bg-white/[0.05] text-sm font-medium text-black/70 dark:text-white/70 hover:bg-black/[0.03] dark:hover:bg-white/[0.08] transition-colors">
        Mar 1 – Mar 24
      </button>

      <!-- Bell with badge -->
      <button class="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors text-black/60 dark:text-white/60">
        <PhBell :size="18" />
        <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#c8f53a] border-2 border-white dark:border-[#0f1117]" />
      </button>

      <!-- Avatar -->
      <div class="w-8 h-8 rounded-full bg-neutral-500 flex items-center justify-center cursor-pointer">
        <span class="text-white text-xs font-semibold">JD</span>
      </div>
    </div>
  </header>
</template>
