import { PencilIcon } from '@phosphor-icons/react'

const categories = [
  { label: 'Housing', pct: 18, color: '#f59e0b' },
  { label: 'Debt payments', pct: 7, color: '#eab308' },
  { label: 'Food', pct: 6, color: '#22c55e' },
  { label: 'Transportation', pct: 9, color: '#14b8a6' },
  { label: 'Healthcare', pct: 10, color: '#84cc16' },
  { label: 'Investments', pct: 17, color: '#16a34a' },
  { label: 'Other', pct: 33, color: '#d1d5db' },
]

const goals = [
  {
    label: 'Reserve',
    current: 7000,
    target: 10000,
    pct: 70,
    timeLeft: 'Left to save 4 months',
    barColor: 'bg-[#5a9e3a]',
    section: 'This year',
  },
  {
    label: 'Travel',
    current: 2500,
    target: 4000,
    pct: 63,
    timeLeft: 'Left to save 3 months',
    barColor: 'bg-orange-400',
    section: 'Long term',
  },
  {
    label: 'Car',
    current: 1600,
    target: 10000,
    pct: 16,
    timeLeft: 'Left to save 5 years 6 months',
    barColor: 'bg-orange-400',
    section: null,
  },
  {
    label: 'Real estate',
    current: 8300,
    target: 10000,
    pct: 83,
    timeLeft: 'Left to save 5 years 8 months',
    barColor: 'bg-[#5a9e3a]',
    section: null,
  },
]

// SVG bar chart data
const bars = [
  { day: 'Sun', expenses: 20, income: 40, savings: 30, highlight: false },
  { day: 'Mon', expenses: 25, income: 50, savings: 35, highlight: false },
  { day: 'Tue', expenses: 30, income: 55, savings: 40, highlight: false },
  { day: 'Wed', expenses: 45, income: 70, savings: 50, highlight: true },
  { day: 'Thu', expenses: 25, income: 45, savings: 30, highlight: false },
  { day: 'Fri', expenses: 20, income: 40, savings: 25, highlight: false },
  { day: 'Sat', expenses: 15, income: 35, savings: 20, highlight: false },
]

const barWidth = 40
const barGap = 34
const startX = 30
const chartBottom = 140

function BarChart() {
  return (
    <svg viewBox="0 0 520 190" className="w-full" style={{ height: 190 }}>
      {/* Y-axis labels */}
      {[30, 20, 10, 0, -10].map((val, i) => (
        <text key={val} x="18" y={30 + i * 28} textAnchor="middle" fontSize="10" fill="#00000066" className="dark:fill-white/40">
          {val}
        </text>
      ))}

      {bars.map((bar, i) => {
        const x = startX + i * (barWidth + barGap)
        const totalH = bar.expenses + bar.income + bar.savings
        const expH = (bar.expenses / totalH) * (totalH * 1)
        const incH = (bar.income / totalH) * (totalH * 1)
        const savH = (bar.savings / totalH) * (totalH * 1)

        const expColor = bar.highlight ? '#f59e0b' : '#f59e0b33'
        const incColor = bar.highlight ? '#5a9e3a' : '#5a9e3a33'
        const savColor = bar.highlight ? '#c5e840' : '#c5e84033'

        const totalPx = expH + incH + savH
        const yBase = chartBottom

        return (
          <g key={bar.day}>
            {/* Expenses (bottom) */}
            <rect
              x={x}
              y={yBase - expH}
              width={barWidth}
              height={expH}
              rx={bar.highlight ? 0 : 4}
              fill={expColor}
            />
            {/* Income (middle) */}
            <rect
              x={x}
              y={yBase - expH - incH}
              width={barWidth}
              height={incH}
              rx={0}
              fill={incColor}
            />
            {/* Savings (top) */}
            <rect
              x={x}
              y={yBase - totalPx}
              width={barWidth}
              height={savH}
              rx={4}
              fill={savColor}
            />

            {/* Tooltip for Wednesday */}
            {bar.highlight && (
              <g>
                <rect
                  x={x - 30}
                  y={yBase - totalPx - 72}
                  width={120}
                  height={68}
                  rx={8}
                  fill="white"
                  filter="url(#shadow)"
                />
                <text x={x + 20} y={yBase - totalPx - 55} textAnchor="middle" fontSize="9" fill="#00000066">Wednesday, 7 Jan 2025</text>
                <circle cx={x - 18} cy={yBase - totalPx - 42} r={3} fill="#c5e840" />
                <text x={x - 12} y={yBase - totalPx - 39} fontSize="9" fill="#000000aa">Savings</text>
                <text x={x + 70} y={yBase - totalPx - 39} textAnchor="end" fontSize="9" fill="#000" fontWeight="600">$240</text>
                <circle cx={x - 18} cy={yBase - totalPx - 28} r={3} fill="#5a9e3a" />
                <text x={x - 12} y={yBase - totalPx - 25} fontSize="9" fill="#000000aa">Income</text>
                <text x={x + 70} y={yBase - totalPx - 25} textAnchor="end" fontSize="9" fill="#000" fontWeight="600">$700</text>
                <circle cx={x - 18} cy={yBase - totalPx - 14} r={3} fill="#f59e0b" />
                <text x={x - 12} y={yBase - totalPx - 11} fontSize="9" fill="#000000aa">Expenses</text>
                <text x={x + 70} y={yBase - totalPx - 11} textAnchor="end" fontSize="9" fill="#000" fontWeight="600">$460</text>
              </g>
            )}

            {/* X-axis label */}
            <text
              x={x + barWidth / 2}
              y={chartBottom + 16}
              textAnchor="middle"
              fontSize="10"
              fill={bar.highlight ? '#000000cc' : '#00000066'}
              fontWeight={bar.highlight ? '600' : '400'}
              className="dark:fill-white/60"
            >
              {bar.day}
            </text>
          </g>
        )
      })}

      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#00000018" />
        </filter>
      </defs>
    </svg>
  )
}

function DonutGauge() {
  const radius = 60
  const cx = 80
  const cy = 80
  const circumference = 2 * Math.PI * radius
  const pct = 0.75
  const dashArray = `${pct * circumference} ${circumference}`

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: 140, height: 140 }}>
        <svg viewBox="0 0 160 160" width="140" height="140">
          <defs>
            <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c5e840" />
              <stop offset="100%" stopColor="#5a9e3a" />
            </linearGradient>
          </defs>
          {/* Background arc */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="18"
            strokeDasharray={`${0.75 * circumference} ${circumference}`}
            transform={`rotate(-225 ${cx} ${cy})`}
            strokeLinecap="round"
          />
          {/* Foreground arc */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="url(#gaugeGrad)"
            strokeWidth="18"
            strokeDasharray={dashArray}
            transform={`rotate(-225 ${cx} ${cy})`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[24px] font-bold text-black dark:text-white leading-none">75%</span>
          <span className="text-[10px] text-black/40 dark:text-white/40 text-center mt-0.5 leading-tight max-w-[70px]">Of monthly income saved</span>
        </div>
      </div>
    </div>
  )
}

export function MainContent() {
  return (
    <main className="bg-[#f4f4f4] dark:bg-[#0a0a0a] flex-1 overflow-y-auto p-4">
      {/* Section 1: Balance + Stats */}
      <div className="flex gap-4">
        {/* Balance overview card */}
        <div className="flex-1 bg-white dark:bg-[#111] rounded-2xl p-5 border border-black/[0.06] dark:border-white/[0.06]">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[36px] font-bold text-black dark:text-white leading-none">$12,450</span>
              <p className="text-[12px] text-black/40 dark:text-white/40 mt-1">Balance overview</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="border border-black/10 dark:border-white/10 rounded-full px-3 py-1 text-[12px] text-black/60 dark:text-white/60 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors">
                7d ▾
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-black/40 dark:text-white/40 transition-colors text-[14px]">
                ▦
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-black/40 dark:text-white/40 transition-colors text-[14px]">
                ∿
              </button>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c5e840] inline-block" />
              <span className="text-[12px] text-black/50 dark:text-white/50">Savings</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5a9e3a] inline-block" />
              <span className="text-[12px] text-black/50 dark:text-white/50">Income</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
              <span className="text-[12px] text-black/50 dark:text-white/50">Expenses</span>
            </div>
          </div>

          {/* Chart */}
          <div className="mt-2">
            <BarChart />
          </div>
        </div>

        {/* Stats column */}
        <div className="w-52 flex flex-col gap-3">
          <div className="bg-white dark:bg-[#111] rounded-2xl p-4 border border-black/[0.06] dark:border-white/[0.06]">
            <p className="text-[12px] text-black/40 dark:text-white/40">Total income</p>
            <p className="text-[24px] font-bold text-black dark:text-white mt-0.5 leading-tight">$15,000</p>
            <p className="text-[11px] text-green-600 mt-1">↑ 5.1% from last month</p>
          </div>
          <div className="bg-white dark:bg-[#111] rounded-2xl p-4 border border-black/[0.06] dark:border-white/[0.06]">
            <p className="text-[12px] text-black/40 dark:text-white/40">Total expenses</p>
            <p className="text-[24px] font-bold text-black dark:text-white mt-0.5 leading-tight">$6,700</p>
            <p className="text-[11px] text-orange-500 mt-1">↑ 13.5% from last month</p>
          </div>
          <div className="bg-white dark:bg-[#111] rounded-2xl p-4 border border-black/[0.06] dark:border-white/[0.06]">
            <p className="text-[12px] text-black/40 dark:text-white/40">Saved balance</p>
            <p className="text-[24px] font-bold text-black dark:text-white mt-0.5 leading-tight">$8,300</p>
            <p className="text-[11px] text-green-600 mt-1">↑ 20.7% from last month</p>
          </div>
        </div>
      </div>

      {/* Section 2: Middle row */}
      <div className="flex gap-4 mt-4">
        {/* Monthly spending limit */}
        <div className="flex-1 bg-white dark:bg-[#111] rounded-2xl p-5 border border-black/[0.06] dark:border-white/[0.06]">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-semibold text-[14px] text-black dark:text-white">Monthly spending limit</p>
              <p className="text-[12px] text-black/40 dark:text-white/40 mt-0.5">Recipient accounts</p>
            </div>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-black/40 dark:text-white/40 transition-colors">
              <PencilIcon size={14} />
            </button>
          </div>
          <div className="h-3 rounded-full bg-black/[0.06] dark:bg-white/[0.06] mt-4">
            <div className="w-[86%] h-full rounded-full bg-gradient-to-r from-[#c5e840] to-[#5a9e3a]" />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[12px] text-black/50 dark:text-white/50">$8,600</span>
            <span className="text-[12px] text-black/50 dark:text-white/50">$10,000</span>
          </div>
        </div>

        {/* Tip card */}
        <div className="flex-1 bg-white dark:bg-[#111] rounded-2xl p-5 border border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden">
          {/* Decorative squares — behind content */}
          <div className="absolute top-3 right-3 grid grid-cols-3 gap-1 opacity-30 pointer-events-none">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-5 h-5 rounded-sm bg-[#c5e840]" />
            ))}
          </div>
          <div className="relative z-10">
            <p className="font-semibold text-[14px] text-black dark:text-white pr-16">Optimize your budget with these quick tips</p>
            <p className="text-[12px] text-black/50 dark:text-white/50 mt-1">Start preparing for the 2025 tax season by saving 10–15% for deductions.</p>
            <a href="#" className="text-[13px] font-medium text-black dark:text-white mt-3 flex items-center gap-1 hover:opacity-70 transition-opacity">
              Read more →
            </a>
          </div>
        </div>
      </div>

      {/* Section 3: Bottom rows */}
      <div className="flex gap-4 mt-4">
        {/* Cost analysis */}
        <div className="flex-1 bg-white dark:bg-[#111] rounded-2xl p-5 border border-black/[0.06] dark:border-white/[0.06]">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-semibold text-[14px] text-black dark:text-white">Cost analysis</p>
              <p className="text-[12px] text-black/40 dark:text-white/40 mt-0.5">Spending overview</p>
            </div>
            <button className="border border-black/10 dark:border-white/10 rounded-full px-2.5 py-1 text-[11px] text-black/50 dark:text-white/50 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors">
              January ▾
            </button>
          </div>
          <p className="text-[28px] font-bold text-black dark:text-white mt-2">$8,450</p>

          {/* Color bar */}
          <div className="flex gap-0.5 mt-2 h-2 rounded-full overflow-hidden">
            {categories.map((cat) => (
              <div
                key={cat.label}
                style={{ width: `${cat.pct}%`, backgroundColor: cat.color }}
              />
            ))}
          </div>

          {/* Category list */}
          <div className="mt-3">
            {categories.map((cat) => (
              <div key={cat.label} className="flex items-center justify-between text-[12px] mt-1.5">
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-2 shrink-0" style={{ backgroundColor: cat.color }} />
                  <span className="text-black/70 dark:text-white/70">{cat.label}</span>
                </div>
                <span className="text-black/50 dark:text-white/50">{cat.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Financial health */}
        <div className="flex-1 bg-white dark:bg-[#111] rounded-2xl p-5 border border-black/[0.06] dark:border-white/[0.06]">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-semibold text-[14px] text-black dark:text-white">Financial health</p>
              <p className="text-[12px] text-black/40 dark:text-white/40 mt-0.5">Current status</p>
            </div>
            <button className="border border-black/10 dark:border-white/10 rounded-full px-2.5 py-1 text-[11px] text-black/50 dark:text-white/50 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors">
              30d ▾
            </button>
          </div>
          <p className="text-[28px] font-bold text-black dark:text-white mt-1">$15,780</p>
          <p className="text-[11px] text-green-600 mt-0.5">↑ 17.5% from last month</p>

          <div className="flex justify-center mt-3">
            <DonutGauge />
          </div>

          <p className="text-[11px] text-black/40 dark:text-white/40 mt-2 text-center leading-snug">
            Based on aggregated transaction metrics over the past 30 days
          </p>
        </div>

      </div>

      {/* Goal tracker — full width row */}
      <div className="mt-4">
        <div className="bg-white dark:bg-[#111] rounded-2xl p-5 border border-black/[0.06] dark:border-white/[0.06]">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-[14px] text-black dark:text-white">Goal tracker</p>
            <button className="text-[12px] text-black/50 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-lg px-2 py-1 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors">
              + Add goals
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-6 mt-1">
          {goals.map((goal) => (
            <div key={goal.label}>
              {goal.section && (
                <p className="text-[11px] text-black/40 dark:text-white/40 mt-2 mb-1">{goal.section}</p>
              )}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-black/[0.06] dark:bg-white/[0.06] shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] font-medium text-black dark:text-white">{goal.label}</span>
                    <span className="text-[11px] text-black/40 dark:text-white/40">${goal.current.toLocaleString()}/${goal.target.toLocaleString()}</span>
                  </div>
                  <p className="text-[10px] text-black/40 dark:text-white/40 mt-0.5">{goal.timeLeft}</p>
                  <div className="h-1.5 rounded-full bg-black/[0.06] dark:bg-white/[0.06] mt-1">
                    <div
                      className={`h-full rounded-full ${goal.barColor}`}
                      style={{ width: `${goal.pct}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </main>
  )
}
