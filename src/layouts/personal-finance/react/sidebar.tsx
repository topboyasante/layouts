import { useState } from 'react'
import {
  SquaresFourIcon,
  UserIcon,
  ArrowsLeftRightIcon,
  WaveSineIcon,
  WalletIcon,
  TrendUpIcon,
  BookOpenIcon,
  HeadsetIcon,
  CaretRightIcon,
  CaretLeftIcon,
  LightningIcon,
  XIcon,
} from '@phosphor-icons/react'

const navItems = [
  { icon: SquaresFourIcon, label: 'Dashboard', active: true },
  { icon: UserIcon, label: 'Accounts', active: false },
  { icon: ArrowsLeftRightIcon, label: 'Transactions', active: false, expandable: true },
  { icon: WaveSineIcon, label: 'Cash flow', active: false },
  { icon: WalletIcon, label: 'Budget', active: false },
  { icon: TrendUpIcon, label: 'Investments', active: false },
]

const bottomNavItems = [
  { icon: BookOpenIcon, label: 'Learning center' },
  { icon: HeadsetIcon, label: 'Support' },
]

export function Sidebar() {
  const [transactionsOpen, setTransactionsOpen] = useState(false)
  const [proCardVisible, setProCardVisible] = useState(true)

  return (
    <aside className="w-56 shrink-0 bg-white dark:bg-[#111] border-r border-black/[0.08] dark:border-white/[0.08] flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-5">
        <span className="text-[18px] font-bold text-black dark:text-white tracking-tight">ACRU</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 flex flex-col gap-0.5 px-0">
        {navItems.map((item) => {
          const Icon = item.icon
          if (item.expandable) {
            return (
              <div key={item.label}>
                <button
                  onClick={() => setTransactionsOpen(!transactionsOpen)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-[13px] rounded-lg mx-2 transition-colors
                    ${item.active
                      ? 'bg-black/[0.04] dark:bg-white/[0.06] text-black dark:text-white font-medium'
                      : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
                    }`}
                  style={{ width: 'calc(100% - 16px)' }}
                >
                  <Icon size={16} weight="regular" />
                  <span className="flex-1 text-left">{item.label}</span>
                  <CaretRightIcon
                    size={12}
                    className={`transition-transform ${transactionsOpen ? 'rotate-90' : ''}`}
                  />
                </button>
                {transactionsOpen && (
                  <div className="flex flex-col mt-0.5">
                    <a href="#" className="pl-10 pr-4 py-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white flex items-center gap-2">
                      History
                      <span className="ml-auto bg-[#c5e840] text-black text-[10px] font-semibold rounded-full px-1.5 py-0.5 leading-none">19</span>
                    </a>
                    <a href="#" className="pl-10 pr-4 py-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white">
                      Integration
                    </a>
                    <a href="#" className="pl-10 pr-4 py-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white">
                      Reports
                    </a>
                  </div>
                )}
              </div>
            )
          }
          return (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-4 py-2 text-[13px] rounded-lg mx-2 transition-colors
                ${item.active
                  ? 'bg-black/[0.04] dark:bg-white/[0.06] text-black dark:text-white font-medium'
                  : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
                }`}
            >
              <Icon size={16} weight="regular" />
              <span>{item.label}</span>
            </a>
          )
        })}

        {/* Divider */}
        <div className="my-2 mx-4 border-t border-black/[0.06] dark:border-white/[0.06]" />

        {bottomNavItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-[13px] rounded-lg mx-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
            >
              <Icon size={16} weight="regular" />
              <span>{item.label}</span>
            </a>
          )
        })}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto">
        {proCardVisible && (
          <div className="bg-black dark:bg-white/10 rounded-2xl p-4 mx-3 mb-3 relative">
            <button
              onClick={() => setProCardVisible(false)}
              className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors"
            >
              <XIcon size={14} />
            </button>
            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center mb-2">
              <LightningIcon size={16} weight="fill" className="text-[#c5e840]" />
            </div>
            <p className="text-white text-[13px] font-semibold leading-tight">Upgrade to Pro!</p>
            <p className="text-white/60 text-[12px] mt-1 leading-snug">Full financial insights with analytics and graphs.</p>
            <button className="bg-[#c5e840] text-black text-[12px] font-semibold rounded-xl px-4 py-2 w-full mt-3 hover:bg-[#d4f053] transition-colors">
              Upgrade now
            </button>
          </div>
        )}
        <button className="flex items-center gap-2 text-[12px] text-black/40 dark:text-white/40 px-4 py-3 hover:text-black dark:hover:text-white transition-colors w-full">
          <CaretLeftIcon size={14} />
          Collapse sidebar
        </button>
      </div>
    </aside>
  )
}
