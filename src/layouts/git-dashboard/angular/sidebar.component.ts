import { Component, signal } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  phosphorHouse,
  phosphorFolder,
  phosphorUsersThree,
  phosphorCheckSquare,
  phosphorGitMerge,
  phosphorListChecks,
  phosphorDiamond,
  phosphorCode,
  phosphorActivity,
  phosphorClockCounterClockwise,
  phosphorDesktop,
  phosphorGlobe,
  phosphorGear,
  phosphorShield,
  phosphorSparkle,
  phosphorQuestion,
  phosphorCaretLeft,
  phosphorCaretRight,
} from '@ng-icons/phosphor'

type NavEntry = {
  icon: string
  label: string
  active?: boolean
  hasChildren?: boolean
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      phosphorHouse,
      phosphorFolder,
      phosphorUsersThree,
      phosphorCheckSquare,
      phosphorGitMerge,
      phosphorListChecks,
      phosphorDiamond,
      phosphorCode,
      phosphorActivity,
      phosphorClockCounterClockwise,
      phosphorDesktop,
      phosphorGlobe,
      phosphorGear,
      phosphorShield,
      phosphorSparkle,
      phosphorQuestion,
      phosphorCaretLeft,
      phosphorCaretRight,
    }),
  ],
  template: `
    @if (collapsed()) {
      <aside class="hidden md:flex flex-col w-12 shrink-0 bg-[#ebebf0] dark:bg-[#1c1c1e] items-center py-4">
        <button (click)="collapsed.set(false)" class="p-2 rounded-md text-black/40 dark:text-white/40 hover:bg-black/8 dark:hover:bg-white/8">
          <ng-icon name="phosphorCaretRight" size="14" />
        </button>
      </aside>
    } @else {
      <aside class="hidden md:flex flex-col w-52 shrink-0 bg-[#ebebf0] dark:bg-[#1c1c1e]">
        <div class="px-3 pt-4 pb-2">
          <p class="text-[13px] font-semibold text-black dark:text-white">Your work</p>
        </div>

        <nav class="flex-1 overflow-y-auto px-2 space-y-0.5">
          @for (item of mainNav; track item.label) {
            <button
              [class]="item.active ? 'nav-item nav-item--active' : 'nav-item'"
            >
              <span class="shrink-0"><ng-icon [name]="item.icon" size="15" /></span>
              <span class="flex-1">{{ item.label }}</span>
              @if (item.hasChildren) {
                <ng-icon name="phosphorCaretRight" size="11" [class]="item.active ? 'text-white/70' : 'opacity-35'" />
              }
            </button>
          }
        </nav>

        <div class="px-2 py-3 space-y-0.5">
          @for (item of footerNav; track item.label) {
            <button class="nav-item">
              <span class="shrink-0"><ng-icon [name]="item.icon" size="15" /></span>
              <span class="flex-1">{{ item.label }}</span>
            </button>
          }
          <button
            (click)="collapsed.set(true)"
            class="w-full flex items-center gap-2 px-3 py-1.5 text-[13px] text-[#3c3c43] dark:text-white/50 hover:bg-black/6 dark:hover:bg-white/6 hover:text-black dark:hover:text-white rounded-md transition-colors"
          >
            <ng-icon name="phosphorCaretLeft" size="13" />
            Collapse sidebar
          </button>
        </div>
      </aside>
    }
  `,
  styles: [`
    :host { display: contents; }

    .nav-item {
      @apply w-full flex items-center gap-2.5 px-3 py-1.5 text-[13px] rounded-md transition-colors text-left;
      @apply text-[#3c3c43] dark:text-white/65 hover:bg-black/6 dark:hover:bg-white/6 hover:text-black dark:hover:text-white;
    }

    .nav-item--active {
      @apply bg-[#6b6cce] dark:bg-[#5b5cc0] text-white font-medium;
    }
  `],
})
export class SidebarComponent {
  collapsed = signal(false)

  mainNav: NavEntry[] = [
    { icon: 'phosphorHouse', label: 'Home', active: true },
    { icon: 'phosphorFolder', label: 'Projects' },
    { icon: 'phosphorUsersThree', label: 'Groups' },
    { icon: 'phosphorCheckSquare', label: 'Work items' },
    { icon: 'phosphorGitMerge', label: 'Merge requests' },
    { icon: 'phosphorListChecks', label: 'To-Do List' },
    { icon: 'phosphorDiamond', label: 'Milestones' },
    { icon: 'phosphorCode', label: 'Snippets' },
    { icon: 'phosphorActivity', label: 'Activity' },
    { icon: 'phosphorClockCounterClockwise', label: 'Import history' },
    { icon: 'phosphorDesktop', label: 'Workspaces' },
    { icon: 'phosphorGlobe', label: 'Environments' },
    { icon: 'phosphorGear', label: 'Operations' },
    { icon: 'phosphorShield', label: 'Security', hasChildren: true },
  ]

  footerNav: NavEntry[] = [
    { icon: 'phosphorSparkle', label: "What's new" },
    { icon: 'phosphorQuestion', label: 'Help' },
  ]
}
