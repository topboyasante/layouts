import {
  BellIcon,
  EnvelopeIcon,
  RocketLaunchIcon,
  UserIcon,
  CreditCardIcon,
  BookOpenIcon,
  SparkleIcon,
  ChartBarIcon,
  GlobeIcon,
  ArchiveIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  FolderIcon,
  CaretRightIcon,
} from '@phosphor-icons/react'

type NavItemProps = {
  icon: React.ReactNode
  label: string
  hasChildren?: boolean
}

function NavItem({ icon, label, hasChildren }: NavItemProps) {
  return (
    <button className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[13px] text-black/65 dark:text-white/55 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors text-left">
      <span className="shrink-0 text-black/40 dark:text-white/35">{icon}</span>
      <span className="flex-1">{label}</span>
      {hasChildren && <CaretRightIcon size={11} className="opacity-35 shrink-0" />}
    </button>
  )
}

type SectionProps = {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}

function Section({ icon, title, children }: SectionProps) {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 px-3 mb-1">
        <span className="text-black/35 dark:text-white/30">{icon}</span>
        <span className="text-[11px] font-semibold tracking-wider text-black/40 dark:text-white/35 uppercase">{title}</span>
      </div>
      {children}
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 border-r border-black/8 dark:border-white/8 bg-white dark:bg-[#0f0f0f] overflow-y-auto">
      <div className="px-2 pt-4 pb-6">
        {/* Top links */}
        <NavItem icon={<BellIcon size={14} />} label="Changelog" />
        <NavItem icon={<EnvelopeIcon size={14} />} label="Contact support" />

        <div className="my-3 border-t border-black/6 dark:border-white/6" />

        <Section icon={<RocketLaunchIcon size={13} />} title="Get Started">
          <NavItem icon={<RocketLaunchIcon size={14} />} label="Quickstart" hasChildren />
          <NavItem icon={<UserIcon size={14} />} label="Team members" hasChildren />
          <NavItem icon={<CreditCardIcon size={14} />} label="Billing & plans" hasChildren />
        </Section>

        <Section icon={<BookOpenIcon size={13} />} title="Guides">
          <NavItem icon={<SparkleIcon size={14} />} label="Writing with AI" hasChildren />
          <NavItem icon={<SparkleIcon size={14} />} label="Smart suggestions" hasChildren />
          <NavItem icon={<ChartBarIcon size={14} />} label="Analytics" hasChildren />
        </Section>

        <Section icon={<BookOpenIcon size={13} />} title="Configuration">
          <NavItem icon={<GlobeIcon size={14} />} label="Custom domains" hasChildren />
          <NavItem icon={<ArchiveIcon size={14} />} label="Content management" hasChildren />
          <NavItem icon={<PaintBrushIcon size={14} />} label="Appearance" hasChildren />
          <NavItem icon={<MagnifyingGlassIcon size={14} />} label="Search settings" hasChildren />
          <NavItem icon={<FolderIcon size={14} />} label="Collections" hasChildren />
        </Section>
      </div>
    </aside>
  )
}
