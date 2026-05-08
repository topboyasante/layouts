import { CaretRightIcon, ChartBarIcon } from '@phosphor-icons/react'

const trendingArticles = [
  'How to publish your first article',
  'What is Nexdocs?',
  'Setting up a custom domain',
  'Inviting teammates to your workspace',
  'Enabling AI suggestions',
  'Understanding analytics reports',
]

export function RightPanel() {
  return (
    <aside className="hidden lg:block w-72 shrink-0 px-8 pt-10">
      <div className="rounded-xl border border-black/8 dark:border-white/8 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-black/6 dark:border-white/6">
          <ChartBarIcon size={14} className="text-black/40 dark:text-white/35" />
          <span className="text-[13px] font-semibold text-black dark:text-white">Trending Articles</span>
        </div>
        <div className="divide-y divide-black/5 dark:divide-white/5">
          {trendingArticles.map((article, i) => (
            <button
              key={i}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-black/3 dark:hover:bg-white/3 transition-colors group"
            >
              <span className="text-[13px] text-black/70 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors leading-snug">{article}</span>
              <CaretRightIcon size={11} className="shrink-0 text-black/25 dark:text-white/20 group-hover:text-black/50 dark:group-hover:text-white/50 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
