<script setup lang="ts">
import { markRaw } from 'vue'
import {
  PhArrowRight,
  PhSparkle,
  PhRocketLaunch,
  PhBookOpen,
  PhPuzzlePiece,
  PhChatCircle,
} from '@phosphor-icons/vue'
import RightPanel from './right-panel.vue'

const categories = [
  {
    icon: markRaw(PhRocketLaunch),
    title: 'Get started',
    description: 'Create your workspace and publish your first article in minutes.',
  },
  {
    icon: markRaw(PhBookOpen),
    title: 'Guides',
    description: 'Step-by-step walkthroughs for common tasks and workflows.',
  },
  {
    icon: markRaw(PhBookOpen),
    title: 'Configuration',
    description: 'Customize your workspace, domains, and appearance settings.',
  },
  {
    icon: markRaw(PhPuzzlePiece),
    title: 'Integrations',
    description: 'Connect Nexdocs with your existing tools and platforms.',
  },
  {
    icon: markRaw(PhChatCircle),
    title: 'Widgets',
    description: 'Embed a self-serve support widget anywhere in your product.',
  },
  {
    icon: markRaw(PhSparkle),
    title: 'AI Assistant',
    description: 'Let the AI answer common questions on behalf of your team.',
  },
]
</script>

<template>
  <div class="flex flex-1 min-w-0 overflow-y-auto bg-white dark:bg-[#0f0f0f]">
    <div class="flex-1 min-w-0 px-10 py-10">
      <!-- Hero -->
      <h1 class="text-[32px] font-bold text-black dark:text-white leading-tight tracking-tight">
        Nexdocs documentation <span>📖</span>
      </h1>
      <p class="mt-2 text-[15px] text-black/50 dark:text-white/45">
        Everything you need to build, manage, and scale your documentation.
      </p>

      <!-- AI Search -->
      <div class="mt-6 flex items-center gap-3 px-5 py-4 rounded-xl border border-black/10 dark:border-white/8 hover:border-black/20 dark:hover:border-white/15 transition-colors cursor-text group">
        <PhSparkle :size="16" class="text-violet-400 shrink-0" />
        <span class="flex-1 text-[14px] text-black/35 dark:text-white/30">Ask, search, or explain...</span>
        <button class="w-7 h-7 rounded-md bg-black/6 dark:bg-white/8 flex items-center justify-center text-black/40 dark:text-white/35 hover:bg-black/10 dark:hover:bg-white/12 transition-colors">
          <PhArrowRight :size="13" />
        </button>
      </div>

      <!-- Category grid -->
      <div class="mt-8 grid grid-cols-2 gap-4">
        <button
          v-for="(cat, i) in categories"
          :key="i"
          class="flex flex-col gap-3 p-5 rounded-xl border border-black/8 dark:border-white/8 text-left hover:border-black/16 dark:hover:border-white/15 hover:bg-black/2 dark:hover:bg-white/3 transition-colors group"
        >
          <span><component :is="cat.icon" :size="28" weight="light" class="text-violet-500" /></span>
          <div>
            <p class="text-[14px] font-semibold text-black dark:text-white">{{ cat.title }}</p>
            <p class="text-[13px] text-black/50 dark:text-white/45 mt-0.5 leading-relaxed">{{ cat.description }}</p>
          </div>
        </button>
      </div>
    </div>

    <RightPanel />
  </div>
</template>
