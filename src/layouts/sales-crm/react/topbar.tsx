import {
  MagnifyingGlassIcon,
  ListIcon,
  PlusIcon,
} from '@phosphor-icons/react'

export function TopBar() {
  return (
    <div className="h-12 bg-white dark:bg-[#0a0a0a] border-b border-black/8 dark:border-white/8 flex items-center px-4 gap-3 shrink-0">
      {/* Search bar */}
      <div className="flex-1 max-w-md flex items-center gap-2 border border-black/10 dark:border-white/10 rounded-full px-3 py-1.5 bg-white dark:bg-white/5">
        <MagnifyingGlassIcon size={13} className="text-black/40 dark:text-white/30 shrink-0" />
        <input
          type="text"
          placeholder='Try searching "insights"'
          className="bg-transparent text-[12px] text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/30 outline-none w-full"
        />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right side */}
      <div className="flex items-center gap-2">
        <button className="w-7 h-7 flex items-center justify-center text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <ListIcon size={15} />
        </button>

        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 shrink-0" />

        <button className="w-7 h-7 rounded-full bg-[#f03e6e] text-white flex items-center justify-center hover:bg-[#d93460] transition-colors">
          <PlusIcon size={14} weight="bold" />
        </button>
      </div>
    </div>
  )
}
