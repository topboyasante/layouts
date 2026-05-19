import { Component } from '@angular/core'
import { TopBarComponent } from './topbar.component'
import { SidebarComponent } from './sidebar.component'
import { MainContentComponent } from './main-content.component'

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [TopBarComponent, SidebarComponent, MainContentComponent],
  template: `
    <div class="h-screen flex flex-col bg-white dark:bg-[#0f0f0f] text-black dark:text-white overflow-hidden">
      <app-topbar />
      <div class="flex flex-1 min-h-0">
        <app-sidebar />
        <app-main-content />
      </div>
    </div>
  `,
})
export class DocsComponent {}
