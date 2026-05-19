import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  phosphorBell,
  phosphorEnvelope,
  phosphorRocketLaunch,
  phosphorUser,
  phosphorCreditCard,
  phosphorBookOpen,
  phosphorSparkle,
  phosphorChartBar,
  phosphorGlobe,
  phosphorArchive,
  phosphorPaintBrush,
  phosphorMagnifyingGlass,
  phosphorFolder,
  phosphorCaretRight,
} from '@ng-icons/phosphor'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      phosphorBell,
      phosphorEnvelope,
      phosphorRocketLaunch,
      phosphorUser,
      phosphorCreditCard,
      phosphorBookOpen,
      phosphorSparkle,
      phosphorChartBar,
      phosphorGlobe,
      phosphorArchive,
      phosphorPaintBrush,
      phosphorMagnifyingGlass,
      phosphorFolder,
      phosphorCaretRight,
    }),
  ],
  template: `
    <aside class="hidden md:flex flex-col w-56 shrink-0 border-r border-black/8 dark:border-white/8 bg-white dark:bg-[#0f0f0f] overflow-y-auto">
      <div class="px-2 pt-4 pb-6">
        <!-- Top links -->
        <button class="nav-item">
          <span class="icon-wrap"><ng-icon name="phosphorBell" size="14" /></span>
          <span class="flex-1">Changelog</span>
        </button>
        <button class="nav-item">
          <span class="icon-wrap"><ng-icon name="phosphorEnvelope" size="14" /></span>
          <span class="flex-1">Contact support</span>
        </button>

        <div class="my-3 border-t border-black/6 dark:border-white/6"></div>

        <!-- Get Started -->
        <div class="mt-5">
          <div class="section-header">
            <span class="text-black/35 dark:text-white/30"><ng-icon name="phosphorRocketLaunch" size="13" /></span>
            <span class="section-title">Get Started</span>
          </div>
          <button class="nav-item">
            <span class="icon-wrap"><ng-icon name="phosphorRocketLaunch" size="14" /></span>
            <span class="flex-1">Quickstart</span>
            <ng-icon name="phosphorCaretRight" size="11" class="opacity-35 shrink-0" />
          </button>
          <button class="nav-item">
            <span class="icon-wrap"><ng-icon name="phosphorUser" size="14" /></span>
            <span class="flex-1">Team members</span>
            <ng-icon name="phosphorCaretRight" size="11" class="opacity-35 shrink-0" />
          </button>
          <button class="nav-item">
            <span class="icon-wrap"><ng-icon name="phosphorCreditCard" size="14" /></span>
            <span class="flex-1">Billing &amp; plans</span>
            <ng-icon name="phosphorCaretRight" size="11" class="opacity-35 shrink-0" />
          </button>
        </div>

        <!-- Guides -->
        <div class="mt-5">
          <div class="section-header">
            <span class="text-black/35 dark:text-white/30"><ng-icon name="phosphorBookOpen" size="13" /></span>
            <span class="section-title">Guides</span>
          </div>
          <button class="nav-item">
            <span class="icon-wrap"><ng-icon name="phosphorSparkle" size="14" /></span>
            <span class="flex-1">Writing with AI</span>
            <ng-icon name="phosphorCaretRight" size="11" class="opacity-35 shrink-0" />
          </button>
          <button class="nav-item">
            <span class="icon-wrap"><ng-icon name="phosphorSparkle" size="14" /></span>
            <span class="flex-1">Smart suggestions</span>
            <ng-icon name="phosphorCaretRight" size="11" class="opacity-35 shrink-0" />
          </button>
          <button class="nav-item">
            <span class="icon-wrap"><ng-icon name="phosphorChartBar" size="14" /></span>
            <span class="flex-1">Analytics</span>
            <ng-icon name="phosphorCaretRight" size="11" class="opacity-35 shrink-0" />
          </button>
        </div>

        <!-- Configuration -->
        <div class="mt-5">
          <div class="section-header">
            <span class="text-black/35 dark:text-white/30"><ng-icon name="phosphorBookOpen" size="13" /></span>
            <span class="section-title">Configuration</span>
          </div>
          <button class="nav-item">
            <span class="icon-wrap"><ng-icon name="phosphorGlobe" size="14" /></span>
            <span class="flex-1">Custom domains</span>
            <ng-icon name="phosphorCaretRight" size="11" class="opacity-35 shrink-0" />
          </button>
          <button class="nav-item">
            <span class="icon-wrap"><ng-icon name="phosphorArchive" size="14" /></span>
            <span class="flex-1">Content management</span>
            <ng-icon name="phosphorCaretRight" size="11" class="opacity-35 shrink-0" />
          </button>
          <button class="nav-item">
            <span class="icon-wrap"><ng-icon name="phosphorPaintBrush" size="14" /></span>
            <span class="flex-1">Appearance</span>
            <ng-icon name="phosphorCaretRight" size="11" class="opacity-35 shrink-0" />
          </button>
          <button class="nav-item">
            <span class="icon-wrap"><ng-icon name="phosphorMagnifyingGlass" size="14" /></span>
            <span class="flex-1">Search settings</span>
            <ng-icon name="phosphorCaretRight" size="11" class="opacity-35 shrink-0" />
          </button>
          <button class="nav-item">
            <span class="icon-wrap"><ng-icon name="phosphorFolder" size="14" /></span>
            <span class="flex-1">Collections</span>
            <ng-icon name="phosphorCaretRight" size="11" class="opacity-35 shrink-0" />
          </button>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    :host { display: contents; }

    .nav-item {
      @apply w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[13px] transition-colors text-left;
      @apply text-black/65 dark:text-white/55 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white;
    }

    .icon-wrap {
      @apply shrink-0 text-black/40 dark:text-white/35;
    }

    .section-header {
      @apply flex items-center gap-2 px-3 mb-1;
    }

    .section-title {
      @apply text-[11px] font-semibold tracking-wider text-black/40 dark:text-white/35 uppercase;
    }
  `],
})
export class SidebarComponent {}
