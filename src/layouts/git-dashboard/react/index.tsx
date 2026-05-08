import { Sidebar } from './sidebar'
import { TopBar } from './topbar'
import { MainContent } from './main-content'
import { RightPanel } from './right-panel'

export default function GitDashboard() {
  return (
    <div className="h-screen flex flex-col bg-[#ebebf0] dark:bg-[#1c1c1e] text-black dark:text-white overflow-hidden">
      <TopBar />
      <div className="flex flex-1 min-h-0 gap-0">
        <Sidebar />
        <div className="flex flex-1 min-w-0 min-h-0 pt-2 pr-2 pb-2">
          <div className="flex flex-1 min-w-0 rounded-xl overflow-hidden">
            <MainContent />
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
