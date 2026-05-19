<script lang="ts">
  import {
    CheckCircle,
    CaretDown,
    GitCommit,
    ArrowsMerge,
    GitMerge,
  } from '@phosphor-icons/svelte'

  const statCards = [
    { category: 'Merge requests', label: 'Waiting for your review', iconType: 'merge', count: 0 },
    { category: 'Merge requests', label: 'Assigned to you', iconType: 'merge', count: 0 },
    { category: 'Work items', label: 'Assigned to you', iconType: 'work', count: 0 },
    { category: 'Work items', label: 'Authored by you', iconType: 'work', count: 0 },
  ]
</script>

{#snippet mergeRequestIcon()}
  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="4" r="2.5" stroke="#8e8e93" stroke-width="1.6" fill="none"/>
    <circle cx="4" cy="16" r="2.5" stroke="#8e8e93" stroke-width="1.6" fill="none"/>
    <circle cx="18" cy="10" r="2.5" stroke="#8e8e93" stroke-width="1.6" fill="none"/>
    <line x1="4" y1="6.5" x2="4" y2="13.5" stroke="#8e8e93" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M6.5 4 Q13 4 15.5 8" stroke="#8e8e93" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M6.5 16 Q13 16 15.5 12" stroke="#8e8e93" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  </svg>
{/snippet}

{#snippet workItemIcon()}
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="2.5" width="15" height="15" rx="2.5" stroke="#8e8e93" stroke-width="1.6" fill="none"/>
    <polyline points="6,10 9,13 14,7" stroke="#8e8e93" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>
{/snippet}

<div class="flex-1 overflow-y-auto bg-[#f8f8f8] dark:bg-[#070707]">
  <!-- Breadcrumb -->
  <div class="flex items-center gap-1.5 px-6 py-3 text-[12px] text-black/45 dark:text-white/35">
    <span>Your work</span>
    <span>/</span>
    <span class="text-black dark:text-white font-medium">Home</span>
  </div>

  <div class="px-6 pb-6 space-y-5">
    <!-- Greeting -->
    <div class="flex items-center gap-4">
      <div class="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
        <span class="text-lg font-bold text-white">NK</span>
      </div>
      <div>
        <p class="text-[12px] text-black/45 dark:text-white/40 mb-0.5">Today's highlights</p>
        <h1 class="text-[24px] font-bold text-black dark:text-white leading-tight">Hi, Nana K. Asante</h1>
      </div>
    </div>

    <!-- Stat cards -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {#each statCards as card}
        <div class="bg-black/8 dark:bg-white/8 rounded-2xl p-1.5">
          <div class="flex items-center justify-between px-1 pt-1 pb-2">
            <span class="text-[14px] font-medium text-black dark:text-white">{card.category}</span>
            {#if card.iconType === 'merge'}{@render mergeRequestIcon()}{:else}{@render workItemIcon()}{/if}
          </div>
          <div class="bg-white dark:bg-[#1c1c1e] rounded-xl px-4 py-3">
            <div class="text-[38px] font-bold text-black dark:text-white leading-none tracking-tight mb-1">{card.count}</div>
            <div class="text-[13px] text-black dark:text-white/80">{card.label}</div>
            <div class="text-[12px] text-black/40 dark:text-white/35 mt-0.5">Just now</div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Attention items -->
    <div class="rounded-lg bg-white dark:bg-[#0F1010] overflow-hidden">
      <div class="flex items-center justify-between px-5 py-4">
        <h2 class="text-[14px] font-semibold text-black dark:text-white">Items that need your attention</h2>
        <button class="flex items-center gap-1.5 text-[12px] text-black/60 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-md px-3 py-1.5 hover:border-black/20 transition-colors">
          Everything <CaretDown size={11} />
        </button>
      </div>
      <div class="px-5 py-5 flex items-center gap-3 border-t border-black/5 dark:border-white/5">
        <div class="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center shrink-0">
          <CheckCircle size={20} class="text-blue-500" weight="fill" />
        </div>
        <p class="text-[13px] text-black/70 dark:text-white/60">
          <span class="font-semibold text-black dark:text-white">Good job!</span> All your to-do items are done.
        </p>
      </div>
      <div class="px-5 pb-4">
        <button class="text-[13px] text-blue-600 dark:text-blue-400 hover:underline">All to-do items</button>
      </div>
    </div>

    <!-- Activity feed -->
    <div class="rounded-lg bg-white dark:bg-[#0F1010] overflow-hidden">
      <div class="flex items-center justify-between px-5 py-4">
        <h2 class="text-[14px] font-semibold text-black dark:text-white">Follow the latest updates</h2>
        <button class="flex items-center gap-1.5 text-[12px] text-black/60 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-md px-3 py-1.5 hover:border-black/20 transition-colors">
          Your activity <CaretDown size={11} />
        </button>
      </div>
      <div class="divide-y divide-black/5 dark:divide-white/5 border-t border-black/5 dark:border-white/5">
        <!-- Push 1 -->
        <div class="flex gap-3 px-5 py-4">
          <span class="shrink-0 mt-0.5"><GitCommit size={15} class="text-black/40 dark:text-white/35" /></span>
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-4">
              <p class="text-[13px] text-black/70 dark:text-white/60 leading-relaxed">
                Pushed to branch <span class="text-blue-600 dark:text-blue-400 font-medium">main</span> at <span class="text-blue-600 dark:text-blue-400">atlas / web-platform</span>
              </p>
              <span class="shrink-0 text-[11px] text-black/35 dark:text-white/30 whitespace-nowrap">2 hours ago</span>
            </div>
            <p class="text-[12px] text-black/50 dark:text-white/40 mt-0.5">
              <span class="text-blue-600 dark:text-blue-400 font-mono text-[11px]">a3f91b2c</span> · Merge branch 'develop' into 'main'
            </p>
            <p class="text-[12px] text-black/50 dark:text-white/40">
              … and 2 more commits. <span class="text-blue-600 dark:text-blue-400">Compare b12c3d4e...a3f91b2c</span>
            </p>
          </div>
        </div>
        <!-- Merge 1 -->
        <div class="flex gap-3 px-5 py-4">
          <span class="shrink-0 mt-0.5"><ArrowsMerge size={15} class="text-green-500" /></span>
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-4">
              <p class="text-[13px] text-black/70 dark:text-white/60 leading-relaxed">
                Accepted merge request <span class="text-blue-600 dark:text-blue-400">!83 "feat: user onboarding flow"</span> at <span class="text-blue-600 dark:text-blue-400">atlas / web-platform</span>
              </p>
              <span class="shrink-0 text-[11px] text-black/35 dark:text-white/30 whitespace-nowrap">2 hours ago</span>
            </div>
          </div>
        </div>
        <!-- Open -->
        <div class="flex gap-3 px-5 py-4">
          <span class="shrink-0 mt-0.5"><GitMerge size={15} class="text-blue-500" /></span>
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-4">
              <p class="text-[13px] text-black/70 dark:text-white/60 leading-relaxed">
                Opened merge request <span class="text-blue-600 dark:text-blue-400">!84 "fix: resolve auth token expiry"</span> at <span class="text-blue-600 dark:text-blue-400">atlas / web-platform</span>
              </p>
              <span class="shrink-0 text-[11px] text-black/35 dark:text-white/30 whitespace-nowrap">3 hours ago</span>
            </div>
          </div>
        </div>
        <!-- Push 2 -->
        <div class="flex gap-3 px-5 py-4">
          <span class="shrink-0 mt-0.5"><GitCommit size={15} class="text-black/40 dark:text-white/35" /></span>
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-4">
              <p class="text-[13px] text-black/70 dark:text-white/60 leading-relaxed">
                Pushed to branch <span class="text-blue-600 dark:text-blue-400 font-medium">develop</span> at <span class="text-blue-600 dark:text-blue-400">nova / mobile-app</span>
              </p>
              <span class="shrink-0 text-[11px] text-black/35 dark:text-white/30 whitespace-nowrap">5 hours ago</span>
            </div>
            <p class="text-[12px] text-black/50 dark:text-white/40 mt-0.5">
              <span class="text-blue-600 dark:text-blue-400 font-mono text-[11px]">7e2d80fa</span> · Merge branch 'feature/payments' into 'develop'
            </p>
            <p class="text-[12px] text-black/50 dark:text-white/40">
              … and 1 more commit. <span class="text-blue-600 dark:text-blue-400">Compare 3c9a1f5b...7e2d80fa</span>
            </p>
          </div>
        </div>
        <!-- Merge 2 -->
        <div class="flex gap-3 px-5 py-4">
          <span class="shrink-0 mt-0.5"><ArrowsMerge size={15} class="text-green-500" /></span>
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-4">
              <p class="text-[13px] text-black/70 dark:text-white/60 leading-relaxed">
                Accepted merge request <span class="text-blue-600 dark:text-blue-400">!61 "chore: upgrade dependencies"</span> at <span class="text-blue-600 dark:text-blue-400">nova / mobile-app</span>
              </p>
              <span class="shrink-0 text-[11px] text-black/35 dark:text-white/30 whitespace-nowrap">5 hours ago</span>
            </div>
          </div>
        </div>
      </div>
      <div class="px-5 py-3 border-t border-black/5 dark:border-white/5">
        <button class="text-[13px] text-blue-600 dark:text-blue-400 hover:underline">All activity</button>
      </div>
    </div>

  </div>
</div>
