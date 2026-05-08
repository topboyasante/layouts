import { Component } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { GhostIcon, CaretLeftIcon } from '@phosphor-icons/react'

type Props = { children: ReactNode }
type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
          <div className="w-12 h-12 rounded-xl bg-black/6 dark:bg-white/6 flex items-center justify-center">
            <GhostIcon size={20} className="text-black/30 dark:text-white/30" />
          </div>
          <div>
            <p className="text-[15px] font-semibold text-black dark:text-white">Something went wrong</p>
            <p className="text-[13px] text-black/40 dark:text-white/40 mt-1">An unexpected error occurred while rendering this layout.</p>
          </div>
          <Link
            to="/"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-[13px] font-medium hover:bg-black/80 dark:hover:bg-white/80 transition-colors"
          >
            <CaretLeftIcon size={13} />
            Back to gallery
          </Link>
        </div>
      )
    }

    return this.props.children
  }
}
