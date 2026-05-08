import { CalendarIcon, CaretDownIcon, InfoIcon, PlusIcon } from '@phosphor-icons/react'
import { Header } from './header'

function Badge({ value, positive }: { value: string; positive: boolean }) {
  return (
    <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium ${
      positive
        ? 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400'
        : 'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400'
    }`}>
      {value}
    </span>
  )
}

function StatCard({ title, current, overdue }: {
  title: string
  current: { value: string; change: string; positive: boolean }
  overdue: { value: string; change: string; positive: boolean }
}) {
  return (
    <div className="flex-1 rounded-lg border border-black/8 dark:border-white/8 p-4 bg-white dark:bg-[#0F1010]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1.5">
          <span className="text-[13px] font-medium text-black dark:text-white">{title}</span>
          <InfoIcon size={13} className="text-black/30 dark:text-white/30" />
        </div>
        <button className="flex items-center gap-1 text-[12px] text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
          <PlusIcon size={12} weight="bold" /> New
        </button>
      </div>
      <div className="flex gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">Current</p>
          <p className="text-[18px] font-semibold text-black dark:text-white leading-none mb-1.5">{current.value}</p>
          <Badge value={current.change} positive={current.positive} />
        </div>
        <div className="w-px bg-black/6 dark:bg-white/6" />
        <div>
          <p className="text-[10px] uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">Overdue</p>
          <p className="text-[18px] font-semibold text-black dark:text-white leading-none mb-1.5">{overdue.value}</p>
          <Badge value={overdue.change} positive={overdue.positive} />
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-black/6 dark:border-white/6">
        <button className="flex items-center gap-1 text-[12px] text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
          Last 30 days <CaretDownIcon size={11} />
        </button>
      </div>
    </div>
  )
}

function CashFlowChart() {
  return (
    <div className="relative w-full h-40">
      <svg viewBox="0 0 800 160" className="w-full h-full" preserveAspectRatio="none">
        {/* Grid lines */}
        {[0, 40, 80, 120, 160].map((y) => (
          <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
        ))}
        {/* Income line (blue) */}
        <path
          d="M0,90 C50,85 100,70 150,75 C200,80 250,60 300,55 C350,50 400,65 450,60 C500,55 550,45 600,50 C650,55 700,45 750,40 L800,35"
          fill="none"
          stroke="#FF3B30"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Outgoing line (cyan) */}
        <path
          d="M0,120 C50,118 100,115 150,118 C200,121 250,112 300,108 C350,104 400,115 450,110 C500,105 550,100 600,105 C650,110 700,105 750,100 L800,95"
          fill="none"
          stroke="#FF8674"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Tooltip vertical line */}
        <line x1="340" y1="0" x2="340" y2="160" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 3" />
        <circle cx="340" cy="55" r="4" fill="#FF3B30" />
      </svg>

      {/* Tooltip */}
      <div className="absolute top-0 left-[43%] bg-white dark:bg-[#1a1a1a] border border-black/8 dark:border-white/8 rounded-lg shadow-sm p-3 text-[12px] min-w-40">
        <p className="font-medium text-black dark:text-white mb-2">Apr 24, 2024</p>
        {[
          { label: 'Opening balance', value: '$2,340.00' },
          { label: 'Incoming', value: '$1,120.00' },
          { label: 'Outgoing', value: '$40.00' },
          { label: 'Ending balance', value: '$3,420.00' },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between gap-4">
            <span className="text-black/45 dark:text-white/40">{label}</span>
            <span className="text-black dark:text-white font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function MainContent() {
  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#fafafa] dark:bg-[#0F1010]">
      <Header />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {/* Today */}
        <section>
          <h2 className="text-[13px] font-semibold text-black dark:text-white mb-3">Today</h2>
          <div className="flex gap-4">
            <StatCard
              title="Total Receivables"
              current={{ value: '$96,000.00', change: '+5%', positive: true }}
              overdue={{ value: '$24,000.00', change: '-3%', positive: false }}
            />
            <StatCard
              title="Total Payable"
              current={{ value: '$96,000.00', change: '+5%', positive: true }}
              overdue={{ value: '$24,000.00', change: '-3%', positive: false }}
            />
          </div>
        </section>

        {/* Cash flow */}
        <section className="rounded-lg border border-black/8 dark:border-white/8 p-4 bg-white dark:bg-[#0F1010]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[13px] font-semibold text-black dark:text-white">Cash flow</h2>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[11px] text-black/45 dark:text-white/40">
                <span className="w-2 h-2 rounded-full bg-[#FF3B30] shrink-0" /> Income
              </div>
              <div className="flex items-center gap-1 text-[11px] text-black/45 dark:text-white/40">
                <span className="w-2 h-2 rounded-full bg-[#FF8674] shrink-0" /> Outgoing
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <button className="flex items-center gap-1 text-[12px] text-black/60 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-md px-2.5 py-1 hover:border-black/20 transition-colors">
              Last 12 months <CaretDownIcon size={11} />
            </button>
            <button className="flex items-center gap-1.5 text-[12px] text-black/60 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-md px-2.5 py-1 hover:border-black/20 transition-colors">
              <CalendarIcon size={12} /> Jan 1, 2024 – Dec 31, 2024
            </button>
          </div>
          <div className="flex gap-6 mb-4">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">Income</p>
              <div className="flex items-center gap-2">
                <span className="text-[18px] font-semibold text-black dark:text-white">$96,000.00</span>
                <Badge value="+5%" positive />
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">Outgoing</p>
              <div className="flex items-center gap-2">
                <span className="text-[18px] font-semibold text-black dark:text-white">$24,000.00</span>
                <Badge value="-3%" positive={false} />
              </div>
            </div>
          </div>
          <CashFlowChart />
          <div className="flex justify-between mt-2 text-[11px] text-black/30 dark:text-white/25">
            <span>JAN 1, 2023</span>
            <span>DEC 31, 2024</span>
          </div>
        </section>

      </div>
    </div>
  )
}
