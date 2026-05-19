<script lang="ts">
  import TopBar from './topbar.svelte'
  import Sidebar from './sidebar.svelte'
  import MainContent from './main-content.svelte'
</script>

<div class="h-screen flex flex-col bg-white dark:bg-[#0f0f0f] text-black dark:text-white overflow-hidden">
  <TopBar />
  <div class="flex flex-1 min-h-0">
    <Sidebar />
    <MainContent />
  </div>
</div>
