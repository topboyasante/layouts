import { FunnelIcon, SlidersHorizontalIcon, ColumnsIcon } from "@phosphor-icons/react"
import { Header } from "./header"

export function MainContent() {
  return (
    <div className="flex-1 flex flex-col min-h-0 md:rounded-lg bg-white dark:bg-[#0F1010] border border-black/6 dark:border-white/6">
      <Header />
      <div className="shrink-0 flex items-center justify-between px-4 h-10 border-b border-black/6 dark:border-white/6">
        <div className="flex items-center gap-1">
          {["All issues", "Active", "Backlog"].map((tab) => (
            <button
              key={tab}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                tab === "Active"
                  ? "bg-black/8 dark:bg-white/10 text-black dark:text-white"
                  : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="ml-1 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
            <span className="text-sm">+</span>
          </button>
        </div>
        <div className="flex items-center gap-1">
          {[FunnelIcon, SlidersHorizontalIcon, ColumnsIcon].map((Icon, i) => (
            <button
              key={i}
              className="p-1.5 rounded text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <Icon size={15} weight="duotone" />
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {/* Content */}
      </div>
    </div>
  )
}
