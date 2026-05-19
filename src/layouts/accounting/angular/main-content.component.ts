import { Component } from '@angular/core'
import { NgClass } from '@angular/common'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { phosphorCalendar, phosphorCaretDown, phosphorInfo, phosphorPlus } from '@ng-icons/phosphor'
import { HeaderComponent } from './header.component'

type StatValue = { value: string; change: string; positive: boolean }

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NgClass, NgIconComponent, HeaderComponent],
  providers: [provideIcons({ phosphorCalendar, phosphorCaretDown, phosphorInfo, phosphorPlus })],
  template: `
    <div class="flex-1 flex flex-col min-h-0 bg-[#fafafa] dark:bg-[#0F1010]">
      <app-header />
      <div class="flex-1 overflow-y-auto p-6 space-y-6">

        <!-- Today -->
        <section>
          <h2 class="text-[13px] font-semibold text-black dark:text-white mb-3">Today</h2>
          <div class="flex gap-4">
            @for (card of statCards; track card.title) {
              <div class="flex-1 rounded-lg border border-black/8 dark:border-white/8 p-4 bg-white dark:bg-[#0F1010]">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-1.5">
                    <span class="text-[13px] font-medium text-black dark:text-white">{{ card.title }}</span>
                    <ng-icon name="phosphorInfo" size="13" class="text-black/30 dark:text-white/30" />
                  </div>
                  <button class="flex items-center gap-1 text-[12px] text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
                    <ng-icon name="phosphorPlus" size="12" /> New
                  </button>
                </div>
                <div class="flex gap-6">
                  <div>
                    <p class="text-[10px] uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">Current</p>
                    <p class="text-[18px] font-semibold text-black dark:text-white leading-none mb-1.5">{{ card.current.value }}</p>
                    <span
                      class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium"
                      [ngClass]="card.current.positive
                        ? 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400'
                        : 'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400'"
                    >
                      {{ card.current.change }}
                    </span>
                  </div>
                  <div class="w-px bg-black/6 dark:bg-white/6"></div>
                  <div>
                    <p class="text-[10px] uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">Overdue</p>
                    <p class="text-[18px] font-semibold text-black dark:text-white leading-none mb-1.5">{{ card.overdue.value }}</p>
                    <span
                      class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium"
                      [ngClass]="card.overdue.positive
                        ? 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400'
                        : 'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400'"
                    >
                      {{ card.overdue.change }}
                    </span>
                  </div>
                </div>
                <div class="mt-4 pt-3 border-t border-black/6 dark:border-white/6">
                  <button class="flex items-center gap-1 text-[12px] text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
                    Last 30 days <ng-icon name="phosphorCaretDown" size="11" />
                  </button>
                </div>
              </div>
            }
          </div>
        </section>

        <!-- Cash flow -->
        <section class="rounded-lg border border-black/8 dark:border-white/8 p-4 bg-white dark:bg-[#0F1010]">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-[13px] font-semibold text-black dark:text-white">Cash flow</h2>
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-1 text-[11px] text-black/45 dark:text-white/40">
                <span class="w-2 h-2 rounded-full bg-[#FF3B30] shrink-0"></span> Income
              </div>
              <div class="flex items-center gap-1 text-[11px] text-black/45 dark:text-white/40">
                <span class="w-2 h-2 rounded-full bg-[#FF8674] shrink-0"></span> Outgoing
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2 mb-4">
            <button class="flex items-center gap-1 text-[12px] text-black/60 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-md px-2.5 py-1 hover:border-black/20 transition-colors">
              Last 12 months <ng-icon name="phosphorCaretDown" size="11" />
            </button>
            <button class="flex items-center gap-1.5 text-[12px] text-black/60 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-md px-2.5 py-1 hover:border-black/20 transition-colors">
              <ng-icon name="phosphorCalendar" size="12" /> Jan 1, 2024 – Dec 31, 2024
            </button>
          </div>
          <div class="flex gap-6 mb-4">
            <div>
              <p class="text-[10px] uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">Income</p>
              <div class="flex items-center gap-2">
                <span class="text-[18px] font-semibold text-black dark:text-white">$96,000.00</span>
                <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400">+5%</span>
              </div>
            </div>
            <div>
              <p class="text-[10px] uppercase tracking-wider text-black/35 dark:text-white/30 mb-1">Outgoing</p>
              <div class="flex items-center gap-2">
                <span class="text-[18px] font-semibold text-black dark:text-white">$24,000.00</span>
                <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400">-3%</span>
              </div>
            </div>
          </div>

          <!-- Cash flow chart -->
          <div class="relative w-full h-40">
            <svg viewBox="0 0 800 160" class="w-full h-full" preserveAspectRatio="none">
              <!-- Grid lines -->
              @for (y of gridLines; track y) {
                <line x1="0" [attr.y1]="y" x2="800" [attr.y2]="y" stroke="currentColor" stroke-opacity="0.05" stroke-width="1" />
              }
              <!-- Income line -->
              <path
                d="M0,90 C50,85 100,70 150,75 C200,80 250,60 300,55 C350,50 400,65 450,60 C500,55 550,45 600,50 C650,55 700,45 750,40 L800,35"
                fill="none"
                stroke="#FF3B30"
                stroke-width="2"
                stroke-linecap="round"
              />
              <!-- Outgoing line -->
              <path
                d="M0,120 C50,118 100,115 150,118 C200,121 250,112 300,108 C350,104 400,115 450,110 C500,105 550,100 600,105 C650,110 700,105 750,100 L800,95"
                fill="none"
                stroke="#FF8674"
                stroke-width="2"
                stroke-linecap="round"
              />
              <!-- Tooltip vertical line -->
              <line x1="340" y1="0" x2="340" y2="160" stroke="currentColor" stroke-opacity="0.15" stroke-width="1" stroke-dasharray="4 3" />
              <circle cx="340" cy="55" r="4" fill="#FF3B30" />
            </svg>

            <!-- Tooltip -->
            <div class="absolute top-0 left-[43%] bg-white dark:bg-[#1a1a1a] border border-black/8 dark:border-white/8 rounded-lg shadow-sm p-3 text-[12px] min-w-40">
              <p class="font-medium text-black dark:text-white mb-2">Apr 24, 2024</p>
              @for (row of tooltipRows; track row.label) {
                <div class="flex justify-between gap-4">
                  <span class="text-black/45 dark:text-white/40">{{ row.label }}</span>
                  <span class="text-black dark:text-white font-medium">{{ row.value }}</span>
                </div>
              }
            </div>
          </div>

          <div class="flex justify-between mt-2 text-[11px] text-black/30 dark:text-white/25">
            <span>JAN 1, 2023</span>
            <span>DEC 31, 2024</span>
          </div>
        </section>

      </div>
    </div>
  `,
  styles: [`:host { display: contents; }`],
})
export class MainContentComponent {
  gridLines = [0, 40, 80, 120, 160]
  tooltipRows = [
    { label: 'Opening balance', value: '$2,340.00' },
    { label: 'Incoming', value: '$1,120.00' },
    { label: 'Outgoing', value: '$40.00' },
    { label: 'Ending balance', value: '$3,420.00' },
  ]
  statCards: { title: string; current: StatValue; overdue: StatValue }[] = [
    {
      title: 'Total Receivables',
      current: { value: '$96,000.00', change: '+5%', positive: true },
      overdue: { value: '$24,000.00', change: '-3%', positive: false },
    },
    {
      title: 'Total Payable',
      current: { value: '$96,000.00', change: '+5%', positive: true },
      overdue: { value: '$24,000.00', change: '-3%', positive: false },
    },
  ]
}
