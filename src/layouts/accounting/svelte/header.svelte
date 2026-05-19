<script lang="ts">
  import { SquaresFour } from '@phosphor-icons/svelte'
</script>

<header class="shrink-0 flex items-start gap-3 px-6 py-5 border-b border-black/6 dark:border-white/6">
  <div class="w-8 h-8 rounded-md bg-black/5 dark:bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
    <SquaresFour size={16} class="text-black/40 dark:text-white/40" weight="duotone" />
  </div>
  <div>
    <h1 class="text-[15px] font-semibold text-black dark:text-white">Dashboard</h1>
    <p class="text-[12px] text-black/45 dark:text-white/40 mt-0.5">
      See your business performance at a glance with real-time metrics and actionable insights
    </p>
  </div>
</header>
