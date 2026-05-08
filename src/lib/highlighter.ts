import { createHighlighter, type Highlighter } from 'shiki'

let promise: Promise<Highlighter> | null = null

export function getHighlighter() {
  if (!promise) {
    promise = createHighlighter({
      themes: ['gruvbox-dark-medium', 'gruvbox-light-medium'],
      langs: ['tsx', 'typescript', 'svelte', 'vue'],
    })
  }
  return promise
}

export function langFromFilename(filename: string): string {
  if (filename.endsWith('.tsx')) return 'tsx'
  if (filename.endsWith('.ts')) return 'typescript'
  if (filename.endsWith('.svelte')) return 'svelte'
  if (filename.endsWith('.vue')) return 'vue'
  return 'tsx'
}
