import { useState, useMemo, use, Suspense } from 'react'
import { CopyIcon, CheckIcon } from '@phosphor-icons/react'
import { getHighlighter, langFromFilename } from '../lib/highlighter'

type CodeViewerProps = {
  frameworkFiles: Record<string, Record<string, string>>
  defaultFramework?: string
  defaultFile?: string
}

function HighlightedCode({ source, filename }: { source: string; filename: string }) {
  const highlighter = use(getHighlighter())
  const html = useMemo(
    () => highlighter.codeToHtml(source, {
      lang: langFromFilename(filename),
      themes: { light: 'gruvbox-light-medium', dark: 'gruvbox-dark-medium' },
      defaultColor: false,
    }),
    [source, filename, highlighter]
  )
  return (
    <div
      className="text-xs font-mono leading-relaxed [&_pre]:bg-transparent! [&_pre]:p-0! [&_pre]:m-0! [&_code]:text-xs!"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

function resolveDefaultFile(files: Record<string, string>, defaultFile?: string): string {
  if (defaultFile && defaultFile in files) return defaultFile
  const indexKey = Object.keys(files).find((k) => k.startsWith('index.'))
  if (indexKey) return indexKey
  return Object.keys(files).sort()[0] ?? ''
}

function sortedFileKeys(files: Record<string, string>): string[] {
  const index = Object.keys(files).filter((k) => k.startsWith('index.'))
  const rest = Object.keys(files).filter((k) => !k.startsWith('index.')).sort()
  return [...index, ...rest]
}

export function CodeViewer({
  frameworkFiles,
  defaultFramework = 'react',
  defaultFile,
}: CodeViewerProps) {
  const frameworks = Object.keys(frameworkFiles)

  const [activeFramework, setActiveFramework] = useState(() =>
    frameworks.includes(defaultFramework) ? defaultFramework : (frameworks[0] ?? '')
  )

  const activeFiles = frameworkFiles[activeFramework] ?? {}
  const [activeFile, setActiveFile] = useState(() => resolveDefaultFile(activeFiles, defaultFile))
  const [copied, setCopied] = useState(false)

  const tabs = useMemo(() => sortedFileKeys(activeFiles), [activeFiles])

  const source = activeFiles[activeFile] ?? ''

  function handleFrameworkSwitch(fw: string) {
    const newFiles = frameworkFiles[fw] ?? {}
    setActiveFramework(fw)
    setActiveFile(resolveDefaultFile(newFiles, defaultFile))
  }

  async function handleCopy() {
    const source = activeFiles[activeFile]
    if (!source) return
    await navigator.clipboard.writeText(source)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (frameworks.length === 0) {
    return (
      <div className="flex items-center justify-center h-full rounded-lg border border-black/8 dark:border-white/8 bg-white dark:bg-[#0F1010]">
        <p className="text-black/40 dark:text-white/40 text-sm">No source files available.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full rounded-lg border border-black/8 dark:border-white/8 overflow-hidden bg-white dark:bg-[#0F1010]">
      {/* Framework switcher — hidden when only one framework */}
      {frameworks.length > 1 && (
        <div className="flex items-center gap-1 px-3 py-2 border-b border-black/6 dark:border-white/6">
          {frameworks.map((fw) => (
            <button
              key={fw}
              onClick={() => handleFrameworkSwitch(fw)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                fw === activeFramework
                  ? 'bg-black/8 dark:bg-white/10 text-black dark:text-white'
                  : 'text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white'
              }`}
            >
              {fw}
            </button>
          ))}
        </div>
      )}

      {/* File tabs + copy button */}
      <div className="flex items-center justify-between border-b border-black/6 dark:border-white/6 px-3">
        <div className="flex items-center gap-0 overflow-x-auto">
          {tabs.length === 0 ? (
            <span className="py-2 text-xs text-black/40 dark:text-white/40">
              No source files available for this framework.
            </span>
          ) : (
            tabs.map((file) => (
              <button
                key={file}
                onClick={() => setActiveFile(file)}
                className={`shrink-0 px-3 py-2 text-xs transition-colors border-b-2 ${
                  file === activeFile
                    ? 'border-black dark:border-white text-black dark:text-white'
                    : 'border-transparent text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white'
                }`}
              >
                {file}
              </button>
            ))
          )}
        </div>
        {source && (
          <button
            onClick={handleCopy}
            className="shrink-0 ml-2 p-1.5 rounded text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            title="Copy to clipboard"
          >
            {copied
              ? <CheckIcon size={14} weight="bold" />
              : <CopyIcon size={14} />
            }
          </button>
        )}
      </div>

      {/* Source display */}
      <div className="flex-1 overflow-auto p-4">
        {source ? (
          <Suspense fallback={<pre className="text-xs text-black/80 dark:text-white/80 font-mono leading-relaxed whitespace-pre"><code>{source}</code></pre>}>
            <HighlightedCode source={source} filename={activeFile} />
          </Suspense>
        ) : (
          <p className="text-black/40 dark:text-white/40 text-sm">
            No source files available for this framework.
          </p>
        )}
      </div>
    </div>
  )
}
