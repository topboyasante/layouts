<script setup lang="ts">
import { ref } from 'vue'
import { PhGitMerge, PhChatCircle } from '@phosphor-icons/vue'

const recentItems = [
  'Develop',
  'fix: create shipments with pickup option',
  'Develop',
  'feat: edit and delete shipment',
  'Develop',
]

const tab = ref<'recent' | 'projects'>('recent')
const tabs = ['recent', 'projects'] as const
</script>

<template>
  <aside class="hidden lg:flex flex-col w-72 shrink-0 gap-4 p-4 overflow-y-auto bg-[#f8f8f8] dark:bg-[#070707] border-l border-black/6 dark:border-white/6">
    <!-- Quick access -->
    <div class="rounded-lg border border-black/8 dark:border-white/8 bg-white dark:bg-[#0F1010] overflow-hidden">
      <div class="px-4 pt-4 pb-3 border-b border-black/6 dark:border-white/6">
        <h3 class="text-[13px] font-semibold text-black dark:text-white mb-3">Quick access</h3>
        <div class="flex rounded-md border border-black/8 dark:border-white/8 overflow-hidden text-[12px]">
          <button
            v-for="t in tabs"
            :key="t"
            @click="tab = t"
            :class="[
              'flex-1 py-1.5 font-medium transition-colors capitalize',
              tab === t
                ? 'bg-black/8 dark:bg-white/10 text-black dark:text-white'
                : 'text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white',
            ]"
          >
            {{ t === 'recent' ? 'Recently viewed' : 'Projects' }}
          </button>
        </div>
      </div>
      <div class="divide-y divide-black/5 dark:divide-white/5">
        <button
          v-for="(item, i) in recentItems"
          :key="i"
          class="w-full flex items-center gap-2.5 px-4 py-2.5 text-left hover:bg-black/3 dark:hover:bg-white/3 transition-colors group"
        >
          <PhGitMerge :size="14" class="shrink-0 text-black/30 dark:text-white/25" />
          <span class="text-[13px] text-black/70 dark:text-white/60 truncate group-hover:text-black dark:group-hover:text-white transition-colors">
            {{ item }}
          </span>
        </button>
      </div>
    </div>

    <!-- Feedback -->
    <div class="rounded-lg border border-black/8 dark:border-white/8 bg-white dark:bg-[#0F1010] p-4">
      <div class="flex items-start gap-2 mb-2">
        <PhChatCircle :size="16" class="shrink-0 text-black/40 dark:text-white/35 mt-0.5" />
        <h3 class="text-[13px] font-semibold text-black dark:text-white">Share your feedback</h3>
      </div>
      <p class="text-[12px] text-black/50 dark:text-white/40 mb-3 leading-relaxed">
        Help us improve the new homepage by sharing your thoughts and suggestions.
      </p>
      <button class="text-[13px] font-medium text-blue-600 dark:text-blue-400 hover:underline">
        Leave feedback
      </button>
    </div>
  </aside>
</template>
