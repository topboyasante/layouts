import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-score-bar',
  standalone: true,
  template: `
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-[2px]">
        @for (i of segments; track i) {
          <span
            [class]="
              'block w-[3px] h-3.5 rounded-[1px] ' +
              (i < score ? fill() : 'bg-black/[0.08] dark:bg-white/[0.1]')
            "
          ></span>
        }
      </div>
      <span class="text-[12px] text-black/45 dark:text-white/45 tabular-nums">{{ score }}/10</span>
    </div>
  `,
  styles: [`:host { display: contents; }`],
})
export class ScoreBarComponent {
  @Input() score = 0
  segments = Array.from({ length: 10 }, (_, i) => i)

  fill(): string {
    if (this.score >= 8) return 'bg-emerald-500'
    if (this.score >= 6) return 'bg-yellow-400'
    if (this.score >= 4) return 'bg-amber-500'
    return 'bg-rose-500'
  }
}
