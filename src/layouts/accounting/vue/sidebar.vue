<script setup lang="ts">
import TreeItem from './tree-item.vue'
import SubItem from './sub-item.vue'
import {
  PhSquaresFour,
  PhBell,
  PhBookOpen,
  PhChartBar,
  PhArrowsLeftRight,
  PhCube,
  PhScales,
  PhFileText,
  PhWallet,
  PhBuildings,
  PhGearSix,
  PhMagnifyingGlass,
  PhPlus,
  PhCaretUpDown,
} from '@phosphor-icons/vue'
</script>

<template>
  <aside class="hidden md:flex flex-col w-56 shrink-0 text-black dark:text-white">
    <!-- Header -->
    <div class="flex items-center gap-2 px-3 py-3">
      <div class="w-6 h-6 rounded-md bg-[#FF3B30] flex items-center justify-center shrink-0">
        <span class="text-[9px] font-bold text-white leading-none">MZ</span>
      </div>
      <span class="text-[13px] font-semibold truncate flex-1">Monzo</span>
      <PhCaretUpDown :size="13" class="shrink-0 text-black/30 dark:text-white/30" />
    </div>

    <!-- Search -->
    <div class="px-3 py-2">
      <div class="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/30">
        <PhMagnifyingGlass :size="13" class="shrink-0" />
        <span class="text-[12px]">Search...</span>
      </div>
    </div>

    <!-- Create button -->
    <div class="px-3 py-2">
      <button class="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-md bg-[#FF3B30] hover:bg-[#e02e24] text-white text-[13px] font-medium transition-colors">
        <PhPlus :size="13" weight="bold" />
        Create new
      </button>
    </div>

    <!-- Nav -->
    <nav class="flex-1 overflow-y-auto px-2 py-2 space-y-4">
      <!-- Top-level -->
      <div class="space-y-0.5">
        <TreeItem label="Dashboard">
          <template #icon><PhSquaresFour :size="14" /></template>
        </TreeItem>
        <TreeItem label="Updates" :badge="3">
          <template #icon><PhBell :size="14" /></template>
        </TreeItem>
      </div>

      <!-- Tools -->
      <div>
        <p class="px-2 mb-1 text-[10px] font-semibold uppercase tracking-widest text-black/30 dark:text-white/25">
          Tools
        </p>
        <div class="space-y-0.5">
          <TreeItem label="Accounting" :has-children="true" :default-open="true">
            <template #icon><PhBookOpen :size="14" /></template>
            <SubItem label="Sales" />
            <SubItem label="Purchases" />
          </TreeItem>
          <TreeItem label="Chart of Accounts" :has-children="true" :default-open="true">
            <template #icon><PhChartBar :size="14" /></template>
            <SubItem label="Chart of Account" />
          </TreeItem>
          <TreeItem label="Transactions" :has-children="true" :default-open="true">
            <template #icon><PhArrowsLeftRight :size="14" /></template>
            <SubItem label="General Journal" />
          </TreeItem>
          <TreeItem label="Products & Services">
            <template #icon><PhCube :size="14" /></template>
          </TreeItem>
          <TreeItem label="Taxes & Compliance">
            <template #icon><PhScales :size="14" /></template>
          </TreeItem>
          <TreeItem label="Reports" :has-children="true" :default-open="true">
            <template #icon><PhFileText :size="14" /></template>
            <SubItem label="Generate Report" :active="true" />
            <SubItem label="Saved Reports" />
          </TreeItem>
          <TreeItem label="Budget management">
            <template #icon><PhWallet :size="14" /></template>
          </TreeItem>
          <TreeItem label="Organisation">
            <template #icon><PhBuildings :size="14" /></template>
          </TreeItem>
        </div>
      </div>

      <!-- More -->
      <div>
        <p class="px-2 mb-1 text-[10px] font-semibold uppercase tracking-widest text-black/30 dark:text-white/25">
          More
        </p>
        <div class="space-y-0.5">
          <TreeItem label="Settings">
            <template #icon><PhGearSix :size="14" /></template>
          </TreeItem>
        </div>
      </div>
    </nav>
  </aside>
</template>
