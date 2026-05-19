<script setup lang="ts">
import Sidebar from './sidebar.vue'
import TopBar from './topbar.vue'
import MainContent from './main-content.vue'
import RightPanel from './right-panel.vue'
</script>

<template>
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
</template>
