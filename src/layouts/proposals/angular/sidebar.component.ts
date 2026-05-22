import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  phosphorMagnifyingGlass,
  phosphorSidebarSimple,
  phosphorHouse,
  phosphorHouseFill,
  phosphorFileText,
  phosphorCube,
  phosphorMapPin,
  phosphorUser,
  phosphorGearSix,
  phosphorBookOpen,
  phosphorQuestion,
  phosphorLightningFill,
  phosphorDotsThreeBold,
} from '@ng-icons/phosphor'

type NavItem = {
  label: string
  icon: string
  active?: boolean
}

type NavSection = {
  heading?: string
  items: NavItem[]
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      phosphorMagnifyingGlass,
      phosphorSidebarSimple,
      phosphorHouse,
      phosphorHouseFill,
      phosphorFileText,
      phosphorCube,
      phosphorMapPin,
      phosphorUser,
      phosphorGearSix,
      phosphorBookOpen,
      phosphorQuestion,
      phosphorLightningFill,
      phosphorDotsThreeBold,
    }),
  ],
  template: `
    <aside class="w-[260px] shrink-0 h-full flex flex-col bg-[#fbfbfc] dark:bg-[#0f0f0f]">
      <!-- Logo + collapse -->
      <div class="flex items-center justify-between px-5 pt-5 pb-4">
        <div
          class="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2563eb] text-white font-bold text-lg leading-none shadow-sm"
        >
          R
        </div>
        <button
          class="text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 transition-colors"
        >
          <ng-icon name="phosphorSidebarSimple" size="20" />
        </button>
      </div>

      <!-- Search -->
      <div class="px-4 pb-4">
        <div
          class="flex items-center gap-2 px-3 h-10 rounded-xl bg-black/[0.035] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.06]"
        >
          <ng-icon
            name="phosphorMagnifyingGlass"
            size="16"
            class="text-black/35 dark:text-white/35 shrink-0"
          />
          <input
            type="text"
            placeholder="Search..."
            class="flex-1 min-w-0 bg-transparent text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 focus:outline-none"
          />
          <kbd
            class="flex items-center justify-center w-5 h-5 rounded-md bg-white dark:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.1] text-[11px] text-black/40 dark:text-white/40 shrink-0"
          >
            /
          </kbd>
        </div>
      </div>

      <!-- Nav -->
      <nav class="flex-1 flex flex-col gap-6 px-4 overflow-y-auto">
        @for (section of sections; track $index) {
          <div class="flex flex-col gap-1">
            @if (section.heading) {
              <p class="px-2 mb-1 text-[13px] font-medium text-black/35 dark:text-white/35">
                {{ section.heading }}
              </p>
            }
            @for (item of section.items; track item.label) {
              <button
                [class]="
                  'flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm transition-colors text-left ' +
                  (item.active
                    ? 'bg-white dark:bg-white/[0.06] border border-black/[0.07] dark:border-white/[0.08] shadow-sm font-medium text-black dark:text-white'
                    : 'text-black/55 dark:text-white/55 hover:bg-black/[0.035] dark:hover:bg-white/[0.05] hover:text-black dark:hover:text-white')
                "
              >
                <ng-icon
                  [name]="item.icon"
                  size="18"
                  [class]="item.active ? 'text-[#2563eb]' : ''"
                />
                {{ item.label }}
              </button>
            }
          </div>
        }
      </nav>

      <!-- Bottom -->
      <div class="px-4 pt-4 pb-4 flex flex-col gap-3">
        <!-- Get Started card -->
        <div
          class="flex items-start gap-3 p-3 rounded-2xl bg-[#eef4ff] dark:bg-[#16213a] border border-[#2563eb]/15 dark:border-[#2563eb]/25"
        >
          <div
            class="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-white/[0.08] shadow-sm shrink-0"
          >
            <ng-icon name="phosphorLightningFill" size="16" class="text-[#2563eb]" />
          </div>
          <div class="min-w-0">
            <p class="text-[13px] font-semibold text-black dark:text-white">Get Started</p>
            <p class="text-[11px] leading-snug text-black/45 dark:text-white/45 mt-0.5">
              Completed you profile to makes better experience using Iron!
            </p>
          </div>
        </div>

        <!-- Profile -->
        <div class="flex items-center gap-3 px-1">
          <div
            class="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center shrink-0"
          >
            <span class="text-white text-xs font-semibold">JA</span>
          </div>
          <div class="flex flex-col min-w-0 flex-1">
            <span class="text-[13px] font-medium text-black dark:text-white truncate">
              Joshua Adams
            </span>
            <span class="text-[12px] text-black/40 dark:text-white/40 truncate">robin@jobs.com</span>
          </div>
          <button
            class="text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 transition-colors"
          >
            <ng-icon name="phosphorDotsThreeBold" size="20" />
          </button>
        </div>
      </div>
    </aside>
  `,
  styles: [`:host { display: contents; }`],
})
export class SidebarComponent {
  sections: NavSection[] = [
    {
      items: [{ label: 'Dashboard', icon: 'phosphorHouseFill', active: true }],
    },
    {
      heading: 'Work',
      items: [
        { label: 'Proposals', icon: 'phosphorFileText' },
        { label: 'Products', icon: 'phosphorCube' },
        { label: 'Locations', icon: 'phosphorMapPin' },
        { label: 'Customers', icon: 'phosphorUser' },
      ],
    },
    {
      heading: 'Others',
      items: [
        { label: 'Settings', icon: 'phosphorGearSix' },
        { label: 'Knowledge Base', icon: 'phosphorBookOpen' },
        { label: 'Support', icon: 'phosphorQuestion' },
      ],
    },
  ]
}
