import { Component, signal } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  phosphorSquaresFour,
  phosphorUser,
  phosphorArrowsLeftRight,
  phosphorWaveSine,
  phosphorWallet,
  phosphorTrendUp,
  phosphorBookOpen,
  phosphorHeadset,
  phosphorCaretRight,
  phosphorCaretLeft,
  phosphorLightning,
  phosphorX,
} from '@ng-icons/phosphor'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      phosphorSquaresFour,
      phosphorUser,
      phosphorArrowsLeftRight,
      phosphorWaveSine,
      phosphorWallet,
      phosphorTrendUp,
      phosphorBookOpen,
      phosphorHeadset,
      phosphorCaretRight,
      phosphorCaretLeft,
      phosphorLightning,
      phosphorX,
    }),
  ],
  template: `
    <aside class="w-56 shrink-0 bg-white dark:bg-[#111] border-r border-black/[0.08] dark:border-white/[0.08] flex flex-col h-full">
      <!-- Logo -->
      <div class="px-6 py-5">
        <span class="text-[18px] font-bold text-black dark:text-white tracking-tight">ACRU</span>
      </div>

      <!-- Nav -->
      <nav class="flex-1 flex flex-col gap-0.5 px-0">
        <a href="#" class="nav-link nav-active">
          <ng-icon name="phosphorSquaresFour" size="16" />
          <span>Dashboard</span>
        </a>
        <a href="#" class="nav-link nav-inactive">
          <ng-icon name="phosphorUser" size="16" />
          <span>Accounts</span>
        </a>

        <div>
          <button
            (click)="transactionsOpen.set(!transactionsOpen())"
            class="nav-link nav-inactive w-full"
            style="width: calc(100% - 16px)"
          >
            <ng-icon name="phosphorArrowsLeftRight" size="16" />
            <span class="flex-1 text-left">Transactions</span>
            <ng-icon name="phosphorCaretRight" size="12" [class]="'transition-transform ' + (transactionsOpen() ? 'rotate-90' : '')" />
          </button>
          @if (transactionsOpen()) {
            <div class="flex flex-col mt-0.5">
              <a href="#" class="pl-10 pr-4 py-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white flex items-center gap-2">
                History
                <span class="ml-auto bg-[#c5e840] text-black text-[10px] font-semibold rounded-full px-1.5 py-0.5 leading-none">19</span>
              </a>
              <a href="#" class="pl-10 pr-4 py-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white">
                Integration
              </a>
              <a href="#" class="pl-10 pr-4 py-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white">
                Reports
              </a>
            </div>
          }
        </div>

        <a href="#" class="nav-link nav-inactive">
          <ng-icon name="phosphorWaveSine" size="16" />
          <span>Cash flow</span>
        </a>
        <a href="#" class="nav-link nav-inactive">
          <ng-icon name="phosphorWallet" size="16" />
          <span>Budget</span>
        </a>
        <a href="#" class="nav-link nav-inactive">
          <ng-icon name="phosphorTrendUp" size="16" />
          <span>Investments</span>
        </a>

        <!-- Divider -->
        <div class="my-2 mx-4 border-t border-black/[0.06] dark:border-white/[0.06]"></div>

        <a href="#" class="nav-link nav-inactive">
          <ng-icon name="phosphorBookOpen" size="16" />
          <span>Learning center</span>
        </a>
        <a href="#" class="nav-link nav-inactive">
          <ng-icon name="phosphorHeadset" size="16" />
          <span>Support</span>
        </a>
      </nav>

      <!-- Bottom section -->
      <div class="mt-auto">
        @if (proCardVisible()) {
          <div class="bg-black dark:bg-white/10 rounded-2xl p-4 mx-3 mb-3 relative">
            <button
              (click)="proCardVisible.set(false)"
              class="absolute top-3 right-3 text-white/40 hover:text-white transition-colors"
            >
              <ng-icon name="phosphorX" size="14" />
            </button>
            <div class="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center mb-2">
              <ng-icon name="phosphorLightning" size="16" class="text-[#c5e840]" />
            </div>
            <p class="text-white text-[13px] font-semibold leading-tight">Upgrade to Pro!</p>
            <p class="text-white/60 text-[12px] mt-1 leading-snug">Full financial insights with analytics and graphs.</p>
            <button class="bg-[#c5e840] text-black text-[12px] font-semibold rounded-xl px-4 py-2 w-full mt-3 hover:bg-[#d4f053] transition-colors">
              Upgrade now
            </button>
          </div>
        }
        <button class="flex items-center gap-2 text-[12px] text-black/40 dark:text-white/40 px-4 py-3 hover:text-black dark:hover:text-white transition-colors w-full">
          <ng-icon name="phosphorCaretLeft" size="14" />
          Collapse sidebar
        </button>
      </div>
    </aside>
  `,
  styles: [`
    :host { display: contents; }

    .nav-link {
      @apply flex items-center gap-3 px-4 py-2 text-[13px] rounded-lg mx-2 transition-colors;
    }
    .nav-active {
      @apply bg-black/[0.04] dark:bg-white/[0.06] text-black dark:text-white font-medium;
    }
    .nav-inactive {
      @apply text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06];
    }
  `],
})
export class SidebarComponent {
  transactionsOpen = signal(false)
  proCardVisible = signal(true)
}
