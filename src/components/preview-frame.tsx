import type { ComponentType } from 'react'

type PreviewFrameProps = {
  component: ComponentType
}

export function PreviewFrame({ component: Component }: PreviewFrameProps) {
  return (
    <div className="w-full h-full overflow-auto">
      <Component />
    </div>
  )
}
