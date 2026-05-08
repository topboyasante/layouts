import { Link } from 'react-router-dom'
import type { LayoutEntry } from '../lib/layouts'

function WireframePreview() {
  return (
    <div className="w-full h-full flex overflow-hidden rounded-t-2xl bg-[#f0f0f0] dark:bg-white/5 p-3 gap-2">
      {/* Sidebar */}
      <div className="w-8 shrink-0 flex flex-col gap-1.5 pt-1">
        <div className="w-full h-1.5 rounded-full bg-black/10 dark:bg-white/10" />
        <div className="w-3/4 h-1.5 rounded-full bg-black/8 dark:bg-white/8" />
        <div className="w-full h-1.5 rounded-full bg-black/8 dark:bg-white/8 mt-1" />
        <div className="w-full h-1.5 rounded-full bg-black/8 dark:bg-white/8" />
        <div className="w-3/4 h-1.5 rounded-full bg-black/6 dark:bg-white/6" />
        <div className="w-full h-1.5 rounded-full bg-black/8 dark:bg-white/8 mt-1" />
        <div className="w-full h-1.5 rounded-full bg-black/6 dark:bg-white/6" />
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col gap-2">
        <div className="w-1/2 h-2 rounded-full bg-black/10 dark:bg-white/10" />
        <div className="flex gap-1.5 mt-0.5">
          <div className="flex-1 rounded-lg bg-white dark:bg-white/8 p-2 flex flex-col gap-1">
            <div className="w-3/4 h-1.5 rounded-full bg-black/8 dark:bg-white/8" />
            <div className="w-1/2 h-2.5 rounded bg-black/10 dark:bg-white/10 mt-0.5" />
          </div>
          <div className="flex-1 rounded-lg bg-white dark:bg-white/8 p-2 flex flex-col gap-1">
            <div className="w-3/4 h-1.5 rounded-full bg-black/8 dark:bg-white/8" />
            <div className="w-1/2 h-2.5 rounded bg-black/10 dark:bg-white/10 mt-0.5" />
          </div>
        </div>
        <div className="flex-1 rounded-lg bg-white dark:bg-white/8 p-2 flex flex-col gap-1">
          <div className="w-1/3 h-1.5 rounded-full bg-black/8 dark:bg-white/8" />
          <div className="w-full h-1 rounded-full bg-black/5 dark:bg-white/5 mt-1" />
          <div className="w-5/6 h-1 rounded-full bg-black/5 dark:bg-white/5" />
          <div className="w-full h-1 rounded-full bg-black/5 dark:bg-white/5" />
          <div className="w-4/6 h-1 rounded-full bg-black/5 dark:bg-white/5" />
        </div>
      </div>
    </div>
  )
}

type LayoutCardProps = {
  layout: LayoutEntry
}

export function LayoutCard({ layout }: LayoutCardProps) {
  return (
    <Link
      to={`/layouts/${layout.slug}`}
      className="group block rounded-2xl bg-[#f5f5f5] dark:bg-white/4 hover:bg-[#eeeeee] dark:hover:bg-white/7 transition-colors overflow-hidden"
    >
      <div className="aspect-[4/3]">
        <WireframePreview />
      </div>
      <div className="px-4 pt-3 pb-4">
        <h3 className="text-[14px] font-medium text-black dark:text-white">{layout.meta.name}</h3>
        <p className="text-[13px] text-black/40 dark:text-white/40 mt-0.5">
          {layout.meta.frameworks.length} {layout.meta.frameworks.length === 1 ? 'framework' : 'frameworks'}
        </p>
      </div>
    </Link>
  )
}
