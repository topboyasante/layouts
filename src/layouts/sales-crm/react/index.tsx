import { IconSidebar } from './icon-sidebar'
import { NavSidebar } from './nav-sidebar'
import { TopBar } from './topbar'
import { MainContent } from './main-content'
import { RightPanel } from './right-panel'

export default function SalesCRM() {
  return (
    <div className="h-screen flex bg-white dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden">
      <IconSidebar />
      <NavSidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <TopBar />
        <div className="flex flex-1 min-h-0">
          <MainContent />
          <RightPanel />
        </div>
      </div>
    </div>
  )
}
