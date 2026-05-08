import {
  ArrowFatLinesUpIcon,
  PaperPlaneTiltIcon,
  ArrowBendDownLeftIcon,
  ClockIcon,
  DotsThreeIcon,
} from '@phosphor-icons/react'

const quickActionItems = [
  { icon: ArrowFatLinesUpIcon, label: 'Top up' },
  { icon: PaperPlaneTiltIcon, label: 'Send' },
  { icon: ArrowBendDownLeftIcon, label: 'Request' },
  { icon: ClockIcon, label: 'History' },
  { icon: DotsThreeIcon, label: 'More' },
]

const quickPayContacts = [
  { name: 'Davis', color: 'bg-blue-400', initials: 'D' },
  { name: 'Elli', color: 'bg-pink-400', initials: 'E' },
  { name: 'Leo', color: 'bg-green-400', initials: 'L' },
  { name: 'Amanda', color: 'bg-purple-400', initials: 'A' },
  { name: 'Ann', color: 'bg-orange-400', initials: 'An' },
  { name: 'Sin', color: 'bg-teal-400', initials: 'S' },
]

const transactions = [
  {
    id: 1,
    initials: 'TD',
    bgColor: 'bg-blue-500',
    name: 'Dividend payout',
    date: '25 Feb 2025',
    amount: '+$1,100',
    amountColor: 'text-green-600',
    status: 'Completed',
    statusColor: 'text-green-500',
  },
  {
    id: 2,
    initials: 'CS',
    bgColor: 'bg-purple-500',
    name: 'Corporate subscriptions',
    date: '25 Feb 2025',
    amount: '−$6,400',
    amountColor: 'text-black dark:text-white',
    status: 'Declined',
    statusColor: 'text-red-400',
  },
  {
    id: 3,
    initials: 'V',
    bgColor: 'bg-black dark:bg-white/20',
    name: 'Investment in ETF',
    date: '21 Feb 2025',
    amount: '−$900',
    amountColor: 'text-black dark:text-white',
    status: 'Completed',
    statusColor: 'text-green-500',
  },
  {
    id: 4,
    initials: 'CNX',
    bgColor: 'bg-teal-500',
    name: 'Consulting services',
    date: '21 Feb 2025',
    amount: '−$2,100',
    amountColor: 'text-black dark:text-white',
    status: 'Completed',
    statusColor: 'text-green-500',
  },
  {
    id: 5,
    initials: 'A',
    bgColor: 'bg-orange-500',
    name: 'Equipment purchase',
    date: '10 Feb 2025',
    amount: '−$1,700',
    amountColor: 'text-black dark:text-white',
    status: 'Completed',
    statusColor: 'text-green-500',
  },
  {
    id: 6,
    initials: 'EH',
    bgColor: 'bg-gradient-to-br from-pink-400 to-rose-500',
    name: 'Elli Harper',
    date: '15 Feb 2025',
    amount: '+$600',
    amountColor: 'text-green-600',
    status: 'Completed',
    statusColor: 'text-green-500',
  },
  {
    id: 7,
    initials: 'DR',
    bgColor: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    name: 'Davis Rowen',
    date: '15 Feb 2025',
    amount: '+$800',
    amountColor: 'text-green-600',
    status: 'Completed',
    statusColor: 'text-green-500',
  },
]

export function RightPanel() {
  return (
    <aside className="w-80 shrink-0 bg-white dark:bg-[#111] border-l border-black/[0.08] dark:border-white/[0.08] overflow-y-auto p-4 flex flex-col gap-5">
      {/* My card section */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-semibold text-[14px] text-black dark:text-white">My card</p>
            <p className="text-[11px] text-black/40 dark:text-white/40">Quick actions</p>
          </div>
          <button className="text-[12px] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
            + Add card
          </button>
        </div>

        {/* Cards carousel */}
        <div className="flex overflow-x-auto gap-0 pb-1 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {/* Debit card */}
          <div className="w-40 h-24 rounded-2xl bg-gradient-to-br from-[#c5e840] to-[#5a9e3a] p-3 shrink-0 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] text-black/70 font-medium">Debit card</span>
              <span className="text-[11px] font-bold text-black/80 italic">VISA</span>
            </div>
            <div>
              <div className="w-6 h-4 rounded bg-white/30 mb-1.5" />
              <p className="text-[10px] font-mono text-black/80">**** **** **** 7890</p>
              <div className="flex justify-between mt-0.5">
                <span className="text-[9px] text-black/60">Michael Johnson</span>
                <span className="text-[9px] text-black/60">01/30</span>
              </div>
            </div>
          </div>

          {/* Credit card */}
          <div className="w-40 h-24 rounded-2xl bg-[#e5e7eb] dark:bg-white/10 p-3 shrink-0 ml-2 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] text-black/50 font-medium">Credit card</span>
              <span className="text-[11px] font-bold text-black/40 italic">MC</span>
            </div>
            <div>
              <div className="w-6 h-4 rounded bg-black/10 mb-1.5" />
              <p className="text-[10px] font-mono text-black/50">**** **** **** 4521</p>
              <div className="flex justify-between mt-0.5">
                <span className="text-[9px] text-black/40">Michael Johnson</span>
                <span className="text-[9px] text-black/40">05/28</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-5 gap-1">
        {quickActionItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.label}
              className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-[10px] text-black/60 dark:text-white/60 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-black/[0.05] dark:bg-white/[0.05] flex items-center justify-center">
                <Icon size={15} weight="regular" />
              </div>
              {item.label}
            </button>
          )
        })}
      </div>

      {/* Quick payment */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold text-[13px] text-black dark:text-white">Quick payment</p>
          <button className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
            <DotsThreeIcon size={16} />
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {quickPayContacts.map((contact) => (
            <div key={contact.name} className="flex flex-col items-center shrink-0">
              <div className={`w-9 h-9 rounded-full ${contact.color} flex items-center justify-center text-white text-[12px] font-semibold`}>
                {contact.initials}
              </div>
              <span className="text-[10px] text-black/50 dark:text-white/50 text-center mt-1">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction history */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-[13px] text-black dark:text-white">Transaction history</p>
          <button className="text-[11px] border border-black/10 dark:border-white/10 rounded px-1.5 py-0.5 text-black/50 dark:text-white/50 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors">
            7d ▾
          </button>
        </div>

        {/* Column headers */}
        <div className="flex justify-between mb-1">
          <span className="text-[11px] text-black/40 dark:text-white/40">↕ Name</span>
          <span className="text-[11px] text-black/40 dark:text-white/40">Amount</span>
        </div>

        {/* Transaction rows */}
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center gap-2 py-2 border-t border-black/[0.05] dark:border-white/[0.05]">
            <div className={`w-8 h-8 rounded-full ${tx.bgColor} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
              {tx.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-medium text-black dark:text-white truncate">{tx.name}</p>
              <p className="text-[10px] text-black/40 dark:text-white/40">{tx.date}</p>
            </div>
            <div className="text-right shrink-0">
              <p className={`text-[12px] font-semibold ${tx.amountColor}`}>{tx.amount}</p>
              <p className={`text-[10px] ${tx.statusColor}`}>{tx.status}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
