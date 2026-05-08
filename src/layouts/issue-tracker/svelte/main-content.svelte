<script lang="ts">
  import { Funnel, SlidersHorizontal, Columns } from '@phosphor-icons/svelte'
  import Header from './header.svelte'

  const tabs = ['All issues', 'Active', 'Backlog']
  const toolIcons = [Funnel, SlidersHorizontal, Columns]

  let activeTab = $state('Active')
</script>

<div class="flex-1 flex flex-col min-h-0 md:rounded-lg bg-white dark:bg-[#0F1010] border border-black/6 dark:border-white/6">
  <Header />

  <div class="shrink-0 flex items-center justify-between px-4 h-10 border-b border-black/6 dark:border-white/6">
    <div class="flex items-center gap-1">
      {#each tabs as tab}
        <button
          onclick={() => (activeTab = tab)}
          class="px-2.5 py-1 rounded-full text-xs font-medium transition-colors
            {activeTab === tab
              ? 'bg-black/8 dark:bg-white/10 text-black dark:text-white'
              : 'text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white'}"
        >
          {tab}
        </button>
      {/each}
      <button class="ml-1 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
        <span class="text-sm">+</span>
      </button>
    </div>
    <div class="flex items-center gap-1">
      {#each toolIcons as Icon}
        <button class="p-1.5 rounded text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <Icon size={15} weight="duotone" />
        </button>
      {/each}
    </div>
  </div>

  <div class="flex-1 overflow-y-auto p-4">
    <!-- Content -->
  </div>
</div>
