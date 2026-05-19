import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  phosphorMagnifyingGlass,
  phosphorPlus,
  phosphorCopy,
  phosphorGitMerge,
  phosphorCheckSquare,
} from '@ng-icons/phosphor'

type Action = { icon: string; count: number }

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      phosphorMagnifyingGlass,
      phosphorPlus,
      phosphorCopy,
      phosphorGitMerge,
      phosphorCheckSquare,
    }),
  ],
  template: `
    <header class="shrink-0 flex items-center gap-3 px-4 h-12 bg-[#ebebf0] dark:bg-[#1c1c1e]">
      <!-- Logo -->
      <div class="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
        <span class="text-white text-[11px] font-black">G</span>
      </div>

      <!-- Search — centered -->
      <div class="flex-1 flex justify-center">
        <div class="flex items-center gap-2 w-full max-w-sm px-3 py-1.5 rounded-md border border-black/15 dark:border-white/12 bg-white dark:bg-white/8 text-black/40 dark:text-white/35 cursor-text">
          <ng-icon name="phosphorMagnifyingGlass" size="14" class="shrink-0" />
          <span class="flex-1 text-[13px]">Search or go to...</span>
          <kbd class="text-[11px] px-1.5 py-0.5 rounded border border-black/15 dark:border-white/12 bg-black/5 dark:bg-white/8 font-mono">/</kbd>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-1">
        <button class="p-1.5 rounded-md text-black/50 dark:text-white/45 hover:bg-black/8 dark:hover:bg-white/8 hover:text-black dark:hover:text-white transition-colors">
          <ng-icon name="phosphorPlus" size="16" />
        </button>
        @for (action of actions; track action.icon) {
          <button class="flex items-center gap-1 px-2 py-1.5 rounded-md text-black/50 dark:text-white/45 hover:bg-black/8 dark:hover:bg-white/8 hover:text-black dark:hover:text-white transition-colors text-[12px]">
            <ng-icon [name]="action.icon" size="15" />
            <span>{{ action.count }}</span>
          </button>
        }
        <!-- Avatar — solid color -->
        <div class="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center ml-1 cursor-pointer shrink-0">
          <span class="text-[10px] font-bold text-white">NK</span>
        </div>
      </div>
    </header>
  `,
  styles: [`:host { display: contents; }`],
})
export class TopBarComponent {
  actions: Action[] = [
    { icon: 'phosphorCopy', count: 0 },
    { icon: 'phosphorGitMerge', count: 0 },
    { icon: 'phosphorCheckSquare', count: 0 },
  ]
}
