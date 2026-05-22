<script setup lang="ts">
import { ref } from 'vue'
import {
  PhDotsSixVertical,
  PhArrowSquareOut,
  PhX,
  PhBuildings,
  PhEnvelopeSimple,
  PhPhone,
  PhPhoneCall,
  PhPencilSimple,
  PhPaperclip,
  PhMicrophone,
  PhAt,
  PhSmiley,
  PhPaperPlaneTilt,
  PhDotsThree,
  PhChecks,
} from '@phosphor-icons/vue'

const tabs = ['Activity', 'Notes', 'Deals', 'Docs'] as const
type Tab = (typeof tabs)[number]

type Comment = {
  author: string
  when: string
  text: string
  reactions: { emoji: string; count: number }[]
}

const comments: Comment[] = [
  {
    author: 'Jacob Müller',
    when: '15 mins ago',
    text: "Got it. I'll send the update after my meeting this afternoon.",
    reactions: [{ emoji: '👍', count: 1 }],
  },
  {
    author: 'Aiden Hudson',
    when: 'Yesterday',
    text: 'Please prepare an update for Emma on the onboarding timeline.',
    reactions: [{ emoji: '🤝', count: 2 }],
  },
]

const activeTab = ref<Tab>('Notes')
</script>

<template>
  <div
    class="absolute top-[140px] right-4 w-[320px] rounded-2xl bg-white dark:bg-[#141414] border border-black/[0.08] dark:border-white/[0.1] shadow-[0_14px_40px_-12px_rgba(15,23,42,0.22)] flex flex-col overflow-hidden z-20"
  >
    <!-- Header -->
    <div
      class="flex items-center gap-2 px-3 h-9 border-b border-black/[0.06] dark:border-white/[0.07]"
    >
      <PhDotsSixVertical :size="14" class="text-black/30 dark:text-white/30" />
      <span class="text-[12px] font-medium text-black/70 dark:text-white/70 flex-1">
        Customer Profile
      </span>
      <button
        class="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
      >
        <PhArrowSquareOut :size="13" />
      </button>
      <button
        class="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
      >
        <PhX :size="13" weight="bold" />
      </button>
    </div>

    <!-- Identity -->
    <div class="px-4 pt-4 pb-3 flex items-start gap-3">
      <div class="w-14 h-14 rounded-full bg-gradient-to-br from-pink-300 to-rose-500 shrink-0" />
      <div class="flex flex-col gap-1 min-w-0 flex-1 mt-0.5">
        <span class="text-[15px] font-semibold text-black dark:text-white">Emma Johansson</span>
        <span
          class="inline-flex items-center gap-1.5 text-[12px] text-black/55 dark:text-white/55"
        >
          <PhBuildings :size="12" />
          Nordic Soft AB
        </span>
        <span
          class="inline-flex items-center gap-1.5 text-[12px] text-black/55 dark:text-white/55"
        >
          <PhEnvelopeSimple :size="12" />
          emma@nordicsoft.io
        </span>
        <span
          class="inline-flex items-center gap-1.5 text-[12px] text-black/55 dark:text-white/55"
        >
          <PhPhone :size="12" />
          +1 (202) 555-0198
        </span>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-2 px-4 pb-3">
      <button
        class="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-[#f97316] text-white text-[12px] font-medium hover:bg-[#ea6a0c] transition-colors flex-1 justify-center"
      >
        <PhPhoneCall :size="13" weight="fill" />
        Schedule a Call
      </button>
      <button
        class="flex items-center gap-1.5 h-8 px-3 rounded-lg border border-black/[0.1] dark:border-white/[0.12] text-[12px] font-medium text-black/70 dark:text-white/70 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-colors flex-1 justify-center"
      >
        <PhPencilSimple :size="13" />
        Edit Profile
      </button>
    </div>

    <!-- Tabs -->
    <div
      class="flex items-center gap-4 px-4 border-b border-black/[0.06] dark:border-white/[0.07]"
    >
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        :class="[
          'relative py-2 text-[12px] transition-colors',
          activeTab === tab
            ? 'text-[#f97316] font-medium'
            : 'text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white',
        ]"
      >
        {{ tab }}
        <span
          v-if="activeTab === tab"
          class="absolute left-0 right-0 -bottom-px h-[2px] bg-[#f97316] rounded-full"
        />
      </button>
    </div>

    <!-- Feed -->
    <div class="flex flex-col gap-3 px-4 py-3 max-h-[200px] overflow-y-auto">
      <div v-for="(c, i) in comments" :key="i" class="flex flex-col gap-1.5">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 shrink-0" />
          <span class="text-[12px] font-medium text-black dark:text-white">{{ c.author }}</span>
          <span class="text-[11px] text-black/40 dark:text-white/40">{{ c.when }}</span>
          <PhChecks :size="13" class="ml-auto text-black/30 dark:text-white/30" />
          <button
            class="text-black/30 dark:text-white/30 hover:text-black/70 dark:hover:text-white/70"
          >
            <PhDotsThree :size="14" weight="bold" />
          </button>
        </div>
        <p class="text-[12.5px] text-black/70 dark:text-white/70 leading-relaxed pl-8">
          {{ c.text }}
        </p>
        <div class="flex items-center gap-1.5 pl-8">
          <button
            class="w-5 h-5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-[11px] text-black/45 dark:text-white/45 hover:bg-black/[0.07] dark:hover:bg-white/[0.1]"
          >
            <PhSmiley :size="11" />
          </button>
          <span
            v-for="(r, j) in c.reactions"
            :key="j"
            class="inline-flex items-center gap-1 px-1.5 h-5 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 text-[11px] text-[#c25410] dark:text-[#fdba74]"
          >
            {{ r.emoji }} {{ r.count }}
          </span>
        </div>
      </div>
    </div>

    <!-- Composer -->
    <div
      class="border-t border-black/[0.06] dark:border-white/[0.07] px-3 py-2.5 flex flex-col gap-2"
    >
      <input
        type="text"
        value="Perfect. Ke"
        class="w-full bg-transparent text-[13px] text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 focus:outline-none px-1"
      />
      <div class="flex items-center gap-1 text-black/40 dark:text-white/40">
        <button
          class="w-7 h-7 flex items-center justify-center rounded-md hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-black/70 dark:hover:text-white/70 transition-colors"
        >
          <PhPaperclip :size="14" />
        </button>
        <button
          class="w-7 h-7 flex items-center justify-center rounded-md hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-black/70 dark:hover:text-white/70 transition-colors"
        >
          <PhMicrophone :size="14" />
        </button>
        <button
          class="w-7 h-7 flex items-center justify-center rounded-md hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-black/70 dark:hover:text-white/70 transition-colors"
        >
          <PhAt :size="14" />
        </button>
        <button
          class="w-7 h-7 flex items-center justify-center rounded-md hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-black/70 dark:hover:text-white/70 transition-colors"
        >
          <PhSmiley :size="14" />
        </button>
        <button
          class="ml-auto w-7 h-7 flex items-center justify-center rounded-md bg-[#f97316] text-white hover:bg-[#ea6a0c] transition-colors"
        >
          <PhPaperPlaneTilt :size="13" weight="fill" />
        </button>
      </div>
    </div>
  </div>
</template>
