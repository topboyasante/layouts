<script setup lang="ts">
import Sidebar from './sidebar.vue'
import TopBar from './topbar.vue'
import MetricsRow from './metrics-row.vue'
import LeadsTable from './leads-table.vue'
import ProfilePanel from './profile-panel.vue'
import BulkActionBar from './bulk-action-bar.vue'
</script>

<template>
  <div
    class="h-full w-full flex bg-white dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden"
  >
    <Sidebar />
    <div
      class="relative flex flex-col flex-1 min-w-0 border-l border-black/[0.06] dark:border-white/[0.07]"
    >
      <TopBar />
      <MetricsRow />
      <LeadsTable />
      <ProfilePanel />
      <BulkActionBar />
    </div>
  </div>
</template>
