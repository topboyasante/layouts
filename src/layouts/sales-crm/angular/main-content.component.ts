import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  phosphorCaretDown,
  phosphorSortAscending,
  phosphorDotsThree,
} from '@ng-icons/phosphor'

type Platform = { name: string; amount: string; pct: number; color: string }
type Deal = { name: string; company: string; amount: string; stage: string; stageColor: string; date: string }
type PipelineStage = { label: string; count: number; value: string; color: string; pct: number }
type StatCard = { label: string; value: string; sub: string; subColor: string; pink: boolean }

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      phosphorCaretDown,
      phosphorSortAscending,
      phosphorDotsThree,
    }),
  ],
  template: `
    <div class="flex-1 min-w-0 overflow-y-auto bg-[#fafafa] dark:bg-[#0f0f0f] p-5 flex flex-col gap-4">

      <!-- Title + timeframe -->
      <div class="flex items-center justify-between">
        <h1 class="text-[20px] font-light text-black/35 dark:text-white/25">New report</h1>
        <div class="flex items-center gap-2">
          <div class="flex items-center bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-1 py-1 gap-0.5">
            <button class="px-2.5 py-0.5 rounded-full text-[11px] bg-black text-white font-medium">On</button>
            <button class="px-2.5 py-0.5 rounded-full text-[11px] text-black/40 dark:text-white/40">Off</button>
          </div>
          <button class="flex items-center gap-1.5 border border-black/10 dark:border-white/10 rounded-full px-3 py-1 text-[12px] text-black/55 dark:text-white/45">
            Sep 1 – Nov 30, 2023 <ng-icon name="phosphorCaretDown" size="10" />
          </button>
        </div>
      </div>

      <!-- Revenue -->
      <div class="bg-white dark:bg-[#111] rounded-xl p-5 border border-black/8 dark:border-white/8">
        <p class="text-[11px] text-black/40 dark:text-white/30 mb-1">Revenue</p>
        <div class="flex items-baseline gap-2 mb-2">
          <span class="text-[36px] font-bold leading-none">$528,976</span>
          <span class="bg-green-100 text-green-700 rounded-full px-2 py-0.5 text-[11px] font-medium">↑ 7.9%</span>
          <span class="bg-black dark:bg-white text-white dark:text-black rounded-full px-2 py-0.5 text-[11px] font-medium">$27,335.09</span>
        </div>
        <p class="text-[11px] text-black/35 dark:text-white/25">vs prev. $501,641.73 · Jun 1 – Aug 31, 2023</p>
      </div>

      <!-- Stat cards -->
      <div class="grid grid-cols-3 gap-3">
        @for (c of statCards; track c.label) {
          <div [class]="'bg-white dark:bg-[#111] rounded-xl p-4 border ' + (c.pink ? 'border-2 border-[#f03e6e]' : 'border-black/8 dark:border-white/8')">
            <p class="text-[11px] text-black/40 dark:text-white/30 mb-2">{{ c.label }}</p>
            <p [class]="'text-[28px] font-bold leading-none mb-1.5 ' + (c.pink ? 'text-[#f03e6e]' : 'text-black dark:text-white')">{{ c.value }}</p>
            <p [class]="'text-[11px] ' + c.subColor">{{ c.sub }}</p>
          </div>
        }
      </div>

      <!-- Bottom row: recent deals + pipeline -->
      <div class="grid grid-cols-[1fr_auto] gap-4">

        <!-- Recent deals -->
        <div class="bg-white dark:bg-[#111] rounded-xl border border-black/8 dark:border-white/8 overflow-hidden">
          <div class="flex items-center justify-between px-5 py-4 border-b border-black/6 dark:border-white/6">
            <p class="text-[13px] font-semibold text-black dark:text-white">Recent deals</p>
            <button class="text-black/30 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors">
              <ng-icon name="phosphorDotsThree" size="16" />
            </button>
          </div>
          <table class="w-full">
            <thead>
              <tr class="border-b border-black/5 dark:border-white/5">
                <th class="px-5 py-2 text-left text-[10px] font-medium text-black/35 dark:text-white/30">Deal</th>
                <th class="px-3 py-2 text-left text-[10px] font-medium text-black/35 dark:text-white/30">Amount</th>
                <th class="px-3 py-2 text-left text-[10px] font-medium text-black/35 dark:text-white/30">Stage</th>
                <th class="px-5 py-2 text-right text-[10px] font-medium text-black/35 dark:text-white/30">Date</th>
              </tr>
            </thead>
            <tbody>
              @for (d of recentDeals; track d.name) {
                <tr class="border-b border-black/4 dark:border-white/4 last:border-0 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                  <td class="px-5 py-2.5">
                    <p class="text-[12px] font-medium text-black dark:text-white">{{ d.name }}</p>
                    <p class="text-[10px] text-black/35 dark:text-white/30">{{ d.company }}</p>
                  </td>
                  <td class="px-3 py-2.5 text-[12px] font-medium text-black dark:text-white">{{ d.amount }}</td>
                  <td class="px-3 py-2.5">
                    <span [class]="d.stageColor + ' text-[10px] font-medium rounded-full px-2 py-0.5'">{{ d.stage }}</span>
                  </td>
                  <td class="px-5 py-2.5 text-right text-[11px] text-black/35 dark:text-white/30">{{ d.date }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Pipeline funnel -->
        <div class="bg-white dark:bg-[#111] rounded-xl border border-black/8 dark:border-white/8 p-5 w-52">
          <p class="text-[13px] font-semibold text-black dark:text-white mb-4">Pipeline</p>
          <div class="flex flex-col gap-2.5">
            @for (s of pipeline; track s.label) {
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-[11px] text-black/50 dark:text-white/40">{{ s.label }}</span>
                  <div class="flex items-center gap-1.5">
                    <span class="text-[10px] text-black/35 dark:text-white/30">{{ s.count }}</span>
                    <span class="text-[10px] font-medium text-black dark:text-white">{{ s.value }}</span>
                  </div>
                </div>
                <div class="h-1 bg-black/6 dark:bg-white/8 rounded-full">
                  <div class="h-1 rounded-full" [style.width.%]="s.pct" [style.background-color]="s.color"></div>
                </div>
              </div>
            }
          </div>
        </div>

      </div>

      <!-- Platform breakdown -->
      <div class="bg-white dark:bg-[#111] rounded-xl p-5 border border-black/8 dark:border-white/8">
        <div class="flex items-center justify-between mb-4">
          <p class="text-[13px] font-semibold text-black dark:text-white">Revenue by platform</p>
          <button class="flex items-center gap-1 text-[11px] text-black/35 dark:text-white/35 hover:text-black dark:hover:text-white">
            <ng-icon name="phosphorSortAscending" size="13" /> Filters
          </button>
        </div>
        <div class="flex flex-col gap-4">
          @for (p of platforms; track p.name) {
            <div class="flex items-center gap-3">
              <div class="w-5 h-5 rounded-full shrink-0" [style.background-color]="p.color"></div>
              <span class="text-[13px] font-medium text-black dark:text-white w-20 shrink-0">{{ p.name }}</span>
              <div class="flex-1 bg-black/6 dark:bg-white/8 rounded-full h-1.5">
                <div class="h-1.5 rounded-full" [style.width.%]="p.pct" [style.background-color]="p.color"></div>
              </div>
              <span class="text-[12px] text-black/50 dark:text-white/40 w-16 text-right shrink-0">{{ p.amount }}</span>
              <span class="text-[11px] text-black/35 dark:text-white/25 w-7 text-right shrink-0">{{ p.pct }}%</span>
            </div>
          }
        </div>
      </div>

    </div>
  `,
  styles: [`:host { display: contents; }`],
})
export class MainContentComponent {
  platforms: Platform[] = [
    { name: 'Dribbble',  amount: '$227,459', pct: 43, color: '#f03e6e' },
    { name: 'Instagram', amount: '$142,823', pct: 27, color: '#a855f7' },
    { name: 'Behance',   amount: '$89,935',  pct: 17, color: '#2563eb' },
    { name: 'Google',    amount: '$37,028',  pct: 7,  color: '#22c55e' },
  ]

  recentDeals: Deal[] = [
    { name: 'Cloudz3r SaaS',    company: 'Cloudz3r',   amount: '$48,000', stage: 'Closed Won',  stageColor: 'bg-green-100 text-green-700',           date: 'Nov 28' },
    { name: 'Idioma Platform',  company: 'Idioma',     amount: '$21,500', stage: 'Negotiation', stageColor: 'bg-blue-100 text-blue-700',             date: 'Nov 25' },
    { name: 'Cargo2go Fleet',   company: 'Cargo2go',   amount: '$67,200', stage: 'Proposal',    stageColor: 'bg-orange-100 text-orange-700',         date: 'Nov 22' },
    { name: 'Syllables API',    company: 'Syllables',  amount: '$12,800', stage: 'Closed Lost', stageColor: 'bg-red-100 text-red-600',               date: 'Nov 20' },
    { name: 'x-0b Enterprise',  company: 'x-0b',       amount: '$95,000', stage: 'Closed Won',  stageColor: 'bg-green-100 text-green-700',           date: 'Nov 18' },
  ]

  pipeline: PipelineStage[] = [
    { label: 'Prospecting', count: 38, value: '$312k', color: '#f03e6e', pct: 100 },
    { label: 'Qualified',   count: 24, value: '$198k', color: '#fb923c', pct: 72  },
    { label: 'Proposal',    count: 15, value: '$141k', color: '#a855f7', pct: 52  },
    { label: 'Negotiation', count: 8,  value: '$88k',  color: '#3b82f6', pct: 34  },
    { label: 'Closed Won',  count: 4,  value: '$48k',  color: '#22c55e', pct: 18  },
  ]

  statCards: StatCard[] = [
    { label: 'Deals',    value: '258',  sub: '↑ 7.9% vs last period', subColor: 'text-green-600', pink: false },
    { label: 'Win rate', value: '44%',  sub: '↑ 1.2% vs last period', subColor: 'text-green-600', pink: false },
    { label: 'Value',    value: '528k', sub: '↑ 7.9% vs last period', subColor: 'text-green-600', pink: true  },
  ]
}
