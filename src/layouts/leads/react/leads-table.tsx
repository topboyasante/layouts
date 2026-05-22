import { useState } from 'react'
import {
  MagnifyingGlassIcon,
  FunnelSimpleIcon,
  ArrowsDownUpIcon,
  SlidersHorizontalIcon,
  ListIcon,
  SquaresFourIcon,
  DownloadSimpleIcon,
  CheckIcon,
  DotsThreeIcon,
} from '@phosphor-icons/react'
import { ScoreBar } from './score-bar'

// ─── Tabs ───────────────────────────────────────────────────────────────────

const tabs = ['All', 'Favourite', 'New', 'Assigned to me', 'Overdue', 'Hot'] as const

// ─── Data ───────────────────────────────────────────────────────────────────

type Status = 'HOT' | 'OPEN' | 'NEW' | 'QUALIFIED' | 'IN PROGRESS' | 'PENDING'

type Row = {
  id: string
  name: string
  avatar: string
  company: string
  email: string
  status: Status
  manager: string
  source: string
  score: number
  date?: string
}

const rows: Row[] = [
  { id: 'r1', name: 'Emma Johansson', avatar: 'from-pink-300 to-rose-500', company: 'Nordic Soft AB', email: 'emma@nordicsoft.io', status: 'HOT', manager: 'Jacob Müller', source: 'Website', score: 9 },
  { id: 'r2', name: 'Ethan Wilson', avatar: 'from-sky-300 to-sky-500', company: 'Travel Ventures', email: 'ethan@travelventures.com', status: 'OPEN', manager: 'Olivia Davis', source: 'LinkedIn', score: 6 },
  { id: 'r3', name: 'Isabella Hernandez', avatar: 'from-violet-300 to-violet-500', company: 'Design Studios', email: 'isabella@designstudios.net', status: 'NEW', manager: 'Liam Johnson', source: 'X', score: 4 },
  { id: 'r4', name: 'William Lee', avatar: 'from-emerald-300 to-emerald-500', company: 'AI Dynamics', email: 'w.lee@aidynamics.com', status: 'HOT', manager: 'James Smith', source: 'Facebook', score: 7 },
  { id: 'r5', name: 'Sophia Martinez', avatar: 'from-amber-300 to-orange-500', company: 'EcoTech Solutions', email: 'sophia@ecotech.io', status: 'QUALIFIED', manager: 'Olivia Davis', source: 'Instagram', score: 6 },
  { id: 'r6', name: 'Ava Clark', avatar: 'from-fuchsia-300 to-fuchsia-500', company: 'Smart Homes Inc.', email: 'ava@smarthomes.com', status: 'IN PROGRESS', manager: 'Noah Garcia', source: 'Website', score: 3 },
  { id: 'r7', name: 'Lily Walker', avatar: 'from-teal-300 to-teal-500', company: 'Foodie Connect', email: 'walker@foodieconnect.com', status: 'NEW', manager: 'Zoe Lewis', source: 'Instagram', score: 6 },
  { id: 'r8', name: 'James Young', avatar: 'from-indigo-300 to-indigo-500', company: 'Fashion Trendz', email: 'j.young@fashiontrendz.com', status: 'PENDING', manager: 'Oliver Hall', source: 'LinkedIn', score: 5 },
  { id: 'r9', name: 'Mason Allen', avatar: 'from-lime-300 to-lime-600', company: 'Virtual Reality Co.', email: 'mason@vrco.io', status: 'QUALIFIED', manager: 'Emily King', source: 'Facebook', score: 9, date: 'Dec 01, 2025' },
  { id: 'r10', name: 'Jack Robinson', avatar: 'from-orange-300 to-red-500', company: 'Gaming Hub', email: 'jack@gaminghub.gg', status: 'OPEN', manager: 'Mia Brown', source: 'X', score: 7, date: 'Dec 01, 2025' },
  { id: 'r11', name: 'David Ramirez', avatar: 'from-slate-300 to-slate-500', company: 'IronGate Logistics', email: 'david@irongate.com', status: 'NEW', manager: 'Sarah Wilson', source: 'Referral', score: 4, date: 'Dec 01, 2025' },
]

const initialSelected = new Set(['r4', 'r7', 'r8'])

// ─── Component ──────────────────────────────────────────────────────────────

export function LeadsTable() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('All')
  const [selected, setSelected] = useState<Set<string>>(initialSelected)

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-[#0f0f0f]">
      {/* Tabs */}
      <div className="flex items-center gap-1 px-7 border-b border-black/[0.06] dark:border-white/[0.07] shrink-0">
        {tabs.map((tab) => {
          const isActive = activeTab === tab
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-3 py-3 text-[13px] transition-colors ${
                isActive
                  ? 'text-[#f97316] font-medium'
                  : 'text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white'
              }`}
            >
              {tab}
              {isActive && (
                <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-[#f97316] rounded-full" />
              )}
            </button>
          )
        })}
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 px-7 py-3 shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 h-9 w-[280px] rounded-lg bg-white dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.1]">
            <MagnifyingGlassIcon size={15} className="text-black/35 dark:text-white/35 shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 min-w-0 bg-transparent text-[13px] text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 focus:outline-none"
            />
          </div>
          <ToolbarBtn><FunnelSimpleIcon size={16} /></ToolbarBtn>
          <ToolbarBtn><ArrowsDownUpIcon size={16} /></ToolbarBtn>
          <ToolbarBtn><SlidersHorizontalIcon size={16} /></ToolbarBtn>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5 p-0.5 rounded-lg border border-black/[0.08] dark:border-white/[0.1]">
            <button className="w-7 h-7 flex items-center justify-center rounded-md bg-black/[0.05] dark:bg-white/[0.07] text-black/70 dark:text-white/70">
              <ListIcon size={14} />
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-md text-black/40 dark:text-white/40 hover:bg-black/[0.04] dark:hover:bg-white/[0.05]">
              <SquaresFourIcon size={14} />
            </button>
          </div>
          <button className="flex items-center gap-1.5 h-9 px-3 rounded-lg border border-black/[0.08] dark:border-white/[0.1] text-[13px] font-medium text-black/70 dark:text-white/70 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-colors">
            <DownloadSimpleIcon size={15} />
            Import
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto px-7 pb-8">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-black/40 dark:text-white/40 border-b border-black/[0.06] dark:border-white/[0.07]">
              <th className="w-9 py-3 text-left">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-[4px] border border-black/[0.15] dark:border-white/[0.18]" />
              </th>
              <th className="text-left font-medium text-[11px] tracking-wider py-3 pr-4">CUSTOMER</th>
              <th className="text-left font-medium text-[11px] tracking-wider py-3 pr-4">COMPANY</th>
              <th className="text-left font-medium text-[11px] tracking-wider py-3 pr-4">EMAIL</th>
              <th className="text-left font-medium text-[11px] tracking-wider py-3 pr-4">STATUS</th>
              <th className="text-left font-medium text-[11px] tracking-wider py-3 pr-4">MANAGER</th>
              <th className="text-left font-medium text-[11px] tracking-wider py-3 pr-4">SOURCE</th>
              <th className="text-left font-medium text-[11px] tracking-wider py-3 pr-4">SCORE</th>
              <th className="text-left font-medium text-[11px] tracking-wider py-3 pr-4">DATE</th>
              <th className="w-8" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const isSelected = selected.has(r.id)
              return (
                <tr
                  key={r.id}
                  className={`border-b border-black/[0.04] dark:border-white/[0.05] last:border-0 transition-colors ${
                    isSelected
                      ? 'bg-[#f97316]/[0.04]'
                      : 'hover:bg-black/[0.015] dark:hover:bg-white/[0.02]'
                  }`}
                >
                  <td className="py-2.5">
                    <button
                      onClick={() => toggle(r.id)}
                      className={`inline-flex items-center justify-center w-4 h-4 rounded-[4px] transition-colors ${
                        isSelected
                          ? 'bg-[#f97316] text-white'
                          : 'border border-black/[0.2] dark:border-white/[0.2] hover:border-black/40 dark:hover:border-white/40'
                      }`}
                    >
                      {isSelected && <CheckIcon size={11} weight="bold" />}
                    </button>
                  </td>
                  <td className="py-2.5 pr-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${r.avatar} shrink-0`} />
                      <span className="text-black dark:text-white whitespace-nowrap">{r.name}</span>
                    </div>
                  </td>
                  <td className="py-2.5 pr-4 text-black/65 dark:text-white/65 whitespace-nowrap">{r.company}</td>
                  <td className="py-2.5 pr-4 text-black/55 dark:text-white/55 whitespace-nowrap">{r.email}</td>
                  <td className="py-2.5 pr-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md border border-black/[0.1] dark:border-white/[0.12] text-[11px] font-medium tracking-wider text-black/55 dark:text-white/55">
                      {r.status}
                    </span>
                  </td>
                  <td className="py-2.5 pr-4 text-black/65 dark:text-white/65 whitespace-nowrap">{r.manager}</td>
                  <td className="py-2.5 pr-4 text-black/55 dark:text-white/55 whitespace-nowrap">{r.source}</td>
                  <td className="py-2.5 pr-4 whitespace-nowrap">
                    <ScoreBar score={r.score} />
                  </td>
                  <td className="py-2.5 pr-4 text-black/55 dark:text-white/55 whitespace-nowrap">{r.date ?? ''}</td>
                  <td className="py-2.5 text-right pr-1">
                    <button className="w-7 h-7 inline-flex items-center justify-center rounded-md text-black/35 dark:text-white/35 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-black/70 dark:hover:text-white/70 transition-colors">
                      <DotsThreeIcon size={16} weight="bold" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ToolbarBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/[0.1] text-black/55 dark:text-white/55 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] hover:text-black dark:hover:text-white transition-colors">
      {children}
    </button>
  )
}
