import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  phosphorGlobe,
  phosphorChartBar,
  phosphorChartBarFill,
  phosphorCommand,
  phosphorTarget,
  phosphorSmiley,
  phosphorGear,
} from '@ng-icons/phosphor'

@Component({
  selector: 'app-icon-sidebar',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      phosphorGlobe,
      phosphorChartBar,
      phosphorChartBarFill,
      phosphorCommand,
      phosphorTarget,
      phosphorSmiley,
      phosphorGear,
    }),
  ],
  template: `
    <div class="w-12 shrink-0 bg-white dark:bg-[#0a0a0a] border-r border-black/8 dark:border-white/8 flex flex-col items-center py-3 gap-1">
      <!-- Logo -->
      <div class="w-8 h-8 rounded-full bg-black flex items-center justify-center mb-2">
        <span class="text-[13px] font-bold text-white">C</span>
      </div>

      <!-- Nav icons -->
      <button class="w-8 h-8 rounded-lg flex items-center justify-center text-black/35 dark:text-white/35 hover:bg-black/5 hover:text-black dark:hover:text-white transition-colors">
        <ng-icon name="phosphorGlobe" size="16" />
      </button>

      <button class="w-8 h-8 rounded-xl flex items-center justify-center bg-[#f03e6e] text-white transition-colors">
        <ng-icon name="phosphorChartBarFill" size="16" />
      </button>

      <button class="w-8 h-8 rounded-lg flex items-center justify-center text-black/35 dark:text-white/35 hover:bg-black/5 hover:text-black dark:hover:text-white transition-colors">
        <ng-icon name="phosphorCommand" size="16" />
      </button>

      <button class="w-8 h-8 rounded-lg flex items-center justify-center text-black/35 dark:text-white/35 hover:bg-black/5 hover:text-black dark:hover:text-white transition-colors">
        <ng-icon name="phosphorTarget" size="16" />
      </button>

      <!-- Bottom -->
      <div class="mt-auto flex flex-col items-center gap-1">
        <button class="w-8 h-8 rounded-lg flex items-center justify-center text-black/35 dark:text-white/35 hover:bg-black/5 hover:text-black dark:hover:text-white transition-colors relative">
          <ng-icon name="phosphorSmiley" size="16" />
          <span class="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-red-500"></span>
        </button>
        <button class="w-8 h-8 rounded-lg flex items-center justify-center text-black/35 dark:text-white/35 hover:bg-black/5 hover:text-black dark:hover:text-white transition-colors">
          <ng-icon name="phosphorGear" size="16" />
        </button>
      </div>
    </div>
  `,
  styles: [`:host { display: contents; }`],
})
export class IconSidebarComponent {}
