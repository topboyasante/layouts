import type { ComponentType } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export type LayoutMeta = {
  name: string
  description: string
  category: string
  frameworks: string[]
}

export type LayoutEntry = {
  slug: string
  meta: LayoutMeta
}

// ─── Pure helpers (exported for testing) ─────────────────────────────────────

/** Extracts the layout slug from an import.meta.glob key.
 *  e.g. '../layouts/analytics-dashboard/meta.ts' → 'analytics-dashboard'
 */
export function extractSlug(globKey: string): string {
  const match = globKey.match(/\/layouts\/([^/]+)\//)
  return match ? match[1] : ''
}

/** Returns source files for a given layout + framework, keyed by path
 *  relative to the framework subfolder root.
 *  e.g. '../layouts/analytics-dashboard/react/index.tsx' → 'index.tsx'
 */
export function buildSourceFileMap(
  sourceModules: Record<string, string>,
  slug: string,
  framework: string
): Record<string, string> {
  const prefix = `../layouts/${slug}/${framework}/`
  const result: Record<string, string> = {}
  for (const [key, source] of Object.entries(sourceModules)) {
    if (key.startsWith(prefix)) {
      result[key.slice(prefix.length)] = source
    }
  }
  return result
}

// ─── Glob-based discovery ─────────────────────────────────────────────────────

type RawMetaModule = { meta: LayoutMeta }

const metaModules = import.meta.glob('../layouts/*/meta.ts', {
  eager: true,
}) as Record<string, RawMetaModule>

// NOT eager — returns lazy import functions: Record<string, () => Promise<{ default: ComponentType }>>
// Key format: '../layouts/issue-tracker/react/index.tsx'
export const previewModules = import.meta.glob(
  '../layouts/*/react/index.tsx'
) as Record<string, () => Promise<{ default: ComponentType }>>

const sourceModules = import.meta.glob(
  '../layouts/*/{react,svelte,vue,angular}/**/*.{tsx,svelte,vue,ts}',
  { eager: true, query: '?raw', import: 'default' }
) as Record<string, string>

// ─── Exports ──────────────────────────────────────────────────────────────────

export const layouts: LayoutEntry[] = Object.entries(metaModules).map(
  ([key, mod]) => ({
    slug: extractSlug(key),
    meta: mod.meta,
  })
)

export function getSourceFiles(
  slug: string,
  framework: string
): Record<string, string> {
  return buildSourceFileMap(sourceModules, slug, framework)
}
