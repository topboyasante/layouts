import { useState } from 'react'
import {
  DotsSixVerticalIcon,
  ArrowSquareOutIcon,
  XIcon,
  BuildingsIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  PhoneCallIcon,
  PencilSimpleIcon,
  PaperclipIcon,
  MicrophoneIcon,
  AtIcon,
  SmileyIcon,
  PaperPlaneTiltIcon,
  DotsThreeIcon,
  ChecksIcon,
} from '@phosphor-icons/react'

const tabs = ['Activity', 'Notes', 'Deals', 'Docs'] as const

type Comment = {
  author: string
  when: string
  text: string
  reactions: { emoji: string; count: number }[]
}

const comments: Comment[] = [
  {
    author: 'Jacob Müller',
    when: '15 mins ago',
    text: "Got it. I'll send the update after my meeting this afternoon.",
    reactions: [{ emoji: '👍', count: 1 }],
  },
  {
    author: 'Aiden Hudson',
    when: 'Yesterday',
    text: 'Please prepare an update for Emma on the onboarding timeline.',
    reactions: [{ emoji: '🤝', count: 2 }],
  },
]

export function ProfilePanel() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Notes')

  return (
    <div className="absolute top-[140px] right-4 w-[320px] rounded-2xl bg-white dark:bg-[#141414] border border-black/[0.08] dark:border-white/[0.1] shadow-[0_14px_40px_-12px_rgba(15,23,42,0.22)] flex flex-col overflow-hidden z-20">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 h-9 border-b border-black/[0.06] dark:border-white/[0.07]">
        <DotsSixVerticalIcon size={14} className="text-black/30 dark:text-white/30" />
        <span className="text-[12px] font-medium text-black/70 dark:text-white/70 flex-1">
          Customer Profile
        </span>
        <button className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
          <ArrowSquareOutIcon size={13} />
        </button>
        <button className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
          <XIcon size={13} weight="bold" />
        </button>
      </div>

      {/* Identity */}
      <div className="px-4 pt-4 pb-3 flex items-start gap-3">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-300 to-rose-500 shrink-0" />
        <div className="flex flex-col gap-1 min-w-0 flex-1 mt-0.5">
          <span className="text-[15px] font-semibold text-black dark:text-white">Emma Johansson</span>
          <span className="inline-flex items-center gap-1.5 text-[12px] text-black/55 dark:text-white/55">
            <BuildingsIcon size={12} />
            Nordic Soft AB
          </span>
          <span className="inline-flex items-center gap-1.5 text-[12px] text-black/55 dark:text-white/55">
            <EnvelopeSimpleIcon size={12} />
            emma@nordicsoft.io
          </span>
          <span className="inline-flex items-center gap-1.5 text-[12px] text-black/55 dark:text-white/55">
            <PhoneIcon size={12} />
            +1 (202) 555-0198
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 px-4 pb-3">
        <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg bg-[#f97316] text-white text-[12px] font-medium hover:bg-[#ea6a0c] transition-colors flex-1 justify-center">
          <PhoneCallIcon size={13} weight="fill" />
          Schedule a Call
        </button>
        <button className="flex items-center gap-1.5 h-8 px-3 rounded-lg border border-black/[0.1] dark:border-white/[0.12] text-[12px] font-medium text-black/70 dark:text-white/70 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-colors flex-1 justify-center">
          <PencilSimpleIcon size={13} />
          Edit Profile
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 px-4 border-b border-black/[0.06] dark:border-white/[0.07]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative py-2 text-[12px] transition-colors ${
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

      {/* Feed */}
      <div className="flex flex-col gap-3 px-4 py-3 max-h-[200px] overflow-y-auto">
        {comments.map((c, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 shrink-0" />
              <span className="text-[12px] font-medium text-black dark:text-white">{c.author}</span>
              <span className="text-[11px] text-black/40 dark:text-white/40">{c.when}</span>
              <ChecksIcon size={13} className="ml-auto text-black/30 dark:text-white/30" />
              <button className="text-black/30 dark:text-white/30 hover:text-black/70 dark:hover:text-white/70">
                <DotsThreeIcon size={14} weight="bold" />
              </button>
            </div>
            <p className="text-[12.5px] text-black/70 dark:text-white/70 leading-relaxed pl-8">
              {c.text}
            </p>
            <div className="flex items-center gap-1.5 pl-8">
              <button className="w-5 h-5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-[11px] text-black/45 dark:text-white/45 hover:bg-black/[0.07] dark:hover:bg-white/[0.1]">
                <SmileyIcon size={11} />
              </button>
              {c.reactions.map((r, j) => (
                <span
                  key={j}
                  className="inline-flex items-center gap-1 px-1.5 h-5 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 text-[11px] text-[#c25410] dark:text-[#fdba74]"
                >
                  {r.emoji} {r.count}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Composer */}
      <div className="border-t border-black/[0.06] dark:border-white/[0.07] px-3 py-2.5 flex flex-col gap-2">
        <input
          type="text"
          defaultValue="Perfect. Ke"
          className="w-full bg-transparent text-[13px] text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 focus:outline-none px-1"
        />
        <div className="flex items-center gap-1 text-black/40 dark:text-white/40">
          <ComposerBtn><PaperclipIcon size={14} /></ComposerBtn>
          <ComposerBtn><MicrophoneIcon size={14} /></ComposerBtn>
          <ComposerBtn><AtIcon size={14} /></ComposerBtn>
          <ComposerBtn><SmileyIcon size={14} /></ComposerBtn>
          <button className="ml-auto w-7 h-7 flex items-center justify-center rounded-md bg-[#f97316] text-white hover:bg-[#ea6a0c] transition-colors">
            <PaperPlaneTiltIcon size={13} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  )
}

function ComposerBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-black/70 dark:hover:text-white/70 transition-colors">
      {children}
    </button>
  )
}
