import {
  MagnifyingGlassIcon,
  SidebarSimpleIcon,
  HouseIcon,
  FileTextIcon,
  CubeIcon,
  MapPinIcon,
  UserIcon,
  GearSixIcon,
  BookOpenIcon,
  QuestionIcon,
  LightningIcon,
  DotsThreeIcon,
} from '@phosphor-icons/react'

type NavItem = {
  label: string
  icon: React.ElementType
  active?: boolean
}

type NavSection = {
  heading?: string
  items: NavItem[]
}

const sections: NavSection[] = [
  {
    items: [{ label: 'Dashboard', icon: HouseIcon, active: true }],
  },
  {
    heading: 'Work',
    items: [
      { label: 'Proposals', icon: FileTextIcon },
      { label: 'Products', icon: CubeIcon },
      { label: 'Locations', icon: MapPinIcon },
      { label: 'Customers', icon: UserIcon },
    ],
  },
  {
    heading: 'Others',
    items: [
      { label: 'Settings', icon: GearSixIcon },
      { label: 'Knowledge Base', icon: BookOpenIcon },
      { label: 'Support', icon: QuestionIcon },
    ],
  },
]

export function Sidebar() {
  return (
    <aside className="w-[260px] shrink-0 h-full flex flex-col bg-[#fbfbfc] dark:bg-[#0f0f0f]">
      {/* Logo + collapse */}
      <div className="flex items-center justify-between px-5 pt-5 pb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2563eb] text-white font-bold text-lg leading-none shadow-sm">
          R
        </div>
        <button className="text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 transition-colors">
          <SidebarSimpleIcon size={20} />
        </button>
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 px-3 h-10 rounded-xl bg-black/[0.035] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.06]">
          <MagnifyingGlassIcon size={16} className="text-black/35 dark:text-white/35 shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 min-w-0 bg-transparent text-sm text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 focus:outline-none"
          />
          <kbd className="flex items-center justify-center w-5 h-5 rounded-md bg-white dark:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.1] text-[11px] text-black/40 dark:text-white/40 shrink-0">
            /
          </kbd>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 flex flex-col gap-6 px-4 overflow-y-auto">
        {sections.map((section, si) => (
          <div key={si} className="flex flex-col gap-1">
            {section.heading && (
              <p className="px-2 mb-1 text-[13px] font-medium text-black/35 dark:text-white/35">
                {section.heading}
              </p>
            )}
            {section.items.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm transition-colors text-left ${
                    item.active
                      ? 'bg-white dark:bg-white/[0.06] border border-black/[0.07] dark:border-white/[0.08] shadow-sm font-medium text-black dark:text-white'
                      : 'text-black/55 dark:text-white/55 hover:bg-black/[0.035] dark:hover:bg-white/[0.05] hover:text-black dark:hover:text-white'
                  }`}
                >
                  <Icon
                    size={18}
                    weight={item.active ? 'fill' : 'regular'}
                    className={item.active ? 'text-[#2563eb]' : ''}
                  />
                  {item.label}
                </button>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-4 pt-4 pb-4 flex flex-col gap-3">
        {/* Get Started card */}
        <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#eef4ff] dark:bg-[#16213a] border border-[#2563eb]/15 dark:border-[#2563eb]/25">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-white/[0.08] shadow-sm shrink-0">
            <LightningIcon size={16} weight="fill" className="text-[#2563eb]" />
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-black dark:text-white">Get Started</p>
            <p className="text-[11px] leading-snug text-black/45 dark:text-white/45 mt-0.5">
              Completed you profile to makes better experience using Iron!
            </p>
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 px-1">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-semibold">JA</span>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-[13px] font-medium text-black dark:text-white truncate">Joshua Adams</span>
            <span className="text-[12px] text-black/40 dark:text-white/40 truncate">robin@jobs.com</span>
          </div>
          <button className="text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 transition-colors">
            <DotsThreeIcon size={20} weight="bold" />
          </button>
        </div>
      </div>
    </aside>
  )
}
