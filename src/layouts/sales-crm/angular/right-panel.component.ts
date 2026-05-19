import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { phosphorArrowUp, phosphorArrowUpRight } from '@ng-icons/phosphor'

type Rep = {
  initials: string
  bg: string
  name: string
  revenue: string
  leads: string
  leadsBg: string
  leadsText: string
  kpi: string
  pct: string
  trend: boolean
}

@Component({
  selector: 'app-right-panel',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ phosphorArrowUp, phosphorArrowUpRight })],
  template: `
    <div class="w-64 shrink-0 border-l border-black/8 dark:border-white/8 bg-white dark:bg-[#0a0a0a] overflow-y-auto p-4 flex flex-col gap-5">

      <!-- Team leaderboard -->
      <div>
        <p class="text-[12px] font-semibold text-black dark:text-white mb-3">Sales team</p>

        <!-- Headers -->
        <div class="flex items-center gap-2 text-[10px] text-black/35 dark:text-white/25 mb-2 pl-8">
          <span class="flex-1">Name</span>
          <span class="w-12 text-right">Revenue</span>
          <span class="w-8 text-right">Leads</span>
          <span class="w-8 text-right">KPI</span>
        </div>

        <div class="flex flex-col divide-y divide-black/5 dark:divide-white/5">
          @for (r of reps; track r.name) {
            <div class="py-2.5 flex items-center gap-2">
              <div [class]="'w-6 h-6 rounded-full ' + r.bg + ' flex items-center justify-center text-white text-[9px] font-bold shrink-0'">
                {{ r.initials }}
              </div>
              <div class="flex-1 min-w-0 flex items-center gap-2">
                <div class="flex-1 min-w-0">
                  <p class="text-[12px] font-medium text-black dark:text-white truncate">{{ r.name }}</p>
                  <p class="text-[10px] text-black/35 dark:text-white/25">{{ r.pct }} of total</p>
                </div>
                <span class="text-[10px] text-black/50 dark:text-white/40 w-12 text-right shrink-0">{{ r.revenue }}</span>
                <span [class]="r.leadsBg + ' ' + r.leadsText + ' rounded-full px-1.5 text-[10px] font-medium w-8 text-center shrink-0'">{{ r.leads }}</span>
                <span class="text-[10px] text-black/50 dark:text-white/40 w-8 text-right shrink-0">{{ r.kpi }}</span>
              </div>
              @if (r.trend) {
                <ng-icon name="phosphorArrowUp" size="10" class="text-[#f03e6e] shrink-0" />
              }
            </div>
          }
        </div>
      </div>

      <!-- Sales dynamic -->
      <div>
        <div class="flex items-center justify-between mb-3">
          <p class="text-[12px] font-semibold text-black dark:text-white">Sales dynamic</p>
          <button class="text-black/35 dark:text-white/35 hover:text-black dark:hover:text-white transition-colors">
            <ng-icon name="phosphorArrowUpRight" size="13" />
          </button>
        </div>

        <svg viewBox="0 0 220 80" class="w-full">
          <polyline
            points="0,18 22,14 44,22 66,26 88,14 110,18 132,8 154,16 176,12 198,10 220,18"
            fill="none" stroke="#f03e6e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          />
          <polyline
            points="0,50 22,52 44,48 66,54 88,46 110,50 132,52 154,46 176,50 198,52 220,48"
            fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          />
          <circle cx="22"  cy="14" r="3" fill="#fb923c" stroke="white" stroke-width="1.5" />
          <circle cx="132" cy="8"  r="3" fill="#3b82f6" stroke="white" stroke-width="1.5" />
          <circle cx="220" cy="18" r="3" fill="#14b8a6" stroke="white" stroke-width="1.5" />
          <circle cx="88"  cy="46" r="3" fill="#fb923c" stroke="white" stroke-width="1.5" />
          <circle cx="176" cy="50" r="3" fill="#3b82f6" stroke="white" stroke-width="1.5" />
          <text x="0"   y="75" fill="#00000040" font-size="7">W1</text>
          <text x="42"  y="75" fill="#00000040" font-size="7">W3</text>
          <text x="84"  y="75" fill="#00000040" font-size="7">W5</text>
          <text x="126" y="75" fill="#00000040" font-size="7">W7</text>
          <text x="168" y="75" fill="#00000040" font-size="7">W9</text>
          <text x="204" y="75" fill="#00000040" font-size="7">W11</text>
        </svg>

        <div class="flex items-center gap-3 mt-1">
          <div class="flex items-center gap-1.5">
            <div class="w-3 h-0.5 rounded-full bg-[#f03e6e]"></div>
            <span class="text-[10px] text-black/35 dark:text-white/25">Revenue</span>
          </div>
          <div class="flex items-center gap-1.5">
            <div class="w-3 h-0.5 rounded-full bg-green-500"></div>
            <span class="text-[10px] text-black/35 dark:text-white/25">Leads</span>
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`:host { display: contents; }`],
})
export class RightPanelComponent {
  reps: Rep[] = [
    { initials: 'A', bg: 'bg-orange-400', name: 'Armin A.',  revenue: '$209,633', leads: '41', leadsBg: 'bg-green-100',    leadsText: 'text-green-700', kpi: '0.84', pct: '39%', trend: false },
    { initials: 'M', bg: 'bg-blue-500',   name: 'Mikasa A.', revenue: '$156,841', leads: '54', leadsBg: 'bg-[#f03e6e]/10', leadsText: 'text-[#f03e6e]', kpi: '0.89', pct: '30%', trend: true  },
    { initials: 'E', bg: 'bg-teal-500',   name: 'Eren Y.',   revenue: '$117,115', leads: '22', leadsBg: 'bg-green-100',    leadsText: 'text-green-700', kpi: '0.79', pct: '22%', trend: false },
  ]
}
