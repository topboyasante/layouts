<script setup lang="ts">
import {
  PhMagnifyingGlass,
  PhBell,
  PhGear,
  PhSquaresFour,
} from '@phosphor-icons/vue'
</script>

<template>
  <header class="h-14 bg-white dark:bg-[#111] border-b border-black/[0.08] dark:border-white/[0.08] flex items-center px-6 gap-4 shrink-0">
    <!-- Search -->
    <div class="flex-1 max-w-xs">
      <div class="flex items-center gap-2 border border-black/10 dark:border-white/10 rounded-lg px-3 py-1.5 bg-transparent">
        <PhMagnifyingGlass :size="14" class="text-black/40 dark:text-white/40 shrink-0" />
        <input
          type="text"
          placeholder="Quick search"
          class="text-[13px] bg-transparent outline-none w-full text-black dark:text-white placeholder-black/30 dark:placeholder-white/30"
        />
      </div>
    </div>

    <!-- Spacer -->
    <div class="flex-1" />

    <!-- Right side controls -->
    <div class="flex items-center gap-3">
      <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
        <PhBell :size="18" />
      </button>
      <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
        <PhGear :size="18" />
      </button>

      <!-- User -->
      <div class="flex items-center gap-2.5 pl-2 border-l border-black/[0.08] dark:border-white/[0.08]">
        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 shrink-0" />
        <div class="flex flex-col">
          <span class="text-[13px] font-medium text-black dark:text-white leading-tight">Michael Johnson</span>
          <span class="text-[11px] text-black/40 dark:text-white/40 leading-tight">m.johnson@finex.com</span>
        </div>
      </div>

      <!-- Add widget -->
      <button class="border border-black/[0.12] dark:border-white/[0.12] rounded-lg px-3 py-1.5 text-[12px] flex items-center gap-1.5 text-black dark:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors ml-1">
        <PhSquaresFour :size="14" />
        + Add widget
      </button>
    </div>
  </header>
</template>
