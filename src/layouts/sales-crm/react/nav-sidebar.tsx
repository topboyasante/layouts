import {
  CaretDownIcon,
  StarIcon,
  ClockCounterClockwiseIcon,
  PlusIcon,
  LinkIcon,
} from '@phosphor-icons/react'

export function NavSidebar() {
  return (
    <div className="w-56 shrink-0 bg-white dark:bg-[#0a0a0a] border-r border-black/8 dark:border-white/8 flex flex-col overflow-y-auto text-[12px]">
      {/* Header */}
      <div className="flex items-center gap-1 px-3 py-3 text-[13px] font-semibold">
        <span>Codename.com</span>
        <CaretDownIcon size={12} className="text-black/40 dark:text-white/40" />
      </div>

      {/* Top links */}
      <div className="flex flex-col gap-0.5 px-1">
        <button className="flex items-center gap-2 px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
          <StarIcon size={13} />
          <span>Starred</span>
        </button>
        <button className="flex items-center gap-2 px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
          <ClockCounterClockwiseIcon size={13} />
          <span>Recent</span>
        </button>
        <button className="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full font-medium">
          Sales list
        </button>
        <button className="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
          Goals
        </button>
        <div className="flex items-center justify-between px-2 py-1 rounded-md">
          <span className="font-bold text-black dark:text-white">Dashboard</span>
          <button className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white">
            <PlusIcon size={12} />
          </button>
        </div>
      </div>

      {/* Tree section */}
      <div className="mt-2 px-1 flex flex-col gap-0.5">
        <button className="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
          Codename
        </button>
        <div>
          <button className="flex items-center gap-1 px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
            <span>Shared with me</span>
            <CaretDownIcon size={10} className="ml-auto" />
          </button>
          <div className="pl-4 flex flex-col gap-0.5 mt-0.5">
            <button className="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
              Cargo2go
            </button>
            <button className="flex items-center justify-between px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
              <span>Cloudz3r</span>
              <span className="bg-[#f03e6e] text-white rounded-full px-1.5 text-[10px] font-medium">2</span>
            </button>
            <button className="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
              Idioma
            </button>
            <button className="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
              Syllables
            </button>
            <button className="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
              x-0b
            </button>
          </div>
        </div>
      </div>

      {/* Reports section */}
      <div className="mt-3 px-1 flex flex-col gap-0.5">
        <div className="flex items-center justify-between px-2 py-1">
          <span className="text-[11px] font-semibold text-black/40 dark:text-white/30 uppercase tracking-wide">Reports</span>
          <button className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white">
            <PlusIcon size={12} />
          </button>
        </div>

        <div>
          <button className="flex items-center gap-1 px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
            <span>Share with me</span>
            <CaretDownIcon size={10} className="ml-auto" />
          </button>
          <div className="pl-4 flex flex-col gap-0.5 mt-0.5">
            <button className="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
              Deals by user
            </button>
            <button className="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
              Deal duration
            </button>
          </div>
        </div>

        <div>
          <button className="flex items-center gap-1 px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
            <span>My reports</span>
            <CaretDownIcon size={10} className="ml-auto" />
          </button>
          <div className="pl-4 flex flex-col gap-0.5 mt-0.5">
            <button className="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
              Emails received
            </button>
            <button className="flex items-center px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
              Deal duration
            </button>
            <button className="flex items-center px-2 py-1 text-[#f03e6e] font-medium rounded-md hover:bg-black/4 text-left w-full">
              New report
            </button>
            <button className="flex items-center justify-between px-2 py-1 text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white rounded-md hover:bg-black/4 text-left w-full">
              <span>Analytics</span>
              <span className="bg-black dark:bg-white text-white dark:text-black rounded-full px-1.5 text-[10px] font-medium">7</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-auto px-3 py-3 flex items-center gap-2 text-black/40 dark:text-white/30 text-[11px]">
        <LinkIcon size={12} />
        <span>Manage folders</span>
      </div>
    </div>
  )
}
