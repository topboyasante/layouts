import { Sidebar } from './sidebar'
import { TopBar } from './topbar'
import { MainContent } from './main-content'

export default function FintechDashboard() {
  return (
    <div className="h-screen flex bg-white dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <TopBar />
        <MainContent />
      </div>
    </div>
  )
}
