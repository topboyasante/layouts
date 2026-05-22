import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  phosphorInfo,
  phosphorGearSix,
  phosphorBell,
  phosphorShareNetworkBold,
} from '@ng-icons/phosphor'

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({ phosphorInfo, phosphorGearSix, phosphorBell, phosphorShareNetworkBold }),
  ],
  template: `
    <header
      class="h-16 flex items-center justify-between px-7 shrink-0 bg-white dark:bg-[#0f0f0f]"
    >
      <div class="flex items-baseline gap-2">
        <h1 class="text-[22px] font-semibold tracking-tight text-black dark:text-white">Leads</h1>
        <span class="text-[14px] text-black/35 dark:text-white/35">248</span>
      </div>

      <div class="flex items-center gap-3">
        <button
          class="w-8 h-8 flex items-center justify-center rounded-md text-black/45 dark:text-white/45 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-black dark:hover:text-white transition-colors"
        >
          <ng-icon name="phosphorInfo" size="18" />
        </button>
        <button
          class="w-8 h-8 flex items-center justify-center rounded-md text-black/45 dark:text-white/45 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-black dark:hover:text-white transition-colors"
        >
          <ng-icon name="phosphorGearSix" size="18" />
        </button>
        <button
          class="w-8 h-8 flex items-center justify-center rounded-md text-black/45 dark:text-white/45 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-black dark:hover:text-white transition-colors"
        >
          <ng-icon name="phosphorBell" size="18" />
        </button>

        <div class="flex items-center pl-1">
          <div class="flex -space-x-1.5">
            @for (g of avatars; track g) {
              <div
                [class]="
                  'w-7 h-7 rounded-full bg-gradient-to-br ring-2 ring-white dark:ring-[#0f0f0f] ' + g
                "
              ></div>
            }
          </div>
          <span class="ml-2 text-[13px] font-medium text-black/55 dark:text-white/55">+5</span>
        </div>

        <button
          class="flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-[#f97316] text-white text-[13px] font-medium hover:bg-[#ea6a0c] active:bg-[#d85f0b] transition-colors shadow-sm"
        >
          <ng-icon name="phosphorShareNetworkBold" size="15" />
          Share Access
        </button>
      </div>
    </header>
  `,
  styles: [`:host { display: contents; }`],
})
export class TopBarComponent {
  avatars = [
    'from-rose-300 to-rose-500',
    'from-violet-300 to-violet-500',
    'from-emerald-300 to-emerald-500',
    'from-amber-300 to-orange-500',
  ]
}
