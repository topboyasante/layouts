import { Component, signal } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  phosphorSquaresFour,
  phosphorBell,
  phosphorBookOpen,
  phosphorChartBar,
  phosphorArrowsLeftRight,
  phosphorCube,
  phosphorScales,
  phosphorFileText,
  phosphorWallet,
  phosphorBuildings,
  phosphorGearSix,
  phosphorCaretDown,
  phosphorCaretRight,
  phosphorMagnifyingGlass,
  phosphorPlus,
  phosphorCaretUpDown,
} from '@ng-icons/phosphor'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      phosphorSquaresFour,
      phosphorBell,
      phosphorBookOpen,
      phosphorChartBar,
      phosphorArrowsLeftRight,
      phosphorCube,
      phosphorScales,
      phosphorFileText,
      phosphorWallet,
      phosphorBuildings,
      phosphorGearSix,
      phosphorCaretDown,
      phosphorCaretRight,
      phosphorMagnifyingGlass,
      phosphorPlus,
      phosphorCaretUpDown,
    }),
  ],
  template: `
    <aside class="hidden md:flex flex-col w-56 shrink-0 text-black dark:text-white">
      <!-- Header -->
      <div class="flex items-center gap-2 px-3 py-3">
        <div class="w-6 h-6 rounded-md bg-[#FF3B30] flex items-center justify-center shrink-0">
          <span class="text-[9px] font-bold text-white leading-none">MZ</span>
        </div>
        <span class="text-[13px] font-semibold truncate flex-1">Monzo</span>
        <ng-icon name="phosphorCaretUpDown" size="13" class="shrink-0 text-black/30 dark:text-white/30" />
      </div>

      <!-- Search -->
      <div class="px-3 py-2">
        <div class="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/30">
          <ng-icon name="phosphorMagnifyingGlass" size="13" class="shrink-0" />
          <span class="text-[12px]">Search...</span>
        </div>
      </div>

      <!-- Create button -->
      <div class="px-3 py-2">
        <button class="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-md bg-[#FF3B30] hover:bg-[#e02e24] text-white text-[13px] font-medium transition-colors">
          <ng-icon name="phosphorPlus" size="13" />
          Create new
        </button>
      </div>

      <!-- Nav -->
      <nav class="flex-1 overflow-y-auto px-2 py-2 space-y-4">
        <!-- Top-level -->
        <div class="space-y-0.5">
          <button class="leaf">
            <span class="w-2.75 shrink-0"></span>
            <span class="icon-wrap"><ng-icon name="phosphorSquaresFour" size="14" /></span>
            <span class="flex-1 truncate">Dashboard</span>
          </button>
          <button class="leaf">
            <span class="w-2.75 shrink-0"></span>
            <span class="icon-wrap"><ng-icon name="phosphorBell" size="14" /></span>
            <span class="flex-1 truncate">Updates</span>
            <span class="badge">3</span>
          </button>
        </div>

        <!-- Tools -->
        <div>
          <p class="section-label">Tools</p>
          <div class="space-y-0.5">
            <!-- Accounting -->
            <div>
              <button (click)="accountingOpen.set(!accountingOpen())" class="leaf">
                <ng-icon [name]="accountingOpen() ? 'phosphorCaretDown' : 'phosphorCaretRight'" size="11" class="shrink-0 text-black/30 dark:text-white/30" />
                <span class="icon-wrap"><ng-icon name="phosphorBookOpen" size="14" /></span>
                <span class="flex-1 truncate">Accounting</span>
              </button>
              @if (accountingOpen()) {
                <div class="mt-0.5 ml-3">
                  <button class="sub-item"><span class="dot"></span>Sales</button>
                  <button class="sub-item"><span class="dot"></span>Purchases</button>
                </div>
              }
            </div>

            <!-- Chart of Accounts -->
            <div>
              <button (click)="chartOpen.set(!chartOpen())" class="leaf">
                <ng-icon [name]="chartOpen() ? 'phosphorCaretDown' : 'phosphorCaretRight'" size="11" class="shrink-0 text-black/30 dark:text-white/30" />
                <span class="icon-wrap"><ng-icon name="phosphorChartBar" size="14" /></span>
                <span class="flex-1 truncate">Chart of Accounts</span>
              </button>
              @if (chartOpen()) {
                <div class="mt-0.5 ml-3">
                  <button class="sub-item"><span class="dot"></span>Chart of Account</button>
                </div>
              }
            </div>

            <!-- Transactions -->
            <div>
              <button (click)="transactionsOpen.set(!transactionsOpen())" class="leaf">
                <ng-icon [name]="transactionsOpen() ? 'phosphorCaretDown' : 'phosphorCaretRight'" size="11" class="shrink-0 text-black/30 dark:text-white/30" />
                <span class="icon-wrap"><ng-icon name="phosphorArrowsLeftRight" size="14" /></span>
                <span class="flex-1 truncate">Transactions</span>
              </button>
              @if (transactionsOpen()) {
                <div class="mt-0.5 ml-3">
                  <button class="sub-item"><span class="dot"></span>General Journal</button>
                </div>
              }
            </div>

            <button class="leaf">
              <span class="w-2.75 shrink-0"></span>
              <span class="icon-wrap"><ng-icon name="phosphorCube" size="14" /></span>
              <span class="flex-1 truncate">Products &amp; Services</span>
            </button>
            <button class="leaf">
              <span class="w-2.75 shrink-0"></span>
              <span class="icon-wrap"><ng-icon name="phosphorScales" size="14" /></span>
              <span class="flex-1 truncate">Taxes &amp; Compliance</span>
            </button>

            <!-- Reports -->
            <div>
              <button (click)="reportsOpen.set(!reportsOpen())" class="leaf">
                <ng-icon [name]="reportsOpen() ? 'phosphorCaretDown' : 'phosphorCaretRight'" size="11" class="shrink-0 text-black/30 dark:text-white/30" />
                <span class="icon-wrap"><ng-icon name="phosphorFileText" size="14" /></span>
                <span class="flex-1 truncate">Reports</span>
              </button>
              @if (reportsOpen()) {
                <div class="mt-0.5 ml-3">
                  <button class="sub-item sub-item--active"><span class="dot"></span>Generate Report</button>
                  <button class="sub-item"><span class="dot"></span>Saved Reports</button>
                </div>
              }
            </div>

            <button class="leaf">
              <span class="w-2.75 shrink-0"></span>
              <span class="icon-wrap"><ng-icon name="phosphorWallet" size="14" /></span>
              <span class="flex-1 truncate">Budget management</span>
            </button>
            <button class="leaf">
              <span class="w-2.75 shrink-0"></span>
              <span class="icon-wrap"><ng-icon name="phosphorBuildings" size="14" /></span>
              <span class="flex-1 truncate">Organisation</span>
            </button>
          </div>
        </div>

        <!-- More -->
        <div>
          <p class="section-label">More</p>
          <div class="space-y-0.5">
            <button class="leaf">
              <span class="w-2.75 shrink-0"></span>
              <span class="icon-wrap"><ng-icon name="phosphorGearSix" size="14" /></span>
              <span class="flex-1 truncate">Settings</span>
            </button>
          </div>
        </div>
      </nav>
    </aside>
  `,
  styles: [`
    :host { display: contents; }

    .leaf {
      @apply w-full flex items-center gap-1.5 px-2 py-1.25 rounded-md text-[13px] transition-colors text-left;
      @apply text-black/65 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white;
    }

    .icon-wrap {
      @apply shrink-0 text-black/40 dark:text-white/30;
    }

    .sub-item {
      @apply w-full flex items-center gap-2 pl-4 pr-2 py-1.25 rounded-md text-[13px] transition-colors text-left;
      @apply text-black/55 dark:text-white/40 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white;
    }

    .sub-item--active {
      @apply text-black dark:text-white font-semibold;
    }

    .dot {
      @apply w-1 h-1 rounded-full bg-current opacity-40 shrink-0;
    }

    .badge {
      @apply ml-auto shrink-0 min-w-4.5 h-4.5 px-1 rounded-full bg-orange-500 text-white text-[10px] font-medium flex items-center justify-center;
    }

    .section-label {
      @apply px-2 mb-1 text-[10px] font-semibold uppercase tracking-widest text-black/30 dark:text-white/25;
    }
  `],
})
export class SidebarComponent {
  accountingOpen = signal(true)
  chartOpen = signal(true)
  transactionsOpen = signal(true)
  reportsOpen = signal(true)
}
