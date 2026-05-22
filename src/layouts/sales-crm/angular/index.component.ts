import { Component } from '@angular/core'
import { IconSidebarComponent } from './icon-sidebar.component'
import { NavSidebarComponent } from './nav-sidebar.component'
import { TopBarComponent } from './topbar.component'
import { MainContentComponent } from './main-content.component'
import { RightPanelComponent } from './right-panel.component'

@Component({
  selector: 'app-sales-crm',
  standalone: true,
  imports: [
    IconSidebarComponent,
    NavSidebarComponent,
    TopBarComponent,
    MainContentComponent,
    RightPanelComponent,
  ],
  template: `
    <div class="h-screen flex bg-white dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden">
      <app-icon-sidebar />
      <app-nav-sidebar />
      <div class="flex flex-col flex-1 min-w-0">
        <app-topbar />
        <div class="flex flex-1 min-h-0">
          <app-main-content />
          <app-right-panel />
        </div>
      </div>
    </div>
  `,
})
export class SalesCRMComponent {}
