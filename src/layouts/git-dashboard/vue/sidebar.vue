<script setup lang="ts">
import { ref } from 'vue'
import NavItem from './nav-item.vue'
import {
  PhHouse,
  PhFolder,
  PhUsersThree,
  PhCheckSquare,
  PhGitMerge,
  PhListChecks,
  PhDiamond,
  PhCode,
  PhActivity,
  PhClockCounterClockwise,
  PhDesktop,
  PhGlobe,
  PhGear,
  PhShield,
  PhSparkle,
  PhQuestion,
  PhCaretLeft,
  PhCaretRight,
} from '@phosphor-icons/vue'

const collapsed = ref(false)
</script>

<template>
  <aside
    v-if="collapsed"
    class="hidden md:flex flex-col w-12 shrink-0 bg-[#ebebf0] dark:bg-[#1c1c1e] items-center py-4"
  >
    <button
      @click="collapsed = false"
      class="p-2 rounded-md text-black/40 dark:text-white/40 hover:bg-black/8 dark:hover:bg-white/8"
    >
      <PhCaretRight :size="14" />
    </button>
  </aside>

  <aside v-else class="hidden md:flex flex-col w-52 shrink-0 bg-[#ebebf0] dark:bg-[#1c1c1e]">
    <div class="px-3 pt-4 pb-2">
      <p class="text-[13px] font-semibold text-black dark:text-white">Your work</p>
    </div>

    <nav class="flex-1 overflow-y-auto px-2 space-y-0.5">
      <NavItem label="Home" :active="true"><PhHouse :size="15" /></NavItem>
      <NavItem label="Projects"><PhFolder :size="15" /></NavItem>
      <NavItem label="Groups"><PhUsersThree :size="15" /></NavItem>
      <NavItem label="Work items"><PhCheckSquare :size="15" /></NavItem>
      <NavItem label="Merge requests"><PhGitMerge :size="15" /></NavItem>
      <NavItem label="To-Do List"><PhListChecks :size="15" /></NavItem>
      <NavItem label="Milestones"><PhDiamond :size="15" /></NavItem>
      <NavItem label="Snippets"><PhCode :size="15" /></NavItem>
      <NavItem label="Activity"><PhActivity :size="15" /></NavItem>
      <NavItem label="Import history"><PhClockCounterClockwise :size="15" /></NavItem>
      <NavItem label="Workspaces"><PhDesktop :size="15" /></NavItem>
      <NavItem label="Environments"><PhGlobe :size="15" /></NavItem>
      <NavItem label="Operations"><PhGear :size="15" /></NavItem>
      <NavItem label="Security" :has-children="true"><PhShield :size="15" /></NavItem>
    </nav>

    <div class="px-2 py-3 space-y-0.5">
      <NavItem label="What's new"><PhSparkle :size="15" /></NavItem>
      <NavItem label="Help"><PhQuestion :size="15" /></NavItem>
      <button
        @click="collapsed = true"
        class="w-full flex items-center gap-2 px-3 py-1.5 text-[13px] text-[#3c3c43] dark:text-white/50 hover:bg-black/6 dark:hover:bg-white/6 hover:text-black dark:hover:text-white rounded-md transition-colors"
      >
        <PhCaretLeft :size="13" />
        Collapse sidebar
      </button>
    </div>
  </aside>
</template>
