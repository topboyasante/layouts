import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { phosphorPencil } from '@ng-icons/phosphor'

type Category = { label: string; pct: number; color: string }
type Goal = {
  label: string
  current: number
  target: number
  pct: number
  timeLeft: string
  barColor: string
  section: string | null
}
type Bar = { day: string; expenses: number; income: number; savings: number; highlight: boolean }

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ phosphorPencil })],
  template: `
    <main class="bg-[#f4f4f4] dark:bg-[#0a0a0a] flex-1 overflow-y-auto p-4">
      <!-- Section 1: Balance + Stats -->
      <div class="flex gap-4">
        <!-- Balance overview card -->
        <div class="flex-1 bg-white dark:bg-[#111] rounded-2xl p-5 border border-black/[0.06] dark:border-white/[0.06]">
          <div class="flex items-start justify-between">
            <div>
              <span class="text-[36px] font-bold text-black dark:text-white leading-none">$12,450</span>
              <p class="text-[12px] text-black/40 dark:text-white/40 mt-1">Balance overview</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="border border-black/10 dark:border-white/10 rounded-full px-3 py-1 text-[12px] text-black/60 dark:text-white/60 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors">
                7d ▾
              </button>
              <button class="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-black/40 dark:text-white/40 transition-colors text-[14px]">
                ▦
              </button>
              <button class="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-black/40 dark:text-white/40 transition-colors text-[14px]">
                ∿
              </button>
            </div>
          </div>

          <!-- Legend -->
          <div class="flex items-center gap-4 mt-3">
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-[#c5e840] inline-block"></span>
              <span class="text-[12px] text-black/50 dark:text-white/50">Savings</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-[#5a9e3a] inline-block"></span>
              <span class="text-[12px] text-black/50 dark:text-white/50">Income</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
              <span class="text-[12px] text-black/50 dark:text-white/50">Expenses</span>
            </div>
          </div>

          <!-- Chart -->
          <div class="mt-2">
            <svg viewBox="0 0 520 190" class="w-full" style="height: 190px">
              <!-- Y-axis labels -->
              @for (val of yLabels; track val; let i = $index) {
                <text x="18" [attr.y]="30 + i * 28" text-anchor="middle" font-size="10" fill="#00000066" class="dark:fill-white/40">
                  {{ val }}
                </text>
              }

              @for (bar of bars; track bar.day; let i = $index) {
                <g>
                  <!-- Expenses (bottom) -->
                  <rect
                    [attr.x]="barX(i)"
                    [attr.y]="chartBottom - expH(bar)"
                    [attr.width]="barWidth"
                    [attr.height]="expH(bar)"
                    [attr.rx]="bar.highlight ? 0 : 4"
                    [attr.fill]="bar.highlight ? '#f59e0b' : '#f59e0b33'"
                  />
                  <!-- Income (middle) -->
                  <rect
                    [attr.x]="barX(i)"
                    [attr.y]="chartBottom - expH(bar) - incH(bar)"
                    [attr.width]="barWidth"
                    [attr.height]="incH(bar)"
                    [attr.rx]="0"
                    [attr.fill]="bar.highlight ? '#5a9e3a' : '#5a9e3a33'"
                  />
                  <!-- Savings (top) -->
                  <rect
                    [attr.x]="barX(i)"
                    [attr.y]="chartBottom - totalPx(bar)"
                    [attr.width]="barWidth"
                    [attr.height]="savH(bar)"
                    [attr.rx]="4"
                    [attr.fill]="bar.highlight ? '#c5e840' : '#c5e84033'"
                  />

                  <!-- Tooltip for Wednesday -->
                  @if (bar.highlight) {
                    <g>
                      <rect
                        [attr.x]="barX(i) - 30"
                        [attr.y]="chartBottom - totalPx(bar) - 72"
                        [attr.width]="120"
                        [attr.height]="68"
                        [attr.rx]="8"
                        fill="white"
                        filter="url(#shadow)"
                      />
                      <text [attr.x]="barX(i) + 20" [attr.y]="chartBottom - totalPx(bar) - 55" text-anchor="middle" font-size="9" fill="#00000066">Wednesday, 7 Jan 2025</text>
                      <circle [attr.cx]="barX(i) - 18" [attr.cy]="chartBottom - totalPx(bar) - 42" [attr.r]="3" fill="#c5e840" />
                      <text [attr.x]="barX(i) - 12" [attr.y]="chartBottom - totalPx(bar) - 39" font-size="9" fill="#000000aa">Savings</text>
                      <text [attr.x]="barX(i) + 70" [attr.y]="chartBottom - totalPx(bar) - 39" text-anchor="end" font-size="9" fill="#000" font-weight="600">$240</text>
                      <circle [attr.cx]="barX(i) - 18" [attr.cy]="chartBottom - totalPx(bar) - 28" [attr.r]="3" fill="#5a9e3a" />
                      <text [attr.x]="barX(i) - 12" [attr.y]="chartBottom - totalPx(bar) - 25" font-size="9" fill="#000000aa">Income</text>
                      <text [attr.x]="barX(i) + 70" [attr.y]="chartBottom - totalPx(bar) - 25" text-anchor="end" font-size="9" fill="#000" font-weight="600">$700</text>
                      <circle [attr.cx]="barX(i) - 18" [attr.cy]="chartBottom - totalPx(bar) - 14" [attr.r]="3" fill="#f59e0b" />
                      <text [attr.x]="barX(i) - 12" [attr.y]="chartBottom - totalPx(bar) - 11" font-size="9" fill="#000000aa">Expenses</text>
                      <text [attr.x]="barX(i) + 70" [attr.y]="chartBottom - totalPx(bar) - 11" text-anchor="end" font-size="9" fill="#000" font-weight="600">$460</text>
                    </g>
                  }

                  <!-- X-axis label -->
                  <text
                    [attr.x]="barX(i) + barWidth / 2"
                    [attr.y]="chartBottom + 16"
                    text-anchor="middle"
                    font-size="10"
                    [attr.fill]="bar.highlight ? '#000000cc' : '#00000066'"
                    [attr.font-weight]="bar.highlight ? '600' : '400'"
                    class="dark:fill-white/60"
                  >
                    {{ bar.day }}
                  </text>
                </g>
              }

              <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#00000018" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <!-- Stats column -->
        <div class="w-52 flex flex-col gap-3">
          <div class="bg-white dark:bg-[#111] rounded-2xl p-4 border border-black/[0.06] dark:border-white/[0.06]">
            <p class="text-[12px] text-black/40 dark:text-white/40">Total income</p>
            <p class="text-[24px] font-bold text-black dark:text-white mt-0.5 leading-tight">$15,000</p>
            <p class="text-[11px] text-green-600 mt-1">↑ 5.1% from last month</p>
          </div>
          <div class="bg-white dark:bg-[#111] rounded-2xl p-4 border border-black/[0.06] dark:border-white/[0.06]">
            <p class="text-[12px] text-black/40 dark:text-white/40">Total expenses</p>
            <p class="text-[24px] font-bold text-black dark:text-white mt-0.5 leading-tight">$6,700</p>
            <p class="text-[11px] text-orange-500 mt-1">↑ 13.5% from last month</p>
          </div>
          <div class="bg-white dark:bg-[#111] rounded-2xl p-4 border border-black/[0.06] dark:border-white/[0.06]">
            <p class="text-[12px] text-black/40 dark:text-white/40">Saved balance</p>
            <p class="text-[24px] font-bold text-black dark:text-white mt-0.5 leading-tight">$8,300</p>
            <p class="text-[11px] text-green-600 mt-1">↑ 20.7% from last month</p>
          </div>
        </div>
      </div>

      <!-- Section 2: Middle row -->
      <div class="flex gap-4 mt-4">
        <!-- Monthly spending limit -->
        <div class="flex-1 bg-white dark:bg-[#111] rounded-2xl p-5 border border-black/[0.06] dark:border-white/[0.06]">
          <div class="flex items-start justify-between">
            <div>
              <p class="font-semibold text-[14px] text-black dark:text-white">Monthly spending limit</p>
              <p class="text-[12px] text-black/40 dark:text-white/40 mt-0.5">Recipient accounts</p>
            </div>
            <button class="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-black/40 dark:text-white/40 transition-colors">
              <ng-icon name="phosphorPencil" size="14" />
            </button>
          </div>
          <div class="h-3 rounded-full bg-black/[0.06] dark:bg-white/[0.06] mt-4">
            <div class="w-[86%] h-full rounded-full bg-gradient-to-r from-[#c5e840] to-[#5a9e3a]"></div>
          </div>
          <div class="flex justify-between mt-2">
            <span class="text-[12px] text-black/50 dark:text-white/50">$8,600</span>
            <span class="text-[12px] text-black/50 dark:text-white/50">$10,000</span>
          </div>
        </div>

        <!-- Tip card -->
        <div class="flex-1 bg-white dark:bg-[#111] rounded-2xl p-5 border border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden">
          <!-- Decorative squares — behind content -->
          <div class="absolute top-3 right-3 grid grid-cols-3 gap-1 opacity-30 pointer-events-none">
            @for (i of nineSquares; track i) {
              <div class="w-5 h-5 rounded-sm bg-[#c5e840]"></div>
            }
          </div>
          <div class="relative z-10">
            <p class="font-semibold text-[14px] text-black dark:text-white pr-16">Optimize your budget with these quick tips</p>
            <p class="text-[12px] text-black/50 dark:text-white/50 mt-1">Start preparing for the 2025 tax season by saving 10–15% for deductions.</p>
            <a href="#" class="text-[13px] font-medium text-black dark:text-white mt-3 flex items-center gap-1 hover:opacity-70 transition-opacity">
              Read more →
            </a>
          </div>
        </div>
      </div>

      <!-- Section 3: Bottom rows -->
      <div class="flex gap-4 mt-4">
        <!-- Cost analysis -->
        <div class="flex-1 bg-white dark:bg-[#111] rounded-2xl p-5 border border-black/[0.06] dark:border-white/[0.06]">
          <div class="flex items-start justify-between">
            <div>
              <p class="font-semibold text-[14px] text-black dark:text-white">Cost analysis</p>
              <p class="text-[12px] text-black/40 dark:text-white/40 mt-0.5">Spending overview</p>
            </div>
            <button class="border border-black/10 dark:border-white/10 rounded-full px-2.5 py-1 text-[11px] text-black/50 dark:text-white/50 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors">
              January ▾
            </button>
          </div>
          <p class="text-[28px] font-bold text-black dark:text-white mt-2">$8,450</p>

          <!-- Color bar -->
          <div class="flex gap-0.5 mt-2 h-2 rounded-full overflow-hidden">
            @for (cat of categories; track cat.label) {
              <div [style.width.%]="cat.pct" [style.backgroundColor]="cat.color"></div>
            }
          </div>

          <!-- Category list -->
          <div class="mt-3">
            @for (cat of categories; track cat.label) {
              <div class="flex items-center justify-between text-[12px] mt-1.5">
                <div class="flex items-center">
                  <span class="w-2 h-2 rounded-full mr-2 shrink-0" [style.backgroundColor]="cat.color"></span>
                  <span class="text-black/70 dark:text-white/70">{{ cat.label }}</span>
                </div>
                <span class="text-black/50 dark:text-white/50">{{ cat.pct }}%</span>
              </div>
            }
          </div>
        </div>

        <!-- Financial health -->
        <div class="flex-1 bg-white dark:bg-[#111] rounded-2xl p-5 border border-black/[0.06] dark:border-white/[0.06]">
          <div class="flex items-start justify-between">
            <div>
              <p class="font-semibold text-[14px] text-black dark:text-white">Financial health</p>
              <p class="text-[12px] text-black/40 dark:text-white/40 mt-0.5">Current status</p>
            </div>
            <button class="border border-black/10 dark:border-white/10 rounded-full px-2.5 py-1 text-[11px] text-black/50 dark:text-white/50 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors">
              30d ▾
            </button>
          </div>
          <p class="text-[28px] font-bold text-black dark:text-white mt-1">$15,780</p>
          <p class="text-[11px] text-green-600 mt-0.5">↑ 17.5% from last month</p>

          <div class="flex justify-center mt-3">
            <div class="flex flex-col items-center">
              <div class="relative" style="width: 140px; height: 140px">
                <svg viewBox="0 0 160 160" width="140" height="140">
                  <defs>
                    <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#c5e840" />
                      <stop offset="100%" stop-color="#5a9e3a" />
                    </linearGradient>
                  </defs>
                  <!-- Background arc -->
                  <circle
                    [attr.cx]="cx"
                    [attr.cy]="cy"
                    [attr.r]="radius"
                    fill="none"
                    stroke="#e5e7eb"
                    stroke-width="18"
                    [attr.stroke-dasharray]="bgDashArray"
                    [attr.transform]="gaugeTransform"
                    stroke-linecap="round"
                  />
                  <!-- Foreground arc -->
                  <circle
                    [attr.cx]="cx"
                    [attr.cy]="cy"
                    [attr.r]="radius"
                    fill="none"
                    stroke="url(#gaugeGrad)"
                    stroke-width="18"
                    [attr.stroke-dasharray]="dashArray"
                    [attr.transform]="gaugeTransform"
                    stroke-linecap="round"
                  />
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <span class="text-[24px] font-bold text-black dark:text-white leading-none">75%</span>
                  <span class="text-[10px] text-black/40 dark:text-white/40 text-center mt-0.5 leading-tight max-w-[70px]">Of monthly income saved</span>
                </div>
              </div>
            </div>
          </div>

          <p class="text-[11px] text-black/40 dark:text-white/40 mt-2 text-center leading-snug">
            Based on aggregated transaction metrics over the past 30 days
          </p>
        </div>
      </div>

      <!-- Goal tracker — full width row -->
      <div class="mt-4">
        <div class="bg-white dark:bg-[#111] rounded-2xl p-5 border border-black/[0.06] dark:border-white/[0.06]">
          <div class="flex items-center justify-between">
            <p class="font-semibold text-[14px] text-black dark:text-white">Goal tracker</p>
            <button class="text-[12px] text-black/50 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-lg px-2 py-1 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors">
              + Add goals
            </button>
          </div>

          <div class="grid grid-cols-2 gap-x-6 mt-1">
            @for (goal of goals; track goal.label) {
              <div>
                @if (goal.section) {
                  <p class="text-[11px] text-black/40 dark:text-white/40 mt-2 mb-1">{{ goal.section }}</p>
                }
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-10 h-10 rounded-lg bg-black/[0.06] dark:bg-white/[0.06] shrink-0"></div>
                  <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-center">
                      <span class="text-[12px] font-medium text-black dark:text-white">{{ goal.label }}</span>
                      <span class="text-[11px] text-black/40 dark:text-white/40">\${{ goal.current.toLocaleString() }}/\${{ goal.target.toLocaleString() }}</span>
                    </div>
                    <p class="text-[10px] text-black/40 dark:text-white/40 mt-0.5">{{ goal.timeLeft }}</p>
                    <div class="h-1.5 rounded-full bg-black/[0.06] dark:bg-white/[0.06] mt-1">
                      <div
                        [class]="'h-full rounded-full ' + goal.barColor"
                        [style.width.%]="goal.pct"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [`:host { display: contents; }`],
})
export class MainContentComponent {
  categories: Category[] = [
    { label: 'Housing', pct: 18, color: '#f59e0b' },
    { label: 'Debt payments', pct: 7, color: '#eab308' },
    { label: 'Food', pct: 6, color: '#22c55e' },
    { label: 'Transportation', pct: 9, color: '#14b8a6' },
    { label: 'Healthcare', pct: 10, color: '#84cc16' },
    { label: 'Investments', pct: 17, color: '#16a34a' },
    { label: 'Other', pct: 33, color: '#d1d5db' },
  ]

  goals: Goal[] = [
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

  bars: Bar[] = [
    { day: 'Sun', expenses: 20, income: 40, savings: 30, highlight: false },
    { day: 'Mon', expenses: 25, income: 50, savings: 35, highlight: false },
    { day: 'Tue', expenses: 30, income: 55, savings: 40, highlight: false },
    { day: 'Wed', expenses: 45, income: 70, savings: 50, highlight: true },
    { day: 'Thu', expenses: 25, income: 45, savings: 30, highlight: false },
    { day: 'Fri', expenses: 20, income: 40, savings: 25, highlight: false },
    { day: 'Sat', expenses: 15, income: 35, savings: 20, highlight: false },
  ]

  yLabels = [30, 20, 10, 0, -10]
  nineSquares = Array.from({ length: 9 }, (_, i) => i)

  barWidth = 40
  barGap = 34
  startX = 30
  chartBottom = 140

  // Donut gauge
  cx = 80
  cy = 80
  radius = 60
  circumference = 2 * Math.PI * 60
  dashArray = `${0.75 * (2 * Math.PI * 60)} ${2 * Math.PI * 60}`
  bgDashArray = `${0.75 * (2 * Math.PI * 60)} ${2 * Math.PI * 60}`
  gaugeTransform = `rotate(-225 80 80)`

  barX(i: number) {
    return this.startX + i * (this.barWidth + this.barGap)
  }
  private totalH(b: Bar) {
    return b.expenses + b.income + b.savings
  }
  expH(b: Bar) {
    const t = this.totalH(b)
    return (b.expenses / t) * (t * 1)
  }
  incH(b: Bar) {
    const t = this.totalH(b)
    return (b.income / t) * (t * 1)
  }
  savH(b: Bar) {
    const t = this.totalH(b)
    return (b.savings / t) * (t * 1)
  }
  totalPx(b: Bar) {
    return this.expH(b) + this.incH(b) + this.savH(b)
  }
}
