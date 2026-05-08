import {
  House,
  CreditCard,
  ArrowsLeftRight,
  Receipt,
  BookOpen,
  ArrowBendUpLeft,
  Buildings,
  ChartBar,
  PiggyBank,
  Gear,
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
    items: [
      { label: 'Home', icon: House, active: true },
      { label: 'Cards', icon: CreditCard },
      { label: 'Transactions', icon: ArrowsLeftRight },
      { label: 'Bill Pay', icon: Receipt },
    ],
  },
  {
    heading: 'Manage',
    items: [
      { label: 'Accounting', icon: BookOpen },
      { label: 'Reimbursements', icon: ArrowBendUpLeft },
      { label: 'Vendors', icon: Buildings },
    ],
  },
  {
    heading: 'Insights',
    items: [
      { label: 'Reporting', icon: ChartBar },
      { label: 'Savings', icon: PiggyBank },
    ],
  },
]

export function Sidebar() {
  return (
    <aside className="w-52 h-screen flex flex-col bg-[#0f1117] shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5">
        <span className="text-[#c8f53a] text-lg leading-none">◈</span>
        <span className="text-white font-semibold text-base tracking-tight">Apex</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 flex flex-col gap-5 px-2 overflow-y-auto">
        {sections.map((section, si) => (
          <div key={si} className="flex flex-col gap-0.5">
            {section.heading && (
              <p className="px-2 mb-1 text-[11px] font-semibold uppercase tracking-widest text-white/25">
                {section.heading}
              </p>
            )}
            {section.items.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  className={`flex items-center gap-2.5 w-full px-2 py-2 rounded-md text-sm font-medium transition-colors text-left ${
                    item.active
                      ? 'bg-white/[0.08] text-white'
                      : 'text-white/50 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <Icon size={16} weight={item.active ? 'fill' : 'regular'} />
                  {item.label}
                </button>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-2 pb-4 flex flex-col gap-1">
        <button className="flex items-center gap-2.5 w-full px-2 py-2 rounded-md text-sm font-medium text-white/50 hover:text-white hover:bg-white/[0.05] transition-colors">
          <Gear size={16} />
          Settings
        </button>
        <div className="flex items-center gap-2.5 px-2 py-2">
          <div className="w-7 h-7 rounded-full bg-neutral-600 flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-semibold">JD</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-white text-xs font-medium truncate">Jane Doe</span>
            <span className="text-white/40 text-[11px] truncate">Admin</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
