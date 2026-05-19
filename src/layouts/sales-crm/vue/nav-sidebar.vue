<script setup lang="ts">
import {
  PhCaretDown,
  PhStar,
  PhClockCounterClockwise,
  PhPlus,
  PhLink,
} from '@phosphor-icons/vue'
</script>

<template>
  <div class="w-56 shrink-0 bg-white dark:bg-[#0a0a0a] border-r border-black/8 dark:border-white/8 flex flex-col overflow-y-auto text-[12px]">
    <!-- Header -->
    <div class="flex items-center gap-1 px-3 py-3 text-[13px] font-semibold">
      <span>Codename.com</span>
      <PhCaretDown :size="12" class="text-black/40 dark:text-white/40" />
    </div>

    <!-- Top links -->
    <div class="flex flex-col gap-0.5 px-1">
      <button class="flex items-center gap-2 px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
        <PhStar :size="13" />
        <span>Starred</span>
      </button>
      <button class="flex items-center gap-2 px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
        <PhClockCounterClockwise :size="13" />
        <span>Recent</span>
      </button>
      <button class="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full font-medium">
        Sales list
      </button>
      <button class="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
        Goals
      </button>
      <div class="flex items-center justify-between px-2 py-1 rounded-md">
        <span class="font-bold text-black dark:text-white">Dashboard</span>
        <button class="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white">
          <PhPlus :size="12" />
        </button>
      </div>
    </div>

    <!-- Tree section -->
    <div class="mt-2 px-1 flex flex-col gap-0.5">
      <button class="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
        Codename
      </button>
      <div>
        <button class="flex items-center gap-1 px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
          <span>Shared with me</span>
          <PhCaretDown :size="10" class="ml-auto" />
        </button>
        <div class="pl-4 flex flex-col gap-0.5 mt-0.5">
          <button class="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
            Cargo2go
          </button>
          <button class="flex items-center justify-between px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
            <span>Cloudz3r</span>
            <span class="bg-[#f03e6e] text-white rounded-full px-1.5 text-[10px] font-medium">2</span>
          </button>
          <button class="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
            Idioma
          </button>
          <button class="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
            Syllables
          </button>
          <button class="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
            x-0b
          </button>
        </div>
      </div>
    </div>

    <!-- Reports section -->
    <div class="mt-3 px-1 flex flex-col gap-0.5">
      <div class="flex items-center justify-between px-2 py-1">
        <span class="text-[11px] font-semibold text-black/40 dark:text-white/30 uppercase tracking-wide">Reports</span>
        <button class="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white">
          <PhPlus :size="12" />
        </button>
      </div>

      <div>
        <button class="flex items-center gap-1 px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
          <span>Share with me</span>
          <PhCaretDown :size="10" class="ml-auto" />
        </button>
        <div class="pl-4 flex flex-col gap-0.5 mt-0.5">
          <button class="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
            Deals by user
          </button>
          <button class="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
            Deal duration
          </button>
        </div>
      </div>

      <div>
        <button class="flex items-center gap-1 px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
          <span>My reports</span>
          <PhCaretDown :size="10" class="ml-auto" />
        </button>
        <div class="pl-4 flex flex-col gap-0.5 mt-0.5">
          <button class="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
            Emails received
          </button>
          <button class="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
            Deal duration
          </button>
          <button class="flex items-center px-2 py-1 text-[#f03e6e] font-medium rounded-md hover:bg-black/4 text-left w-full">
            New report
          </button>
          <button class="flex items-center justify-between px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
            <span>Analytics</span>
            <span class="bg-black dark:bg-white text-white dark:text-black rounded-full px-1.5 text-[10px] font-medium">7</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="mt-auto px-3 py-3 flex items-center gap-2 text-black/40 dark:text-white/30 text-[11px]">
      <PhLink :size="12" />
      <span>Manage folders</span>
    </div>
  </div>
</template>
