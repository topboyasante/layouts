import { Component } from '@angular/core'
import { SidebarComponent } from './sidebar.component'
import { TopBarComponent } from './topbar.component'
import { MainContentComponent } from './main-content.component'

@Component({
  selector: 'app-fintech',
  standalone: true,
  imports: [SidebarComponent, TopBarComponent, MainContentComponent],
  template: `
    <div class="h-screen flex bg-white dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden">
      <app-sidebar />
      <div class="flex flex-col flex-1 min-w-0">
        <app-topbar />
        <app-main-content />
      </div>
    </div>
  `,
})
export class FintechComponent {}
