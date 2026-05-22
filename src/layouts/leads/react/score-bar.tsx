type ScoreBarProps = {
  score: number // 0-10
}

// Color per filled segment based on tier.
function colorFor(score: number): string {
  if (score >= 8) return 'bg-emerald-500'
  if (score >= 6) return 'bg-yellow-400'
  if (score >= 4) return 'bg-amber-500'
  return 'bg-rose-500'
}

export function ScoreBar({ score }: ScoreBarProps) {
  const fill = colorFor(score)
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-[2px]">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className={`block w-[3px] h-3.5 rounded-[1px] ${
              i < score ? fill : 'bg-black/[0.08] dark:bg-white/[0.1]'
            }`}
          />
        ))}
      </div>
      <span className="text-[12px] text-black/45 dark:text-white/45 tabular-nums">{score}/10</span>
    </div>
  )
}
