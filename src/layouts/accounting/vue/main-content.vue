<script setup lang="ts">
import { PhCalendar, PhCaretDown } from '@phosphor-icons/vue'
import Header from './header.vue'
import StatCard from './stat-card.vue'
import CashFlowChart from './cash-flow-chart.vue'
import Badge from './badge.vue'
</script>

<template>
  <div class="flex-1 flex flex-col min-h-0 bg-[#fafafa] dark:bg-[#0F1010]">
    <Header />
    <div class="flex-1 overflow-y-auto p-6 space-y-6">

      <!-- Today -->
      <section>
        <h2 class="text-[13px] font-semibold text-black dark:text-white mb-3">Today</h2>
        <div class="flex gap-4">
          <StatCard
            title="Total Receivables"
            :current="{ value: '$96,000.00', change: '+5%', positive: true }"
            :overdue="{ value: '$24,000.00', change: '-3%', positive: false }"
          />
          <StatCard
            title="Total Payable"
            :current="{ value: '$96,000.00', change: '+5%', positive: true }"
            :overdue="{ value: '$24,000.00', change: '-3%', positive: false }"
          />
        </div>
      </section>

      <!-- Cash flow -->
      <section class="rounded-lg border border-black/8 dark:border-white/8 p-4 bg-white dark:bg-[#0F1010]">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-[13px] font-semibold text-black dark:text-white">Cash flow</h2>
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-1 text-[11px] text-black/45 dark:text-white/40">
              <span class="w-2 h-2 rounded-full bg-[#FF3B30] shrink-0" /> Income
            </div>
            <div class="flex items-center gap-1 text-[11px] text-black/45 dark:text-white/40">
              <span class="w-2 h-2 rounded-full bg-[#FF8674] shrink-0" /> Outgoing
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 mb-4">
          <button class="flex items-center gap-1 text-[12px] text-black/60 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-md px-2.5 py-1 hover:border-black/20 transition-colors">
            Last 12 months <PhCaretDown :size="11" />
          </button>
          <button class="flex items-center gap-1.5 text-[12px] text-black/60 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-md px-2.5 py-1 hover:border-black/20 transition-colors">
            <PhCalendar :size="12" /> Jan 1, 2024 – Dec 31, 2024
          </button>
        </div>
        <div class="flex gap-6 mb-4">
          <div>
            <p class="text-[10px] uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">Income</p>
            <div class="flex items-center gap-2">
              <span class="text-[18px] font-semibold text-black dark:text-white">$96,000.00</span>
              <Badge value="+5%" :positive="true" />
            </div>
          </div>
          <div>
            <p class="text-[10px] uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">Outgoing</p>
            <div class="flex items-center gap-2">
              <span class="text-[18px] font-semibold text-black dark:text-white">$24,000.00</span>
              <Badge value="-3%" :positive="false" />
            </div>
          </div>
        </div>
        <CashFlowChart />
        <div class="flex justify-between mt-2 text-[11px] text-black/30 dark:text-white/25">
          <span>JAN 1, 2023</span>
          <span>DEC 31, 2024</span>
        </div>
      </section>

    </div>
  </div>
</template>
