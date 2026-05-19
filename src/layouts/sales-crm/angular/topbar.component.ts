import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  phosphorMagnifyingGlass,
  phosphorList,
  phosphorPlus,
} from '@ng-icons/phosphor'

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      phosphorMagnifyingGlass,
      phosphorList,
      phosphorPlus,
    }),
  ],
  template: `
    <div class="h-12 bg-white dark:bg-[#0a0a0a] border-b border-black/8 dark:border-white/8 flex items-center px-4 gap-3 shrink-0">
      <!-- Search bar -->
      <div class="flex-1 max-w-md flex items-center gap-2 border border-black/10 dark:border-white/10 rounded-full px-3 py-1.5 bg-white dark:bg-white/5">
        <ng-icon name="phosphorMagnifyingGlass" size="13" class="text-black/40 dark:text-white/30 shrink-0" />
        <input
          type="text"
          placeholder='Try searching "insights"'
          class="bg-transparent text-[12px] text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/30 outline-none w-full"
        />
      </div>

      <!-- Spacer -->
      <div class="flex-1"></div>

      <!-- Right side -->
      <div class="flex items-center gap-2">
        <button class="w-7 h-7 flex items-center justify-center text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <ng-icon name="phosphorList" size="15" />
        </button>

        <div class="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 shrink-0"></div>

        <button class="w-7 h-7 rounded-full bg-[#f03e6e] text-white flex items-center justify-center hover:bg-[#d93460] transition-colors">
          <ng-icon name="phosphorPlus" size="14" />
        </button>
      </div>
    </div>
  `,
  styles: [`:host { display: contents; }`],
})
export class TopBarComponent {}
