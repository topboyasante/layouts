import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import type { ComponentType } from 'react'
import { CaretLeftIcon, SunIcon, MoonIcon, GhostIcon } from '@phosphor-icons/react'
import { layouts, previewModules, getSourceFiles } from '../lib/layouts'
import { PreviewFrame } from '../components/preview-frame'
import { CodeViewer } from '../components/code-viewer'
import { ErrorBoundary } from '../components/error-boundary'
import { useDarkMode } from '../lib/use-dark-mode'

export default function LayoutPreview() {
  const { slug } = useParams<{ slug: string }>()
  const { dark, toggle } = useDarkMode()
  const layout = layouts.find((l) => l.slug === slug)

  const [LayoutComponent, setLayoutComponent] = useState<ComponentType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!layout || !slug) {
      setLoading(false)
      return
    }

    const key = `../layouts/${slug}/react/index.tsx`
    const loader = previewModules[key]

    if (!loader) {
      setError(true)
      setLoading(false)
      return
    }

    loader()
      .then((mod) => {
        setLayoutComponent(() => mod.default)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [slug, layout])

  if (!layout) {
    return (
      <div className="min-h-screen bg-[#f3f3f4] dark:bg-[#070707] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-xl bg-black/6 dark:bg-white/6 flex items-center justify-center">
            <GhostIcon size={20} className="text-black/30 dark:text-white/30" />
          </div>
          <div>
            <p className="text-[15px] font-semibold text-black dark:text-white">Layout not found</p>
            <p className="text-[13px] text-black/40 dark:text-white/40 mt-1">This layout doesn't exist or may have been removed.</p>
          </div>
          <Link
            to="/"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-[13px] font-medium hover:bg-black/80 dark:hover:bg-white/80 transition-colors"
          >
            <CaretLeftIcon size={13} />
            Back to gallery
          </Link>
        </div>
      </div>
    )
  }

  const frameworkFiles: Record<string, Record<string, string>> = {}
  for (const fw of layout.meta.frameworks) {
    frameworkFiles[fw] = getSourceFiles(slug!, fw)
  }

  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

  return (
    <div className="h-screen flex flex-col bg-[#f3f3f4] dark:bg-[#070707] p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4 shrink-0">
        <Link
          to="/"
          className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
        >
          <CaretLeftIcon size={18} />
        </Link>
        <h1 className="text-lg font-semibold text-black dark:text-white">
          {layout.meta.name}
        </h1>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-1.5 rounded-md text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {dark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>
        <div className="flex items-center gap-1 rounded-lg bg-black/6 dark:bg-white/6 p-1">
          {(['preview', 'code'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors capitalize ${
                activeTab === tab
                  ? 'bg-white dark:bg-[#1a1a1a] text-black dark:text-white shadow-sm'
                  : 'text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 min-h-0 rounded-lg border border-black/8 dark:border-white/8 overflow-hidden bg-white dark:bg-[#0F1010]">
        {activeTab === 'preview' && (
          <>
            {loading && (
              <div className="flex items-center justify-center h-full text-black/40 dark:text-white/40 text-sm">
                Loading…
              </div>
            )}
            {error && (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-black/6 dark:bg-white/6 flex items-center justify-center">
                  <GhostIcon size={20} className="text-black/30 dark:text-white/30" />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-black dark:text-white">Failed to load preview</p>
                  <p className="text-[13px] text-black/40 dark:text-white/40 mt-1">Something went wrong while loading this layout.</p>
                </div>
                <Link
                  to="/"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-[13px] font-medium hover:bg-black/80 dark:hover:bg-white/80 transition-colors"
                >
                  <CaretLeftIcon size={13} />
                  Back to gallery
                </Link>
              </div>
            )}
            {!loading && !error && LayoutComponent && (
              <ErrorBoundary>
                <PreviewFrame component={LayoutComponent} />
              </ErrorBoundary>
            )}
          </>
        )}
        {activeTab === 'code' && (
          <CodeViewer frameworkFiles={frameworkFiles} />
        )}
      </div>
    </div>
  )
}
