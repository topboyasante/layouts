<script lang="ts">
  import {
    SquaresFour,
    Bell,
    BookOpen,
    ChartBar,
    ArrowsLeftRight,
    Cube,
    Scales,
    FileText,
    Wallet,
    Buildings,
    GearSix,
    CaretDown,
    CaretRight,
    MagnifyingGlass,
    Plus,
    CaretUpDown,
  } from '@phosphor-icons/svelte'

  let accountingOpen = $state(true)
  let chartOpen = $state(true)
  let transactionsOpen = $state(true)
  let reportsOpen = $state(true)
</script>

{#snippet subItem(label, active)}
  <button
    class="w-full flex items-center gap-2 pl-4 pr-2 py-1.25 rounded-md text-[13px] transition-colors text-left
      {active
        ? 'text-black dark:text-white font-semibold'
        : 'text-black/55 dark:text-white/40 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'}"
  >
    <span class="w-1 h-1 rounded-full bg-current opacity-40 shrink-0"></span>
    {label}
  </button>
{/snippet}

{#snippet leafItem(icon, label, active, badge)}
  <button
    class="w-full flex items-center gap-1.5 px-2 py-1.25 rounded-md text-[13px] transition-colors text-left group
      {active
        ? 'text-black dark:text-white font-semibold'
        : 'text-black/65 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'}"
  >
    <span class="w-2.75 shrink-0"></span>
    <span class="shrink-0 text-black/40 dark:text-white/30">{@render icon()}</span>
    <span class="flex-1 truncate">{label}</span>
    {#if badge !== undefined}
      <span class="ml-auto shrink-0 min-w-4.5 h-4.5 px-1 rounded-full bg-orange-500 text-white text-[10px] font-medium flex items-center justify-center">
        {badge}
      </span>
    {/if}
  </button>
{/snippet}

{#snippet parentItem(icon, label, open, toggle, children)}
  <div>
    <button
      onclick={toggle}
      class="w-full flex items-center gap-1.5 px-2 py-1.25 rounded-md text-[13px] transition-colors text-left group text-black/65 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
    >
      {#if open}
        <CaretDown size={11} class="shrink-0 text-black/30 dark:text-white/30" />
      {:else}
        <CaretRight size={11} class="shrink-0 text-black/30 dark:text-white/30" />
      {/if}
      <span class="shrink-0 text-black/40 dark:text-white/30">{@render icon()}</span>
      <span class="flex-1 truncate">{label}</span>
    </button>
    {#if open}
      <div class="mt-0.5 ml-3">{@render children()}</div>
    {/if}
  </div>
{/snippet}

<!-- Icon snippets -->
{#snippet iconSquaresFour()}<SquaresFour size={14} />{/snippet}
{#snippet iconBell()}<Bell size={14} />{/snippet}
{#snippet iconBookOpen()}<BookOpen size={14} />{/snippet}
{#snippet iconChartBar()}<ChartBar size={14} />{/snippet}
{#snippet iconArrowsLeftRight()}<ArrowsLeftRight size={14} />{/snippet}
{#snippet iconCube()}<Cube size={14} />{/snippet}
{#snippet iconScales()}<Scales size={14} />{/snippet}
{#snippet iconFileText()}<FileText size={14} />{/snippet}
{#snippet iconWallet()}<Wallet size={14} />{/snippet}
{#snippet iconBuildings()}<Buildings size={14} />{/snippet}
{#snippet iconGearSix()}<GearSix size={14} />{/snippet}

{#snippet accountingChildren()}
  {@render subItem('Sales', false)}
  {@render subItem('Purchases', false)}
{/snippet}
{#snippet chartChildren()}
  {@render subItem('Chart of Account', false)}
{/snippet}
{#snippet transactionsChildren()}
  {@render subItem('General Journal', false)}
{/snippet}
{#snippet reportsChildren()}
  {@render subItem('Generate Report', true)}
  {@render subItem('Saved Reports', false)}
{/snippet}

<aside class="hidden md:flex flex-col w-56 shrink-0 text-black dark:text-white">
  <!-- Header -->
  <div class="flex items-center gap-2 px-3 py-3">
    <div class="w-6 h-6 rounded-md bg-[#FF3B30] flex items-center justify-center shrink-0">
      <span class="text-[9px] font-bold text-white leading-none">MZ</span>
    </div>
    <span class="text-[13px] font-semibold truncate flex-1">Monzo</span>
    <CaretUpDown size={13} class="shrink-0 text-black/30 dark:text-white/30" />
  </div>

  <!-- Search -->
  <div class="px-3 py-2">
    <div class="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/30">
      <MagnifyingGlass size={13} class="shrink-0" />
      <span class="text-[12px]">Search...</span>
    </div>
  </div>

  <!-- Create button -->
  <div class="px-3 py-2">
    <button class="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-md bg-[#FF3B30] hover:bg-[#e02e24] text-white text-[13px] font-medium transition-colors">
      <Plus size={13} weight="bold" />
      Create new
    </button>
  </div>

  <!-- Nav -->
  <nav class="flex-1 overflow-y-auto px-2 py-2 space-y-4">
    <!-- Top-level -->
    <div class="space-y-0.5">
      {@render leafItem(iconSquaresFour, 'Dashboard', false, undefined)}
      {@render leafItem(iconBell, 'Updates', false, 3)}
    </div>

    <!-- Tools -->
    <div>
      <p class="px-2 mb-1 text-[10px] font-semibold uppercase tracking-widest text-black/30 dark:text-white/25">
        Tools
      </p>
      <div class="space-y-0.5">
        {@render parentItem(iconBookOpen, 'Accounting', accountingOpen, () => (accountingOpen = !accountingOpen), accountingChildren)}
        {@render parentItem(iconChartBar, 'Chart of Accounts', chartOpen, () => (chartOpen = !chartOpen), chartChildren)}
        {@render parentItem(iconArrowsLeftRight, 'Transactions', transactionsOpen, () => (transactionsOpen = !transactionsOpen), transactionsChildren)}
        {@render leafItem(iconCube, 'Products & Services', false, undefined)}
        {@render leafItem(iconScales, 'Taxes & Compliance', false, undefined)}
        {@render parentItem(iconFileText, 'Reports', reportsOpen, () => (reportsOpen = !reportsOpen), reportsChildren)}
        {@render leafItem(iconWallet, 'Budget management', false, undefined)}
        {@render leafItem(iconBuildings, 'Organisation', false, undefined)}
      </div>
    </div>

    <!-- More -->
    <div>
      <p class="px-2 mb-1 text-[10px] font-semibold uppercase tracking-widest text-black/30 dark:text-white/25">
        More
      </p>
      <div class="space-y-0.5">
        {@render leafItem(iconGearSix, 'Settings', false, undefined)}
      </div>
    </div>
  </nav>
</aside>
