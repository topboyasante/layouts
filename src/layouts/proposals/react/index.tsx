import { Sidebar } from './sidebar'
import { TopBar } from './topbar'
import { MainContent } from './main-content'

export default function ProposalsDashboard() {
  return (
    <div className="h-full w-full overflow-auto bg-[#eef0f3] dark:bg-[#070707] p-3 text-black dark:text-white">
      <div className="h-full min-h-[760px] flex rounded-[22px] bg-[#fbfbfc] dark:bg-[#0f0f0f] border border-black/[0.08] dark:border-white/[0.08] shadow-[0_6px_24px_-10px_rgba(15,23,42,0.18)] overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 min-w-0 border-l border-black/[0.07] dark:border-white/[0.08]">
          <TopBar />
          <MainContent />
        </div>
      </div>
    </div>
  )
}
