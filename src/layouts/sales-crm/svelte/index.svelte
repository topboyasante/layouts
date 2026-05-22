<script lang="ts">
  import IconSidebar from './icon-sidebar.svelte'
  import NavSidebar from './nav-sidebar.svelte'
  import TopBar from './topbar.svelte'
  import MainContent from './main-content.svelte'
  import RightPanel from './right-panel.svelte'
</script>

<div class="h-screen flex bg-white dark:bg-[#0a0a0a] text-black dark:text-white overflow-hidden">
  <IconSidebar />
  <NavSidebar />
  <div class="flex flex-col flex-1 min-w-0">
    <TopBar />
    <div class="flex flex-1 min-h-0">
      <MainContent />
      <RightPanel />
    </div>
  </div>
</div>
