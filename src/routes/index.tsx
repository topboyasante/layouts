import { GithubLogoIcon, CodeIcon, StarIcon, SunIcon, MoonIcon } from '@phosphor-icons/react'
import { layouts } from '../lib/layouts'
import { LayoutCard } from '../components/layout-card'
import { useDarkMode } from '../lib/use-dark-mode'

function WireframeLogo({ size = 28 }: { size?: number }) {
  const h = Math.round(size * 0.78)
  return (
    <svg width={size} height={h} viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* outer bg */}
      <rect width="28" height="22" rx="3" className="fill-black/8 dark:fill-white/10" />
      {/* sidebar strip */}
      <rect x="2" y="2" width="6" height="18" rx="1.5" className="fill-black/10 dark:fill-white/12" />
      {/* sidebar nav pills */}
      <rect x="3" y="4" width="4" height="1.5" rx="0.75" className="fill-black/20 dark:fill-white/25" />
      <rect x="3" y="7" width="3" height="1.5" rx="0.75" className="fill-black/12 dark:fill-white/15" />
      <rect x="3" y="9.5" width="4" height="1.5" rx="0.75" className="fill-black/12 dark:fill-white/15" />
      <rect x="3" y="12" width="3" height="1.5" rx="0.75" className="fill-black/10 dark:fill-white/12" />
      {/* content area */}
      <rect x="10" y="2" width="16" height="5" rx="1.5" className="fill-black/8 dark:fill-white/10" />
      <rect x="10" y="9" width="7" height="5" rx="1.5" className="fill-black/8 dark:fill-white/10" />
      <rect x="19" y="9" width="7" height="5" rx="1.5" className="fill-black/8 dark:fill-white/10" />
      <rect x="10" y="16" width="16" height="4" rx="1.5" className="fill-black/6 dark:fill-white/8" />
    </svg>
  )
}

export default function Gallery() {
  const { dark, toggle } = useDarkMode()

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-white flex flex-col">

      {/* Nav */}
      <nav className="py-4">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <WireframeLogo size={28} />
          <span className="text-[14px] font-medium text-black dark:text-white">layouts</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-1.5 rounded-md text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {dark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>
          <a
            href="https://github.com/topboyasante/layouts"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-[12px] font-medium hover:bg-black/80 dark:hover:bg-white/80 transition-colors"
          >
            <GithubLogoIcon size={13} weight="fill" />
            topboyasante/layouts
          </a>
        </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-5xl mx-auto w-full px-6 pt-16 pb-14">
        <h1 className="text-[52px] font-bold leading-[1.1] tracking-tight text-black dark:text-white max-w-lg">
          A library of dashboard layouts
        </h1>
        <p className="mt-4 text-[15px] text-black/45 dark:text-white/40 max-w-sm">
          Handcrafted layouts for React, Svelte, Vue, and Angular. Copy the code, make it yours.
        </p>
        <div className="flex items-center gap-2 mt-5">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-[12px] text-black/60 dark:text-white/50">
            <StarIcon size={12} className="text-blue-500" weight="fill" />
            Works with React, Svelte, Vue & Angular
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-[12px] text-black/60 dark:text-white/50">
            <CodeIcon size={12} />
            Open Source
          </span>
        </div>
      </div>

      {/* Grid */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 pb-24 -mt-2">
        {layouts.length === 0 ? (
          <p className="text-center text-black/30 dark:text-white/30 text-sm py-20">No layouts yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {layouts.map((layout) => (
              <LayoutCard key={layout.slug} layout={layout} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center gap-2 py-14 text-center">
        <WireframeLogo size={36} />
        <p className="text-[15px] font-semibold text-black dark:text-white">Layouts</p>
        <p className="text-[12px] text-black/30 dark:text-white/30">© Layouts 2026</p>
        <p className="text-[12px] text-black/30 dark:text-white/30">All rights reserved</p>
        <p className="text-[12px] text-black/25 dark:text-white/25 mt-1">
          The source code is available on GitHub
        </p>
      </footer>

    </div>
  )
}
