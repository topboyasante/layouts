<script lang="ts">
  import Sidebar from './sidebar.svelte'
  import MainContent from './main-content.svelte'
</script>

<div class="h-screen bg-[#f3f3f4] dark:bg-[#070707] md:p-2 text-black dark:text-white">
  <main class="h-full flex rounded-lg overflow-hidden">
    <Sidebar />
    <MainContent />
  </main>
</div>
