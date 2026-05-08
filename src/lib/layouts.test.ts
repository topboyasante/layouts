import { describe, it, expect } from 'vitest'
import { extractSlug, buildSourceFileMap } from './layouts'

describe('extractSlug', () => {
  // Uses the exact glob key format produced by import.meta.glob('../layouts/*/meta.ts')
  it('extracts slug from a meta glob key', () => {
    expect(extractSlug('../layouts/analytics-dashboard/meta.ts')).toBe('analytics-dashboard')
  })
  it('extracts slug from a different layout', () => {
    expect(extractSlug('../layouts/issue-tracker/meta.ts')).toBe('issue-tracker')
  })
})

describe('buildSourceFileMap', () => {
  it('returns files keyed relative to the framework subfolder', () => {
    const modules = {
      '../layouts/analytics-dashboard/react/index.tsx': 'export default function() {}',
      '../layouts/analytics-dashboard/react/sidebar.tsx': 'export function Sidebar() {}',
    }
    expect(buildSourceFileMap(modules, 'analytics-dashboard', 'react')).toEqual({
      'index.tsx': 'export default function() {}',
      'sidebar.tsx': 'export function Sidebar() {}',
    })
  })

  it('filters out other layouts', () => {
    const modules = {
      '../layouts/analytics-dashboard/react/index.tsx': 'code-a',
      '../layouts/issue-tracker/react/index.tsx': 'code-b',
    }
    expect(buildSourceFileMap(modules, 'analytics-dashboard', 'react')).toEqual({
      'index.tsx': 'code-a',
    })
  })

  it('filters out other frameworks', () => {
    const modules = {
      '../layouts/analytics-dashboard/react/index.tsx': 'react-code',
      '../layouts/analytics-dashboard/svelte/index.svelte': 'svelte-code',
    }
    expect(buildSourceFileMap(modules, 'analytics-dashboard', 'react')).toEqual({
      'index.tsx': 'react-code',
    })
  })

  it('preserves subdirectory structure in keys', () => {
    const modules = {
      '../layouts/analytics-dashboard/react/components/header.tsx': 'header',
    }
    expect(buildSourceFileMap(modules, 'analytics-dashboard', 'react')).toEqual({
      'components/header.tsx': 'header',
    })
  })

  it('returns empty object when no files match', () => {
    expect(buildSourceFileMap({}, 'missing', 'react')).toEqual({})
  })
})
