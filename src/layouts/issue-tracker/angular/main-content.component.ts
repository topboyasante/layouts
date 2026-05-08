import { Component, signal } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { phosphorFunnel, phosphorSlidersHorizontal, phosphorColumns } from '@ng-icons/phosphor'
import { HeaderComponent } from './header.component'

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NgIconComponent, HeaderComponent],
  providers: [provideIcons({ phosphorFunnel, phosphorSlidersHorizontal, phosphorColumns })],
  template: `
    <div class="flex-1 flex flex-col min-h-0 md:rounded-lg bg-white dark:bg-[#0F1010] border border-black/6 dark:border-white/6">
      <app-header />

      <div class="shrink-0 flex items-center justify-between px-4 h-10 border-b border-black/6 dark:border-white/6">
        <div class="flex items-center gap-1">
          @for (tab of tabs; track tab) {
            <button
              (click)="activeTab.set(tab)"
              [class]="activeTab() === tab
                ? 'px-2.5 py-1 rounded-full text-xs font-medium bg-black/8 dark:bg-white/10 text-black dark:text-white'
                : 'px-2.5 py-1 rounded-full text-xs font-medium text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors'"
            >
              {{ tab }}
            </button>
          }
          <button class="ml-1 text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
            +
          </button>
        </div>
        <div class="flex items-center gap-1">
          @for (icon of toolIcons; track icon) {
            <button class="p-1.5 rounded text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <ng-icon [name]="icon" size="15" />
            </button>
          }
        </div>
      </div>

      <div class="flex-1 overflow-y-auto p-4">
        <!-- Content -->
      </div>
    </div>
  `,
})
export class MainContentComponent {
  tabs = ['All issues', 'Active', 'Backlog']
  toolIcons = ['phosphorFunnel', 'phosphorSlidersHorizontal', 'phosphorColumns']
  activeTab = signal('Active')
}
