import { BellIcon } from '@phosphor-icons/react'

export function TopBar() {
  return (
    <header className="h-14 flex items-center justify-between px-6 bg-white dark:bg-[#0f1117] border-b border-black/[0.08] dark:border-white/[0.08] shrink-0">
      {/* Left: page title */}
      <h1 className="text-base font-semibold text-black dark:text-white">Overview</h1>

      {/* Right: actions */}
      <div className="flex items-center gap-3">
        {/* Date range pill */}
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/[0.1] dark:border-white/[0.12] bg-white dark:bg-white/[0.05] text-sm font-medium text-black/70 dark:text-white/70 hover:bg-black/[0.03] dark:hover:bg-white/[0.08] transition-colors">
          Mar 1 – Mar 24
        </button>

        {/* Bell with badge */}
        <button className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors text-black/60 dark:text-white/60">
          <BellIcon size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#c8f53a] border-2 border-white dark:border-[#0f1117]" />
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-neutral-500 flex items-center justify-center cursor-pointer">
          <span className="text-white text-xs font-semibold">JD</span>
        </div>
      </div>
    </header>
  )
}
