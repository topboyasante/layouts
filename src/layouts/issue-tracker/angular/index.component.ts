import { Component } from '@angular/core'
import { SidebarComponent } from './sidebar.component'
import { MainContentComponent } from './main-content.component'

@Component({
  selector: 'app-issue-tracker',
  standalone: true,
  imports: [SidebarComponent, MainContentComponent],
  template: `
    <div class="h-screen bg-[#f3f3f4] dark:bg-[#070707] md:p-2 text-black dark:text-white">
      <main class="h-full flex rounded-lg overflow-hidden">
        <app-sidebar />
        <app-main-content />
      </main>
    </div>
  `,
})
export class IssueTrackerComponent {}
