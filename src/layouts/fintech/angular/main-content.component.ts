import { Component, signal } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { phosphorPlusBold } from '@ng-icons/phosphor'

type StatCard = {
  label: string
  value: string
  sub: string
  subColor: 'green' | 'lime' | 'muted'
}

type Transaction = {
  merchant: string
  category: string
  card: string
  amount: string
  date: string
}

type CardItem = {
  name: string
  last4: string
  spend: string
  dotColor: string
}

type ChartTab = '1W' | '1M' | '3M' | '1Y'

const CHART_W = 600
const CHART_H = 160
const PAD_L = 0
const PAD_R = 0
const PAD_T = 10
const PAD_B = 0
const MAX_VAL = 150

function toX(i: number, total: number): number {
  const usable = CHART_W - PAD_L - PAD_R
  return PAD_L + (i / (total - 1)) * usable
}

function toY(val: number, maxVal: number): number {
  const usable = CHART_H - PAD_T - PAD_B
  return PAD_T + (1 - val / maxVal) * usable
}

function smoothPath(points: [number, number][]): string {
  if (points.length < 2) return ''
  let d = `M ${points[0][0]},${points[0][1]}`
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const curr = points[i]
    const cpx = (prev[0] + curr[0]) / 2
    d += ` C ${cpx},${prev[1]} ${cpx},${curr[1]} ${curr[0]},${curr[1]}`
  }
  return d
}

function areaPath(points: [number, number][], bottom: number): string {
  const line = smoothPath(points)
  if (!line) return ''
  const last = points[points.length - 1]
  const first = points[0]
  return `${line} L ${last[0]},${bottom} L ${first[0]},${bottom} Z`
}

const spendData = [40, 65, 55, 90, 75, 110, 95, 130]
const savingsData = [8, 12, 10, 18, 14, 22, 19, 26]
const spendPoints: [number, number][] = spendData.map((v, i) => [toX(i, spendData.length), toY(v, MAX_VAL)])
const savingsPoints: [number, number][] = savingsData.map((v, i) => [toX(i, savingsData.length), toY(v, MAX_VAL)])

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ phosphorPlusBold })],
  template: `
    <main class="flex-1 overflow-y-auto bg-[#f8f8f9] dark:bg-[#0a0a0a] p-6">
      <!-- Stat cards -->
      <div class="grid grid-cols-4 gap-4 mb-4">
        @for (s of stats; track s.label) {
          <div class="bg-white dark:bg-[#141414] rounded-xl border border-black/[0.08] dark:border-white/[0.08] px-5 py-4">
            <p class="text-xs font-medium text-black/40 dark:text-white/40 mb-2">{{ s.label }}</p>
            <p class="text-2xl font-semibold text-black dark:text-white tracking-tight">{{ s.value }}</p>
            <p [class]="'text-xs font-medium mt-1 ' + subColorClass[s.subColor]">{{ s.sub }}</p>
          </div>
        }
      </div>

      <!-- Spending chart -->
      <div class="bg-white dark:bg-[#141414] rounded-xl border border-black/[0.08] dark:border-white/[0.08] px-5 py-4 mb-4">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-sm font-semibold text-black dark:text-white">Spending over time</h2>
          <div class="flex items-center gap-1">
            @for (tab of chartTabs; track tab) {
              <button
                (click)="activeTab.set(tab)"
                [class]="
                  'px-3 py-1 rounded-md text-xs font-medium transition-colors ' +
                  (activeTab() === tab
                    ? 'bg-black/[0.07] dark:bg-white/[0.1] text-black dark:text-white'
                    : 'text-black/40 dark:text-white/40 hover:text-black/70 dark:hover:text-white/70')
                "
              >
                {{ tab }}
              </button>
            }
          </div>
        </div>

        <div class="flex gap-4">
          <!-- Y-axis labels -->
          <div class="flex flex-col justify-between py-[10px] text-right">
            @for (l of yLabels; track l) {
              <span class="text-[10px] text-black/30 dark:text-white/30 leading-none">{{ l }}</span>
            }
          </div>

          <!-- SVG chart -->
          <div class="flex-1 flex flex-col gap-1">
            <svg [attr.viewBox]="'0 0 ' + CHART_W + ' ' + CHART_H" class="w-full h-40" preserveAspectRatio="none">
              <defs>
                <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#6366f1" stop-opacity="0.25" />
                  <stop offset="100%" stop-color="#6366f1" stop-opacity="0.02" />
                </linearGradient>
                <linearGradient id="savingsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#c8f53a" stop-opacity="0.35" />
                  <stop offset="100%" stop-color="#c8f53a" stop-opacity="0.02" />
                </linearGradient>
              </defs>

              <!-- Horizontal grid lines -->
              @for (y of gridYs; track $index) {
                <line
                  [attr.x1]="PAD_L"
                  [attr.y1]="y"
                  [attr.x2]="CHART_W - PAD_R"
                  [attr.y2]="y"
                  stroke="currentColor"
                  stroke-opacity="0.06"
                  stroke-width="1"
                />
              }

              <!-- Spend area -->
              <path [attr.d]="spendArea" fill="url(#spendGrad)" />
              <!-- Spend line -->
              <path
                [attr.d]="spendLine"
                fill="none"
                stroke="#6366f1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <!-- Savings area -->
              <path [attr.d]="savingsArea" fill="url(#savingsGrad)" />
              <!-- Savings line -->
              <path
                [attr.d]="savingsLine"
                fill="none"
                stroke="#c8f53a"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <!-- Spend dots -->
              @for (pt of spendPoints; track $index) {
                <circle [attr.cx]="pt[0]" [attr.cy]="pt[1]" r="3" fill="#6366f1" />
              }

              <!-- Savings dots -->
              @for (pt of savingsPoints; track $index) {
                <circle [attr.cx]="pt[0]" [attr.cy]="pt[1]" r="3" fill="#c8f53a" />
              }
            </svg>

            <!-- X-axis labels -->
            <div class="flex justify-between">
              @for (l of xLabels; track l) {
                <span class="text-[10px] text-black/30 dark:text-white/30">{{ l }}</span>
              }
            </div>
          </div>
        </div>

        <!-- Legend -->
        <div class="flex items-center gap-5 mt-3 ml-10">
          <div class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full bg-[#6366f1]"></span>
            <span class="text-xs text-black/50 dark:text-white/50">Spend</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full bg-[#c8f53a]"></span>
            <span class="text-xs text-black/50 dark:text-white/50">Savings</span>
          </div>
        </div>
      </div>

      <!-- Bottom two-column grid -->
      <div class="grid grid-cols-2 gap-4">
        <!-- Recent transactions -->
        <div class="bg-white dark:bg-[#141414] rounded-xl border border-black/[0.08] dark:border-white/[0.08] overflow-hidden">
          <div class="px-5 py-4 border-b border-black/[0.06] dark:border-white/[0.06]">
            <h2 class="text-sm font-semibold text-black dark:text-white">Recent transactions</h2>
          </div>
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-black/[0.05] dark:border-white/[0.05]">
                @for (col of tableCols; track col) {
                  <th class="px-5 py-2.5 text-left text-[11px] font-medium text-black/40 dark:text-white/40 uppercase tracking-wide">
                    {{ col }}
                  </th>
                }
              </tr>
            </thead>
            <tbody>
              @for (t of transactions; track $index) {
                <tr class="border-b border-black/[0.04] dark:border-white/[0.04] last:border-0 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                  <td class="px-5 py-3 font-medium text-black dark:text-white">{{ t.merchant }}</td>
                  <td class="px-5 py-3">
                    <span
                      [class]="
                        'inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ' +
                        (categoryColors[t.category] || 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300')
                      "
                    >
                      {{ t.category }}
                    </span>
                  </td>
                  <td class="px-5 py-3 text-black/50 dark:text-white/50 font-mono text-xs">{{ t.card }}</td>
                  <td class="px-5 py-3 font-medium text-black dark:text-white">{{ t.amount }}</td>
                  <td class="px-5 py-3 text-black/40 dark:text-white/40">{{ t.date }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Active cards -->
        <div class="bg-white dark:bg-[#141414] rounded-xl border border-black/[0.08] dark:border-white/[0.08] overflow-hidden flex flex-col">
          <div class="px-5 py-4 border-b border-black/[0.06] dark:border-white/[0.06]">
            <h2 class="text-sm font-semibold text-black dark:text-white">Active cards</h2>
          </div>
          <div class="flex-1 flex flex-col divide-y divide-black/[0.05] dark:divide-white/[0.05]">
            @for (c of cards; track $index) {
              <div class="flex items-center justify-between px-5 py-3.5 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                <div class="flex items-center gap-3">
                  <span [class]="'w-2.5 h-2.5 rounded-full shrink-0 ' + c.dotColor"></span>
                  <div>
                    <p class="text-sm font-medium text-black dark:text-white">{{ c.name }}</p>
                    <p class="text-xs text-black/40 dark:text-white/40 font-mono">•••• {{ c.last4 }}</p>
                  </div>
                </div>
                <p class="text-sm font-semibold text-black dark:text-white">{{ c.spend }}</p>
              </div>
            }
          </div>
          <div class="px-5 py-4 border-t border-black/[0.06] dark:border-white/[0.06]">
            <button class="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#c8f53a] text-black text-sm font-semibold hover:bg-[#d4f94f] active:bg-[#b8e030] transition-colors">
              <ng-icon name="phosphorPlusBold" size="16" />
              Issue new card
            </button>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [`:host { display: contents; }`],
})
export class MainContentComponent {
  readonly CHART_W = CHART_W
  readonly CHART_H = CHART_H
  readonly PAD_L = PAD_L
  readonly PAD_R = PAD_R

  activeTab = signal<ChartTab>('1M')

  stats: StatCard[] = [
    { label: 'Total spend', value: '$284,391', sub: '+12% vs last month', subColor: 'green' },
    { label: 'Available credit', value: '$715,609', sub: 'of $1,000,000 limit', subColor: 'muted' },
    { label: 'Savings', value: '$14,280', sub: 'this month', subColor: 'lime' },
    { label: 'Transactions', value: '1,284', sub: '+8% vs last month', subColor: 'green' },
  ]

  subColorClass: Record<StatCard['subColor'], string> = {
    green: 'text-emerald-500',
    lime: 'text-[#8ab81e] dark:text-[#c8f53a]',
    muted: 'text-black/40 dark:text-white/40',
  }

  xLabels = ['Mar 3', 'Mar 6', 'Mar 9', 'Mar 12', 'Mar 15', 'Mar 18', 'Mar 21', 'Mar 24']
  yLabels = ['$150k', '$100k', '$50k', '$0']

  gridYs = this.yLabels.map((_, i) => PAD_T + (i / (this.yLabels.length - 1)) * (CHART_H - PAD_T - PAD_B))

  chartTabs: ChartTab[] = ['1W', '1M', '3M', '1Y']

  spendPoints = spendPoints
  savingsPoints = savingsPoints
  spendLine = smoothPath(spendPoints)
  spendArea = areaPath(spendPoints, CHART_H)
  savingsLine = smoothPath(savingsPoints)
  savingsArea = areaPath(savingsPoints, CHART_H)

  transactions: Transaction[] = [
    { merchant: 'Notion', category: 'Software', card: '•••• 4821', amount: '-$16.00', date: 'Mar 24' },
    { merchant: 'AWS', category: 'Cloud', card: '•••• 3910', amount: '-$432.10', date: 'Mar 23' },
    { merchant: 'Slack', category: 'Software', card: '•••• 4821', amount: '-$87.50', date: 'Mar 22' },
    { merchant: 'Figma', category: 'Design', card: '•••• 7203', amount: '-$75.00', date: 'Mar 21' },
    { merchant: 'Linear', category: 'Software', card: '•••• 4821', amount: '-$18.00', date: 'Mar 20' },
    { merchant: 'Vercel', category: 'Cloud', card: '•••• 3910', amount: '-$60.00', date: 'Mar 19' },
  ]

  categoryColors: Record<string, string> = {
    Software: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
    Cloud: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    Design: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
  }

  cards: CardItem[] = [
    { name: 'Engineering', last4: '4821', spend: '$124,300', dotColor: 'bg-violet-500' },
    { name: 'Marketing', last4: '7203', spend: '$58,910', dotColor: 'bg-blue-500' },
    { name: 'Travel', last4: '3910', spend: '$47,280', dotColor: 'bg-amber-500' },
    { name: 'Operations', last4: '6614', spend: '$53,901', dotColor: 'bg-emerald-500' },
  ]

  tableCols = ['Merchant', 'Category', 'Card', 'Amount', 'Date']
}
