import { CaretUpIcon, CaretDownIcon } from '@phosphor-icons/react'
import { Sparkline } from './sparkline'

type Metric = {
  label: string
  value: string
  delta: string
  trend: 'up' | 'down'
  spark: number[]
}

const metrics: Metric[] = [
  {
    label: 'New Leads',
    value: '42',
    delta: '12%',
    trend: 'up',
    spark: [3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10],
  },
  {
    label: 'Qualified Leads',
    value: '18',
    delta: '4.2%',
    trend: 'up',
    spark: [4, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10],
  },
  {
    label: 'Avg Response Time',
    value: '1.8h',
    delta: '15%',
    trend: 'up',
    spark: [5, 4, 6, 5, 7, 6, 5, 7, 8, 6, 8, 9],
  },
  {
    label: 'Hot Leads',
    value: '9',
    delta: '2%',
    trend: 'down',
    spark: [6, 7, 6, 8, 7, 9, 7, 8, 6, 7, 5, 6],
  },
]

export function MetricsRow() {
  return (
    <div className="grid grid-cols-4 px-7 pt-2 pb-5 shrink-0 bg-white dark:bg-[#0f0f0f]">
      {metrics.map((m, i) => (
        <div
          key={m.label}
          className={`flex items-center justify-between gap-4 px-5 first:pl-0 last:pr-0 ${
            i > 0 ? 'border-l border-black/[0.06] dark:border-white/[0.07]' : ''
          }`}
        >
          <div className="flex flex-col min-w-0">
            <span className="text-[12px] text-black/45 dark:text-white/45 mb-1.5">{m.label}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-[26px] font-semibold tracking-tight text-black dark:text-white leading-none">
                {m.value}
              </span>
              <span
                className={`inline-flex items-center gap-0.5 text-[12px] font-medium ${
                  m.trend === 'up'
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {m.trend === 'up' ? <CaretUpIcon size={11} weight="fill" /> : <CaretDownIcon size={11} weight="fill" />}
                {m.delta}
              </span>
            </div>
          </div>
          <div className="w-[110px] h-[34px] shrink-0">
            <Sparkline data={m.spark} />
          </div>
        </div>
      ))}
    </div>
  )
}
