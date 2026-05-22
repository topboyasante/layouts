import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  phosphorHouse,
  phosphorHouseFill,
  phosphorCreditCard,
  phosphorArrowsLeftRight,
  phosphorReceipt,
  phosphorBookOpen,
  phosphorArrowBendUpLeft,
  phosphorBuildings,
  phosphorChartBar,
  phosphorPiggyBank,
  phosphorGear,
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
      phosphorHouse,
      phosphorHouseFill,
      phosphorCreditCard,
      phosphorArrowsLeftRight,
      phosphorReceipt,
      phosphorBookOpen,
      phosphorArrowBendUpLeft,
      phosphorBuildings,
      phosphorChartBar,
      phosphorPiggyBank,
      phosphorGear,
    }),
  ],
  template: `
    <aside class="w-52 h-screen flex flex-col bg-[#0f1117] shrink-0">
      <!-- Logo -->
      <div class="flex items-center gap-2 px-4 py-5">
        <span class="text-[#c8f53a] text-lg leading-none">◈</span>
        <span class="text-white font-semibold text-base tracking-tight">Apex</span>
      </div>

      <!-- Nav -->
      <nav class="flex-1 flex flex-col gap-5 px-2 overflow-y-auto">
        @for (section of sections; track $index) {
          <div class="flex flex-col gap-0.5">
            @if (section.heading) {
              <p class="px-2 mb-1 text-[11px] font-semibold uppercase tracking-widest text-white/25">
                {{ section.heading }}
              </p>
            }
            @for (item of section.items; track item.label) {
              <button
                [class]="
                  'flex items-center gap-2.5 w-full px-2 py-2 rounded-md text-sm font-medium transition-colors text-left ' +
                  (item.active
                    ? 'bg-white/[0.08] text-white'
                    : 'text-white/50 hover:text-white hover:bg-white/[0.05]')
                "
              >
                <ng-icon [name]="item.icon" size="16" />
                {{ item.label }}
              </button>
            }
          </div>
        }
      </nav>

      <!-- Bottom -->
      <div class="px-2 pb-4 flex flex-col gap-1">
        <button class="flex items-center gap-2.5 w-full px-2 py-2 rounded-md text-sm font-medium text-white/50 hover:text-white hover:bg-white/[0.05] transition-colors">
          <ng-icon name="phosphorGear" size="16" />
          Settings
        </button>
        <div class="flex items-center gap-2.5 px-2 py-2">
          <div class="w-7 h-7 rounded-full bg-neutral-600 flex items-center justify-center shrink-0">
            <span class="text-white text-xs font-semibold">JD</span>
          </div>
          <div class="flex flex-col min-w-0">
            <span class="text-white text-xs font-medium truncate">Jane Doe</span>
            <span class="text-white/40 text-[11px] truncate">Admin</span>
          </div>
        </div>
      </div>
    </aside>
  `,
  styles: [`:host { display: contents; }`],
})
export class SidebarComponent {
  sections: NavSection[] = [
    {
      items: [
        { label: 'Home', icon: 'phosphorHouseFill', active: true },
        { label: 'Cards', icon: 'phosphorCreditCard' },
        { label: 'Transactions', icon: 'phosphorArrowsLeftRight' },
        { label: 'Bill Pay', icon: 'phosphorReceipt' },
      ],
    },
    {
      heading: 'Manage',
      items: [
        { label: 'Accounting', icon: 'phosphorBookOpen' },
        { label: 'Reimbursements', icon: 'phosphorArrowBendUpLeft' },
        { label: 'Vendors', icon: 'phosphorBuildings' },
      ],
    },
    {
      heading: 'Insights',
      items: [
        { label: 'Reporting', icon: 'phosphorChartBar' },
        { label: 'Savings', icon: 'phosphorPiggyBank' },
      ],
    },
  ]
}
