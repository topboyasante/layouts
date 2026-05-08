import {
  MagnifyingGlassIcon,
  PlusIcon,
  CopyIcon,
  GitMergeIcon,
  CheckSquareIcon,
} from '@phosphor-icons/react'

export function TopBar() {
  return (
    <header className="shrink-0 flex items-center gap-3 px-4 h-12 bg-[#ebebf0] dark:bg-[#1c1c1e]">
      {/* Logo */}
      <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
        <span className="text-white text-[11px] font-black">G</span>
      </div>

      {/* Search — centered */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-2 w-full max-w-sm px-3 py-1.5 rounded-md border border-black/15 dark:border-white/12 bg-white dark:bg-white/8 text-black/40 dark:text-white/35 cursor-text">
          <MagnifyingGlassIcon size={14} className="shrink-0" />
          <span className="flex-1 text-[13px]">Search or go to...</span>
          <kbd className="text-[11px] px-1.5 py-0.5 rounded border border-black/15 dark:border-white/12 bg-black/5 dark:bg-white/8 font-mono">/</kbd>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <button className="p-1.5 rounded-md text-black/50 dark:text-white/45 hover:bg-black/8 dark:hover:bg-white/8 hover:text-black dark:hover:text-white transition-colors">
          <PlusIcon size={16} weight="bold" />
        </button>
        {[
          { icon: <CopyIcon size={15} />, count: 0 },
          { icon: <GitMergeIcon size={15} />, count: 0 },
          { icon: <CheckSquareIcon size={15} />, count: 0 },
        ].map(({ icon, count }, i) => (
          <button key={i} className="flex items-center gap-1 px-2 py-1.5 rounded-md text-black/50 dark:text-white/45 hover:bg-black/8 dark:hover:bg-white/8 hover:text-black dark:hover:text-white transition-colors text-[12px]">
            {icon}
            <span>{count}</span>
          </button>
        ))}
        {/* Avatar — solid color */}
        <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center ml-1 cursor-pointer shrink-0">
          <span className="text-[10px] font-bold text-white">NK</span>
        </div>
      </div>
    </header>
  )
}
