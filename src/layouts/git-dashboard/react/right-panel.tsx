import { useState } from 'react'
import { GitMergeIcon, ChatCircleIcon } from '@phosphor-icons/react'

const recentItems = [
  'Develop',
  'fix: create shipments with pickup option',
  'Develop',
  'feat: edit and delete shipment',
  'Develop',
]

export function RightPanel() {
  const [tab, setTab] = useState<'recent' | 'projects'>('recent')

  return (
    <aside className="hidden lg:flex flex-col w-72 shrink-0 gap-4 p-4 overflow-y-auto bg-[#f8f8f8] dark:bg-[#070707] border-l border-black/6 dark:border-white/6">
      {/* Quick access */}
      <div className="rounded-lg border border-black/8 dark:border-white/8 bg-white dark:bg-[#0F1010] overflow-hidden">
        <div className="px-4 pt-4 pb-3 border-b border-black/6 dark:border-white/6">
          <h3 className="text-[13px] font-semibold text-black dark:text-white mb-3">Quick access</h3>
          <div className="flex rounded-md border border-black/8 dark:border-white/8 overflow-hidden text-[12px]">
            {(['recent', 'projects'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-1.5 font-medium transition-colors capitalize ${
                  tab === t
                    ? 'bg-black/8 dark:bg-white/10 text-black dark:text-white'
                    : 'text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white'
                }`}
              >
                {t === 'recent' ? 'Recently viewed' : 'Projects'}
              </button>
            ))}
          </div>
        </div>
        <div className="divide-y divide-black/5 dark:divide-white/5">
          {recentItems.map((item, i) => (
            <button key={i} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left hover:bg-black/3 dark:hover:bg-white/3 transition-colors group">
              <GitMergeIcon size={14} className="shrink-0 text-black/30 dark:text-white/25" />
              <span className="text-[13px] text-black/70 dark:text-white/60 truncate group-hover:text-black dark:group-hover:text-white transition-colors">
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Feedback */}
      <div className="rounded-lg border border-black/8 dark:border-white/8 bg-white dark:bg-[#0F1010] p-4">
        <div className="flex items-start gap-2 mb-2">
          <ChatCircleIcon size={16} className="shrink-0 text-black/40 dark:text-white/35 mt-0.5" />
          <h3 className="text-[13px] font-semibold text-black dark:text-white">Share your feedback</h3>
        </div>
        <p className="text-[12px] text-black/50 dark:text-white/40 mb-3 leading-relaxed">
          Help us improve the new homepage by sharing your thoughts and suggestions.
        </p>
        <button className="text-[13px] font-medium text-blue-600 dark:text-blue-400 hover:underline">
          Leave feedback
        </button>
      </div>
    </aside>
  )
}
