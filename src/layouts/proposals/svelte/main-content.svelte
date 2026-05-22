<script lang="ts">
  import {
    CalendarBlank,
    CaretDown,
    CaretLeft,
    CaretRight,
    CaretUpDown,
    MagnifyingGlass,
    Funnel,
    Plus,
    ChartBar,
    XCircle,
    CheckCircle,
    ChartPieSlice,
  } from '@phosphor-icons/svelte'
  import VolumeChart from './volume-chart.svelte'

  type Metric = {
    label: string
    value: string
    icon: typeof ChartBar
    badge: string
    badgeTone: 'green' | 'red' | 'neutral'
  }

  const metrics: Metric[] = [
    { label: 'Total Volume', value: '$110,100.00', icon: ChartBar, badge: '+8%', badgeTone: 'green' },
    { label: 'Expired Proposals', value: '4 Failed', icon: XCircle, badge: '+2', badgeTone: 'neutral' },
    { label: 'Completed Proposals', value: '24 Completed', icon: CheckCircle, badge: '+7', badgeTone: 'neutral' },
    { label: 'Avg. Proposal Value', value: '$11,540', icon: ChartPieSlice, badge: '-0.4%', badgeTone: 'red' },
  ]

  const badgeTone: Record<Metric['badgeTone'], string> = {
    green: 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10',
    red: 'text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-500/10',
    neutral: 'text-black/45 bg-black/[0.05] dark:text-white/45 dark:bg-white/[0.06]',
  }

  type Row = {
    id: string
    name: string
    address: string
    range: string
    sent: string
    status: 'Signed' | 'Waiting for Signature'
  }

  const rows: Row[] = [
    { id: '39582', name: 'Scott Smith', address: '1125 S Dorothy Ln, Kent, WA', range: '12,000 - 14,000', sent: 'Jun 21, 2023', status: 'Signed' },
    { id: '84729', name: 'Miley Lind', address: '360 Bayberry Dr, Daly City, CA', range: '9,000 - 11,000', sent: 'Jun 21, 2023', status: 'Waiting for Signature' },
    { id: '19573', name: 'Ricardo Guan', address: '1125 S Dorothy Ln, Kent, WA', range: '8,000 - 10,000', sent: 'Jun 20, 2023', status: 'Waiting for Signature' },
    { id: '48593', name: 'Zackary Jalen', address: '2390 Autumn Ridge..., Oakdale, MN', range: '15,000 - 17,000', sent: 'Jun 19, 2023', status: 'Signed' },
    { id: '93758', name: 'Amelia Klaus', address: '1678 Green Me..., Appleton, WI', range: '11,000 - 13,000', sent: 'Jun 18, 2023', status: 'Signed' },
    { id: '28563', name: 'Kobe Bron', address: '4929 Marsh Rd, Madison, WI', range: '16,000 - 18,000', sent: 'Jun 17, 2023', status: 'Signed' },
    { id: '38576', name: 'Ricardo Guan', address: '1678 Green Meadow, Appleton, WI', range: '12,000 - 14,000', sent: 'Jun 21, 2023', status: 'Signed' },
  ]

  const statusTone: Record<Row['status'], string> = {
    'Signed': 'text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10',
    'Waiting for Signature': 'text-amber-700 bg-amber-50 dark:text-amber-400 dark:bg-amber-500/10',
  }

  const columns = ['ID', 'Name', 'Address', 'Proposal range', 'Sent', 'Proposal Status']

  const cellBorder = ['border-b border-r', 'border-b', 'border-r', '']
</script>

<main class="flex-1 overflow-y-auto bg-[#fbfbfc] dark:bg-[#0f0f0f] px-8 py-7">
  <!-- Greeting row -->
  <div class="flex items-center justify-between mb-7">
    <h1 class="text-[28px] font-bold tracking-tight text-black dark:text-white">
      Welcome back, Joshua!
    </h1>
    <button class="flex items-center gap-2 px-3.5 h-10 rounded-xl bg-white dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[13px] font-medium text-black/70 dark:text-white/70 hover:bg-black/[0.02] dark:hover:bg-white/[0.08] transition-colors shadow-sm">
      <CalendarBlank size={16} class="text-black/45 dark:text-white/45" />
      This Month
      <CaretDown size={13} class="text-black/45 dark:text-white/45" />
    </button>
  </div>

  <!-- Top grid: chart + 2x2 metrics -->
  <div class="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-5 mb-9">
    <VolumeChart />

    <div class="bg-white dark:bg-[#141414] rounded-2xl border border-black/[0.07] dark:border-white/[0.08] overflow-hidden">
      <div class="grid grid-cols-2 h-full">
        {#each metrics as m, i (m.label)}
          {@const Icon = m.icon}
          <div
            class="flex flex-col justify-between gap-6 p-6 border-black/[0.06] dark:border-white/[0.07] {cellBorder[i]}"
          >
            <div class="flex items-center gap-2 text-black/45 dark:text-white/45">
              <Icon size={18} />
              <span class="text-[13px] font-medium">{m.label}</span>
            </div>
            <div class="flex items-end gap-2">
              <span class="text-[22px] font-bold tracking-tight text-black dark:text-white leading-none">
                {m.value}
              </span>
              <span class="px-1.5 py-0.5 rounded-md text-[11px] font-semibold {badgeTone[m.badgeTone]}">
                {m.badge}
              </span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Proposals header -->
  <div class="flex items-center justify-between mb-5">
    <h2 class="text-xl font-bold tracking-tight text-black dark:text-white">Proposals</h2>
    <div class="flex items-center gap-2.5">
      <div class="flex items-center gap-2 px-3 h-10 w-[260px] rounded-xl bg-white dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1]">
        <MagnifyingGlass size={16} class="text-black/35 dark:text-white/35 shrink-0" />
        <input
          type="text"
          placeholder="Search..."
          class="flex-1 min-w-0 bg-transparent text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 focus:outline-none"
        />
      </div>
      <button class="flex items-center gap-2 px-3.5 h-10 rounded-xl bg-white dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[13px] font-medium text-black/70 dark:text-white/70 hover:bg-black/[0.02] dark:hover:bg-white/[0.08] transition-colors">
        <Funnel size={16} class="text-black/45 dark:text-white/45" />
        Filter
        <CaretDown size={13} class="text-black/45 dark:text-white/45" />
      </button>
      <button class="flex items-center gap-1.5 px-4 h-10 rounded-xl bg-[#2563eb] text-white text-[13px] font-semibold hover:bg-[#1d54cf] active:bg-[#1a4cbb] transition-colors shadow-sm">
        <Plus size={16} weight="bold" />
        New Proposal
      </button>
    </div>
  </div>

  <!-- Table -->
  <div class="bg-white dark:bg-[#141414] rounded-2xl border border-black/[0.07] dark:border-white/[0.08] overflow-hidden">
    <table class="w-full text-sm">
      <thead>
        <tr class="border-b border-black/[0.06] dark:border-white/[0.07]">
          {#each columns as col}
            <th class="px-6 py-3.5 text-left text-[13px] font-medium text-black/40 dark:text-white/40">
              <span class="inline-flex items-center gap-1">
                {col}
                <CaretUpDown size={13} class="text-black/25 dark:text-white/25" />
              </span>
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each rows as r (r.id)}
          <tr class="border-b border-black/[0.05] dark:border-white/[0.05] last:border-0 hover:bg-black/[0.015] dark:hover:bg-white/[0.02] transition-colors">
            <td class="px-6 py-3.5">
              <span class="inline-flex items-center px-2.5 py-1 rounded-full border border-black/[0.1] dark:border-white/[0.12] text-[13px] font-medium text-black/55 dark:text-white/55">
                {r.id}
              </span>
            </td>
            <td class="px-6 py-3.5 font-medium text-black dark:text-white whitespace-nowrap">{r.name}</td>
            <td class="px-6 py-3.5 text-black/55 dark:text-white/55 whitespace-nowrap">{r.address}</td>
            <td class="px-6 py-3.5 text-black/70 dark:text-white/70 whitespace-nowrap">
              <span class="text-black/30 dark:text-white/30 mr-1">$</span>
              {r.range}
            </td>
            <td class="px-6 py-3.5 text-black/55 dark:text-white/55 whitespace-nowrap">{r.sent}</td>
            <td class="px-6 py-3.5">
              <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-medium {statusTone[r.status]}">
                {r.status}
              </span>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>

    <!-- Footer / pagination -->
    <div class="flex items-center justify-between px-6 py-4 border-t border-black/[0.06] dark:border-white/[0.07]">
      <p class="text-[13px] text-black/45 dark:text-white/45">
        Showing <span class="font-semibold text-black/70 dark:text-white/70">1-10</span> of 100
      </p>
      <div class="flex items-center gap-2">
        <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/[0.1] text-black/50 dark:text-white/50 hover:bg-black/[0.03] dark:hover:bg-white/[0.06] transition-colors">
          <CaretLeft size={14} />
        </button>
        <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/[0.1] text-black/50 dark:text-white/50 hover:bg-black/[0.03] dark:hover:bg-white/[0.06] transition-colors">
          <CaretRight size={14} />
        </button>
      </div>
    </div>
  </div>
</main>
