import { useState } from 'react'
import {
  SquaresFourIcon,
  BellIcon,
  BookOpenIcon,
  ChartBarIcon,
  ArrowsLeftRightIcon,
  CubeIcon,
  ScalesIcon,
  FileTextIcon,
  WalletIcon,
  BuildingsIcon,
  GearSixIcon,
  CaretDownIcon,
  CaretRightIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  CaretUpDownIcon,
} from '@phosphor-icons/react'

type TreeItemProps = {
  icon?: React.ReactNode
  label: string
  active?: boolean
  badge?: number
  children?: React.ReactNode
  defaultOpen?: boolean
}

function TreeItem({ icon, label, active = false, badge, children, defaultOpen = false }: TreeItemProps) {
  const [open, setOpen] = useState(defaultOpen)
  const hasChildren = Boolean(children)

  return (
    <div>
      <button
        onClick={() => hasChildren && setOpen(!open)}
        className={`w-full flex items-center gap-1.5 px-2 py-1.25 rounded-md text-[13px] transition-colors text-left group ${
          active
            ? 'text-black dark:text-white font-semibold'
            : 'text-black/65 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
        }`}
      >
        {hasChildren ? (
          open
            ? <CaretDownIcon size={11} className="shrink-0 text-black/30 dark:text-white/30" />
            : <CaretRightIcon size={11} className="shrink-0 text-black/30 dark:text-white/30" />
        ) : (
          <span className="w-2.75 shrink-0" />
        )}
        {icon && <span className="shrink-0 text-black/40 dark:text-white/30">{icon}</span>}
        <span className="flex-1 truncate">{label}</span>
        {badge !== undefined && (
          <span className="ml-auto shrink-0 min-w-4.5 h-4.5 px-1 rounded-full bg-orange-500 text-white text-[10px] font-medium flex items-center justify-center">
            {badge}
          </span>
        )}
      </button>
      {hasChildren && open && (
        <div className="mt-0.5 ml-3">{children}</div>
      )}
    </div>
  )
}

function SubItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`w-full flex items-center gap-2 pl-4 pr-2 py-1.25 rounded-md text-[13px] transition-colors text-left ${
        active
          ? 'text-black dark:text-white font-semibold'
          : 'text-black/55 dark:text-white/40 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
      }`}
    >
      <span className="w-1 h-1 rounded-full bg-current opacity-40 shrink-0" />
      {label}
    </button>
  )
}

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 text-black dark:text-white">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-3">
        <div className="w-6 h-6 rounded-md bg-[#FF3B30] flex items-center justify-center shrink-0">
          <span className="text-[9px] font-bold text-white leading-none">MZ</span>
        </div>
        <span className="text-[13px] font-semibold truncate flex-1">Monzo</span>
        <CaretUpDownIcon size={13} className="shrink-0 text-black/30 dark:text-white/30" />
      </div>

      {/* Search */}
      <div className="px-3 py-2 ">
        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/30">
          <MagnifyingGlassIcon size={13} className="shrink-0" />
          <span className="text-[12px]">Search...</span>
        </div>
      </div>

      {/* Create button */}
      <div className="px-3 py-2 ">
        <button className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-md bg-[#FF3B30] hover:bg-[#e02e24] text-white text-[13px] font-medium transition-colors">
          <PlusIcon size={13} weight="bold" />
          Create new
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-4">
        {/* Top-level */}
        <div className="space-y-0.5">
          <TreeItem icon={<SquaresFourIcon size={14} />} label="Dashboard" />
          <TreeItem icon={<BellIcon size={14} />} label="Updates" badge={3} />
        </div>

        {/* Tools */}
        <div>
          <p className="px-2 mb-1 text-[10px] font-semibold uppercase tracking-widest text-black/30 dark:text-white/25">
            Tools
          </p>
          <div className="space-y-0.5">
            <TreeItem icon={<BookOpenIcon size={14} />} label="Accounting" defaultOpen>
              <SubItem label="Sales" />
              <SubItem label="Purchases" />
            </TreeItem>
            <TreeItem icon={<ChartBarIcon size={14} />} label="Chart of Accounts" defaultOpen>
              <SubItem label="Chart of Account" />
            </TreeItem>
            <TreeItem icon={<ArrowsLeftRightIcon size={14} />} label="Transactions" defaultOpen>
              <SubItem label="General Journal" />
            </TreeItem>
            <TreeItem icon={<CubeIcon size={14} />} label="Products & Services" />
            <TreeItem icon={<ScalesIcon size={14} />} label="Taxes & Compliance" />
            <TreeItem icon={<FileTextIcon size={14} />} label="Reports" defaultOpen>
              <SubItem label="Generate Report" active />
              <SubItem label="Saved Reports" />
            </TreeItem>
            <TreeItem icon={<WalletIcon size={14} />} label="Budget management" />
            <TreeItem icon={<BuildingsIcon size={14} />} label="Organisation" />
          </div>
        </div>

        {/* More */}
        <div>
          <p className="px-2 mb-1 text-[10px] font-semibold uppercase tracking-widest text-black/30 dark:text-white/25">
            More
          </p>
          <div className="space-y-0.5">
            <TreeItem icon={<GearSixIcon size={14} />} label="Settings" />
          </div>
        </div>
      </nav>
    </aside>
  )
}
