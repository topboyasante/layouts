<script setup lang="ts">
import TopBar from './topbar.vue'
import Sidebar from './sidebar.vue'
import MainContent from './main-content.vue'
import RightPanel from './right-panel.vue'
</script>

<template>
  <div class="h-screen flex flex-col bg-[#ebebf0] dark:bg-[#1c1c1e] text-black dark:text-white overflow-hidden">
    <TopBar />
    <div class="flex flex-1 min-h-0 gap-0">
      <Sidebar />
      <div class="flex flex-1 min-w-0 min-h-0 pt-2 pr-2 pb-2">
        <div class="flex flex-1 min-w-0 rounded-xl overflow-hidden">
          <MainContent />
          <RightPanel />
        </div>
      </div>
    </div>
  </div>
</template>
