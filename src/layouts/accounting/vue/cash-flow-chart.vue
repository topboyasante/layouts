<script setup lang="ts">
const gridLines = [0, 40, 80, 120, 160]
const tooltipRows = [
  { label: 'Opening balance', value: '$2,340.00' },
  { label: 'Incoming', value: '$1,120.00' },
  { label: 'Outgoing', value: '$40.00' },
  { label: 'Ending balance', value: '$3,420.00' },
]
</script>

<template>
  <div class="relative w-full h-40">
    <svg viewBox="0 0 800 160" class="w-full h-full" preserveAspectRatio="none">
      <!-- Grid lines -->
      <line
        v-for="y in gridLines"
        :key="y"
        x1="0"
        :y1="y"
        x2="800"
        :y2="y"
        stroke="currentColor"
        stroke-opacity="0.05"
        stroke-width="1"
      />
      <!-- Income line (blue) -->
      <path
        d="M0,90 C50,85 100,70 150,75 C200,80 250,60 300,55 C350,50 400,65 450,60 C500,55 550,45 600,50 C650,55 700,45 750,40 L800,35"
        fill="none"
        stroke="#FF3B30"
        stroke-width="2"
        stroke-linecap="round"
      />
      <!-- Outgoing line (cyan) -->
      <path
        d="M0,120 C50,118 100,115 150,118 C200,121 250,112 300,108 C350,104 400,115 450,110 C500,105 550,100 600,105 C650,110 700,105 750,100 L800,95"
        fill="none"
        stroke="#FF8674"
        stroke-width="2"
        stroke-linecap="round"
      />
      <!-- Tooltip vertical line -->
      <line x1="340" y1="0" x2="340" y2="160" stroke="currentColor" stroke-opacity="0.15" stroke-width="1" stroke-dasharray="4 3" />
      <circle cx="340" cy="55" r="4" fill="#FF3B30" />
    </svg>

    <!-- Tooltip -->
    <div class="absolute top-0 left-[43%] bg-white dark:bg-[#1a1a1a] border border-black/8 dark:border-white/8 rounded-lg shadow-sm p-3 text-[12px] min-w-40">
      <p class="font-medium text-black dark:text-white mb-2">Apr 24, 2024</p>
      <div v-for="row in tooltipRows" :key="row.label" class="flex justify-between gap-4">
        <span class="text-black/45 dark:text-white/40">{{ row.label }}</span>
        <span class="text-black dark:text-white font-medium">{{ row.value }}</span>
      </div>
    </div>
  </div>
</template>
