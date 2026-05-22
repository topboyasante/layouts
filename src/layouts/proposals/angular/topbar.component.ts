import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { phosphorBell } from '@ng-icons/phosphor'

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ phosphorBell })],
  template: `
    <header
      class="h-14 flex items-center justify-between px-7 bg-[#fbfbfc] dark:bg-[#0f0f0f] border-b border-black/[0.07] dark:border-white/[0.08] shrink-0"
    >
      <!-- Left: page label -->
      <span class="text-sm font-medium text-black/70 dark:text-white/70">Dashboard</span>

      <!-- Right: notifications -->
      <button
        class="relative w-9 h-9 flex items-center justify-center rounded-full text-black/55 dark:text-white/55 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
      >
        <ng-icon name="phosphorBell" size="20" />
        <span
          class="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#ef4444] border-2 border-[#fbfbfc] dark:border-[#0f0f0f]"
        ></span>
      </button>
    </header>
  `,
  styles: [`:host { display: contents; }`],
})
export class TopBarComponent {}
