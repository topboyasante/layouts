import { useState } from 'react'
import {
  TrayIcon,
  UserIcon,
  SquaresFourIcon,
  StackIcon,
  DotsThreeIcon,
  CircleDashedIcon,
  ArrowsClockwiseIcon,
  DownloadSimpleIcon,
  CaretDownIcon,
  CaretRightIcon,
  QuestionIcon,
} from '@phosphor-icons/react'

type NavItemProps = {
  icon: React.ReactNode
  label: string
  active?: boolean
  indent?: boolean
}

function NavItem({ icon, label, active = false, indent = false }: NavItemProps) {
  return (
    <button
      className={`w-full flex items-center gap-2 px-2 py-1 rounded-md text-[13px] transition-colors text-left ${
        indent ? 'pl-6' : ''
      } ${
        active
          ? 'bg-black/8 dark:bg-white/8 text-black dark:text-white'
          : 'text-black/60 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
      }`}
    >
      <span className="shrink-0 opacity-70">{icon}</span>
      {label}
    </button>
  )
}

type SectionProps = {
  label: string
  children: React.ReactNode
  defaultOpen?: boolean
}

function Section({ label, children, defaultOpen = true }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-black/35 dark:text-white/30 hover:text-black/60 dark:hover:text-white/50 transition-colors uppercase tracking-wide"
      >
        {open
          ? <CaretDownIcon size={10} weight="bold" />
          : <CaretRightIcon size={10} weight="bold" />
        }
        {label}
      </button>
      {open && <div className="mt-0.5">{children}</div>}
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 text-black dark:text-white">
      {/* Workspace header */}
      <div className="flex items-center gap-2 px-3 py-3">
        <div className="w-5 h-5 rounded bg-violet-500 flex items-center justify-center shrink-0">
          <span className="text-[9px] font-bold text-white leading-none">GO</span>
        </div>
        <span className="text-[13px] font-medium truncate flex-1">Google</span>
        <CaretDownIcon size={12} className="shrink-0 opacity-40" />
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-3">
        {/* Top-level */}
        <div className="space-y-0.5">
          <NavItem icon={<TrayIcon size={14} />} label="Inbox" />
          <NavItem icon={<UserIcon size={14} />} label="My issues" active />
        </div>

        {/* Workspace */}
        <Section label="Workspace">
          <div className="space-y-0.5">
            <NavItem icon={<SquaresFourIcon size={14} />} label="Projects" />
            <NavItem icon={<StackIcon size={14} />} label="Views" />
            <NavItem icon={<DotsThreeIcon size={14} />} label="More" />
          </div>
        </Section>

        {/* Your teams */}
        <Section label="Your teams">
          <TeamSection />
        </Section>

        {/* Try */}
        <Section label="Try" defaultOpen={false}>
          <div className="space-y-0.5">
            <NavItem icon={<DownloadSimpleIcon size={14} />} label="Import issues" />
            <NavItem icon={<ArrowsClockwiseIcon size={14} />} label="Cycles" />
          </div>
        </Section>
      </nav>

      {/* Footer */}
      <div className="flex items-center gap-2 px-3 py-2">
        <button className="flex items-center justify-center w-6 h-6 rounded text-black/40 dark:text-white/40 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors">
          <QuestionIcon size={14} />
        </button>
        <button className="ml-auto text-[11px] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors px-2 py-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5">
          Free plan
        </button>
      </div>
    </aside>
  )
}

function TeamSection() {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-2 py-1 rounded-md text-[13px] text-black/60 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors"
      >
        <div className="w-3.5 h-3.5 rounded-sm bg-violet-500/80 shrink-0" />
        <span className="flex-1 text-left">Google</span>
        {open
          ? <CaretDownIcon size={10} className="shrink-0" />
          : <CaretRightIcon size={10} className="shrink-0" />
        }
      </button>
      {open && (
        <div className="mt-0.5 space-y-0.5">
          <NavItem icon={<CircleDashedIcon size={14} />} label="Issues" indent />
          <NavItem icon={<SquaresFourIcon size={14} />} label="Projects" indent />
          <NavItem icon={<StackIcon size={14} />} label="Views" indent />
        </div>
      )}
    </div>
  )
}
