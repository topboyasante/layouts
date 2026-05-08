import { CaretDownIcon, SortAscendingIcon, DotsThreeIcon } from '@phosphor-icons/react'

const platforms = [
  { name: 'Dribbble',  amount: '$227,459', pct: 43, color: '#f03e6e' },
  { name: 'Instagram', amount: '$142,823', pct: 27, color: '#a855f7' },
  { name: 'Behance',   amount: '$89,935',  pct: 17, color: '#2563eb' },
  { name: 'Google',    amount: '$37,028',  pct: 7,  color: '#22c55e' },
]

const recentDeals = [
  { name: 'Cloudz3r SaaS',    company: 'Cloudz3r',   amount: '$48,000', stage: 'Closed Won',  stageColor: 'bg-green-100 text-green-700',           date: 'Nov 28' },
  { name: 'Idioma Platform',  company: 'Idioma',     amount: '$21,500', stage: 'Negotiation', stageColor: 'bg-blue-100 text-blue-700',             date: 'Nov 25' },
  { name: 'Cargo2go Fleet',   company: 'Cargo2go',   amount: '$67,200', stage: 'Proposal',    stageColor: 'bg-orange-100 text-orange-700',         date: 'Nov 22' },
  { name: 'Syllables API',    company: 'Syllables',  amount: '$12,800', stage: 'Closed Lost', stageColor: 'bg-red-100 text-red-600',               date: 'Nov 20' },
  { name: 'x-0b Enterprise',  company: 'x-0b',       amount: '$95,000', stage: 'Closed Won',  stageColor: 'bg-green-100 text-green-700',           date: 'Nov 18' },
]

const pipeline = [
  { label: 'Prospecting', count: 38, value: '$312k', color: '#f03e6e', pct: 100 },
  { label: 'Qualified',   count: 24, value: '$198k', color: '#fb923c', pct: 72  },
  { label: 'Proposal',    count: 15, value: '$141k', color: '#a855f7', pct: 52  },
  { label: 'Negotiation', count: 8,  value: '$88k',  color: '#3b82f6', pct: 34  },
  { label: 'Closed Won',  count: 4,  value: '$48k',  color: '#22c55e', pct: 18  },
]

export function MainContent() {
  return (
    <div className="flex-1 min-w-0 overflow-y-auto bg-[#fafafa] dark:bg-[#0f0f0f] p-5 flex flex-col gap-4">

      {/* Title + timeframe */}
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-light text-black/35 dark:text-white/25">New report</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-1 py-1 gap-0.5">
            <button className="px-2.5 py-0.5 rounded-full text-[11px] bg-black text-white font-medium">On</button>
            <button className="px-2.5 py-0.5 rounded-full text-[11px] text-black/40 dark:text-white/40">Off</button>
          </div>
          <button className="flex items-center gap-1.5 border border-black/10 dark:border-white/10 rounded-full px-3 py-1 text-[12px] text-black/55 dark:text-white/45">
            Sep 1 – Nov 30, 2023 <CaretDownIcon size={10} />
          </button>
        </div>
      </div>

      {/* Revenue */}
      <div className="bg-white dark:bg-[#111] rounded-xl p-5 border border-black/8 dark:border-white/8">
        <p className="text-[11px] text-black/40 dark:text-white/30 mb-1">Revenue</p>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-[36px] font-bold leading-none">$528,976</span>
          <span className="bg-green-100 text-green-700 rounded-full px-2 py-0.5 text-[11px] font-medium">↑ 7.9%</span>
          <span className="bg-black dark:bg-white text-white dark:text-black rounded-full px-2 py-0.5 text-[11px] font-medium">$27,335.09</span>
        </div>
        <p className="text-[11px] text-black/35 dark:text-white/25">vs prev. $501,641.73 · Jun 1 – Aug 31, 2023</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Deals',    value: '258', sub: '↑ 7.9% vs last period', subColor: 'text-green-600' },
          { label: 'Win rate', value: '44%', sub: '↑ 1.2% vs last period', subColor: 'text-green-600' },
          { label: 'Value',    value: '528k', sub: '↑ 7.9% vs last period', subColor: 'text-green-600', pink: true },
        ].map((c) => (
          <div key={c.label} className={`bg-white dark:bg-[#111] rounded-xl p-4 border ${c.pink ? 'border-2 border-[#f03e6e]' : 'border-black/8 dark:border-white/8'}`}>
            <p className="text-[11px] text-black/40 dark:text-white/30 mb-2">{c.label}</p>
            <p className={`text-[28px] font-bold leading-none mb-1.5 ${c.pink ? 'text-[#f03e6e]' : 'text-black dark:text-white'}`}>{c.value}</p>
            <p className={`text-[11px] ${c.subColor}`}>{c.sub}</p>
          </div>
        ))}
      </div>

      {/* Bottom row: recent deals + pipeline */}
      <div className="grid grid-cols-[1fr_auto] gap-4">

        {/* Recent deals */}
        <div className="bg-white dark:bg-[#111] rounded-xl border border-black/8 dark:border-white/8 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/6 dark:border-white/6">
            <p className="text-[13px] font-semibold text-black dark:text-white">Recent deals</p>
            <button className="text-black/30 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors">
              <DotsThreeIcon size={16} />
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-black/5 dark:border-white/5">
                <th className="px-5 py-2 text-left text-[10px] font-medium text-black/35 dark:text-white/30">Deal</th>
                <th className="px-3 py-2 text-left text-[10px] font-medium text-black/35 dark:text-white/30">Amount</th>
                <th className="px-3 py-2 text-left text-[10px] font-medium text-black/35 dark:text-white/30">Stage</th>
                <th className="px-5 py-2 text-right text-[10px] font-medium text-black/35 dark:text-white/30">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentDeals.map((d) => (
                <tr key={d.name} className="border-b border-black/4 dark:border-white/4 last:border-0 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-2.5">
                    <p className="text-[12px] font-medium text-black dark:text-white">{d.name}</p>
                    <p className="text-[10px] text-black/35 dark:text-white/30">{d.company}</p>
                  </td>
                  <td className="px-3 py-2.5 text-[12px] font-medium text-black dark:text-white">{d.amount}</td>
                  <td className="px-3 py-2.5">
                    <span className={`${d.stageColor} text-[10px] font-medium rounded-full px-2 py-0.5`}>{d.stage}</span>
                  </td>
                  <td className="px-5 py-2.5 text-right text-[11px] text-black/35 dark:text-white/30">{d.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pipeline funnel */}
        <div className="bg-white dark:bg-[#111] rounded-xl border border-black/8 dark:border-white/8 p-5 w-52">
          <p className="text-[13px] font-semibold text-black dark:text-white mb-4">Pipeline</p>
          <div className="flex flex-col gap-2.5">
            {pipeline.map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-black/50 dark:text-white/40">{s.label}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-black/35 dark:text-white/30">{s.count}</span>
                    <span className="text-[10px] font-medium text-black dark:text-white">{s.value}</span>
                  </div>
                </div>
                <div className="h-1 bg-black/6 dark:bg-white/8 rounded-full">
                  <div className="h-1 rounded-full" style={{ width: `${s.pct}%`, backgroundColor: s.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Platform breakdown */}
      <div className="bg-white dark:bg-[#111] rounded-xl p-5 border border-black/8 dark:border-white/8">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[13px] font-semibold text-black dark:text-white">Revenue by platform</p>
          <button className="flex items-center gap-1 text-[11px] text-black/35 dark:text-white/35 hover:text-black dark:hover:text-white">
            <SortAscendingIcon size={13} /> Filters
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {platforms.map((p) => (
            <div key={p.name} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
              <span className="text-[13px] font-medium text-black dark:text-white w-20 shrink-0">{p.name}</span>
              <div className="flex-1 bg-black/6 dark:bg-white/8 rounded-full h-1.5">
                <div className="h-1.5 rounded-full" style={{ width: `${p.pct}%`, backgroundColor: p.color }} />
              </div>
              <span className="text-[12px] text-black/50 dark:text-white/40 w-16 text-right shrink-0">{p.amount}</span>
              <span className="text-[11px] text-black/35 dark:text-white/25 w-7 text-right shrink-0">{p.pct}%</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
