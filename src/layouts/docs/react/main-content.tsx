import { ArrowRightIcon, SparkleIcon, RocketLaunchIcon, BookOpenIcon, PuzzlePieceIcon, ChatCircleIcon } from '@phosphor-icons/react'
import { RightPanel } from './right-panel'

const categories = [
  {
    icon: <RocketLaunchIcon size={28} weight="light" className="text-violet-500" />,
    title: 'Get started',
    description: 'Create your workspace and publish your first article in minutes.',
  },
  {
    icon: <BookOpenIcon size={28} weight="light" className="text-violet-500" />,
    title: 'Guides',
    description: 'Step-by-step walkthroughs for common tasks and workflows.',
  },
  {
    icon: <BookOpenIcon size={28} weight="light" className="text-violet-500" />,
    title: 'Configuration',
    description: 'Customize your workspace, domains, and appearance settings.',
  },
  {
    icon: <PuzzlePieceIcon size={28} weight="light" className="text-violet-500" />,
    title: 'Integrations',
    description: 'Connect Nexdocs with your existing tools and platforms.',
  },
  {
    icon: <ChatCircleIcon size={28} weight="light" className="text-violet-500" />,
    title: 'Widgets',
    description: 'Embed a self-serve support widget anywhere in your product.',
  },
  {
    icon: <SparkleIcon size={28} weight="light" className="text-violet-500" />,
    title: 'AI Assistant',
    description: 'Let the AI answer common questions on behalf of your team.',
  },
]

export function MainContent() {
  return (
    <div className="flex flex-1 min-w-0 overflow-y-auto bg-white dark:bg-[#0f0f0f]">
      <div className="flex-1 min-w-0 px-10 py-10">
        {/* Hero */}
        <h1 className="text-[32px] font-bold text-black dark:text-white leading-tight tracking-tight">
          Nexdocs documentation <span>📖</span>
        </h1>
        <p className="mt-2 text-[15px] text-black/50 dark:text-white/45">
          Everything you need to build, manage, and scale your documentation.
        </p>

        {/* AI Search */}
        <div className="mt-6 flex items-center gap-3 px-5 py-4 rounded-xl border border-black/10 dark:border-white/8 hover:border-black/20 dark:hover:border-white/15 transition-colors cursor-text group">
          <SparkleIcon size={16} className="text-violet-400 shrink-0" />
          <span className="flex-1 text-[14px] text-black/35 dark:text-white/30">Ask, search, or explain...</span>
          <button className="w-7 h-7 rounded-md bg-black/6 dark:bg-white/8 flex items-center justify-center text-black/40 dark:text-white/35 hover:bg-black/10 dark:hover:bg-white/12 transition-colors">
            <ArrowRightIcon size={13} />
          </button>
        </div>

        {/* Category grid */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="flex flex-col gap-3 p-5 rounded-xl border border-black/8 dark:border-white/8 text-left hover:border-black/16 dark:hover:border-white/15 hover:bg-black/2 dark:hover:bg-white/3 transition-colors group"
            >
              <span>{cat.icon}</span>
              <div>
                <p className="text-[14px] font-semibold text-black dark:text-white">{cat.title}</p>
                <p className="text-[13px] text-black/50 dark:text-white/45 mt-0.5 leading-relaxed">{cat.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <RightPanel />
    </div>
  )
}
