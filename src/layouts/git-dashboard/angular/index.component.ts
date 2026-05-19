import { Component } from '@angular/core'
import { TopBarComponent } from './topbar.component'
import { SidebarComponent } from './sidebar.component'
import { MainContentComponent } from './main-content.component'
import { RightPanelComponent } from './right-panel.component'

@Component({
  selector: 'app-git-dashboard',
  standalone: true,
  imports: [TopBarComponent, SidebarComponent, MainContentComponent, RightPanelComponent],
  template: `
    <div class="h-screen flex flex-col bg-[#ebebf0] dark:bg-[#1c1c1e] text-black dark:text-white overflow-hidden">
      <app-topbar />
      <div class="flex flex-1 min-h-0 gap-0">
        <app-sidebar />
        <div class="flex flex-1 min-w-0 min-h-0 pt-2 pr-2 pb-2">
          <div class="flex flex-1 min-w-0 rounded-xl overflow-hidden">
            <app-main-content />
            <app-right-panel />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class GitDashboardComponent {}
