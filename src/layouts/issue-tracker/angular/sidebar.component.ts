import { Component, signal } from '@angular/core'
import { NgClass } from '@angular/common'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
  phosphorTray,
  phosphorUser,
  phosphorSquaresFour,
  phosphorStack,
  phosphorDotsThree,
  phosphorCircleDashed,
  phosphorArrowsClockwise,
  phosphorDownloadSimple,
  phosphorCaretDown,
  phosphorCaretRight,
  phosphorQuestion,
} from '@ng-icons/phosphor'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgIconComponent],
  providers: [
    provideIcons({
      phosphorTray,
      phosphorUser,
      phosphorSquaresFour,
      phosphorStack,
      phosphorDotsThree,
      phosphorCircleDashed,
      phosphorArrowsClockwise,
      phosphorDownloadSimple,
      phosphorCaretDown,
      phosphorCaretRight,
      phosphorQuestion,
    }),
  ],
  template: `
    <aside class="hidden md:flex flex-col w-56 shrink-0 text-black dark:text-white">
      <!-- Workspace header -->
      <div class="flex items-center gap-2 px-3 py-3">
        <div class="w-5 h-5 rounded bg-violet-500 flex items-center justify-center shrink-0">
          <span class="text-[9px] font-bold text-white leading-none">GO</span>
        </div>
        <span class="text-[13px] font-medium truncate flex-1">Google</span>
        <ng-icon name="phosphorCaretDown" size="12" class="shrink-0 opacity-40" />
      </div>

      <!-- Nav -->
      <nav class="flex-1 overflow-y-auto px-2 py-2 space-y-3">
        <!-- Top-level -->
        <div class="space-y-0.5">
          <button class="nav-item">
            <ng-icon name="phosphorTray" size="14" class="shrink-0 opacity-70" />
            Inbox
          </button>
          <button class="nav-item nav-item--active">
            <ng-icon name="phosphorUser" size="14" class="shrink-0 opacity-70" />
            My issues
          </button>
        </div>

        <!-- Workspace -->
        <div>
          <button (click)="workspaceOpen.set(!workspaceOpen())" class="section-toggle">
            <ng-icon [name]="workspaceOpen() ? 'phosphorCaretDown' : 'phosphorCaretRight'" size="10" />
            Workspace
          </button>
          @if (workspaceOpen()) {
            <div class="mt-0.5 space-y-0.5">
              <button class="nav-item">
                <ng-icon name="phosphorSquaresFour" size="14" class="shrink-0 opacity-70" />
                Projects
              </button>
              <button class="nav-item">
                <ng-icon name="phosphorStack" size="14" class="shrink-0 opacity-70" />
                Views
              </button>
              <button class="nav-item">
                <ng-icon name="phosphorDotsThree" size="14" class="shrink-0 opacity-70" />
                More
              </button>
            </div>
          }
        </div>

        <!-- Your teams -->
        <div>
          <button (click)="teamsOpen.set(!teamsOpen())" class="section-toggle">
            <ng-icon [name]="teamsOpen() ? 'phosphorCaretDown' : 'phosphorCaretRight'" size="10" />
            Your teams
          </button>
          @if (teamsOpen()) {
            <div class="mt-0.5">
              <button
                (click)="teamExpanded.set(!teamExpanded())"
                class="w-full flex items-center gap-2 px-2 py-1 rounded-md text-[13px] text-black/60 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors"
              >
                <div class="w-3.5 h-3.5 rounded-sm bg-violet-500/80 shrink-0"></div>
                <span class="flex-1 text-left">Google</span>
                <ng-icon [name]="teamExpanded() ? 'phosphorCaretDown' : 'phosphorCaretRight'" size="10" class="shrink-0" />
              </button>
              @if (teamExpanded()) {
                <div class="mt-0.5 space-y-0.5">
                  <button class="nav-item pl-6">
                    <ng-icon name="phosphorCircleDashed" size="14" class="shrink-0 opacity-70" />
                    Issues
                  </button>
                  <button class="nav-item pl-6">
                    <ng-icon name="phosphorSquaresFour" size="14" class="shrink-0 opacity-70" />
                    Projects
                  </button>
                  <button class="nav-item pl-6">
                    <ng-icon name="phosphorStack" size="14" class="shrink-0 opacity-70" />
                    Views
                  </button>
                </div>
              }
            </div>
          }
        </div>

        <!-- Try -->
        <div>
          <button (click)="tryOpen.set(!tryOpen())" class="section-toggle">
            <ng-icon [name]="tryOpen() ? 'phosphorCaretDown' : 'phosphorCaretRight'" size="10" />
            Try
          </button>
          @if (tryOpen()) {
            <div class="mt-0.5 space-y-0.5">
              <button class="nav-item">
                <ng-icon name="phosphorDownloadSimple" size="14" class="shrink-0 opacity-70" />
                Import issues
              </button>
              <button class="nav-item">
                <ng-icon name="phosphorArrowsClockwise" size="14" class="shrink-0 opacity-70" />
                Cycles
              </button>
            </div>
          }
        </div>
      </nav>

      <!-- Footer -->
      <div class="flex items-center gap-2 px-3 py-2">
        <button class="flex items-center justify-center w-6 h-6 rounded text-black/40 dark:text-white/40 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors">
          <ng-icon name="phosphorQuestion" size="14" />
        </button>
        <button class="ml-auto text-[11px] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors px-2 py-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5">
          Free plan
        </button>
      </div>
    </aside>
  `,
  styles: [`
    :host { display: contents; }

    .nav-item {
      @apply w-full flex items-center gap-2 px-2 py-1 rounded-md text-[13px] transition-colors text-left;
      @apply text-black/60 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white;
    }

    .nav-item--active {
      @apply bg-black/8 dark:bg-white/8 text-black dark:text-white;
    }

    .section-toggle {
      @apply w-full flex items-center gap-1 px-2 py-1 text-[11px] font-medium uppercase tracking-wide transition-colors;
      @apply text-black/35 dark:text-white/30 hover:text-black/60 dark:hover:text-white/50;
    }
  `],
})
export class SidebarComponent {
  workspaceOpen = signal(true)
  teamsOpen = signal(true)
  teamExpanded = signal(true)
  tryOpen = signal(false)
}
