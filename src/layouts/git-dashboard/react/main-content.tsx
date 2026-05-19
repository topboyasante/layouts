import {
  CheckCircleIcon,
  CaretDownIcon,
  GitCommitIcon,
  ArrowsMergeIcon,
  GitMergeIcon,
} from '@phosphor-icons/react'

function MergeRequestIcon() {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="2.5" stroke="#8e8e93" strokeWidth="1.6" fill="none"/>
      <circle cx="4" cy="16" r="2.5" stroke="#8e8e93" strokeWidth="1.6" fill="none"/>
      <circle cx="18" cy="10" r="2.5" stroke="#8e8e93" strokeWidth="1.6" fill="none"/>
      <line x1="4" y1="6.5" x2="4" y2="13.5" stroke="#8e8e93" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M6.5 4 Q13 4 15.5 8" stroke="#8e8e93" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      <path d="M6.5 16 Q13 16 15.5 12" stroke="#8e8e93" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

function WorkItemIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="2.5" width="15" height="15" rx="2.5" stroke="#8e8e93" strokeWidth="1.6" fill="none"/>
      <polyline points="6,10 9,13 14,7" stroke="#8e8e93" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

const statCards = [
  { category: 'Merge requests', label: 'Waiting for your review', icon: <MergeRequestIcon />, count: 0 },
  { category: 'Merge requests', label: 'Assigned to you', icon: <MergeRequestIcon />, count: 0 },
  { category: 'Work items', label: 'Assigned to you', icon: <WorkItemIcon />, count: 0 },
  { category: 'Work items', label: 'Authored by you', icon: <WorkItemIcon />, count: 0 },
]

const activityItems = [
  {
    type: 'push',
    icon: <GitCommitIcon size={15} className="text-black/40 dark:text-white/35" />,
    text: <>Pushed to branch <span className="text-blue-600 dark:text-blue-400 font-medium">main</span> at <span className="text-blue-600 dark:text-blue-400">atlas / web-platform</span></>,
    sub: <><span className="text-blue-600 dark:text-blue-400 font-mono text-[11px]">a3f91b2c</span> · Merge branch 'develop' into 'main'</>,
    compare: <>… and 2 more commits. <span className="text-blue-600 dark:text-blue-400">Compare b12c3d4e...a3f91b2c</span></>,
    time: '2 hours ago',
  },
  {
    type: 'merge',
    icon: <ArrowsMergeIcon size={15} className="text-green-500" />,
    text: <>Accepted merge request <span className="text-blue-600 dark:text-blue-400">!83 "feat: user onboarding flow"</span> at <span className="text-blue-600 dark:text-blue-400">atlas / web-platform</span></>,
    time: '2 hours ago',
  },
  {
    type: 'open',
    icon: <GitMergeIcon size={15} className="text-blue-500" />,
    text: <>Opened merge request <span className="text-blue-600 dark:text-blue-400">!84 "fix: resolve auth token expiry"</span> at <span className="text-blue-600 dark:text-blue-400">atlas / web-platform</span></>,
    time: '3 hours ago',
  },
  {
    type: 'push',
    icon: <GitCommitIcon size={15} className="text-black/40 dark:text-white/35" />,
    text: <>Pushed to branch <span className="text-blue-600 dark:text-blue-400 font-medium">develop</span> at <span className="text-blue-600 dark:text-blue-400">nova / mobile-app</span></>,
    sub: <><span className="text-blue-600 dark:text-blue-400 font-mono text-[11px]">7e2d80fa</span> · Merge branch 'feature/payments' into 'develop'</>,
    compare: <>… and 1 more commit. <span className="text-blue-600 dark:text-blue-400">Compare 3c9a1f5b...7e2d80fa</span></>,
    time: '5 hours ago',
  },
  {
    type: 'merge',
    icon: <ArrowsMergeIcon size={15} className="text-green-500" />,
    text: <>Accepted merge request <span className="text-blue-600 dark:text-blue-400">!61 "chore: upgrade dependencies"</span> at <span className="text-blue-600 dark:text-blue-400">nova / mobile-app</span></>,
    time: '5 hours ago',
  },
]

export function MainContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#f8f8f8] dark:bg-[#070707]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 px-6 py-3 text-[12px] text-black/45 dark:text-white/35">
        <span>Your work</span>
        <span>/</span>
        <span className="text-black dark:text-white font-medium">Home</span>
      </div>

      <div className="px-6 pb-6 space-y-5">
        {/* Greeting */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
            <span className="text-lg font-bold text-white">NK</span>
          </div>
          <div>
            <p className="text-[12px] text-black/45 dark:text-white/40 mb-0.5">Today's highlights</p>
            <h1 className="text-[24px] font-bold text-black dark:text-white leading-tight">Hi, Nana K. Asante</h1>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {statCards.map((card, i) => (
            <div key={i} className="bg-black/8 dark:bg-white/8 rounded-2xl p-1.5">
              <div className="flex items-center justify-between px-1 pt-1 pb-2">
                <span className="text-[14px] font-medium text-black dark:text-white">{card.category}</span>
                {card.icon}
              </div>
              <div className="bg-white dark:bg-[#1c1c1e] rounded-xl px-4 py-3">
                <div className="text-[38px] font-bold text-black dark:text-white leading-none tracking-tight mb-1">{card.count}</div>
                <div className="text-[13px] text-black dark:text-white/80">{card.label}</div>
                <div className="text-[12px] text-black/40 dark:text-white/35 mt-0.5">Just now</div>
              </div>
            </div>
          ))}
        </div>

        {/* Attention items */}
        <div className="rounded-lg bg-white dark:bg-[#0F1010] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <h2 className="text-[14px] font-semibold text-black dark:text-white">Items that need your attention</h2>
            <button className="flex items-center gap-1.5 text-[12px] text-black/60 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-md px-3 py-1.5 hover:border-black/20 transition-colors">
              Everything <CaretDownIcon size={11} />
            </button>
          </div>
          <div className="px-5 py-5 flex items-center gap-3 border-t border-black/5 dark:border-white/5">
            <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center shrink-0">
              <CheckCircleIcon size={20} className="text-blue-500" weight="fill" />
            </div>
            <p className="text-[13px] text-black/70 dark:text-white/60">
              <span className="font-semibold text-black dark:text-white">Good job!</span> All your to-do items are done.
            </p>
          </div>
          <div className="px-5 pb-4">
            <button className="text-[13px] text-blue-600 dark:text-blue-400 hover:underline">All to-do items</button>
          </div>
        </div>

        {/* Activity feed */}
        <div className="rounded-lg bg-white dark:bg-[#0F1010] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <h2 className="text-[14px] font-semibold text-black dark:text-white">Follow the latest updates</h2>
            <button className="flex items-center gap-1.5 text-[12px] text-black/60 dark:text-white/50 border border-black/10 dark:border-white/10 rounded-md px-3 py-1.5 hover:border-black/20 transition-colors">
              Your activity <CaretDownIcon size={11} />
            </button>
          </div>
          <div className="divide-y divide-black/5 dark:divide-white/5 border-t border-black/5 dark:border-white/5">
            {activityItems.map((item, i) => (
              <div key={i} className="flex gap-3 px-5 py-4">
                <span className="shrink-0 mt-0.5">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[13px] text-black/70 dark:text-white/60 leading-relaxed">{item.text}</p>
                    <span className="shrink-0 text-[11px] text-black/35 dark:text-white/30 whitespace-nowrap">{item.time}</span>
                  </div>
                  {item.sub && <p className="text-[12px] text-black/50 dark:text-white/40 mt-0.5">{item.sub}</p>}
                  {item.compare && <p className="text-[12px] text-black/50 dark:text-white/40">{item.compare}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="px-5 py-3 border-t border-black/5 dark:border-white/5">
            <button className="text-[13px] text-blue-600 dark:text-blue-400 hover:underline">All activity</button>
          </div>
        </div>

      </div>
    </div>
  )
}
