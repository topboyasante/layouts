<script lang="ts">
  import { MagnifyingGlass, Sparkle } from '@phosphor-icons/svelte'
</script>

<header class="shrink-0 flex items-center gap-4 px-6 h-14 border-b border-black/8 dark:border-white/8 bg-white dark:bg-[#0f0f0f]">
  <!-- Logo -->
  <div class="flex items-center gap-2.5 w-56 shrink-0">
    <div class="w-7 h-7 rounded-full overflow-hidden bg-violet-600 flex items-center justify-center shrink-0">
      <span class="text-white text-[11px] font-black">N</span>
    </div>
    <span class="text-[15px] font-semibold text-black dark:text-white">Nexdocs</span>
  </div>

  <!-- Search — centered -->
  <div class="flex-1 flex justify-center gap-2">
    <div class="flex items-center gap-2 w-full max-w-sm px-3 py-1.5 rounded-lg border border-black/12 dark:border-white/10 bg-white dark:bg-white/5 text-black/40 dark:text-white/35 cursor-text">
      <MagnifyingGlass size={14} class="shrink-0" />
      <span class="flex-1 text-[13px]">Search or ask AI</span>
      <div class="flex items-center gap-1">
        <kbd class="text-[10px] px-1 py-0.5 rounded border border-black/12 dark:border-white/10 bg-black/4 dark:bg-white/6 font-mono">⌘</kbd>
        <kbd class="text-[10px] px-1 py-0.5 rounded border border-black/12 dark:border-white/10 bg-black/4 dark:bg-white/6 font-mono">K</kbd>
      </div>
    </div>
    <button class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/12 dark:border-white/10 text-[13px] text-black/60 dark:text-white/50 hover:border-black/20 hover:text-black dark:hover:text-white transition-colors">
      <Sparkle size={13} class="text-violet-500" />
      Ask AI
    </button>
  </div>

  <!-- Nav -->
  <div class="flex items-center gap-5 w-56 justify-end">
    <nav class="flex items-center gap-5 text-[13px]">
      <a href="#" class="text-black/60 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors">Home</a>
      <a href="#" class="text-black/60 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors">Pricing</a>
    </nav>
    <button class="px-3.5 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-[13px] font-medium transition-colors">
      Contact us
    </button>
  </div>
</header>
