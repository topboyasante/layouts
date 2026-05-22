import { Component } from '@angular/core'
import { SidebarComponent } from './sidebar.component'
import { TopBarComponent } from './topbar.component'
import { MetricsRowComponent } from './metrics-row.component'
import { LeadsTableComponent } from './leads-table.component'
import { ProfilePanelComponent } from './profile-panel.component'
import { BulkActionBarComponent } from './bulk-action-bar.component'

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [
    SidebarComponent,
    TopBarComponent,
    MetricsRowComponent,
    LeadsTableComponent,
    ProfilePanelComponent,
    BulkActionBarComponent,
  ],
  template: `
    <div
      class="h-full w-full flex bg-white dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden"
    >
      <app-sidebar />
      <div
        class="relative flex flex-col flex-1 min-w-0 border-l border-black/[0.06] dark:border-white/[0.07]"
      >
        <app-topbar />
        <app-metrics-row />
        <app-leads-table />
        <app-profile-panel />
        <app-bulk-action-bar />
      </div>
    </div>
  `,
})
export class LeadsComponent {}
