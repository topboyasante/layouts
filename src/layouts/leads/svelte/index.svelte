<script lang="ts">
  import Sidebar from './sidebar.svelte'
  import TopBar from './topbar.svelte'
  import MetricsRow from './metrics-row.svelte'
  import LeadsTable from './leads-table.svelte'
  import ProfilePanel from './profile-panel.svelte'
  import BulkActionBar from './bulk-action-bar.svelte'
</script>

<div class="h-full w-full flex bg-white dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden">
  <Sidebar />
  <div class="relative flex flex-col flex-1 min-w-0 border-l border-black/[0.06] dark:border-white/[0.07]">
    <TopBar />
    <MetricsRow />
    <LeadsTable />
    <ProfilePanel />
    <BulkActionBar />
  </div>
</div>
