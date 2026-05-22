import { Component, signal } from '@angular/core'

type Bar = { month: string; value: number }
type Tab = 'Total Volume' | 'Avg. Value'

@Component({
  selector: 'app-volume-chart',
  standalone: true,
  template: `
    <div
      class="bg-white dark:bg-[#141414] rounded-2xl border border-black/[0.07] dark:border-white/[0.08] p-6 flex flex-col"
    >
      <!-- Segmented toggle -->
      <div
        class="inline-flex self-start items-center gap-1 p-1 rounded-xl bg-black/[0.04] dark:bg-white/[0.06]"
      >
        @for (tab of tabs; track tab) {
          <button
            (click)="activeTab.set(tab)"
            [class]="
              'px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors ' +
              (activeTab() === tab
                ? 'bg-white dark:bg-white/[0.1] text-black dark:text-white shadow-sm'
                : 'text-black/45 dark:text-white/45 hover:text-black/70 dark:hover:text-white/70')
            "
          >
            {{ tab }}
          </button>
        }
      </div>

      <!-- Chart -->
      <div class="flex gap-3 mt-8 flex-1">
        <!-- Y axis -->
        <div class="flex flex-col justify-between h-[260px] text-right shrink-0">
          @for (l of yLabels; track l) {
            <span class="text-[11px] text-black/30 dark:text-white/30 leading-none">{{ l }}</span>
          }
        </div>

        <!-- Plot -->
        <div class="flex-1 min-w-0">
          <div class="relative h-[260px]">
            <!-- Gridlines -->
            @for (l of yLabels; track $index; let i = $index) {
              <div
                class="absolute left-0 right-0 border-t border-dashed border-black/[0.08] dark:border-white/[0.08]"
                [style.top.%]="(i / (yLabels.length - 1)) * 100"
              ></div>
            }

            <!-- Bars -->
            <div class="absolute inset-0 flex items-end justify-between gap-3 px-1">
              @for (bar of data; track bar.month) {
                <div class="relative flex-1 h-full flex items-end">
                  @if (bar.month === HIGHLIGHT) {
                    <div
                      class="absolute left-1/2 -translate-x-1/2 z-10 w-[170px] rounded-xl bg-white dark:bg-[#1f1f1f] border border-black/[0.08] dark:border-white/[0.1] shadow-[0_8px_24px_-6px_rgba(15,23,42,0.25)] px-4 py-3"
                      [style.bottom]="'calc(' + (bar.value / MAX) * 100 + '% + 14px)'"
                    >
                      <p class="text-[12px] text-black/45 dark:text-white/45">Volume</p>
                      <p class="text-[15px] font-semibold text-black dark:text-white mt-0.5">
                        $110,100.00
                        <span class="text-black/40 dark:text-white/40 font-normal">USD</span>
                      </p>
                    </div>
                  }
                  <div
                    [class]="
                      'w-full rounded-t-md transition-colors ' +
                      (bar.month === HIGHLIGHT
                        ? 'bg-[#2563eb]'
                        : 'bg-black/[0.06] dark:bg-white/[0.08] hover:bg-black/[0.1] dark:hover:bg-white/[0.12]')
                    "
                    [style.height.%]="(bar.value / MAX) * 100"
                  ></div>
                </div>
              }
            </div>
          </div>

          <!-- X axis -->
          <div class="flex justify-between gap-3 px-1 mt-3">
            @for (bar of data; track bar.month) {
              <span class="flex-1 text-center text-[11px] text-black/40 dark:text-white/40">
                {{ bar.month }}
              </span>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`:host { display: contents; }`],
})
export class VolumeChartComponent {
  // Values in $K; axis maxes at 150K.
  readonly data: Bar[] = [
    { month: 'Jan', value: 12 },
    { month: 'Feb', value: 8 },
    { month: 'Mar', value: 15 },
    { month: 'Apr', value: 55 },
    { month: 'May', value: 78 },
    { month: 'Jun', value: 85 },
    { month: 'Jul', value: 20 },
    { month: 'Aug', value: 98 },
    { month: 'Sep', value: 88 },
    { month: 'Oct', value: 110 },
    { month: 'Nov', value: 58 },
    { month: 'Dec', value: 15 },
  ]

  readonly HIGHLIGHT = 'Oct'
  readonly MAX = 150
  readonly yLabels = ['$150K', '$100K', '$50K', '$0K']
  readonly tabs: Tab[] = ['Total Volume', 'Avg. Value']

  activeTab = signal<Tab>('Total Volume')
}
