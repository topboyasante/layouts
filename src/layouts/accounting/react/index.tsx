import { Sidebar } from "./sidebar"
import { MainContent } from "./main-content"

export default function IssueTracker() {
  return (
    <div className="h-screen bg-[#f3f3f4] dark:bg-[#070707] text-black dark:text-white">
      <main className="h-full flex rounded-lg overflow-hidden">
        <Sidebar />
        <MainContent />
      </main>
    </div>
  )
}
