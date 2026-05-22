import { Component, Input, computed, signal } from '@angular/core'

@Component({
  selector: 'app-sparkline',
  standalone: true,
  template: `
    @if (data().length > 0) {
      <svg
        [attr.viewBox]="'0 0 ' + W + ' ' + H"
        preserveAspectRatio="none"
        [class]="'w-full h-full ' + (extraClass ?? '')"
      >
        <polyline
          [attr.points]="points()"
          fill="none"
          stroke="#f97316"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    }
  `,
  styles: [`:host { display: contents; }`],
})
export class SparklineComponent {
  readonly W = 110
  readonly H = 32

  data = signal<number[]>([])
  @Input() set values(v: number[]) {
    this.data.set(v ?? [])
  }
  @Input() extraClass?: string

  points = computed(() => {
    const d = this.data()
    if (d.length === 0) return ''
    const min = Math.min(...d)
    const max = Math.max(...d)
    const range = max - min || 1
    const step = this.W / (d.length - 1)
    return d.map((v, i) => `${i * step},${this.H - ((v - min) / range) * this.H}`).join(' ')
  })
}
