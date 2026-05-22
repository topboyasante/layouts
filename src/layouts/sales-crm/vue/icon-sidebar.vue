<script setup lang="ts">
import {
  PhGlobe,
  PhChartBar,
  PhCommand,
  PhTarget,
  PhSmiley,
  PhGear,
} from '@phosphor-icons/vue'
</script>

<template>
  <div class="w-12 shrink-0 bg-white dark:bg-[#0a0a0a] border-r border-black/8 dark:border-white/8 flex flex-col items-center py-3 gap-1">
    <!-- Logo -->
    <div class="w-8 h-8 rounded-full bg-black flex items-center justify-center mb-2">
      <span class="text-[13px] font-bold text-white">C</span>
    </div>

    <!-- Nav icons -->
    <button class="w-8 h-8 rounded-lg flex items-center justify-center text-black/35 dark:text-white/35 hover:bg-black/5 hover:text-black dark:hover:text-white transition-colors">
      <PhGlobe :size="16" />
    </button>

    <button class="w-8 h-8 rounded-xl flex items-center justify-center bg-[#f03e6e] text-white transition-colors">
      <PhChartBar :size="16" weight="fill" />
    </button>

    <button class="w-8 h-8 rounded-lg flex items-center justify-center text-black/35 dark:text-white/35 hover:bg-black/5 hover:text-black dark:hover:text-white transition-colors">
      <PhCommand :size="16" />
    </button>

    <button class="w-8 h-8 rounded-lg flex items-center justify-center text-black/35 dark:text-white/35 hover:bg-black/5 hover:text-black dark:hover:text-white transition-colors">
      <PhTarget :size="16" />
    </button>

    <!-- Bottom -->
    <div class="mt-auto flex flex-col items-center gap-1">
      <button class="w-8 h-8 rounded-lg flex items-center justify-center text-black/35 dark:text-white/35 hover:bg-black/5 hover:text-black dark:hover:text-white transition-colors relative">
        <PhSmiley :size="16" />
        <span class="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-red-500" />
      </button>
      <button class="w-8 h-8 rounded-lg flex items-center justify-center text-black/35 dark:text-white/35 hover:bg-black/5 hover:text-black dark:hover:text-white transition-colors">
        <PhGear :size="16" />
      </button>
    </div>
  </div>
</template>
