import { Component } from '@angular/core'
import { SidebarComponent } from './sidebar.component'
import { TopBarComponent } from './topbar.component'
import { MainContentComponent } from './main-content.component'
import { RightPanelComponent } from './right-panel.component'

@Component({
  selector: 'app-personal-finance',
  standalone: true,
  imports: [SidebarComponent, TopBarComponent, MainContentComponent, RightPanelComponent],
  template: `
    <div class="h-screen flex bg-[#f4f4f4] dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden">
      <app-sidebar />
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
export class PersonalFinanceComponent {}
