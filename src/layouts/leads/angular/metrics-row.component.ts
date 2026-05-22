import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { phosphorCaretUpFill, phosphorCaretDownFill } from '@ng-icons/phosphor'
import { SparklineComponent } from './sparkline.component'

type Metric = {
  label: string
  value: string
  delta: string
  trend: 'up' | 'down'
  spark: number[]
}

@Component({
  selector: 'app-metrics-row',
  standalone: true,
  imports: [NgIconComponent, SparklineComponent],
  providers: [provideIcons({ phosphorCaretUpFill, phosphorCaretDownFill })],
  template: `
    <div class="grid grid-cols-4 px-7 pt-2 pb-5 shrink-0 bg-white dark:bg-[#0f0f0f]">
      @for (m of metrics; track m.label; let i = $index) {
        <div
          [class]="
            'flex items-center justify-between gap-4 px-5 first:pl-0 last:pr-0 ' +
            (i > 0 ? 'border-l border-black/[0.06] dark:border-white/[0.07]' : '')
          "
        >
          <div class="flex flex-col min-w-0">
            <span class="text-[12px] text-black/45 dark:text-white/45 mb-1.5">{{ m.label }}</span>
            <div class="flex items-baseline gap-2">
              <span
                class="text-[26px] font-semibold tracking-tight text-black dark:text-white leading-none"
              >
                {{ m.value }}
              </span>
              <span
                [class]="
                  'inline-flex items-center gap-0.5 text-[12px] font-medium ' +
                  (m.trend === 'up'
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-rose-600 dark:text-rose-400')
                "
              >
                <ng-icon
                  [name]="m.trend === 'up' ? 'phosphorCaretUpFill' : 'phosphorCaretDownFill'"
                  size="11"
                />
                {{ m.delta }}
              </span>
            </div>
          </div>
          <div class="w-[110px] h-[34px] shrink-0">
            <app-sparkline [values]="m.spark" />
          </div>
        </div>
      }
    </div>
  `,
  styles: [`:host { display: contents; }`],
})
export class MetricsRowComponent {
  metrics: Metric[] = [
    { label: 'New Leads', value: '42', delta: '12%', trend: 'up', spark: [3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10] },
    { label: 'Qualified Leads', value: '18', delta: '4.2%', trend: 'up', spark: [4, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10] },
    { label: 'Avg Response Time', value: '1.8h', delta: '15%', trend: 'up', spark: [5, 4, 6, 5, 7, 6, 5, 7, 8, 6, 8, 9] },
    { label: 'Hot Leads', value: '9', delta: '2%', trend: 'down', spark: [6, 7, 6, 8, 7, 9, 7, 8, 6, 7, 5, 6] },
  ]
}
