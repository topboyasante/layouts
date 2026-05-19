<script lang="ts">
  import Sidebar from './sidebar.svelte'
  import TopBar from './topbar.svelte'
  import MainContent from './main-content.svelte'
  import RightPanel from './right-panel.svelte'
</script>

<div class="h-screen flex bg-[#f4f4f4] dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden">
  <Sidebar />
  <div class="flex flex-col flex-1 min-w-0">
    <TopBar />
    <div class="flex flex-1 min-h-0">
      <MainContent />
      <RightPanel />
    </div>
  </div>
</div>
