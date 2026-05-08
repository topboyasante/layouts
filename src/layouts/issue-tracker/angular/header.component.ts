import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { phosphorBell } from '@ng-icons/phosphor'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ phosphorBell })],
  template: `
    <header class="shrink-0">
      <div class="flex items-center justify-between px-4 h-11 border-b border-black/6 dark:border-white/6">
        <div class="flex items-center gap-2">
          <div class="w-5 h-5 rounded bg-green-500 shrink-0"></div>
          <span class="text-sm font-medium text-black dark:text-white">AMS</span>
        </div>
        <button class="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
          <ng-icon name="phosphorBell" size="16" />
        </button>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
