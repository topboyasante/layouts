type SparklineProps = {
  data: number[]
  className?: string
}

const W = 110
const H = 32

export function Sparkline({ data, className }: SparklineProps) {
  if (data.length === 0) return null
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const step = W / (data.length - 1)

  const points = data
    .map((v, i) => {
      const x = i * step
      const y = H - ((v - min) / range) * H
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={`w-full h-full ${className ?? ''}`}
    >
      <polyline points={points} fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
