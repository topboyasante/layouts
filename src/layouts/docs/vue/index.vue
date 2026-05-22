<script setup lang="ts">
import TopBar from './topbar.vue'
import Sidebar from './sidebar.vue'
import MainContent from './main-content.vue'
</script>

<template>
  <div class="h-screen flex flex-col bg-white dark:bg-[#0f0f0f] text-black dark:text-white overflow-hidden">
    <TopBar />
    <div class="flex flex-1 min-h-0">
      <Sidebar />
      <MainContent />
    </div>
  </div>
</template>
