<script lang="ts">
  import { Info, GearSix, Bell, ShareNetwork } from '@phosphor-icons/svelte'

  const avatars = [
    'from-rose-300 to-rose-500',
    'from-violet-300 to-violet-500',
    'from-emerald-300 to-emerald-500',
    'from-amber-300 to-orange-500',
  ]
</script>

<header class="h-16 flex items-center justify-between px-7 shrink-0 bg-white dark:bg-[#0f0f0f]">
  <!-- Left: title -->
  <div class="flex items-baseline gap-2">
    <h1 class="text-[22px] font-semibold tracking-tight text-black dark:text-white">Leads</h1>
    <span class="text-[14px] text-black/35 dark:text-white/35">248</span>
  </div>

  <!-- Right -->
  <div class="flex items-center gap-3">
    <button class="w-8 h-8 flex items-center justify-center rounded-md text-black/45 dark:text-white/45 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-black dark:hover:text-white transition-colors">
      <Info size={18} />
    </button>
    <button class="w-8 h-8 flex items-center justify-center rounded-md text-black/45 dark:text-white/45 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-black dark:hover:text-white transition-colors">
      <GearSix size={18} />
    </button>
    <button class="w-8 h-8 flex items-center justify-center rounded-md text-black/45 dark:text-white/45 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-black dark:hover:text-white transition-colors">
      <Bell size={18} />
    </button>

    <!-- Avatar stack -->
    <div class="flex items-center pl-1">
      <div class="flex -space-x-1.5">
        {#each avatars as g}
          <div class="w-7 h-7 rounded-full bg-gradient-to-br {g} ring-2 ring-white dark:ring-[#0f0f0f]" />
        {/each}
      </div>
      <span class="ml-2 text-[13px] font-medium text-black/55 dark:text-white/55">+5</span>
    </div>

    <!-- CTA -->
    <button class="flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-[#f97316] text-white text-[13px] font-medium hover:bg-[#ea6a0c] active:bg-[#d85f0b] transition-colors shadow-sm">
      <ShareNetwork size={15} weight="bold" />
      Share Access
    </button>
  </div>
</header>
