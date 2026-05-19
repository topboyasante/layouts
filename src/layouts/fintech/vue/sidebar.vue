<script setup lang="ts">
import { markRaw, type Component } from 'vue'
import {
  PhHouse,
  PhCreditCard,
  PhArrowsLeftRight,
  PhReceipt,
  PhBookOpen,
  PhArrowBendUpLeft,
  PhBuildings,
  PhChartBar,
  PhPiggyBank,
  PhGear,
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
    items: [
      { label: 'Home', icon: markRaw(PhHouse), active: true },
      { label: 'Cards', icon: markRaw(PhCreditCard) },
      { label: 'Transactions', icon: markRaw(PhArrowsLeftRight) },
      { label: 'Bill Pay', icon: markRaw(PhReceipt) },
    ],
  },
  {
    heading: 'Manage',
    items: [
      { label: 'Accounting', icon: markRaw(PhBookOpen) },
      { label: 'Reimbursements', icon: markRaw(PhArrowBendUpLeft) },
      { label: 'Vendors', icon: markRaw(PhBuildings) },
    ],
  },
  {
    heading: 'Insights',
    items: [
      { label: 'Reporting', icon: markRaw(PhChartBar) },
      { label: 'Savings', icon: markRaw(PhPiggyBank) },
    ],
  },
]
</script>

<template>
  <aside class="w-52 h-screen flex flex-col bg-[#0f1117] shrink-0">
    <!-- Logo -->
    <div class="flex items-center gap-2 px-4 py-5">
      <span class="text-[#c8f53a] text-lg leading-none">◈</span>
      <span class="text-white font-semibold text-base tracking-tight">Apex</span>
    </div>

    <!-- Nav -->
    <nav class="flex-1 flex flex-col gap-5 px-2 overflow-y-auto">
      <div v-for="(section, si) in sections" :key="si" class="flex flex-col gap-0.5">
        <p
          v-if="section.heading"
          class="px-2 mb-1 text-[11px] font-semibold uppercase tracking-widest text-white/25"
        >
          {{ section.heading }}
        </p>
        <button
          v-for="item in section.items"
          :key="item.label"
          :class="[
            'flex items-center gap-2.5 w-full px-2 py-2 rounded-md text-sm font-medium transition-colors text-left',
            item.active
              ? 'bg-white/[0.08] text-white'
              : 'text-white/50 hover:text-white hover:bg-white/[0.05]',
          ]"
        >
          <component :is="item.icon" :size="16" :weight="item.active ? 'fill' : 'regular'" />
          {{ item.label }}
        </button>
      </div>
    </nav>

    <!-- Bottom -->
    <div class="px-2 pb-4 flex flex-col gap-1">
      <button class="flex items-center gap-2.5 w-full px-2 py-2 rounded-md text-sm font-medium text-white/50 hover:text-white hover:bg-white/[0.05] transition-colors">
        <PhGear :size="16" />
        Settings
      </button>
      <div class="flex items-center gap-2.5 px-2 py-2">
        <div class="w-7 h-7 rounded-full bg-neutral-600 flex items-center justify-center shrink-0">
          <span class="text-white text-xs font-semibold">JD</span>
        </div>
        <div class="flex flex-col min-w-0">
          <span class="text-white text-xs font-medium truncate">Jane Doe</span>
          <span class="text-white/40 text-[11px] truncate">Admin</span>
        </div>
      </div>
    </div>
  </aside>
</template>
