import { Sidebar } from './sidebar'
import { TopBar } from './topbar'
import { MetricsRow } from './metrics-row'
import { LeadsTable } from './leads-table'
import { ProfilePanel } from './profile-panel'
import { BulkActionBar } from './bulk-action-bar'

export default function LeadsDashboard() {
  return (
    <div className="h-full w-full flex bg-white dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 min-w-0 border-l border-black/[0.06] dark:border-white/[0.07]">
        <TopBar />
        <MetricsRow />
        <LeadsTable />
        <ProfilePanel />
        <BulkActionBar />
      </div>
    </div>
  )
}
