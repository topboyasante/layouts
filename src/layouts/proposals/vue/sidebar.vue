<script setup lang="ts">
import { markRaw, type Component } from 'vue'
import {
  PhMagnifyingGlass,
  PhSidebarSimple,
  PhHouse,
  PhFileText,
  PhCube,
  PhMapPin,
  PhUser,
  PhGearSix,
  PhBookOpen,
  PhQuestion,
  PhLightning,
  PhDotsThree,
} from '@phosphor-icons/vue'

type NavItem = {
  label: string
  icon: Component
  active?: boolean
}

type NavSection = {
  heading?: string
  items: NavItem[]
}

const sections: NavSection[] = [
  {
    items: [{ label: 'Dashboard', icon: markRaw(PhHouse), active: true }],
  },
  {
    heading: 'Work',
    items: [
      { label: 'Proposals', icon: markRaw(PhFileText) },
      { label: 'Products', icon: markRaw(PhCube) },
      { label: 'Locations', icon: markRaw(PhMapPin) },
      { label: 'Customers', icon: markRaw(PhUser) },
    ],
  },
  {
    heading: 'Others',
    items: [
      { label: 'Settings', icon: markRaw(PhGearSix) },
      { label: 'Knowledge Base', icon: markRaw(PhBookOpen) },
      { label: 'Support', icon: markRaw(PhQuestion) },
    ],
  },
]
</script>

<template>
  <aside class="w-[260px] shrink-0 h-full flex flex-col bg-[#fbfbfc] dark:bg-[#0f0f0f]">
    <!-- Logo + collapse -->
    <div class="flex items-center justify-between px-5 pt-5 pb-4">
      <div
        class="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2563eb] text-white font-bold text-lg leading-none shadow-sm"
      >
        R
      </div>
      <button
        class="text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 transition-colors"
      >
        <PhSidebarSimple :size="20" />
      </button>
    </div>

    <!-- Search -->
    <div class="px-4 pb-4">
      <div
        class="flex items-center gap-2 px-3 h-10 rounded-xl bg-black/[0.035] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.06]"
      >
        <PhMagnifyingGlass :size="16" class="text-black/35 dark:text-white/35 shrink-0" />
        <input
          type="text"
          placeholder="Search..."
          class="flex-1 min-w-0 bg-transparent text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 focus:outline-none"
        />
        <kbd
          class="flex items-center justify-center w-5 h-5 rounded-md bg-white dark:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.1] text-[11px] text-black/40 dark:text-white/40 shrink-0"
        >
          /
        </kbd>
      </div>
    </div>

    <!-- Nav -->
    <nav class="flex-1 flex flex-col gap-6 px-4 overflow-y-auto">
      <div v-for="(section, si) in sections" :key="si" class="flex flex-col gap-1">
        <p
          v-if="section.heading"
          class="px-2 mb-1 text-[13px] font-medium text-black/35 dark:text-white/35"
        >
          {{ section.heading }}
        </p>
        <button
          v-for="item in section.items"
          :key="item.label"
          :class="[
            'flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm transition-colors text-left',
            item.active
              ? 'bg-white dark:bg-white/[0.06] border border-black/[0.07] dark:border-white/[0.08] shadow-sm font-medium text-black dark:text-white'
              : 'text-black/55 dark:text-white/55 hover:bg-black/[0.035] dark:hover:bg-white/[0.05] hover:text-black dark:hover:text-white',
          ]"
        >
          <component
            :is="item.icon"
            :size="18"
            :weight="item.active ? 'fill' : 'regular'"
            :class="item.active ? 'text-[#2563eb]' : ''"
          />
          {{ item.label }}
        </button>
      </div>
    </nav>

    <!-- Bottom -->
    <div class="px-4 pt-4 pb-4 flex flex-col gap-3">
      <!-- Get Started card -->
      <div
        class="flex items-start gap-3 p-3 rounded-2xl bg-[#eef4ff] dark:bg-[#16213a] border border-[#2563eb]/15 dark:border-[#2563eb]/25"
      >
        <div
          class="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-white/[0.08] shadow-sm shrink-0"
        >
          <PhLightning :size="16" weight="fill" class="text-[#2563eb]" />
        </div>
        <div class="min-w-0">
          <p class="text-[13px] font-semibold text-black dark:text-white">Get Started</p>
          <p class="text-[11px] leading-snug text-black/45 dark:text-white/45 mt-0.5">
            Completed you profile to makes better experience using Iron!
          </p>
        </div>
      </div>

      <!-- Profile -->
      <div class="flex items-center gap-3 px-1">
        <div
          class="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center shrink-0"
        >
          <span class="text-white text-xs font-semibold">JA</span>
        </div>
        <div class="flex flex-col min-w-0 flex-1">
          <span class="text-[13px] font-medium text-black dark:text-white truncate">Joshua Adams</span>
          <span class="text-[12px] text-black/40 dark:text-white/40 truncate">robin@jobs.com</span>
        </div>
        <button
          class="text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 transition-colors"
        >
          <PhDotsThree :size="20" weight="bold" />
        </button>
      </div>
    </div>
  </aside>
</template>
