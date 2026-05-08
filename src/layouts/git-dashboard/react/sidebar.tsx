import { useState } from 'react'
import {
  HouseIcon,
  FolderIcon,
  UsersThreeIcon,
  CheckSquareIcon,
  GitMergeIcon,
  ListChecksIcon,
  DiamondIcon,
  CodeIcon,
  ActivityIcon,
  ClockCounterClockwiseIcon,
  DesktopIcon,
  GlobeIcon,
  GearIcon,
  ShieldIcon,
  SparkleIcon,
  QuestionIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from '@phosphor-icons/react'

type NavItemProps = {
  icon: React.ReactNode
  label: string
  active?: boolean
  hasChildren?: boolean
}

function NavItem({ icon, label, active = false, hasChildren }: NavItemProps) {
  return (
    <button
      className={`w-full flex items-center gap-2.5 px-3 py-1.5 text-[13px] rounded-md transition-colors text-left ${
        active
          ? 'bg-[#6b6cce] dark:bg-[#5b5cc0] text-white font-medium'
          : 'text-[#3c3c43] dark:text-white/65 hover:bg-black/6 dark:hover:bg-white/6 hover:text-black dark:hover:text-white'
      }`}
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex-1">{label}</span>
      {hasChildren && <CaretRightIcon size={11} className={active ? 'text-white/70' : 'opacity-35'} />}
    </button>
  )
}

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  if (collapsed) {
    return (
      <aside className="hidden md:flex flex-col w-12 shrink-0 bg-[#ebebf0] dark:bg-[#1c1c1e] items-center py-4">
        <button onClick={() => setCollapsed(false)} className="p-2 rounded-md text-black/40 dark:text-white/40 hover:bg-black/8 dark:hover:bg-white/8">
          <CaretRightIcon size={14} />
        </button>
      </aside>
    )
  }

  return (
    <aside className="hidden md:flex flex-col w-52 shrink-0 bg-[#ebebf0] dark:bg-[#1c1c1e]">
      <div className="px-3 pt-4 pb-2">
        <p className="text-[13px] font-semibold text-black dark:text-white">Your work</p>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 space-y-0.5">
        <NavItem icon={<HouseIcon size={15} />} label="Home" active />
        <NavItem icon={<FolderIcon size={15} />} label="Projects" />
        <NavItem icon={<UsersThreeIcon size={15} />} label="Groups" />
        <NavItem icon={<CheckSquareIcon size={15} />} label="Work items" />
        <NavItem icon={<GitMergeIcon size={15} />} label="Merge requests" />
        <NavItem icon={<ListChecksIcon size={15} />} label="To-Do List" />
        <NavItem icon={<DiamondIcon size={15} />} label="Milestones" />
        <NavItem icon={<CodeIcon size={15} />} label="Snippets" />
        <NavItem icon={<ActivityIcon size={15} />} label="Activity" />
        <NavItem icon={<ClockCounterClockwiseIcon size={15} />} label="Import history" />
        <NavItem icon={<DesktopIcon size={15} />} label="Workspaces" />
        <NavItem icon={<GlobeIcon size={15} />} label="Environments" />
        <NavItem icon={<GearIcon size={15} />} label="Operations" />
        <NavItem icon={<ShieldIcon size={15} />} label="Security" hasChildren />
      </nav>

      <div className="px-2 py-3 space-y-0.5">
        <NavItem icon={<SparkleIcon size={15} />} label="What's new" />
        <NavItem icon={<QuestionIcon size={15} />} label="Help" />
        <button
          onClick={() => setCollapsed(true)}
          className="w-full flex items-center gap-2 px-3 py-1.5 text-[13px] text-[#3c3c43] dark:text-white/50 hover:bg-black/6 dark:hover:bg-white/6 hover:text-black dark:hover:text-white rounded-md transition-colors"
        >
          <CaretLeftIcon size={13} />
          Collapse sidebar
        </button>
      </div>
    </aside>
  )
}
