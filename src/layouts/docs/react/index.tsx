import { TopBar } from './topbar'
import { Sidebar } from './sidebar'
import { MainContent } from './main-content'

export default function DocsLayout() {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-[#0f0f0f] text-black dark:text-white overflow-hidden">
      <TopBar />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}
