import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  phosphorPencilSimple,
  phosphorArrowBendUpRight,
  phosphorTrash,
} from '@ng-icons/phosphor'

@Component({
  selector: 'app-bulk-action-bar',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({ phosphorPencilSimple, phosphorArrowBendUpRight, phosphorTrash }),
  ],
  template: `
    <div
      class="absolute left-1/2 -translate-x-1/2 bottom-8 z-30 flex items-center gap-1 h-11 pl-4 pr-1.5 rounded-full bg-[#171717] text-white shadow-[0_12px_36px_-10px_rgba(0,0,0,0.5)]"
    >
      <span class="text-[12.5px] text-white/70">
        Selected: <span class="text-white font-medium">3</span>
      </span>
      <span class="w-px h-5 bg-white/15 mx-2"></span>
      <button
        class="flex items-center gap-1.5 px-2.5 h-8 rounded-full text-[12.5px] text-white/80 hover:bg-white/[0.08] hover:text-white transition-colors"
      >
        <ng-icon name="phosphorPencilSimple" size="14" />
        Edit
      </button>
      <button
        class="flex items-center gap-1.5 px-2.5 h-8 rounded-full text-[12.5px] text-white/80 hover:bg-white/[0.08] hover:text-white transition-colors"
      >
        <ng-icon name="phosphorArrowBendUpRight" size="14" />
        Assign to
      </button>
      <button
        class="flex items-center gap-1.5 px-2.5 h-8 rounded-full text-[12.5px] text-white/80 hover:bg-white/[0.08] hover:text-white transition-colors"
      >
        <ng-icon name="phosphorTrash" size="14" />
        Delete
      </button>
      <button
        class="ml-1 h-8 px-3.5 rounded-full bg-white text-[#dc2626] text-[12.5px] font-medium hover:bg-white/90 transition-colors"
      >
        Discard
      </button>
    </div>
  `,
  styles: [`:host { display: contents; }`],
})
export class BulkActionBarComponent {}
