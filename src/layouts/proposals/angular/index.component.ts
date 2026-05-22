import { Component } from '@angular/core'
import { SidebarComponent } from './sidebar.component'
import { TopBarComponent } from './topbar.component'
import { MainContentComponent } from './main-content.component'

@Component({
  selector: 'app-proposals',
  standalone: true,
  imports: [SidebarComponent, TopBarComponent, MainContentComponent],
  template: `
    <div
      class="h-full w-full overflow-auto bg-[#eef0f3] dark:bg-[#070707] p-3 text-black dark:text-white"
    >
      <div
        class="h-full min-h-[760px] flex rounded-[22px] bg-[#fbfbfc] dark:bg-[#0f0f0f] border border-black/[0.08] dark:border-white/[0.08] shadow-[0_6px_24px_-10px_rgba(15,23,42,0.18)] overflow-hidden"
      >
        <app-sidebar />
        <div
          class="flex flex-col flex-1 min-w-0 border-l border-black/[0.07] dark:border-white/[0.08]"
        >
          <app-topbar />
          <app-main-content />
        </div>
      </div>
    </div>
  `,
})
export class ProposalsComponent {}
