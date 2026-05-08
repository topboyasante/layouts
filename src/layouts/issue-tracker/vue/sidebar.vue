<script setup lang="ts">
import { ref } from 'vue'
import NavItem from './nav-item.vue'
import SectionToggle from './section-toggle.vue'
import {
  PhTray,
  PhUser,
  PhSquaresFour,
  PhStack,
  PhDotsThree,
  PhCircleDashed,
  PhArrowsClockwise,
  PhDownloadSimple,
  PhCaretDown,
  PhCaretRight,
  PhQuestion,
} from '@phosphor-icons/vue'

const workspaceOpen = ref(true)
const teamsOpen = ref(true)
const teamExpanded = ref(true)
const tryOpen = ref(false)
</script>

<template>
  <aside class="hidden md:flex flex-col w-56 shrink-0 text-black dark:text-white">
    <!-- Workspace header -->
    <div class="flex items-center gap-2 px-3 py-3">
      <div class="w-5 h-5 rounded bg-violet-500 flex items-center justify-center shrink-0">
        <span class="text-[9px] font-bold text-white leading-none">GO</span>
      </div>
      <span class="text-[13px] font-medium truncate flex-1">Google</span>
      <PhCaretDown :size="12" class="shrink-0 opacity-40" />
    </div>

    <!-- Nav -->
    <nav class="flex-1 overflow-y-auto px-2 py-2 space-y-3">
      <!-- Top-level -->
      <div class="space-y-0.5">
        <NavItem label="Inbox"><PhTray :size="14" /></NavItem>
        <NavItem label="My issues" :active="true"><PhUser :size="14" /></NavItem>
      </div>

      <!-- Workspace -->
      <div>
        <SectionToggle label="Workspace" :open="workspaceOpen" @toggle="workspaceOpen = !workspaceOpen" />
        <div v-if="workspaceOpen" class="mt-0.5 space-y-0.5">
          <NavItem label="Projects"><PhSquaresFour :size="14" /></NavItem>
          <NavItem label="Views"><PhStack :size="14" /></NavItem>
          <NavItem label="More"><PhDotsThree :size="14" /></NavItem>
        </div>
      </div>

      <!-- Your teams -->
      <div>
        <SectionToggle label="Your teams" :open="teamsOpen" @toggle="teamsOpen = !teamsOpen" />
        <div v-if="teamsOpen" class="mt-0.5">
          <button
            @click="teamExpanded = !teamExpanded"
            class="w-full flex items-center gap-2 px-2 py-1 rounded-md text-[13px] text-black/60 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors"
          >
            <div class="w-3.5 h-3.5 rounded-sm bg-violet-500/80 shrink-0" />
            <span class="flex-1 text-left">Google</span>
            <PhCaretDown v-if="teamExpanded" :size="10" class="shrink-0" />
            <PhCaretRight v-else :size="10" class="shrink-0" />
          </button>
          <div v-if="teamExpanded" class="mt-0.5 space-y-0.5">
            <NavItem label="Issues" :indent="true"><PhCircleDashed :size="14" /></NavItem>
            <NavItem label="Projects" :indent="true"><PhSquaresFour :size="14" /></NavItem>
            <NavItem label="Views" :indent="true"><PhStack :size="14" /></NavItem>
          </div>
        </div>
      </div>

      <!-- Try -->
      <div>
        <SectionToggle label="Try" :open="tryOpen" @toggle="tryOpen = !tryOpen" />
        <div v-if="tryOpen" class="mt-0.5 space-y-0.5">
          <NavItem label="Import issues"><PhDownloadSimple :size="14" /></NavItem>
          <NavItem label="Cycles"><PhArrowsClockwise :size="14" /></NavItem>
        </div>
      </div>
    </nav>

    <!-- Footer -->
    <div class="flex items-center gap-2 px-3 py-2">
      <button class="flex items-center justify-center w-6 h-6 rounded text-black/40 dark:text-white/40 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors">
        <PhQuestion :size="14" />
      </button>
      <button class="ml-auto text-[11px] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors px-2 py-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5">
        Free plan
      </button>
    </div>
  </aside>
</template>
