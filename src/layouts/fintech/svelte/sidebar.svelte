<script lang="ts">
  import {
    House,
    CreditCard,
    ArrowsLeftRight,
    Receipt,
    BookOpen,
    ArrowBendUpLeft,
    Buildings,
    ChartBar,
    PiggyBank,
    Gear,
  } from '@phosphor-icons/svelte'

  type NavItem = {
    label: string
    icon: typeof House
    active?: boolean
  }

  type NavSection = {
    heading?: string
    items: NavItem[]
  }

  const sections: NavSection[] = [
    {
      items: [
        { label: 'Home', icon: House, active: true },
        { label: 'Cards', icon: CreditCard },
        { label: 'Transactions', icon: ArrowsLeftRight },
        { label: 'Bill Pay', icon: Receipt },
      ],
    },
    {
      heading: 'Manage',
      items: [
        { label: 'Accounting', icon: BookOpen },
        { label: 'Reimbursements', icon: ArrowBendUpLeft },
        { label: 'Vendors', icon: Buildings },
      ],
    },
    {
      heading: 'Insights',
      items: [
        { label: 'Reporting', icon: ChartBar },
        { label: 'Savings', icon: PiggyBank },
      ],
    },
  ]
</script>

<aside class="w-52 h-screen flex flex-col bg-[#0f1117] shrink-0">
  <!-- Logo -->
  <div class="flex items-center gap-2 px-4 py-5">
    <span class="text-[#c8f53a] text-lg leading-none">◈</span>
    <span class="text-white font-semibold text-base tracking-tight">Apex</span>
  </div>

  <!-- Nav -->
  <nav class="flex-1 flex flex-col gap-5 px-2 overflow-y-auto">
    {#each sections as section, si (si)}
      <div class="flex flex-col gap-0.5">
        {#if section.heading}
          <p class="px-2 mb-1 text-[11px] font-semibold uppercase tracking-widest text-white/25">
            {section.heading}
          </p>
        {/if}
        {#each section.items as item (item.label)}
          {@const Icon = item.icon}
          <button
            class="flex items-center gap-2.5 w-full px-2 py-2 rounded-md text-sm font-medium transition-colors text-left {item.active
              ? 'bg-white/[0.08] text-white'
              : 'text-white/50 hover:text-white hover:bg-white/[0.05]'}"
          >
            <Icon size={16} weight={item.active ? 'fill' : 'regular'} />
            {item.label}
          </button>
        {/each}
      </div>
    {/each}
  </nav>

  <!-- Bottom -->
  <div class="px-2 pb-4 flex flex-col gap-1">
    <button class="flex items-center gap-2.5 w-full px-2 py-2 rounded-md text-sm font-medium text-white/50 hover:text-white hover:bg-white/[0.05] transition-colors">
      <Gear size={16} />
      Settings
    </button>
    <div class="flex items-center gap-2.5 px-2 py-2">
      <div class="w-7 h-7 rounded-full bg-neutral-600 flex items-center justify-center shrink-0">
        <span class="text-white text-xs font-semibold">JD</span>
      </div>
      <div class="flex flex-col min-w-0">
        <span class="text-white text-xs font-medium truncate">Jane Doe</span>
        <span class="text-white/40 text-[11px] truncate">Admin</span>
      </div>
    </div>
  </div>
</aside>
