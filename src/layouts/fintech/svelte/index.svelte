<script lang="ts">
  import Sidebar from './sidebar.svelte'
  import TopBar from './topbar.svelte'
  import MainContent from './main-content.svelte'
</script>

<div class="h-screen flex bg-white dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden">
  <Sidebar />
  <div class="flex flex-col flex-1 min-w-0">
    <TopBar />
    <MainContent />
  </div>
</div>
