<script lang="ts">
  import {
    MagnifyingGlass,
    Plus,
    Copy,
    GitMerge,
    CheckSquare,
  } from '@phosphor-icons/svelte'

  const actions = [
    { icon: Copy, count: 0 },
    { icon: GitMerge, count: 0 },
    { icon: CheckSquare, count: 0 },
  ]
</script>

<header class="shrink-0 flex items-center gap-3 px-4 h-12 bg-[#ebebf0] dark:bg-[#1c1c1e]">
  <!-- Logo -->
  <div class="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
    <span class="text-white text-[11px] font-black">G</span>
  </div>

  <!-- Search — centered -->
  <div class="flex-1 flex justify-center">
    <div class="flex items-center gap-2 w-full max-w-sm px-3 py-1.5 rounded-md border border-black/15 dark:border-white/12 bg-white dark:bg-white/8 text-black/40 dark:text-white/35 cursor-text">
      <MagnifyingGlass size={14} class="shrink-0" />
      <span class="flex-1 text-[13px]">Search or go to...</span>
      <kbd class="text-[11px] px-1.5 py-0.5 rounded border border-black/15 dark:border-white/12 bg-black/5 dark:bg-white/8 font-mono">/</kbd>
    </div>
  </div>

  <!-- Actions -->
  <div class="flex items-center gap-1">
    <button class="p-1.5 rounded-md text-black/50 dark:text-white/45 hover:bg-black/8 dark:hover:bg-white/8 hover:text-black dark:hover:text-white transition-colors">
      <Plus size={16} weight="bold" />
    </button>
    {#each actions as action}
      {@const Icon = action.icon}
      <button class="flex items-center gap-1 px-2 py-1.5 rounded-md text-black/50 dark:text-white/45 hover:bg-black/8 dark:hover:bg-white/8 hover:text-black dark:hover:text-white transition-colors text-[12px]">
        <Icon size={15} />
        <span>{action.count}</span>
      </button>
    {/each}
    <!-- Avatar — solid color -->
    <div class="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center ml-1 cursor-pointer shrink-0">
      <span class="text-[10px] font-bold text-white">NK</span>
    </div>
  </div>
</header>
