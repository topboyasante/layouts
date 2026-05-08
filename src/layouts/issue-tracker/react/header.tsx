import { BellIcon } from "@phosphor-icons/react"

export function Header() {
  return (
    <header className="shrink-0">
      <div className="flex items-center justify-between px-4 h-11 border-b border-black/6 dark:border-white/6">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-green-500 shrink-0" />
          <span className="text-sm font-medium text-black dark:text-white">AMS</span>
        </div>
        <button className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
          <BellIcon size={16} weight="duotone" />
        </button>
      </div>
    </header>
  )
}
