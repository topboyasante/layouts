<script lang="ts">
  import {
    MagnifyingGlass,
    CaretUpDown,
    CaretDown,
    CaretRight,
    Plus,
    DotsThree,
    SquaresFour,
    User,
    Package,
    UsersThree,
    ChatCircleDots,
    ChatTeardropDots,
    Question,
    Gear,
  } from '@phosphor-icons/svelte'

  type NavItem = {
    label: string
    icon?: typeof User
    active?: boolean
    badge?: string
    dot?: string
  }

  type NavSection = {
    heading: string
    collapsed?: boolean
    trailing?: 'plus'
    items?: NavItem[]
  }

  const sections: NavSection[] = [
    {
      heading: 'SALES OPERATIONS',
      items: [
        { label: 'Dashboard', icon: SquaresFour },
        { label: 'Leads', icon: User, active: true },
        { label: 'Orders', icon: Package },
        { label: 'Customers', icon: UsersThree },
        { label: 'Messages', icon: ChatCircleDots, badge: '4' },
      ],
    },
    { heading: 'INSIGHTS & MANAGEMENT', collapsed: true },
    {
      heading: 'WORKSPACES',
      trailing: 'plus',
      items: [
        { label: 'Sales', dot: 'bg-[#f97316]' },
        { label: 'Account Management', dot: 'bg-[#f97316]' },
        { label: 'Support & Success', dot: 'bg-[#f97316]' },
      ],
    },
    { heading: 'PRODUCTIVITY', collapsed: true },
    { heading: 'SUPPORT', collapsed: true },
  ]

  const bottomItems: NavItem[] = [
    { label: 'Feedback', icon: ChatTeardropDots, badge: '1' },
    { label: 'Help Center', icon: Question },
    { label: 'Settings', icon: Gear },
  ]
</script>

<aside class="w-[260px] shrink-0 h-full flex flex-col bg-white dark:bg-[#0f0f0f]">
  <!-- Brand -->
  <div class="flex items-center gap-2.5 px-4 pt-4 pb-3">
    <div class="flex items-center justify-center w-9 h-9 rounded-lg bg-black dark:bg-white text-white dark:text-black font-bold text-base leading-none shrink-0">
      C
    </div>
    <div class="flex flex-col flex-1 min-w-0">
      <span class="text-[14px] font-semibold text-black dark:text-white leading-tight truncate">Conceptzilla</span>
      <span class="text-[12px] text-black/40 dark:text-white/40 leading-tight truncate">Free Workflow</span>
    </div>
    <button class="text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 transition-colors shrink-0">
      <CaretUpDown size={16} />
    </button>
  </div>

  <!-- Search -->
  <div class="px-3 pb-3">
    <div class="flex items-center gap-2 px-3 h-9 rounded-lg bg-black/[0.035] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.06]">
      <MagnifyingGlass size={15} class="text-black/35 dark:text-white/35 shrink-0" />
      <input
        type="text"
        placeholder="Search"
        class="flex-1 min-w-0 bg-transparent text-[13px] text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 focus:outline-none"
      />
      <kbd class="flex items-center justify-center w-4.5 h-4.5 px-1 rounded bg-white dark:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.1] text-[10px] text-black/40 dark:text-white/40 shrink-0">
        /
      </kbd>
    </div>
  </div>

  <!-- Nav -->
  <nav class="flex-1 flex flex-col px-2 overflow-y-auto pb-2">
    {#each sections as section, si (si)}
      <div class="flex flex-col mb-1">
        <div class="flex items-center justify-between px-2 pt-3 pb-1.5 text-black/35 dark:text-white/35">
          <button class="flex items-center gap-1 text-[11px] font-medium tracking-wider hover:text-black/60 dark:hover:text-white/60 transition-colors">
            {#if section.collapsed}
              <CaretRight size={11} />
            {:else}
              <CaretDown size={11} />
            {/if}
            {section.heading}
          </button>
          {#if section.trailing === 'plus'}
            <button class="hover:text-black/60 dark:hover:text-white/60 transition-colors">
              <Plus size={13} weight="bold" />
            </button>
          {/if}
        </div>
        {#if section.items}
          {#each section.items as item (item.label)}
            {@const Icon = item.icon}
            <button
              class="flex items-center gap-2.5 w-full px-2.5 py-1.5 rounded-md text-[13px] transition-colors text-left {item.active
                ? 'bg-black/[0.05] dark:bg-white/[0.07] text-black dark:text-white font-medium'
                : 'text-black/55 dark:text-white/55 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:text-black dark:hover:text-white'}"
            >
              {#if Icon}
                <Icon size={16} weight={item.active ? 'fill' : 'regular'} />
              {/if}
              {#if item.dot}
                <span class="w-2 h-2 rounded-sm {item.dot} shrink-0 ml-0.5" />
              {/if}
              <span class="flex-1 truncate">{item.label}</span>
              {#if item.badge}
                <span class="text-[11px] font-medium text-black/40 dark:text-white/40 px-1.5 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.06]">
                  {item.badge}
                </span>
              {/if}
            </button>
          {/each}
        {/if}
      </div>
    {/each}

    <div class="flex flex-col mt-1">
      {#each bottomItems as item (item.label)}
        {@const Icon = item.icon}
        <button class="flex items-center gap-2.5 w-full px-2.5 py-1.5 rounded-md text-[13px] transition-colors text-left text-black/55 dark:text-white/55 hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:text-black dark:hover:text-white">
          {#if Icon}
            <Icon size={16} />
          {/if}
          <span class="flex-1 truncate">{item.label}</span>
          {#if item.badge}
            <span class="text-[11px] font-medium text-black/40 dark:text-white/40 px-1.5 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.06]">
              {item.badge}
            </span>
          {/if}
        </button>
      {/each}
    </div>
  </nav>

  <!-- Profile -->
  <div class="px-3 py-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center gap-2.5">
    <div class="relative shrink-0">
      <div class="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center overflow-hidden">
        <span class="text-white text-xs font-semibold">AH</span>
      </div>
      <span class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0f0f0f]" />
    </div>
    <div class="flex flex-col min-w-0 flex-1">
      <span class="text-[13px] font-semibold text-black dark:text-white truncate leading-tight">Aiden Hudson</span>
      <span class="text-[12px] text-black/40 dark:text-white/40 truncate leading-tight mt-0.5">ahudson@gmail.com</span>
    </div>
    <button class="text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 transition-colors shrink-0">
      <DotsThree size={18} weight="bold" />
    </button>
  </div>
</aside>
